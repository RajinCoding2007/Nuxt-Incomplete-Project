export const checkType = (el) => {
  if (Array.isArray(el)) {
    return "array";
  } else if (el === null) {
    return "null";
  } else {
    return typeof el;
  }
};

export const hasProps = (obj, ...props) => {
  if (checkType(obj) !== "object" && checkType(obj) !== "array") {
    return false;
  }
  return props.every((prop) => obj.hasOwnProperty(prop));
};

export const removeTSlash = (path) => {
  if (checkType(path) !== "string") {
    return "";
  }
  return path.slice(-1) === "/" ? path.slice(0, -1) : path.slice(0);
};

export const addTSlash = (path) => {
  if (checkType(path) !== "string") {
    return "";
  }
  return path.slice(-1) === "/" ? path.slice(0) : path.slice(0) + "/";
};

export const queryFile = (path, routes) => {
  if (checkType(path) !== "string") {
    return undefined;
  }
  path = path === "" || path === "/" ? "/" : removeTSlash(path);
  return routes.filter((e) => {
    return checkType(e._path) === "string" && e._path === path;
  })[0];
};

export const queryDir = (path, depth, routes) => {
  if (
    (checkType(depth) !== "number" &&
      (checkType(depth) !== "string" || depth !== "infinity")) ||
    checkType(path) !== "string"
  ) {
    return [];
  }

  path = path === "" || path === "/" ? "/" : removeTSlash(path);
  const min = removeTSlash(path).split("/").length;
  const max = depth === "infinity" ? Infinity : min + depth;

  return routes.filter((e) => {
    return (
      checkType(e._path) === "string" &&
      (e._path === path || e._path.startsWith(addTSlash(path))) &&
      removeTSlash(e._path).split("/").length >= min &&
      removeTSlash(e._path).split("/").length <= max
    );
  });
};
