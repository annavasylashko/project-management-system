import { useState } from "react";

export const useInputHandlers = (initialInputs) => {
  const [inputs, setInputs] = useState({ ...initialInputs });

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInputs((state) => ({
      ...state,
      [name]: {
        ...state[name],
        value: value,
        error: "",
      },
    }));
  };

  return { inputs, setInputs, inputHandler };
};
