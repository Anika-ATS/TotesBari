import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    googleLogin();
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn w-full bg-gradient-to-r from-[#64d9b9] to-[#1d2939] text-white"
    >
      <div className="flex items-center gap-2 text-white">
        <FaGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
