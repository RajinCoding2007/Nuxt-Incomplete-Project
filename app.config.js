export default defineAppConfig({
  title: "CSGarden",
  company: "CSGarden",
  description:
    "A Site to learn about different topics of Algorithms and Data Structures",
  logo: "/logo.svg",
  nav: [
    {
      name: "Guide",
      href: "/guide",
      children: [
        {
          name: "Programming",
          href: "/guide/programming",
        },
        {
          name: "Algorithms",
          href: "/guide/algorithms",
        },
        {
          name: "Data Structures",
          href: "/guide/data-structures",
        },
      ],
    },
    { name: "Resources", href: "/resources" },
    { name: "Other Sites", href: "/network" },
    { name: "Support", href: "/support" },
    { name: "About", href: "/about" },
  ],
  footer: {
    links: [
      {
        title: "Programming",
        children: [
          {
            name: "C++ (MinGW)",
            href: "/guide/programming/c",
          },
          {
            name: "C (MinGW)",
            href: "/guide/programming/cpp",
          },
          {
            name: "Java (AdoptOpenJDK)",
            href: "/guide/programming/java",
          },
          {
            name: "Python 3.9",
            href: "/guide/programming/python",
          },
          {
            name: "Ruby",
            href: "/guide/programming/ruby",
          },
          {
            name: "JavaScript (NodeJS)",
            href: "/guide/programming/js",
          },
        ],
      },
      {
        title: "Algorithms",
        children: [
          {
            name: "Analysis of Algorithms",
            href: "/guide/algorithms/analysis",
          },
          {
            name: "Searching",
            href: "/guide/algorithms/searching",
          },
          {
            name: "Sorting",
            href: "/guide/algorithms/sorting",
          },
          {
            name: "Backtracking",
            href: "/guide/algorithms/backtracking",
          },
          {
            name: "Greedy Algorithms",
            href: "/guide/algorithms/greedy-algorithm",
          },
          {
            name: "Graph Algorithms",
            href: "/guide/algorithms/graph-algorithm",
          },
        ],
      },
      {
        title: "Data Structures",
        children: [
          {
            name: "Arrays",
            href: "/guide/data-structures/arrays",
          },
          {
            name: "Queue",
            href: "/guide/data-structures/queue",
          },
          {
            name: "Stack",
            href: "/guide/data-structures/stack",
          },
          {
            name: "Linked Lists",
            href: "/guide/data-structures/linked-lists",
          },
          {
            name: "Tree",
            href: "/guide/data-structures/tree",
          },
          {
            name: "Graph",
            href: "/guide/data-structures/graph",
          },
        ],
      },
    ],
    socials: [
      {
        icon: "fa6-brands:facebook",
        href: "https://github.com/RajinCoding2007/CSGarden",
      },
      {
        icon: "fa6-brands:github",
        href: "https://github.com/RajinCoding2007/CSGarden",
      },
      {
        icon: "fa6-brands:youtube",
        href: "https://github.com/RajinCoding2007/CSGarden",
      },
    ],
  },
});
