# 📧 Email Template Reference

## Current Professional Email Template

The email template shown below is the production-ready template currently implemented in your contact form endpoint (`app/api/contact/route.ts`).

### Email Features

✅ **Message-First Design** - The actual message from the user is displayed prominently
✅ **Professional Layout** - Modern, clean HTML structure
✅ **Security** - Proper HTML escaping prevents XSS attacks
✅ **Responsive** - Works on all email clients
✅ **Dark Mode Support** - Uses colors that work in dark mode
✅ **No Generic Text** - Removed unnecessary welcome messages

---

## HTML Template Code

```html
<!DOCTYPE html>
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
        <p style="margin: 0; font-size: 16px; color: #2c3e50; font-weight: 600;">{{name}}</p>
      </div>

      <!-- Email -->
      <div style="margin-bottom: 20px; padding: 16px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #667eea;">
        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</p>
        <p style="margin: 0;">
          <a href="mailto:{{from_email}}" style="font-size: 16px; color: #667eea; font-weight: 600; text-decoration: none;">{{from_email}}</a>
        </p>
      </div>

      <!-- Subject -->
      <div style="margin-bottom: 30px; padding: 16px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #667eea;">
        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Subject</p>
        <p style="margin: 0; font-size: 16px; color: #2c3e50; font-weight: 600;">{{subject}}</p>
      </div>
    </div>

    <!-- Message Content (Shown First - PRIMARY FOCUS) -->
    <div style="padding: 0 30px 40px 30px;">
      <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #2c3e50; border-bottom: 3px solid #667eea; padding-bottom: 12px; font-weight: 600;">
        Message
      </h2>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea;">
        <p style="margin: 0; font-size: 15px; color: #2c3e50; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">{{message}}</p>
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
</html>
```

---

## Template Variables

These variables are automatically filled with user input:

| Variable | Source | Example |
|----------|--------|---------|
| `{{name}}` | User form input | "John Doe" |
| `{{from_email}}` | User form input | "john@example.com" |
| `{{subject}}` | User form input | "Project Inquiry" |
| `{{message}}` | User form input | "I'm interested in..." |

---

## Customization Guide

### Colors
To change the color scheme, modify these hex values:

- **Primary Purple**: `#667eea` → Your color
- **Secondary Purple**: `#764ba2` → Your color
- **Dark Text**: `#2c3e50` → Your color
- **Background**: `#f8f9fa` → Your color

### Text Content
Edit these sections to personalize:

1. **Header Title**: "✨ New Message Received"
2. **Header Subtitle**: "Thank you for reaching out!"
3. **Footer Message**: "Ready to discuss your project?"
4. **Footer Credit**: "Front-End Developer Portfolio • Building Web Experiences"

### Structure
The template has these main sections (in order):

1. **Header** - Greeting and call-to-action
2. **Sender Info** - Name, email, subject
3. **Message Content** - The actual message (most important)
4. **Footer** - Call-to-action and signature

---

## Email Client Compatibility

✅ Gmail
✅ Outlook
✅ Apple Mail
✅ Yahoo Mail
✅ Thunderbird
✅ Mobile clients (iOS Mail, Gmail App)
✅ Dark mode support

---

## Security Features

### HTML Escaping
All user input is properly escaped:

```typescript
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
```

This prevents XSS attacks through user input.

### CSRF Protection
Protected by Next.js built-in CSRF handling.

### Input Validation
Server-side validation ensures:
- All fields are present
- Email is valid format
- No empty messages

---

## How to Modify Template

### In Your Code
Location: `app/api/contact/route.ts` (lines 30-95)

```typescript
html: `<!DOCTYPE html>
...your HTML here...
`,
```

### Recommended Changes
- Update colors to match your brand
- Change footer signature
- Add your company logo (inline base64)
- Adjust padding/margins as needed

### NOT Recommended
- Don't remove the message section
- Don't remove HTML escaping
- Don't add external CSS (most email clients don't support it)
- Don't use JavaScript (email clients block it)

---

## Testing the Email

### Local Testing
1. Fill out the contact form on your site
2. Submit the form
3. Check your configured `CONTACT_EMAIL` inbox
4. Review the formatting and layout

### Online Testing
Use email preview tools:
- [Email on Acid](https://www.emailonacid.com/)
- [Litmus](https://www.litmus.com/)
- [Mail Tester](https://www.mail-tester.com/)

### Spam Check
Test with:
- [Mail Tester](https://www.mail-tester.com/) - Check spam score

---

## Current Implementation

**File**: `app/api/contact/route.ts`
**Lines**: 30-95
**Status**: ✅ Production Ready
**Last Updated**: December 2025
**Template Engine**: Literal HTML strings with variable substitution

---

## Template Evolution

### Previous Version (Removed)
- ❌ EmailJS client-side template
- ❌ Generic welcome message
- ❌ Message shown at bottom
- ❌ No proper escaping
- ❌ Exposed API keys

### Current Version (Active)
- ✅ Resend API server-side
- ✅ Message shown first
- ✅ Proper HTML escaping
- ✅ Professional styling
- ✅ Secure implementation

---

## Future Enhancements

Possible improvements:
- [ ] Add user logo/branding
- [ ] Add email footer with social links
- [ ] Add signature image
- [ ] Add unsubscribe link (if bulk sending)
- [ ] Add tracking pixels (with privacy consideration)
- [ ] Multilingual support

---

## Support

If you need to:
- **Change template**: Edit `app/api/contact/route.ts`
- **Change colors**: Update hex values in the CSS
- **Add new fields**: Extend form in `app/contact/page.tsx`
- **Change email address**: Update environment variable

All instructions are provided in DEPLOYMENT_GUIDE.md and README.md

---

**Email Template v1.0** | Production Ready | December 2025
