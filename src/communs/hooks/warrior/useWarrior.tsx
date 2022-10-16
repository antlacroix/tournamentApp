import { useWarriorContext } from "./WarriorContext";

const useWarriors = () => {
  const {
    warriors,
    setWarriors,
    redWarrior,
    setRedWarriors,
    whiteWarrior,
    setWhiteWarriors,
  } = useWarriorContext();

  return {
    warriors,
    setWarriors,
    redWarrior,
    setRedWarriors,
    whiteWarrior,
    setWhiteWarriors,
  };
};

export default useWarriors;
