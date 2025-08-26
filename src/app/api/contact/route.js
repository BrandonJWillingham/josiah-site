export const runtime = 'edge';
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,           // smtp.gmail.com
  port: Number(process.env.SMTP_PORT),   // 465
  secure: process.env.SMTP_SECURE === "true", // true for 465
  auth: {
    user: process.env.SMTP_USER,         // your Gmail address
    pass: process.env.SMTP_PASS,         // App Password
  },
});

export async function POST(req) {
  try {
    const { name = "", email = "", message = "", company = "" } = await req.json();

    // Honeypot anti-spam: ignore if hidden field filled
    if (company) return new Response("OK", { status: 200 });

    if (!email || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    await transporter.sendMail({
      from: `"Website" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,                          // visitor’s email
      subject: `New message from ${name || "your website"}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return new Response("Email send error", { status: 500 });
  }
}