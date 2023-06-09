import {
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
  Container,
  Box,
  styled,
  createTheme,
} from "@mui/material";
import { DinnerDining } from "@mui/icons-material";
// const theme = createTheme();
const DinnerIcon = styled(DinnerDining)(({ theme }) => {
  return {
    [theme.breakpoints.up("xs")]: {
      height: "4vh",
      width: "4vh",
    },

    [theme.breakpoints.up("sm")]: {
      height: "6vh",
      width: "6vh",
    },

    [theme.breakpoints.up("md")]: {
      height: "8vh",
      width: "8vh",
    },

    [theme.breakpoints.up("lg")]: {
      height: "10vh",
      width: "10vh",
    },
  };
});
export default DinnerIcon;
