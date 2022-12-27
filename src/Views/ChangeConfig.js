import { Suspense } from "react";
import ChangeContent from "../Components/organisms/ChangeContent";
import SkeletonLoader from "../Components/organisms/SkeletonLoader";
import Change from "../Components/templates/Change";
// import styled from "styled-components";

import LetterAndStats from "../Components/templates/LetterAndStats";
import Popup from "../Components/templates/Popup";

export default function ChangeConfig() {
  return (
    <Popup>
      <Suspense fallback={<SkeletonLoader />}>
        <ChangeContent />
      </Suspense>
    </Popup>
  );
}
