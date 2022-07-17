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
      <HeaderWrapper className="flex sticky top-0 z-1 w-10 h-16">
        <div className="flex flex-row justify-between align-middle w-full">
          <Logo />
        </div>
      </HeaderWrapper>
    </>
  );
}
