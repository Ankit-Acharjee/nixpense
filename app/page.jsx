"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";

const HomePage = () => {
  const { user } = useUser();
  const clerkUserID = user?.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clerkUserID,
          name,
          email,
          phoneNo,
        }),
      });
      if (response.ok) {
        console.log("User Created");
      }
    } catch (error) {
      console.log(error.message);
      throw new Error("User Creation failed");
    }
  };

  return (
    <div className="m-10">
      <Label htmlFor="name">Name</Label>
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Name"
        name="name"
      />

      <Label htmlFor="email">Email</Label>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="email"
        name="email"
        id="email"
      />

      <Label htmlFor="phone">Phone</Label>
      <Input
        onChange={(e) => setPhoneNo(e.target.value)}
        value={phoneNo}
        type="number"
        placeholder="phone"
        name="phoneNo"
        id="phone"
      />

      <div className="flex justify-center mt-3">
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
