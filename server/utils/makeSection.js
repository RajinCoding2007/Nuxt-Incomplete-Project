/**
 * @param {Object} tree - The tree you want to check display.
 */
export const checkDisplay = (tree) => {
  if (
    !tree.type ||
    tree.type === "doctype" ||
    tree.type === "comment" ||
    tree.tag === "base" ||
    tree.tag === "link" ||
    tree.tag === "meta" ||
    tree.tag === "noscript" ||
    tree.tag === "script" ||
    tree.tag === "style" ||
    tree.tag === "title"
  ) {
    const display = "none";
    return display;
  } else if (tree.type === "text") {
    const display = "text";
    return display;
  } else if (
    tree.type === "root" ||
    tree.tag === "a" ||
    tree.tag === "abbr" ||
    tree.tag === "acronym" ||
    tree.tag === "audio" ||
    tree.tag === "b" ||
    tree.tag === "bdi" ||
    tree.tag === "bdo" ||
    tree.tag === "big" ||
    tree.tag === "br" ||
    tree.tag === "button" ||
    tree.tag === "canvas" ||
    tree.tag === "cite" ||
    tree.tag === "code" ||
    tree.tag === "data" ||
    tree.tag === "datalist" ||
    tree.tag === "del" ||
    tree.tag === "dfn" ||
    tree.tag === "em" ||
    tree.tag === "embed" ||
    tree.tag === "i" ||
    tree.tag === "iframe" ||
    tree.tag === "img" ||
    tree.tag === "input" ||
    tree.tag === "ins" ||
    tree.tag === "kbd" ||
    tree.tag === "label" ||
    tree.tag === "map" ||
    tree.tag === "mark" ||
    tree.tag === "meter" ||
    tree.tag === "object" ||
    tree.tag === "output" ||
    tree.tag === "picture" ||
    tree.tag === "progress" ||
    tree.tag === "q" ||
    tree.tag === "ruby" ||
    tree.tag === "s" ||
    tree.tag === "samp" ||
    tree.tag === "select" ||
    tree.tag === "slot" ||
    tree.tag === "small" ||
    tree.tag === "span" ||
    tree.tag === "strong" ||
    tree.tag === "sub" ||
    tree.tag === "sup" ||
    tree.tag === "svg" ||
    tree.tag === "template" ||
    tree.tag === "textarea" ||
    tree.tag === "time" ||
    tree.tag === "u" ||
    tree.tag === "tt" ||
    tree.tag === "var" ||
    tree.tag === "video" ||
    tree.tag === "wbr"
  ) {
    const display = "inline";
    return display;
  } else {
    const display = "block";
    return display;
  }
};

/**
 * A function to traverse hast tree
 * @param {Object} tree - The tree you want to traverse.
 * @param {Array} tree.children - Children of the current node.
 * @param {Function} beforeFunc - The function which will run before traversing children.
 * @param {Function} afterFunc - The function which will run after traversing children (if there are children).
 */
export const makeSection = (tree, beforeFunc, afterFunc) => {
  const parents = [];
  const id = 1;
  const display = checkDisplay(tree);

  const visit = (tree, parents, id, display) => {
    beforeFunc(tree, parents, id, display);

    if (Array.isArray(tree.children) && tree.children.length > 0 && display) {
      parents.push(tree);

      tree.children.forEach((e, i) => {
        const id = i + 1;
        const display = checkDisplay(e);

        visit(e, parents, id, display);
      });
      parents.pop();
      afterFunc(tree, parents, id, display);
    }
  };

  visit(tree, parents, id, display);
};
