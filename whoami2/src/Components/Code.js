import { Tooltip } from "@mui/material";

export default function Code(props) {
  const [color, setColor] = React.useState(props.color);
  const codeRef = React.useRef(null);

  codeRef.current.setAttribute("style", `color: ${color}`);
  return (
    <>
      <Tooltip title={props.title}>
        <code ref={codeRef}>{props.text}</code>
      </Tooltip>
    </>
  );
}
