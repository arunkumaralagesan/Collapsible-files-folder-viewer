import "./styles.css";
import Tree from "./Tree";

console.log("Check");

const FODLER_DETAILS = [
  {
    type: "folder",
    name: "src",
    childrens: [
      {
        type: "folder",
        name: "pages",
        childrens: [
          {
            type: "folder",
            name: "pagesNested",
            childrens: [
              { type: "file", name: "App1.js" },
              { type: "file", name: "reducer1.js" },
              { type: "file", name: "actions1.js" },
              { type: "file", name: "NestedFile.js" }
            ]
          },
          { type: "file", name: "App.js" },
          { type: "file", name: "reducer.js" },
          { type: "file", name: "actions.js" }
        ]
      },
      { type: "file", name: "webpack.js" },
      { type: "file", name: "package.json" }
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      <Tree>
        <Tree.Folder name="Pages">
          <Tree.Folder name="Pages1">
            <Tree.File name="App1.js" />
            <Tree.File name="Reducer1.js" />
            <Tree.File name="Actions1.js" />
          </Tree.Folder>
          <Tree.File name="App.js" />
          <Tree.File name="Reducer.js" />
          <Tree.File name="Actions.js" />
        </Tree.Folder>
        <Tree.File name="Package.json" />
      </Tree>
      <p>------------------------------</p>
      <Tree isDynamic childrens={FODLER_DETAILS}></Tree>
    </div>
  );
}
