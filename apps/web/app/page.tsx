import { prismaClient } from "@repo/db/prismaClient";
export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div style={{border: "2px solid red", padding: "10px"}}>
      <p style={{color: "red"}}>Email : {user?.email}</p>
      <p style={{color: "royalblue"}}>Password : {user?.password}</p>
    </div>
  );
}
