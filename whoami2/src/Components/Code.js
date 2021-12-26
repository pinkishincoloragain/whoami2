export default function Code(props) {
  const [color, setColor] = React.useState(props.color);
  const codeRef = React.useRef(null);

  const handleMouseMove = (e) => {
    clickRef.current.style.setProperty("background-color", "#f0f0f0");
    clickRef.current.style.setProperty("opacity", "70%");
    clickRef.current.style.setProperty("filter", "blur(0px)");
  };

  return (
    <>
      <code ref={codeRef}>{props.text}</code>
    </>
  );
}
