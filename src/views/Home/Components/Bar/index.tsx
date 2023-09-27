import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useRef, useState } from "react";

type UseHoverType<T extends HTMLElement> = [React.RefObject<T>, boolean];

function useHover<T extends HTMLElement>(): UseHoverType<T> {
  const [value, setValue] = useState(false);

  const ref = useRef<T>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}
const Search = styled("div")(({ theme }) => ({
  backgroundImage: "url('/background.png')",
  position: "relative",
  borderRadius: "100px",
  boxShadow:
    "2px 2px 4px 0px #D0D0EB inset, -3px -2px 9px 0px rgba(217, 219, 236, 0.40) inset",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export function Bar() {
  const [hoverRef, isHovered] = useHover();

  return (
    <AppBar
      position="static"
      style={{ marginTop: "50px", boxShadow: "none" }}
      color="transparent"
    >
      <Toolbar sx={{ ml: "50px", mr: "50px" }}>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}

        <a href="/home"><img src="logo.png" alt="logo"/></a>

        <Box >
          <Typography sx = {{color: "#32A8EB", fontFamily: "Poppins", fontSize: "18px", fontStyle: "normal", fontWeight: 700,
linHeight: "normal", mr:"40px", ml:"40px", mt:"12px", textDecoration: isHovered ? "underline" : ""}}>
            Sistema
          </Typography>
        </Box>

        <Box >
          <Typography sx = {{color: "#32A8EB", fontFamily: "Poppins", fontSize: "18px", fontStyle: "normal", fontWeight: 700,
linHeight: "normal", mr:"40px", mt:"12px", textDecoration: isHovered ? "underline" : ""}}>
            Cases
          </Typography>
        </Box>

        <Box >
          <Typography sx = {{color: "#32A8EB", fontFamily: "Poppins", fontSize: "18px", fontStyle: "normal", fontWeight: 700,
linHeight: "normal", mr:"40px", mt:"12px", textDecoration: isHovered ? "underline" : ""}}>
            Equipe
          </Typography>
        </Box>

        <Box >
          <Typography sx = {{color: "#32A8EB", fontFamily: "Poppins", fontSize: "18px", fontStyle: "normal", fontWeight: 700,
linHeight: "normal", mr:"40px", mt:"12px", boxShadow: isHovered ? "0 0 10px 5px rgba(0, 0, 0, 0.5)" : ""}}>
            Saiba mais
          </Typography>
        </Box>

        <Box>
          <Typography sx = {{color: "#32A8EB", fontFamily: "Poppins", fontSize: "18px", fontStyle: "normal", fontWeight: 700,
linHeight: "normal", mr:"40px", mt:"12px"}}>
            Contato
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Box display={"flex"} alignItems={"center"}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
