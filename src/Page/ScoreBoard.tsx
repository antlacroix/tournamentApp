import { Box, Grid } from "@mui/material";
import React from "react";
import useScore from "../communs/hooks/Score/useScore";
import useWarriors from "../communs/hooks/warrior/useWarrior";
import FighterScoreBoard from "./components/FighterScoreBoard";
import SideMenu from "./components/SideMenu";

const ScoreBoard: React.FC = () => {
  const { redWarrior, whiteWarrior } = useWarriors();
  const { redScore, whiteScore, redTotal, whiteTotalScore } = useScore();

  return (
    <Box display="flex" flexDirection="row">
      <SideMenu />
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <h1>{redWarrior?.name}</h1>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <FighterScoreBoard score={redScore} scoreTotal={redTotal} />
        </Grid>
        <Grid item xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <h1>{whiteWarrior?.name}</h1>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <FighterScoreBoard score={whiteScore} scoreTotal={whiteTotalScore} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScoreBoard;
