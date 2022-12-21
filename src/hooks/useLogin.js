import React from "react";
import { useSetRecoilState } from "recoil";
import { userInfoState, isLoggedInState } from "../Components/utils/authRecoil";

import { auth } from "../Components/utils/firebaseControl";

const useLogin = () => {
  const setUserInfoState = useSetRecoilState(userInfoState);
  const setIsLoggedInState = useSetRecoilState(isLoggedInState);

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserInfoState(user);
        setIsLoggedInState(true);
      } else {
        setUserInfoState(null);
        setIsLoggedInState(false);
      }
    });
  }, []);
};

export default useLogin;
