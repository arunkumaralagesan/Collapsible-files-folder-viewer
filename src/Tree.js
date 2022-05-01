import React from "react";
import Folder from "./Folder";
import File from "./File";
import TreeRecursive from "./TreeRecursive";

const Tree = (props) => {
  const { children, isDynamic, childrens } = props;
  if (isDynamic) {
    return (
      <div className="tree_container">
        <TreeRecursive childrens={childrens} />
      </div>
    );
  }
  return <div className="tree_container">{children}</div>;
};

Tree.Folder = Folder;
Tree.File = File;

export default Tree;
