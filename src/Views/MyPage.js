import * as React from "react";
// import styled from "styled-components";

import LetterAndStats from "../Components/templates/LetterAndStats";
import Popup from "../Components/templates/Popup";

export default function MyPage() {
  return (
    <Popup>
      <LetterAndStats />
    </Popup>
  );
}
