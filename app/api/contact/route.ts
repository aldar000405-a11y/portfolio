import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

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
      from: 'onboarding@resend.dev', // You may need to change this based on your Resend domain
      to: 'mohummadsultan0@gmail.com',
      subject: `New Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Message</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <h3 style="color: #333; margin-top: 20px;">Message:</h3>
            <p style="white-space: pre-wrap; color: #555;">${escapeHtml(message)}</p>
          </div>
          <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999;">
            <p>This message was sent from your portfolio contact form.</p>
          </footer>
        </div>
      `,
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
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

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
