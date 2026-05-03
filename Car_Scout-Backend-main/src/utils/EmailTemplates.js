const getWelcomeEmailTemplate = ({ firstName, lastName, role }) => {
  const fullName = `${firstName || ""} ${lastName || ""}`.trim();

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to CarScout</title>
    </head>
    <body style="margin:0; padding:0; background:#edf2f7; font-family:Arial, Helvetica, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#edf2f7; padding:32px 12px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:700px; background:#ffffff; border-radius:22px; overflow:hidden; box-shadow:0 20px 50px rgba(15,23,42,0.12);">
              
              <tr>
                <td style="padding:34px 32px 28px;">
                  <p style="margin:0; color:#0f172a; font-size:17px; font-weight:500;">
                    Hey <strong style="color:#111827;">${fullName}</strong>,
                  </p>

                  <p style="margin:18px 0 0; color:#475569; font-size:15px; line-height:1.9;">
                    Your <strong style="color:#0891b2;">CarScout</strong> account has been created successfully.
                    We are excited to welcome you to a cleaner, more professional, and more trusted car marketplace experience.
                  </p>

                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:22px;">
                    <tr>
                      <td style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:18px; padding:20px 18px;">
                        <p style="margin:0; color:#0891b2; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1.2px;">
                          Account Details
                        </p>

                        <p style="margin:12px 0 0; color:#0f172a; font-size:14px; line-height:1.9;">
                          <strong>Name:</strong> ${fullName}<br/>
                          <strong>Role:</strong> <span style="text-transform:capitalize;">${role}</span><br/>
                          <strong>Status:</strong> Active
                        </p>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                    <tr>
                      <td style="background:linear-gradient(135deg,#ecfeff 0%,#f0fdf4 100%); border:1px solid #dbeafe; border-radius:18px; padding:20px 18px;">
                        <p style="margin:0; color:#0f172a; font-size:15px; font-weight:700;">
                          What you can do next
                        </p>

                        <p style="margin:12px 0 0; color:#334155; font-size:14px; line-height:1.9;">
                          • Explore verified car listings<br/>
                          • Book test drives with confidence<br/>
                          • Make offers and receive instant updates<br/>
                          • Track all your activity in one place
                        </p>
                      </td>
                    </tr>
                  </table>

                  <div style="margin-top:30px; text-align:center;">
                    <a href="${process.env.FRONTEND_URL || "http://localhost:5173"}" style="display:inline-block; background:#22d3ee; color:#0f172a; text-decoration:none; font-size:14px; font-weight:800; padding:15px 30px; border-radius:14px; box-shadow:0 10px 24px rgba(34,211,238,0.25);">
                      Start Exploring
                    </a>
                  </div>

                  <p style="margin:28px 0 0; color:#64748b; font-size:14px; line-height:1.9;">
                    At CarScout, we focus on making car buying and selling simpler,
                    more transparent, and more professional for every user.
                  </p>

                  <p style="margin:22px 0 0; color:#0f172a; font-size:14px; line-height:1.8;">
                    Regards,<br/>
                    <strong>Team CarScout</strong>
                  </p>
                </td>
              </tr>

              <tr>
                <td style="background:#f8fafc; border-top:1px solid #e2e8f0; padding:18px 24px; text-align:center;">
                  <p style="margin:0; color:#94a3b8; font-size:12px; line-height:1.7;">
                    This is an automated email from CarScout. Please do not reply directly to this message.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

const getOTPEmailTemplate = ({ firstName, otp }) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Verification Code - CarScout</title>
    </head>
    <body style="margin:0; padding:0; background:#f8fafc; font-family:Arial, Helvetica, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc; padding:40px 12px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px; background:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.08);">
              
              <tr>
                <td style="padding:40px 32px 36px; text-align:center;">
                  <h1 style="color:#0891b2; font-size:28px; margin:0; letter-spacing:-1px;">CarScout 🚗</h1>
                  
                  <p style="margin:24px 0 0; color:#475569; font-size:16px; font-weight:500;">
                    Hi ${firstName}, verify your account to get started.
                  </p>

                  <div style="margin:30px 0; background:#f1f5f9; border-radius:18px; padding:24px 20px; border:1px dashed #cbd5e1;">
                    <p style="margin:0; color:#64748b; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px;">
                      Your Verification Code
                    </p>
                    <h2 style="margin:12px 0 0; color:#0f172a; font-size:42px; letter-spacing:8px; font-family:monospace;">
                      ${otp}
                    </h2>
                  </div>

                  <p style="margin:0; color:#64748b; font-size:14px; line-height:1.7;">
                    Please enter this code on the registration page to verify your email address. 
                    This code will expire shortly.
                  </p>

                  <div style="margin:32px 0 0; height:1px; background:#f1f5f9; width:100%;"></div>

                  <p style="margin:24px 0 0; color:#94a3b8; font-size:13px;">
                    Didn't request this code? You can safely ignore this email.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="background:#f8fafc; border-top:1px solid #f1f5f9; padding:20px 24px; text-align:center;">
                  <p style="margin:0; color:#cbd5e1; font-size:12px;">
                    © 2026 CarScout. All rights reserved.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

module.exports = {
  getWelcomeEmailTemplate,
  getOTPEmailTemplate
};
