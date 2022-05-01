import React from "react";
import Folder from "./Folder";
import File from "./File";

const TreeRecursive = (props) => {
  const { childrens } = props;
  return childrens.map((item) => {
    if (item.type === "folder") {
      return (
        <Folder name={item.name}>
          <TreeRecursive childrens={item.childrens} />
        </Folder>
      );
    } else {
      return <File name={item.name} />;
    }
  });
};

export default TreeRecursive;
