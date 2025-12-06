import Login from "@/components/Login";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function LoginPage() {
  const session = cookies().get("session");
  console.log(session);
  if (session) redirect("/admin/collaborate-responses");

  return <Login />;
}
