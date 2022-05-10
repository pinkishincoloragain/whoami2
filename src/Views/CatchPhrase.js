import catchPhrase from "../assets/icons/CatchPhrase.png";
import { useStyles } from "../Components/styles/Styles";

export default function CatchPhrase(props) {
  const classes = useStyles();

  return (
    <div className={classes.catchPhraseHolder}>
      <img src={catchPhrase} onClick={props.handleCatchClick} />
    </div>
  );
}
