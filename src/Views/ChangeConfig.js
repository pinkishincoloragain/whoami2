import { Suspense } from "react";
import ChangeContent from "../Components/organisms/ChangeContent";
import SkeletonLoader from "../Components/organisms/SkeletonLoader";

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
