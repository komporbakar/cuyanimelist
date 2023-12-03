import React from "react";
import Link from "next/link";
import { authUserSession } from "@/services/auth-services";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex flex-wrap items-center justify-between">
      {user ? (
        <Link
          href="/users/dashboard"
          className=" rounded-md me-2 text-color-primary"
        >
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-primary p-2 rounded-md"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
