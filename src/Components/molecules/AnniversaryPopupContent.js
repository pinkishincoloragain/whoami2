import anniversary from "../../assets/data/anniversary.json";

import { DarkLink } from "../atoms/MyButton";
import { H1, H3, H4 } from "../atoms/Text";

import Waves from "./objects/Waves";

export default function AnniversaryPopupContent() {
  return (
    <div>
      <H1>{anniversary.title}</H1>
      <H3>{anniversary.subtitle}</H3>
      <H4>{anniversary.description1}</H4>
      <H4>{anniversary.description2}</H4>
      <Waves width={270} height={270} elevation='20' azimuth='45' />
      <H4>
        {anniversary.description3}
        <br />
        {anniversary.description4}
      </H4>
      <br />
      <DarkLink to='/anniversary'>{anniversary.button}</DarkLink>
    </div>
  );
}
