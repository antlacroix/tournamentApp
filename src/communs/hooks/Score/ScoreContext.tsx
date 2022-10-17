import React, { Dispatch, SetStateAction } from "react";
import { PropsWithChildren, useState } from "react";
import { createGenericContext } from "../GenericContext";

export interface ScoreContextData {
  redScore: number[];
  setRedScore: Dispatch<SetStateAction<number[]>>;
  redTotal: number;
  setRedTotal: Dispatch<SetStateAction<number>>;
  whiteScore: number[];
  setWhiteScore: Dispatch<SetStateAction<number[]>>;
}

const [useScoreContext, ScoreContextProvider] =
  createGenericContext<ScoreContextData>();

const ScoreProvider: React.FC<PropsWithChildren<unknown>> = (props) => {
  const [redScore, setRedScore] = useState<number[]>([]);
  const [whiteScore, setWhiteScore] = useState<number[]>([]);
  const [redTotal, setRedTotal] = useState<number>(0);

  return (
    <ScoreContextProvider
      value={{
        redScore,
        redTotal,
        setRedScore,
        setRedTotal,
        whiteScore,
        setWhiteScore,
      }}
    >
      {props.children}
    </ScoreContextProvider>
  );
};

export { useScoreContext, ScoreProvider };
