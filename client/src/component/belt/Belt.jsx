import React, { useEffect } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";

import {
  getBelts,
  deleteBelt,
  addBelt,
  updateBelt,
} from "../../actions/beltAction";

const Belt = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBelts());
  }, []);
  const { belts, beltLoading } = useSelector((state) => state.belt);

  const AddBelt = (beltData) => {
    dispatch(addBelt(beltData));
  };
  const UpdateBelt = (id, beltData) => {
    dispatch(updateBelt(id, beltData));
  };

  //Handle Delete
  const handleDelete = (id) => {
    dispatch(deleteBelt(id));
  };

  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          {beltLoading ? null : (
            <Table
              data={belts}
              handleDelete={handleDelete}
              AddBelt={AddBelt}
              updateBelt={UpdateBelt}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Belt;
