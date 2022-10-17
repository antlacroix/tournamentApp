import { useMemo } from "react";
import { useScoreContext } from "./ScoreContext";

export enum HitType {
  min = 1,
  maj = 2,
}

const useScore = () => {
  const {
    redScore,
    setRedScore,
    redTotal,
    setRedTotal,
    whiteScore,
    setWhiteScore,
  } = useScoreContext();

  const resetRedScore = () => {
    setRedScore([]);
  };
  const resetWhiteScore = () => {
    setWhiteScore([]);
  };
  const resetBothScores = () => {
    resetRedScore();
    resetWhiteScore();
  };

  const addRedScore = (value: number) => {
    setRedScore((current) => [...current, value]);
    setRedTotal((current) => current + value);
  };
  const addWhiteScore = (value: number) => {
    setWhiteScore((current) => [...current, value]);
  };

  const addPoints = (
    redHit: HitType | undefined,
    whiteHit: HitType | undefined
  ) => {
    if (redHit) {
      addRedScore(whiteHit ? redHit : redHit * 2);
    } else {
      addRedScore(0);
    }
    if (whiteHit) {
      addWhiteScore(redHit ? whiteHit : whiteHit * 2);
    } else {
      addWhiteScore(0);
    }
  };

  const redTotalScore = useMemo((): number => {
    let output: number = 0;
    redScore.forEach((n: number) => {
      output += n;
    });
    return output;
  }, [redScore]);
  const whiteTotalScore = useMemo((): number => {
    let output: number = 0;
    whiteScore.forEach((n: number) => {
      output += n;
    });
    return output;
  }, [whiteScore]);

  return {
    redScore,
    redTotal,
    whiteScore,
    whiteTotalScore,
    resetRedScore,
    resetWhiteScore,
    resetBothScores,
    addRedScore,
    addWhiteScore,
    addPoints,
  };
};

export default useScore;
