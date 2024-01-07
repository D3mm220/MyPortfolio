import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

interface Props {
  name: string;
  email: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { name, email, message }: Props = body;

  console.log(body);
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["demianjuarezsaldana@gmail.com"],
      subject: "Resend Mail",
      react: EmailTemplate({
        name,
        email,
        message,
      }),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
