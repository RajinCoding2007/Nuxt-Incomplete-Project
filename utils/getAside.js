const isAsideArr = (aside) => {
  if (checkType(aside) !== "array") {
    return false;
  } else {
    return aside.every((e, i, arr) => {
      return (
        hasProps(e, "title") &&
        checkType(e["title"]) === "string" &&
        (hasProps(e, "href") ? checkType(e["href"]) === "string" : true) &&
        (hasProps(e, "href", "target")
          ? checkType(e["target"]) === "string" &&
            (e["target"] === "_self" || e["target"] === "_blank")
          : true) &&
        (hasProps(e, "children") ? isAsideArray(e["children"]) : true)
      );
    });
  }
};

const isAsideObj = (aside) => {
  if (checkType(aside) !== "object") {
    return false;
  } else {
    return (
      (checkType(aside["path"]) === "number" ||
        checkType(aside["path"]) === "string") &&
      (checkType(aside["depth"]) === "number" ||
        (checkType(aside["depth"]) === "string" &&
          aside["depth"] === "infinity")) &&
      checkType(aside["fallback"]) === "string" &&
      (checkType(aside["fallback-depth"]) === "number" ||
        (checkType(aside["fallback-depth"]) === "string" &&
          aside["fallback-depth"] === "infinity")) &&
      (hasProps(aside, "target")
        ? checkType(aside["target"]) === "string" &&
          (aside["target"] === "_self" || aside["target"] === "_blank")
        : true)
    );
  }
};

const isAsideStr = (aside) => {
  if (checkType(aside) !== "string") {
    return false;
  } else {
    return true;
  }
};

const isAside = (aside) => {
  if (isAsideArr(aside)) return "AsideArray";
  else if (isAsideObj(aside)) return "AsideObject";
  else if (isAsideStr(aside)) return "AsideString";
  else return "";
};

export const getAside = (path, asideMeta, routes) => {
  if (checkType(path) !== "string") {
    return [];
  }
  if (asideMeta === undefined) {
    asideMeta;
  }

  path = path === "" && path === "/" ? "/" : removeTSlash(path);
  let aside = null;
  let meta = null;
  let tempPath = addTSlash(path);
  let pathNoSlash = removeTSlash(path);

  while (tempPath && !isAside(meta)) {
    meta =
      queryFile(tempPath + "_meta", routes) === undefined
        ? undefined
        : queryFile(tempPath + "_meta", routes).aside;

    tempPath = tempPath === "/" ? "" : tempPath.replace(/[^\/]+\/?$/g, "");
  }

  if (!isAside(meta)) {
    meta = asideMeta;
  }

  if (!isAside(meta)) {
    meta = {
      path: "/en",
      depth: 1,
      fallback: "current",
      "fallback-depth": 1,
      target: "_self",
    };
  }

  if (isAside(meta) === "AsideArray") {
    aside = meta;
  } else if (isAside(meta) === "AsideObject") {
    if (checkType(meta["path"]) === "number") {
      meta["path"] = removeTSlash(path)
        .split("/")
        .slice(0, meta["path"] + 1)
        .join("/");
    } else {
      if (meta["path"] === "root") {
        meta["path"] = "/";
      } else if (meta["path"] === "current") {
        meta["path"] = path;
      } else {
        meta["path"] = meta["path"];
      }
    }

    if (meta["fallback-path"] === "root") {
      meta["fallback-path"] = "/";
    } else if (meta["fallback-path"] === "current") {
      meta["fallback-path"] = path;
    } else {
      meta["fallback-path"] = meta["fallback-path"];
    }
    const pathDepth = removeTSlash(meta["path"]).split("/").length;

    if (removeTSlash(path).split("/").length >= pathDepth) {
      aside = queryDir(meta["path"], meta["depth"], routes).map((e) => {
        return {
          title: e.title ? e.title : e._id,
          href: e._path ? e._path : "#",
          target: meta["target"] ? meta["target"] : "_self",
        };
      });
    } else {
      aside = queryDir(
        meta["fallback-path"],
        meta["fallback-depth"],
        routes
      ).map((e) => {
        return {
          title: e.title ? e.title : e._id,
          href: e._path ? e._path : "#",
          target: meta["target"] ? meta["target"] : "_self",
        };
      });
    }
  } else if (isAside(meta) === "AsideString") {
    aside = queryDir(meta, "infinity", routes).map((e) => {
      return {
        title: e.title ? e.title : e._id,
        href: e._path ? e._path : "#",
        target: "_self",
      };
    });
  } else {
    aside = [];
  }
  return aside;
};
