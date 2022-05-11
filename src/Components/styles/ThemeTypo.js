import { Typography } from "@mui/material";

export default function ThemeTypo(props, context) {
  return (
    <Typography variant={"h2"} sx={{ ...props.sx }}>
      {context}
    </Typography>
  );
}
