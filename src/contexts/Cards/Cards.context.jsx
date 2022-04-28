import { createContext, useContext } from "react";

const defaultValue = {
  cards: [],
};

const CardsContext = createContext(defaultValue);
CardsContext.displayName = "CardsContext";

export const useCardsContext = () => useContext(CardsContext);

export default CardsContext;
