import { base_url } from "@/constants";

export async function getUserByClerkId(clerkId) {
  try {
    const res = await fetch(
      `${base_url}/api/user/clerk/${clerkId}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
}
