import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_EMAIL || "agnihotrisaurabh303@gmail.com";
    const emailSubject =
      subject && typeof subject === "string" && subject.trim()
        ? subject.trim()
        : `New Portfolio Message from ${name.trim()}`;

    // Optional: Resend API if user configures RESEND_API_KEY
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: recipientEmail,
          reply_to: email.trim(),
          subject: emailSubject,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Failed to send email via Resend");
      }

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    }

    // Optional: Web3Forms if user configures WEB3FORMS_ACCESS_KEY
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name: name.trim(),
          email: email.trim(),
          subject: emailSubject,
          message: message.trim(),
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Failed to send email via Web3Forms");
      }

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    }

    // Extract origin & referer with production Vercel domain as primary default
    const clientOrigin =
      req.headers.get("origin") || "https://portfolio-saurabh-181.vercel.app";
    const clientReferer =
      req.headers.get("referer") || "https://portfolio-saurabh-181.vercel.app/";

    // Default zero-config: FormSubmit.co
    const formSubmitRes = await fetch(
      `https://formsubmit.co/ajax/${recipientEmail}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: clientOrigin,
          Referer: clientReferer,
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _subject: emailSubject,
          message: message.trim(),
          _template: "table",
          _captcha: "false",
        }),
      }
    );

    const data = await formSubmitRes.json().catch(() => ({}));

    if (formSubmitRes.ok && (data.success === "true" || data.success === true)) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully! I'll get back to you shortly.",
      });
    }

    // Check if activation is needed on first use
    if (data.message && data.message.toLowerCase().includes("activation")) {
      return NextResponse.json({
        success: true,
        isActivation: true,
        message:
          "One-time activation required: FormSubmit has sent an 'Activate Form' email to agnihotrisaurabh303@gmail.com. Please open your Gmail and click 'Activate Form' to enable direct message delivery!",
      });
    }

    return NextResponse.json({
      success: formSubmitRes.ok,
      message:
        data.message ||
        "Message received! Note: Please check your email to activate FormSubmit if this is the first submission.",
    });
  } catch (error: any) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to send message. Please reach out directly to agnihotrisaurabh303@gmail.com.",
      },
      { status: 500 }
    );
  }
}

