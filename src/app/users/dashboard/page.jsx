// "use client";
import { authUserSession } from "@/services/auth-services";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary flex justify-center items-center flex-col mt-10">
      <h5 className="text-2xl font-bold">Welcome, {user.name}</h5>
      <Image
        src={user?.image}
        width={250}
        height={250}
        alt={user?.name}
        className=""
      />
      <div className="py-8  flex flex-wrap gap-4 ">
        <Link
          href="/users/dashboard/collection"
          className="px-4 bg-color-accent font-semibold py-3 rounded-lg"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/mycomment"
          className="px-4 bg-color-accent font-semibold py-3 rounded-lg"
        >
          My Commenct
        </Link>
      </div>
    </div>
  );
};

export default Page;
