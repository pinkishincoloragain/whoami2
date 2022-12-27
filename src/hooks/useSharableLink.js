import { useRecoilValue } from "recoil";
import { userIdState } from "../Components/utils/recoil/authRecoil";

const useSharableLink = () => {
  const uid = useRecoilValue(userIdState);
  const link = document.location.origin + "/anniversary/" + uid;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
  };

  return [link, copyToClipboard];
};

export default useSharableLink;
