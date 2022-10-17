import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { HitType } from "../../communs/hooks/Score/useScore";

export interface PointSelectorProps {
  value: HitType | undefined;
  setValue: (value: HitType | undefined) => void;
}

const PointSelector: React.FC<PointSelectorProps> = ({ value, setValue }) => {
  const handleClick = (event: any) => {
    if (event.target.value === value) {
      setValue(0);
    } else {
      setValue(event.target.value);
    }
  };

  return (
    <Box>
      <FormControl>
        <RadioGroup value={value}>
          <FormControlLabel
            value={HitType.min}
            control={<Radio />}
            label={"Mineur"}
            onClick={handleClick}
          />
          <FormControlLabel
            value={HitType.maj}
            control={<Radio />}
            label={"Majeur"}
            onClick={handleClick}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default PointSelector;
