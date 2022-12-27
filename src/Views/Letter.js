import { Suspense } from "react";
import LetterContent from "../Components/organisms/LetterContent";
import SkeletonLoader from "../Components/organisms/SkeletonLoader";
import Popup from "../Components/templates/Popup";
export default function Letter() {
  return (
    <Popup>
      <Suspense fallback={<SkeletonLoader />}>
        <LetterContent />
      </Suspense>
    </Popup>
  );
}
