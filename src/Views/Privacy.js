import * as React from "react";
import styled from "styled-components";
import colors from "../Components/colors.json";

import PrivacyContent from "../Components/organisms/PrivacyContent";
import Popup from "../Components/templates/Popup";

export default function Privacy() {
  return (
    <Popup>
      <PrivacyContent />
    </Popup>
  );
}
