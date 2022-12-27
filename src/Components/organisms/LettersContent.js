import { useState } from "react";

import LettersButton from "../atoms/LettersButton";

import styled from "styled-components";

const LettersContentWrapper = styled.div({
  marginTop: "4vh",
});

export default function LettersContent() {
  const [froms, setFrom] = useState(["pinkishincoloragain", "cj.dropthebeat", "익명의 흑토끼"]);

  return (
    <LettersContentWrapper>
      {froms.map((from, idx) => (
        <LettersButton key={idx} from={from} />
      ))}
    </LettersContentWrapper>
  );
}
