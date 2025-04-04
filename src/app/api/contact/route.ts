import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Schema validation for contact form
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name is too short").max(50),
  lastName: z.string().min(2, "Last name is too short").max(50),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is too short").max(100),
  message: z.string().min(10, "Message is too short").max(1000),
});

export async function POST(req: Request) {
  try {
    // Parse and validate the request body
    const body = await req.json();
    const validatedData = contactFormSchema.parse(body);

    // Create nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content to send
    const mailOptions = {
      from: process.env.MAIL_FROM || 'noreply@agentic-mechanic.com',
      to: process.env.MAIL_TO || 'hello@agentic-mechanic.com',
      replyTo: validatedData.email,
      subject: `Contact Form: ${validatedData.subject}`,
      text: `
Name: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px;">
  <h2 style="color: #18A558;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
  <p><strong>Email:</strong> ${validatedData.email}</p>
  <p><strong>Subject:</strong> ${validatedData.subject}</p>
  <h3 style="color: #333;">Message:</h3>
  <div style="background-color: #f7f7f7; padding: 15px; border-radius: 5px;">
    ${validatedData.message.replace(/\n/g, '<br>')}
  </div>
</div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
