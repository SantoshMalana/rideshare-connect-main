import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const testEmail = async () => {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;


    if (!user || !pass) {
        console.error('❌ Error: EMAIL_USER or EMAIL_PASS variables are missing in .env file.');
        console.log('ℹ️  Please create a .env file with your credentials.');
        return;
    }

    console.log(`📧 Testing email configuration for: ${user}`);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user,
            pass,
        },
    });

    try {
        await transporter.verify();
        console.log('✅ SMTP Connection successful!');

        const info = await transporter.sendMail({
            from: user,
            to: user, // Send to self
            subject: 'Test Email from Rideshare App',
            text: 'If you see this, your email configuration is working correctly! 🚀',
        });

        console.log(`✅ Test email sent successfully! Message ID: ${info.messageId}`);
    } catch (error) {
        console.error('❌ Failed to send email:', error);
    }
};

testEmail();
