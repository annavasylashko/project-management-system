import React, { useEffect, useMemo, useState } from "react";

import { getCards } from "../../shared/utils/requests";
import CardsContext from "./Cards.context";

const CardsProvider = ({ children }) => {
  const [shouldGetCards, setShouldGetCards] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => setCards(await getCards()))();
    setShouldGetCards(false);
  }, [shouldGetCards]);

  const value = useMemo(
    () => ({ cards, setShouldGetCards }),
    [cards, setShouldGetCards]
  );

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
