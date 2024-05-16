import EmailForm from "@/components/EmailForm/EmailForm";
import { getUserByClerkId } from "@/services/user.service";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();
  const data = await getUserByClerkId(user?.id);
  const userName = data?.data?.name;
  let currentUserData = data?.data ? data?.data : null;
  //code kaam nahi kar rha hai baabaa
  return (
    <>
      <EmailForm lenderId={currentUserData?._id} lenderName={userName}/>
    </>
  );
};

export default page;
