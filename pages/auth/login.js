import React, { useEffect } from "react";
import Box from "../../components/Box";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../util/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
function Login() {
  const route = useRouter();
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const fbProvider = new FacebookAuthProvider();
  const fbLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const credantialFB = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credantialFB.accessToken;
      let photoURL = result.user.photoURL + "?height=100&access_token=" + token;
      await updateProfile(auth.currentUser, { photoURL });
    } catch (error) {
      console.log(error);
    }
  };

  const githubProvider = new GithubAuthProvider();
  const githubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const [user, loading] = useAuthState(auth);

  if (user) {
    route.push("/dashboard");
  } else {
    return (
      <div className="w-full flex justify-center">
        <Box>
          <h2 className="text-lg font-medium mb-3">Auth Project</h2>
          <p className="text-md font-medium mb-5 text-slate-600">
            -Please register with one of two below ways:
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={googleLogin}
              className="cursor-pointer flex items-center gap-3 justify-center bg-gray-800 transition-colors hover:bg-gray-600 hover:transition-colors py-2 px-5 rounded-md text-white"
            >
              <FcGoogle className="text-xl" />
              Register with Google
            </button>
            <button
              onClick={fbLogin}
              className="cursor-pointer flex items-center justify-center gap-3 bg-gray-800 transition-colors hover:bg-gray-600 hover:transition-colors py-2 px-5 rounded-md text-white"
            >
              <AiFillFacebook className="text-blue-400 text-xl" />
              Register with Facebook
            </button>
            <button
              onClick={githubLogin}
              className="cursor-pointer flex items-center justify-center gap-3 bg-gray-800 transition-colors hover:bg-gray-600 hover:transition-colors py-2 px-5 rounded-md text-white"
            >
              <AiFillGithub className="text-xl" />
              Register with Github
            </button>
          </div>
        </Box>
      </div>
    );
  }
}

export default Login;
