import nodemailer from 'nodemailer';

// Try Resend first (more reliable on cloud), then Gmail SMTP, then fallback
export const sendEmail = async (to: string, subject: string, text: string): Promise<{ success: boolean; message: string }> => {
    const resendKey = process.env.RESEND_API_KEY;
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, '');

    // ── 1. Try Resend (most reliable on Vercel) ──────────────────────
    if (resendKey) {
        try {
            const res = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${resendKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: 'RideShare Hub <onboarding@resend.dev>',
                    to: [to],
                    subject,
                    html: buildOtpHtml(text),
                    text,
                }),
            });
            if (res.ok) {
                console.log('Email sent via Resend to:', to);
                return { success: true, message: 'Email sent via Resend' };
            }
            const err = await res.json();
            console.error('Resend error:', err);
        } catch (e: any) {
            console.error('Resend fetch error:', e?.message);
        }
    }

    // ── 2. Try Gmail SMTP ─────────────────────────────────────────────
    if (emailUser && emailPass) {
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: { user: emailUser, pass: emailPass },
                connectionTimeout: 8000,
            });
            await transporter.sendMail({
                from: `"RideShare Hub" <${emailUser}>`,
                to,
                subject,
                text,
                html: buildOtpHtml(text),
            });
            console.log('Email sent via Gmail SMTP to:', to);
            return { success: true, message: 'Email sent via Gmail' };
        } catch (e: any) {
            console.error('Gmail SMTP error:', e?.message);
        }
    }

    // ── 3. No email method available ──────────────────────────────────
    console.log(`[NO EMAIL CONFIG] OTP for ${to}: ${text}`);
    return { success: false, message: 'No email provider configured' };
};

function buildOtpHtml(text: string) {
    const otp = text.replace('Your OTP is: ', '');
    return `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#f8fafc;border-radius:16px;">
            <div style="background:linear-gradient(135deg,#2563eb,#4f46e5);padding:20px;border-radius:12px;text-align:center;margin-bottom:24px;">
                <h1 style="color:white;margin:0;font-size:22px;">🚗 RideShare Hub</h1>
            </div>
            <h2 style="color:#1e3a8a;">Your Login OTP</h2>
            <p style="color:#64748b;">Expires in <strong>10 minutes</strong>.</p>
            <div style="background:white;border:2px solid #e2e8f0;border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
                <p style="font-size:48px;font-weight:900;letter-spacing:12px;color:#2563eb;margin:0;font-family:monospace;">${otp}</p>
            </div>
            <p style="color:#94a3b8;font-size:12px;text-align:center;">If you didn't request this, ignore this email.</p>
        </div>
    `;
}
