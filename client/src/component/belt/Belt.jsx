import React, { useEffect } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";

import { getBelts } from "../../actions/beltAction";

const Belt = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBelts());
  }, []);
  const { belts } = useSelector((state) => state.belt);

  //Handle Edit
  const handleEdit = () => {
    console.log("edit");
  };

  //Handle Delete
  const handleDelete = () => {
    console.log("Delete");
  };

  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <Table
            data={belts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};
export default Belt;
