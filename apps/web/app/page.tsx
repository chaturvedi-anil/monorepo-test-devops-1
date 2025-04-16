import { prismaClient } from "@repo/db/prismaClient";
export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div style={{display: "flex", justifyItems: "center", alignItems: "center"}}>
      <h1 style={{color: "red"}}> Testing </h1>
      <p>user email : {user?.email}</p>
      <p>password : {user?.password}</p>
    </div>
  );
}
