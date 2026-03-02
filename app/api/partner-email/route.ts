import { NextRequest, NextResponse } from "next/server";
import transporter from "@/lib/mailConfig";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      company,
      product,
      contact,
      website,
      email,
      phone,
      type,
      consent,
    } = body;

    if (!company || !contact || !email || !type) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Consent required" },
        { status: 400 }
      );
    }

    const adminHtml = `
      <h2>New Partner Application</h2>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Product:</strong> ${product}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Website:</strong> ${website}</p>
      <p><strong>Partner Type:</strong> ${type}</p>
    `;

    const userHtml = `
      <h2>Thank You ${contact} 🙌</h2>
      <p>We received your partnership request.</p>
      <p>Our team will contact you soon.</p>
    `;

    await Promise.all([
      transporter.sendMail({
        from: process.env.ZOHO_MAIL_FROM,
        to: process.env.CONTACT_EMAIL_RECIPIENT,
        subject: `New Partner Request - ${company}`,
        html: adminHtml,
      }),
      transporter.sendMail({
        from: process.env.ZOHO_MAIL_FROM,
        to: email,
        subject: "Partner Request Received - Fuworx",
        html: userHtml,
      }),
    ]);

    return NextResponse.json(
      { success: true, message: "Partner request sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Partner form error:", error);
    return NextResponse.json(
      { error: "Failed to send request" },
      { status: 500 }
    );
  }
}
