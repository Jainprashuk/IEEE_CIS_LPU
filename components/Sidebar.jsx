"use client";

const Sidebar = () => {
  const options = [
    { title: "Code Editors", uri: "/documentation/code-editors" },
    { title: "VS Code Extensions", uri: "/documentation/vs-code-ex" },
    { title: "Version Control", uri: "/documentation/version-control" },
    { title: "Browser DevTools", uri: "/documentation/browser-dev" },
    { title: "Package Managers", uri: "/documentation/package-manager" },
    { title: "Version Control GUIs", uri: "/documentation/vc-guis" },
    { title: "Color Tools", uri: "/documentation/color-tools" },
    { title: "Graphic Design Tools", uri: "/documentation/gd-tools" },
    { title: "Documentation and References", uri: "/documentation/doc-ref" },
  ];

  return (
    <div className="h-1000 dark:bg-gray-900 mt-10 flex   min-w-[200px] border-r-2 pt-2">
      <ul>
        {options.map((option, index) => (
          <li
            // key={index}
            className={` mx-3 my-2 cursor-pointer   py-2 px-2 font-semibold hover:bg-primary hover:text-white`}
          >
            <a href={option.uri}>{option.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
