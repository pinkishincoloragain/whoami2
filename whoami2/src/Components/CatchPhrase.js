import catchPhrase from "../assets/CatchPhrase.png";
import { useStyles } from "./Styles";

export default function CatchPhrase(props) {
  const classes = useStyles();

  return (
    <div className={classes.catchPhraseHolder}>
      <img src={catchPhrase} onClick={props.handleCatchClick} />
    </div>
  );
}
