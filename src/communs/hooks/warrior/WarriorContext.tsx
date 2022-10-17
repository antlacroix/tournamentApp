import React, { Dispatch, SetStateAction, useEffect } from "react";
import { PropsWithChildren, useState } from "react";
import { Warrior } from "../../models";
import { createGenericContext } from "../GenericContext";
import { warriors as mockWariors } from "../../mockData";

export interface WarriorContextData {
  warriors: Warrior[];
  setWarriors: Dispatch<SetStateAction<Warrior[]>>;
  redWarrior: Warrior | undefined;
  setRedWarriors: Dispatch<SetStateAction<Warrior | undefined>>;
  whiteWarrior: Warrior | undefined;
  setWhiteWarriors: Dispatch<SetStateAction<Warrior | undefined>>;
}

const [useWarriorContext, WarriorContextProvider] =
  createGenericContext<WarriorContextData>();

const WarriorProvider: React.FC<PropsWithChildren<unknown>> = (props) => {
  const [warriors, setWarriors] = useState<Warrior[]>([]);
  const [redWarrior, setRedWarriors] = useState<Warrior | undefined>(undefined);
  const [whiteWarrior, setWhiteWarriors] = useState<Warrior | undefined>(
    undefined
  );

  useEffect(() => {
    setWarriors(mockWariors);
    setRedWarriors(mockWariors[0]);
    setWhiteWarriors(mockWariors[1]);
  }, []);

  return (
    <WarriorContextProvider
      value={{
        warriors,
        setWarriors,
        redWarrior,
        setRedWarriors,
        whiteWarrior,
        setWhiteWarriors,
      }}
    >
      {props.children}
    </WarriorContextProvider>
  );
};

export { useWarriorContext, WarriorProvider };
