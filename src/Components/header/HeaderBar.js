import { useSelector } from "react-redux";
import Logo from "./Logo";
import styled from "@emotion/styled";

export default function HeaderBar(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const HeaderWrapper = styled(`div`)({
    backgroundColor: darkMode ? "#1f1f1f" : "white",
  });

  return (
    <>
      <HeaderWrapper className="flex flex-row sticky top-0 z-1 w-0 h-16">
        <Logo />
      </HeaderWrapper>
    </>
  );
}
