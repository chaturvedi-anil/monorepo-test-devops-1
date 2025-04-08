import { prismaClient } from "@repo/db/prismaClient";
export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      <p>email : {user?.email}</p>
      <p>password : {user?.password}</p>
    </div>
  );
}
