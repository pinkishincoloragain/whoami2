import { Suspense } from "react";
import SkeletonLoader from "../Components/organisms/SkeletonLoader";
import AnniversaryForm from "../Components/templates/AnniversaryForm";
import Popup from "../Components/templates/Popup";

function Anniversary() {
  return (
    <Popup>
      <Suspense fallback={<SkeletonLoader />}>
        <AnniversaryForm />
      </Suspense>
    </Popup>
  );
}

export default Anniversary;
