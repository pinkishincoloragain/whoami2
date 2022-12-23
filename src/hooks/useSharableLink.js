import { useRecoilValue } from "recoil";
import { userInfoState } from "../Components/utils/recoil/authRecoil";

const useSharableLink = () => {
  const uid = useRecoilValue(userInfoState).uid;
  const link = document.location.origin + "/anniversary/" + uid;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
  };

  return [link, copyToClipboard];
};

export default useSharableLink;
