export const get = (object, path, defaultValue) => {
  if (!path || object == null) {
    return defaultValue;
  }

  const localPath = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

  let index = 0;
  let res = object;

  while (res != null && index < localPath.length) {
    res = res[localPath[index++]];
  }

  return index && index === localPath.length ? res : defaultValue;
};
