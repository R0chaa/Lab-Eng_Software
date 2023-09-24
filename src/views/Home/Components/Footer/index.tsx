import { Box, Typography } from "@mui/material";

export function Footer(){
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #09090A 0%, #181719 47.57%, #36343B 126.85%, #39363D 126.85%)",
        color: 'white',
        padding: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: "100px",
        }}
      >
        <Typography>Copyright © 2023</Typography>
        <Box ml={1}>
          <a href="https://github.com/" target="_blank">
            <img src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png" alt="GitHub icon" />
          </a>
        </Box>
        <Box ml={1}>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="https://img.icons8.com/ios-glyphs/50/ffffff/instagram.png" alt="Instagram icon" />
          </a>
        </Box>
      </Box>
    </Box>
  );
}