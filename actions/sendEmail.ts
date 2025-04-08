"use server"
import ContactFormEmail from "@/email/Email";
import { getErrorMessage, validateString } from "@/lib/validations";
import React from "react";
import { Resend } from "resend";

const RESEND = new Resend(String(process.env.RESEND_API_KEY))

export const sendMail = async(formdata:FormData)=>{
    const senderEmail = formdata.get("senderEmail");
  const message = formdata.get("message");

  if (!validateString(senderEmail, 100)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await RESEND.emails.send({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: 'akshaynew45@gmail.com',
        subject: 'Message from Portfolio contact form',
        reply_to: senderEmail,
        react: React.createElement(ContactFormEmail, {
            message: message,
            senderEmail: senderEmail,
          }),
    })
  } catch (error:unknown) {
    return {
        error: getErrorMessage(error),
      };
  }
  return {
    data,
  };
}