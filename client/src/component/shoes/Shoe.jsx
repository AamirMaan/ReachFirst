import React, { useEffect } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";

import { getShoes } from "../../actions/shoeAction";

const Shoe = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoes());
  }, []);
  const { shoes } = useSelector((state) => state.shoe);

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
            data={shoes}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};
export default Shoe;
