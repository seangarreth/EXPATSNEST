import nodemailer from "nodemailer";
import type { Inquiry } from "@shared/schema";

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendInquiryNotification(inquiry: Inquiry): Promise<void> {
  const transporter = createTransporter();
  const adminEmail = process.env.ADMIN_EMAIL || "info@expatsnest.com";
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@expatsnests.com";

  if (!transporter) {
    console.log(
      "[email] SMTP not configured — skipping notification email.\n" +
      "[email] Set SMTP_HOST, SMTP_USER, SMTP_PASS (and optionally SMTP_PORT, SMTP_FROM, ADMIN_EMAIL) to enable.\n" +
      "[email] New inquiry details:\n" +
      `  Name:    ${inquiry.name}\n` +
      `  Email:   ${inquiry.email}\n` +
      `  Subject: ${inquiry.subject}\n` +
      `  Message: ${inquiry.message}\n` +
      `  Time:    ${inquiry.createdAt}`
    );
    return;
  }

  const submittedAt = inquiry.createdAt
    ? new Date(inquiry.createdAt).toLocaleString("en-GB", { timeZone: "Africa/Lagos" })
    : new Date().toLocaleString("en-GB", { timeZone: "Africa/Lagos" });

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f7f6;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7f6;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1a4731 0%,#155726 100%);padding:32px 40px;text-align:center;">
            <p style="margin:0 0 4px 0;font-size:22px;font-weight:bold;color:#ffffff;letter-spacing:1px;">EXPAT'SNEST</p>
            <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.7);letter-spacing:3px;text-transform:uppercase;">Nigeria's Premium Onboarding</p>
          </td>
        </tr>
        <!-- Alert Banner -->
        <tr>
          <td style="background:#c9a84c;padding:14px 40px;text-align:center;">
            <p style="margin:0;font-size:13px;font-weight:bold;color:#ffffff;letter-spacing:1px;text-transform:uppercase;">
              ✉ New Contact Inquiry Received
            </p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 24px 0;font-size:15px;color:#444;line-height:1.6;">
              A new inquiry has been submitted through the EXPAT'SNEST website contact form. Details are below.
            </p>
            <!-- Details Table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ede9;border-radius:8px;overflow:hidden;">
              ${[
                ["Full Name", inquiry.name],
                ["Email Address", `<a href="mailto:${inquiry.email}" style="color:#1a4731;text-decoration:none;">${inquiry.email}</a>`],
                ["Subject", inquiry.subject],
                ["Submitted", submittedAt + " (WAT)"],
              ].map(([label, value], i) => `
              <tr style="background:${i % 2 === 0 ? '#f9fbfa' : '#ffffff'};">
                <td style="padding:14px 20px;font-size:12px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:0.5px;width:140px;border-bottom:1px solid #e8ede9;">${label}</td>
                <td style="padding:14px 20px;font-size:14px;color:#222;border-bottom:1px solid #e8ede9;">${value}</td>
              </tr>`).join('')}
              <tr>
                <td style="padding:14px 20px;font-size:12px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Message</td>
                <td style="padding:14px 20px;font-size:14px;color:#222;line-height:1.7;white-space:pre-wrap;">${inquiry.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
              </tr>
            </table>
            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
              <tr>
                <td align="center">
                  <a href="mailto:${inquiry.email}?subject=Re: ${encodeURIComponent(inquiry.subject)}"
                     style="display:inline-block;background:#1a4731;color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:14px;font-weight:bold;letter-spacing:0.5px;">
                    Reply to ${inquiry.name.split(' ')[0]}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9fbfa;border-top:1px solid #e8ede9;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#aaa;">
              EXPAT'SNEST &bull; RC No. 9263911 &bull; Abuja, Nigeria &bull;
              <a href="https://expatsnests.com" style="color:#1a4731;text-decoration:none;">expatsnests.com</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const textBody =
    `NEW INQUIRY — EXPAT'SNEST\n` +
    `${"=".repeat(40)}\n` +
    `Name:    ${inquiry.name}\n` +
    `Email:   ${inquiry.email}\n` +
    `Subject: ${inquiry.subject}\n` +
    `Time:    ${submittedAt} (WAT)\n\n` +
    `Message:\n${inquiry.message}\n` +
    `${"=".repeat(40)}\n` +
    `Reply directly to this email or visit https://expatsnests.com`;

  try {
    await transporter.sendMail({
      from: `"EXPAT'SNEST Website" <${fromEmail}>`,
      to: adminEmail,
      replyTo: `"${inquiry.name}" <${inquiry.email}>`,
      subject: `[EXPAT'SNEST] New Inquiry: ${inquiry.subject}`,
      text: textBody,
      html: htmlBody,
    });
    console.log(`[email] Notification sent to ${adminEmail} for inquiry from ${inquiry.email}`);
  } catch (err) {
    console.error("[email] Failed to send notification email:", err);
  }
}
