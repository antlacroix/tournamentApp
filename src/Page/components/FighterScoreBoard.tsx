import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ScoreBox from "./ScoreBox";

export interface FighterScoreBoardProps {
  score: number[];
  scoreTotal: number;
}

const FighterScoreBoard: React.FC<FighterScoreBoardProps> = ({
  score,
  scoreTotal,
}) => {
  const total = score.reduce((a, b) => a + b, 0);
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <ScoreBox score={score[0] ? score[0] : undefined} />
        </Grid>
        <Grid item xs={2}>
          <ScoreBox score={score[1] ? score[1] : undefined} />
        </Grid>
        <Grid item xs={2}>
          <ScoreBox score={score[2] ? score[2] : undefined} />
        </Grid>
        <Grid item xs={2}>
          <ScoreBox score={score[3] ? score[3] : undefined} />
        </Grid>
        <Grid item xs={2}>
          <ScoreBox score={score[4] ? score[4] : undefined} />
        </Grid>
        <Grid item xs={2}>
          <ScoreBox score={scoreTotal} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FighterScoreBoard;
