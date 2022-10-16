import React, { Dispatch, SetStateAction } from "react";
import { PropsWithChildren, useState } from "react";
import { Participant, Warrior } from "../../models";
import { createGenericContext } from "../GenericContext";

export interface WarriorContextData {
  warriors: Warrior[];
  setWarriors: Dispatch<SetStateAction<Warrior[]>>;
  redWarrior: Participant | undefined;
  setRedWarriors: Dispatch<SetStateAction<Participant | undefined>>;
  whiteWarrior: Participant | undefined;
  setWhiteWarriors: Dispatch<SetStateAction<Participant | undefined>>;
}

const [useWarriorContext, WarriorContextProvider] =
  createGenericContext<WarriorContextData>();

const WarriorProvider: React.FC<PropsWithChildren<unknown>> = (props) => {
  const [warriors, setWarriors] = useState<Warrior[]>([]);
  const [redWarrior, setRedWarriors] = useState<Participant | undefined>(
    undefined
  );
  const [whiteWarrior, setWhiteWarriors] = useState<Participant | undefined>(
    undefined
  );

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
