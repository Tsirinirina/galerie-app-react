import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.dark" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://tsirinirina-patrick.netlify.app/">
        https://tsirinirina-patrick.netlify.app
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
