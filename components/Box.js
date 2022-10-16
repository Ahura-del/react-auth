import React from "react";

function Box(props) {
  return (
    <div className="w-11/12 p-5 rounded-sm shadow-md shadow-gray-300 lg:w-2/5">
      {props.children}
    </div>
  );
}

export default Box;
