import { prismaClient } from "@repo/db/prismaClient";
export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      <h1> Testing </h1>
      <p>user email : {user?.email}</p>
      <p>password : {user?.password}</p>
    </div>
  );
}
