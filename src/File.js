import React from "react";
const Folder = (props) => {
  const { name } = props;
  return (
    <div className="file_container">
      <p>{name}</p>
    </div>
  );
};

export default Folder;
