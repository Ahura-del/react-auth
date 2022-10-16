import React from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../util/firebase";

function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="mb-10 h-12 shadow-sm">
      <div className=" w-11/12 h-full mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <a className="text-2xl font-bold cursor-pointer">React auth</a>
        </Link>
        {!user && (
          <Link href={"/auth/login"}>
            <a className="bg-teal-700 text-white px-5 py-2 rounded-md cursor-pointer">
              Join Now!
            </a>
          </Link>
        )}
         {user &&(
          <Link href={"/dashboard"}>
            <a className="flex items-center gap-2 cursor-pointer">
            <span className="font-medium" >{user.displayName}</span>
            <img
              src={user.photoURL}
              referrerPolicy="no-referrer"
              className="w-10 rounded-full"
              />
              </a>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
