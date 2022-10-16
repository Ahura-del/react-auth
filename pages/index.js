import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import Box from "../components/Box";
import { auth } from "../util/firebase";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="w-full flex justify-center">
      <Box>
        <h2 className="text-lg font-medium mb-3">Auth Project</h2>
        <ul>
          <li className="text-sm font-medium text-slate-500 mb-2">
            -This is a test project for authorization
          </li>
          <li className="text-sm font-medium text-slate-500 mb-2">
            -For this project I use firebase and next js
          </li>
          <li className="text-sm font-medium text-slate-500 mb-2">
            -So you can register without worry about save your information in
           any database
          </li>
        </ul>
        <div className="text-center">
          {!user ? (
            <Link href={"/auth/login"}>
              <a className="text-teal-600 font-medium text-md underline cursor-pointer">
                Register
              </a>
            </Link>
          ) : (
            <Link href={"/dashboard"}>
              <a className="text-teal-600 font-medium text-md underline cursor-pointer">
                Dashboard
              </a>
            </Link>
          )}
        </div>
      </Box>
    </div>
  );
}
