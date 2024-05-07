import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { createRouteLoader } from "next/dist/client/route-loader";

const protectedRoutes = createRouteMatcher([
    '/',
])
export default clerkMiddleware((auth,req)=>{
    if(protectedRoutes(req)) auth().protect();
  });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};