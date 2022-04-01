export const INCRICOUNT = "INCRICOUNT";
export const DECRICOUNT = "DECRICOUNT";
export const RESETCOUNT = "RESETCOUNT";

export const incriCount = () => {
  return {
    type: INCRICOUNT,
  };
};
export const decriCount = () => {
  return {
    type: DECRICOUNT,
  };
};
export const resetCount = () => {
  return {
    type: RESETCOUNT,
  };
};
