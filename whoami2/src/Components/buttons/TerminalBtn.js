export default function Button(props) {
  return (
    <div
      style={{
        width: "12px",
        height: "12px",
        backgroundColor: props.color,
        border: `0.8px solid ${props.borderColor}`,
        borderRadius: "30px",
        marginLeft: "2px",
        filter: "saturate(1.4)",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    ></div>
  );
}
