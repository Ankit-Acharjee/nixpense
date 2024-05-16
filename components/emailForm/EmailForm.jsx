"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import { sendEmail } from "@/actions/email.action";

const EmailForm = ({ lenderId, lenderName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loanAmount, setLoanAmount] = useState(1);
  const [borrowedDate, setBorrowedDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/ticket`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          lenderId,
          name,
          email,
          phone,
          loanAmount,
          borrowedDate,
          dueDate,
        }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      console.log("Ticket Created");
      await sendEmail(
       {
        borrowerName:name,
        borrowerEmail:email,
        loanAmount,
        borrowedDate,
        dueDate,
        lenderName,
       }
      );
      console.log('Email has been sent successfully')
    } catch (error) {
      console.log(error.message);
      throw new Error("Ticket Creation failed");
    }
  };
  return (
    <div>
      <h1>Hi {lenderName}</h1>
      <Label htmlFor="name">Name</Label>
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Name"
        id="name"
      />

      <Label htmlFor="email">Email</Label>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="email"
        id="email"
      />

      <Label htmlFor="phone">Phone</Label>
      <Input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        type="number"
        placeholder="phone"
        id="phone"
      />

      <Label htmlFor="phone">Amount</Label>
      <Input
        onChange={(e) => setLoanAmount(Number(e.target.value))}
        value={loanAmount}
        type="number"
        placeholder="Amount"
        id="loanAmount"
      />

      <Label htmlFor="borrowedDate">Borrowed Date</Label>
      <Input
        onChange={(e) => setBorrowedDate(e.target.value)}
        value={borrowedDate}
        type="date"
        placeholder="Borrowed Date"
        id="borrowedDate"
      />

      <Label htmlFor="dueDate">Due Date</Label>
      <Input
        onChange={(e) => setDueDate(e.target.value)}
        value={dueDate}
        type="date"
        placeholder="Due Date"
        id="dueDate"
      />

      <div className="flex justify-center mt-3">
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EmailForm;
