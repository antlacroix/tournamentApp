import React from "react";

export const createGenericContext = <T extends unknown>(): readonly [
  () => T,
  React.Provider<T | undefined>
] => {
  const genericContext = React.createContext<T | undefined>(undefined);

  const useGenericContext = () => {
    const contextIsDefined = React.useContext(genericContext);
    if (!contextIsDefined) {
      throw new Error("Context outside provider.");
    }
    return contextIsDefined;
  };

  return [useGenericContext, genericContext.Provider] as const;
};
