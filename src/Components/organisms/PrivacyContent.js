import React from "react";

import privacy from "../../assets/data/privacyPolicy.json";

export default function PrivacyContent() {
  return (
    <span>{privacy.privacyText}</span>
  );
}
