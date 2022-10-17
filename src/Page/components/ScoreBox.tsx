import { Box } from "@mui/material";
import React from "react";

export interface ScoreBoxProps {
  score: number | undefined;
}

const ScoreBox: React.FC<ScoreBoxProps> = ({ score }) => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      textAlign="center"
      border={1}
      sx={{}}
    >
      {score ? score : 0}
    </Box>
  );
};

export default ScoreBox;
