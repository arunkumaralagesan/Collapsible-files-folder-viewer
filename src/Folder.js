import React, { useState } from "react";

const Folder = (props) => {
  const { name, children } = props;

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="folder_container">
      <p onClick={() => setOpen((prevOpen) => !prevOpen)}>
        <span className={isOpen ? "folder-open" : "folder-close"}> &gt; </span>
        {name}
      </p>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Folder;
