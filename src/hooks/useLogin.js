import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userInfoState, isLoggedInState } from "../Components/utils/recoil/authRecoil";

import { auth } from "../Components/utils/firebase/firebaseControl";

const useLogin = () => {
  const setUserInfoState = useSetRecoilState(userInfoState);
  const setIsLoggedInState = useSetRecoilState(isLoggedInState);

  useEffect(() => {
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
