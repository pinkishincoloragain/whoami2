import { useRecoilValue } from "recoil";
import { userInfoState } from "../Components/utils/recoil/authRecoil";

const useSharableLink = () => {
  const uid = useRecoilValue(userInfoState).uid;

  return document.location.origin + "/anniversary/" + uid;
};

export default useSharableLink;
