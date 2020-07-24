import React, { useEffect } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";

import {
  getShoes,
  deleteShoe,
  addShoe,
  updateShoe,
} from "../../actions/shoeAction";

const Shoe = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoes());
  }, []);
  const { shoes, shoeLoading } = useSelector((state) => state.shoe);

  const AddShoe = (shoeData) => {
    dispatch(addShoe(shoeData));
  };
  const UpdateShoe = (id, shoeData) => {
    dispatch(updateShoe(id, shoeData));
  };

  //Handle Delete
  const handleDelete = (id) => {
    dispatch(deleteShoe(id));
  };

  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          {shoeLoading ? null : (
            <Table
              data={shoes}
              handleDelete={handleDelete}
              AddShoe={AddShoe}
              updateShoe={updateShoe}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Shoe;
