export const memoize = (func) => {
  const caches = [new WeakMap(), new Map()];

  const memoized = (...args) => {
    const key = args[0];
    const cacheIdx = typeof key === "object" && key !== null ? 0 : 1;
    const cache = caches[cacheIdx];

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func(...args);
    caches[cacheIdx] = cache.set(key, result) || cache;

    return result;
  };

  return memoized;
};
