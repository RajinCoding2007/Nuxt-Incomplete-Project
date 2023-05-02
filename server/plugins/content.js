export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:afterParse", (file) => {
    if (file._id.endsWith(".md")) {
      // file._content = cacheContent; // .join(" ").replace(/\s+/g, " ").trim();
      file.category = file.category ?? "Other Categories";
      file.icon = file.icon ?? "file";
      file.tags = file.tags ?? [];
      file.title = file.title ?? file._id;
      file.layout = file.layout ?? "default";
      file._content = [
        {
          title: file.title,
          path: file._path,
          category: file.category,
          icon: file.icon,
          tags: file.tags,
          content: "",
        },
      ];
      const beforeFunc = (tree, parents, id, display) => {
        if (parents.length === 0) {
          return;
        } else if (
          parents[0]?.type === "root" &&
          (tree?.tag === "h1" ||
            tree?.tag === "h2" ||
            tree?.tag === "h3" ||
            tree?.tag === "h4")
        ) {
          file._content.push({
            title: file.title,
            section: "",
            content: "",
            path: file._path + "#" + tree?.props.id,
            category: file.category,
            icon: file.icon,
            tags: file.tags,
          });
        } else if (
          parents[0]?.type === "root" &&
          (parents[1]?.tag === "h1" ||
            parents[1]?.tag === "h2" ||
            parents[1]?.tag === "h3" ||
            parents[1]?.tag === "h4")
        ) {
          if (display === "inline" || display === "none") {
            file._content[file._content.length - 1].section =
              file._content[file._content.length - 1].section;
          } else if (display === "block") {
            file._content[file._content.length - 1].section =
              file._content[file._content.length - 1].section + " ";
          } else {
            file._content[file._content.length - 1].section = (
              file._content[file._content.length - 1].section + tree?.value
            )
              .replace(/\s+/g, " ")
              .trim();
          }
        } else {
          if (display === "inline" || display === "none") {
            file._content[file._content.length - 1].content =
              file._content[file._content.length - 1].content;
          } else if (display === "block") {
            file._content[file._content.length - 1].content =
              file._content[file._content.length - 1].content + " ";
          } else {
            file._content[file._content.length - 1].content = (
              file._content[file._content.length - 1].content + tree?.value
            )
              .replace(/\s+/g, " ")
              .trim();
          }
        }
      };
      const afterFunc = (tree, parents, id, display) => {
        if (parents.length === 0) {
          return;
        } else if (
          parents[0]?.type === "root" &&
          (parents[1]?.tag === "h1" ||
            parents[1]?.tag === "h2" ||
            parents[1]?.tag === "h3" ||
            parents[1]?.tag === "h4")
        ) {
          if (display === "inline" || display === "none") {
            file._content[file._content.length - 1].section =
              file._content[file._content.length - 1].section;
          } else if (display === "block") {
            file._content[file._content.length - 1].section =
              file._content[file._content.length - 1].section;
          } else {
            file._content[file._content.length - 1].section = (
              file._content[file._content.length - 1].section + tree?.value
            )
              .replace(/\s+/g, " ")
              .trim();
          }
        } else {
          if (display === "inline" || display === "none") {
            file._content[file._content.length - 1].content =
              file._content[file._content.length - 1].content;
          } else if (display === "block") {
            file._content[file._content.length - 1].content =
              file._content[file._content.length - 1].content + " ";
          } else {
            file._content[file._content.length - 1].content = (
              file._content[file._content.length - 1].content + tree?.value
            )
              .replace(/\s+/g, " ")
              .trim();
          }
        }
      };

      makeSection(file.body, beforeFunc, afterFunc);
      file._content.forEach((e) => {
        e.content = e.content.replace(/\s+/g, " ").trim();
        e.section = e.section?.replace(/\s+/g, " ").trim();
      });
    }
  });
});
