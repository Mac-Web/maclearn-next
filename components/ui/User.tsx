import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import NavUser from "./NavUser";

async function User() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <a
        href={process.env.NEXT_PUBLIC_AUTH_URL + "/?redirect=maclearn"}
        className="bg-blue-600 hover:bg-blue-700 font-bold w-fit cursor-pointer rounded text-white py-1.5 px-4 text-lg"
      >
        Sign in
      </a>
    );
  } else {
    return <NavUser user={session.user} />;
  }
}

export default User;
