import * as React from "react";
import ChangeContent from "../Components/organisms/ChangeContent";
import Change from "../Components/templates/Change";
// import styled from "styled-components";

import LetterAndStats from "../Components/templates/LetterAndStats";
import Popup from "../Components/templates/Popup";

export default function ChangeConfig() {
  return (
    <Popup>
      <ChangeContent />
    </Popup>
  );
}
