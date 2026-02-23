import nodemailer from 'nodemailer';

export const sendEmail = async (to: string, subject: string, text: string) => {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, '');

    // Dev/fallback mode: log OTP to console
    if (!emailUser || !emailPass) {
        console.log(`[EMAIL FALLBACK] OTP for ${to}: ${text}`);
        return { success: false, message: 'Email credentials not configured' };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // TLS
            auth: {
                user: emailUser,
                pass: emailPass,
            },
            connectionTimeout: 10000,
            greetingTimeout: 5000,
        });

        await transporter.sendMail({
            from: `"RideShare Hub" <${emailUser}>`,
            to,
            subject,
            text,
            html: `
                <div style="font-family: Inter, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 16px;">
                    <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 24px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">🚗 RideShare Hub</h1>
                    </div>
                    <h2 style="color: #1e3a8a; margin-bottom: 8px;">Your Login OTP</h2>
                    <p style="color: #64748b; margin-bottom: 24px;">Use the code below to complete your login. It expires in <strong>10 minutes</strong>.</p>
                    <div style="background: white; border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                        <p style="font-size: 48px; font-weight: 900; letter-spacing: 12px; color: #2563eb; margin: 0; font-family: monospace;">${text.replace('Your OTP is: ', '')}</p>
                    </div>
                    <p style="color: #94a3b8; font-size: 13px; text-align: center;">If you didn't request this, please ignore this email.</p>
                </div>
            `,
        });

        return { success: true, message: 'Email sent successfully' };
    } catch (error: any) {
        console.error('Email send error:', error?.message || error);
        return { success: false, message: `Failed to send email: ${error?.message}` };
    }
};
