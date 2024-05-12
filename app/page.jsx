'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const HomePage = () => {
  const {  user } = useUser();
  const clerkUserID = user?.id;
  // console.log(clerkUserID)
  const handleSubmit = async (e) => {
    try {
      const response = await fetch(`${process.env.BASE_URL}/api/user`, {
        method: POST,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clerkUserID, name, email, phoneNo }),
      });
      if(response.ok){
        console.log('User Created')
      }
    } catch (error) {
      console.log(error.message);
      throw new Error('User Creation failed')
    }
  };

  return (
    <div className="m-10">
      {/* <Label htmlFor="name">Name</Label>
      <Input type="text" placeholder="Name" />
      <Label htmlFor="email">Email</Label>
      <Input type="email" placeholder="email" />
      <Label htmlFor="phone">Phone</Label>
      <Input type="number" placeholder="phone" />
      <div className="flex justify-center mt-3">
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
       
      </div> */}
    </div>
  );
};

export default HomePage;
