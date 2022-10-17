import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import useScore, { HitType } from "../../communs/hooks/Score/useScore";
import PointSelector from "./PointSelector";

const SideMenu: React.FC = () => {
  const [redScoreTOAdd, setRedScoreToAdd] = useState<HitType | undefined>(0);
  const [whiteScoreTOAdd, setWhiteScoreToAdd] = useState<HitType | undefined>(
    0
  );

  const { addPoints } = useScore();

  const onSubmit = async () => {
    addPoints(redScoreTOAdd, whiteScoreTOAdd);
  };

  return (
    <Box>
      <PointSelector value={redScoreTOAdd} setValue={setRedScoreToAdd} />
      <Box>
        <Button onClick={onSubmit}>Submit</Button>
      </Box>
      <PointSelector value={whiteScoreTOAdd} setValue={setWhiteScoreToAdd} />
    </Box>
  );
};

export default SideMenu;
