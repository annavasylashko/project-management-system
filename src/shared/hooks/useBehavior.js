import { useDispatch } from "react-redux";

import { memoize } from "../utils/memoize";

const memoizeResult = memoize((id, func) => func());

const useBehavior = (behaviors) => {
  const dispatch = useDispatch();

  return memoizeResult(behaviors, () =>
    Object.entries(behaviors).reduce(
      (acc, [key, behavior]) => ({
        ...acc,
        [key]: behavior(dispatch),
      }),
      {}
    )
  );
};

export default useBehavior;
