import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to your email address
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'mohummadsultan0@gmail.com',
      subject: `New Portfolio Contact: ${escapeHtml(subject)}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  
  <!-- Main Container -->
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
    
    <!-- Header Section -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; color: #ffffff;">
      <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
        ✨ New Message Received
      </h1>
      <p style="margin: 12px 0 0 0; font-size: 15px; opacity: 0.95;">
        Thank you for reaching out!
      </p>
    </div>

    <!-- Sender Information -->
    <div style="padding: 40px 30px;">
      <h2 style="margin: 0 0 25px 0; font-size: 18px; color: #2c3e50; border-bottom: 3px solid #667eea; padding-bottom: 12px; font-weight: 600;">
        Sender Information
      </h2>
      
      <!-- Name -->
      <div style="margin-bottom: 20px; padding: 16px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #667eea;">
        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Name</p>
        <p style="margin: 0; font-size: 16px; color: #2c3e50; font-weight: 600;">${escapeHtml(name)}</p>
      </div>

      <!-- Email -->
      <div style="margin-bottom: 20px; padding: 16px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #667eea;">
        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</p>
        <p style="margin: 0;">
          <a href="mailto:${escapeHtml(email)}" style="font-size: 16px; color: #667eea; font-weight: 600; text-decoration: none;">${escapeHtml(email)}</a>
        </p>
      </div>

      <!-- Subject -->
      <div style="margin-bottom: 30px; padding: 16px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #667eea;">
        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Subject</p>
        <p style="margin: 0; font-size: 16px; color: #2c3e50; font-weight: 600;">${escapeHtml(subject)}</p>
      </div>
    </div>

    <!-- Message Content (Shown First) -->
    <div style="padding: 0 30px 40px 30px;">
      <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #2c3e50; border-bottom: 3px solid #667eea; padding-bottom: 12px; font-weight: 600;">
        Message
      </h2>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea;">
        <p style="margin: 0; font-size: 15px; color: #2c3e50; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(message)}</p>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #2c3e50; color: #ffffff; padding: 30px; text-align: center; border-top: 4px solid #667eea;">
      <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.6;">
        <strong>Ready to discuss your project?</strong>
      </p>
      <p style="margin: 0; font-size: 13px; color: #bdc3c7; line-height: 1.6;">
        I will review your message and get back to you as soon as possible. Thank you for your interest!
      </p>
      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #495057;">
        <p style="margin: 0; font-size: 11px; color: #95a5a6;">
          Front-End Developer Portfolio • Building Web Experiences
        </p>
      </div>
    </div>

  </div>

</body>
</html>`,
    });

    if (response.error) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: response.data?.id },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
