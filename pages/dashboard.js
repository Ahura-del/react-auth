import React from "react";
import Box from "../components/Box";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../util/firebase";
import Link from "next/link";
import { useRouter } from "next/router";

function Dashboard() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const singOut = async () => {
    await auth.signOut();
    router.push("/");
  };
  if (user) {
    return (
      <div className="w-full flex justify-center">
        <Box>
          <div className=" text-center lg:flex lg:gap-10 lg:text-left lg:justify-between">
            <div>
              <img
                src={user?.photoURL}
                className="lg:rounded-md lg:mx-0 mx-auto rounded-full"
                alt="avatar"
                width='100'
              />
            </div>
            <div className="mt-5 lg:mt-0">
              <p className="text-lg font-medium">Name : {user?.displayName}</p>
              <p className="text-lg font-medium">Email : {user?.email}</p>
              <p className="text-lg font-medium">
                Phone : {user?.phoneNumber ? user.phoneNumber : "-----"}
              </p>
            </div>
            <button
              onClick={singOut}
              className="bg-red-600  py-2 px-5 rounded-md text-white mt-5 lg:mt-0"
            >
              Log out
            </button>
          </div>
        </Box>
      </div>
    );
  }
  return (
    <div>
      <Box>
        <div className="text-center">
          <h2 className="text-2xl mb-5">You aren't register</h2>
          <Link href={"/auth/login"}>
            <a className="underline text-teal-500 font-medium cursor-pointer">
              Register
            </a>
          </Link>
        </div>
      </Box>
    </div>
  );
}

export default Dashboard;
