import { Box } from "@mui/material";
import * as React from "react";
interface RightMenuContainer {
  children: React.ReactNode;
}
const RightMenuContainer = (props: RightMenuContainer) => {
  const { children } = props;
  return (
    <Box
      sx={{
        position: "fixed",
        top: 100,
        right: 0,
        width: "240px",
        display: { lg: "flex", xs: "none" },
      }}
    >
      {children}
    </Box>
  );
};
export default RightMenuContainer;
