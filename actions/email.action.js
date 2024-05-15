"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import EmailTemplate from "@/email/EmailTemplate";

export const sendEmail = async (
  {
  borrowerName,
  borrowerEmail,
  lenderName,
  loanAmount,
  borrowedDate,
  dueDate,
  }
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER_NAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    console.log(borrowerName);
    console.log(borrowerEmail);
    console.log(lenderName);
    console.log(loanAmount);
    console.log(borrowedDate);
    console.log(dueDate);
    const emailHtml = render(
      <EmailTemplate
        borrowerName={borrowerName}
        lenderName={lenderName}
        loanAmount={loanAmount}
        borrowedDate={borrowedDate}
        dueDate={dueDate}
      />,
      {
        pretty: true,
      }
    );

    const options = {
      from: {
        name: "NiXpense",
        address: process.env.MAIL_USER_NAME,
      },
      to: borrowerEmail,
      subject: "Your Debt Ticket",
      html: emailHtml,
    };
    await transporter.sendMail(options);
  } catch (error) {
    console.error(error);
  }
};
