import React, { useState, useEffect } from "react";
import Pagination from "../misc/Pagination";
import { addBelt } from "../../actions/beltAction";

const Table = ({ data, handleDelete, AddBelt, updateBelt }) => {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [beltData, setBeltData] = useState({
    name: "",
    buckle_type: "",
    color: "",
    price: "",
    size: "",
    stock: "",
  });
  const [updateId, setUpdateId] = useState("");
  const { name, buckle_type, color, price, size, stock } = beltData;
  const [allRecord, setAllRecord] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(10);
  useEffect(() => {
    setAllRecord(data);
  }, [data]);

  //Sorting Ascending
  const handleAscSorting = (str) => {
    let ascSortedRecord = [...allRecord];
    ascSortedRecord.sort((a, b) => {
      if (a[str].toLowerCase() < b[str].toLowerCase()) return -1;
      if (a[str].toLowerCase() > b[str].toLowerCase()) return 1;
      return 0;
    });
    setAllRecord(ascSortedRecord);
  };
  //Sorting Descending
  const handleDesSorting = (str) => {
    let desSortedRecord = [...allRecord];
    desSortedRecord.sort((a, b) => {
      if (a[str].toLowerCase() < b[str].toLowerCase()) return 1;
      if (a[str].toLowerCase() > b[str].toLowerCase()) return -1;
      return 0;
    });
    setAllRecord(desSortedRecord);
  };
  //Paginatiosn
  //Get Current Records
  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentRecords = allRecord.slice(indexOfFirstRecord, indexOfLastRecord);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Handle Search
  const handleSearch = (event) => {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value && event.currentTarget.value !== "") {
      const searchInput = event.currentTarget.value.toLowerCase();
      let searchRecord = [...data];
      let result = [];
      for (var i = 0; i < searchRecord.length; i++) {
        if (searchRecord[i].name.toLowerCase().includes(searchInput)) {
          result.push(searchRecord[i]);
        } else if (
          searchRecord[i].buckle_type.toLowerCase().includes(searchInput)
        ) {
          result.push(searchRecord[i]);
        } else if (searchRecord[i].color.toLowerCase().includes(searchInput)) {
          result.push(searchRecord[i]);
        } else if (searchRecord[i].price.includes(searchInput)) {
          result.push(searchRecord[i]);
        } else if (searchRecord[i].size.includes(searchInput)) {
          result.push(searchRecord[i]);
        } else if (searchRecord[i].stock.includes(searchInput)) {
          result.push(searchRecord[i]);
        }
      }
      setAllRecord(result);
      console.log(result);
    } else {
      console.log("no results");
      setAllRecord(data);
    }
  };
  const handleChange = (name) => (event) => {
    setBeltData({ ...beltData, [name]: event.currentTarget.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    showEditForm ? updateBelt(updateId, beltData) : AddBelt(beltData);
    setDefaultValue();
  };
  const setDefaultValue = () => {
    setBeltData({
      name: "",
      buckle_type: "",
      color: "",
      price: "",
      size: "",
      stock: "",
    });
  };
  // Edit Section
  const handleEdit = (id) => {
    setShowEditForm(true);
    data.forEach((val) => {
      if (val.id === id) {
        setBeltData({
          name: val.name,
          buckle_type: val.buckle_type,
          color: val.color,
          price: val.price,
          size: val.size,
          stock: val.stock,
        });
        setUpdateId(val.id);
      }
    });
  };
  // Belt Form
  const addBeltForm = () => (
    <section className="content">
      <div className="container-fluid">
        {/* general form elements */}
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Belt Form</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form role="form">
            <div className="card-body">
              <div className="row">
                {/* left column */}
                <div className="form-group col-md-4">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={handleChange("name")}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Buckle Type</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type"
                    value={buckle_type}
                    onChange={handleChange("buckle_type")}
                  />
                </div>

                <div className="form-group col-md-4">
                  <label>Colour</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Colour"
                    value={color}
                    onChange={handleChange("color")}
                  />
                </div>
              </div>
              <div className="row">
                {/* left column */}
                <div className="form-group col-md-4">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                    onChange={handleChange("price")}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Size</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Size"
                    value={size}
                    onChange={handleChange("size")}
                  />
                </div>

                <div className="form-group col-md-4">
                  <label>Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Title"
                    value={stock}
                    onChange={handleChange("stock")}
                  />
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-success"
              >
                {showEditForm ? "Update Belt" : "Add Belt"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* /.container-fluid */}
    </section>
  );

  return (
    <>
      <div style={{ float: "right" }}>
        {showEditForm ? (
          <div className="input-group input-group-sm" style={{ width: 150 }}>
            <button
              type="submit"
              className="btn btn-block btn-primary"
              onClick={() => {
                setShowForm(false);
                setShowEditForm(false);
                setBeltData({
                  title: "",
                  classes: "",
                  subjects: [],
                });
              }}
            >
              Hide Update Form
            </button>
          </div>
        ) : (
          <div className="input-group input-group-sm" style={{ width: 150 }}>
            <button
              type="submit"
              className="btn btn-block btn-primary"
              onClick={() => {
                setBeltData({
                  title: "",
                  classes: "",
                  subjects: [],
                });
                setShowForm(!showForm);
              }}
            >
              {showForm ? "Hide Form" : "Add New Belt"}
            </button>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      {showForm || showEditForm ? addBeltForm() : null}

      <section className="content">
        <div className="container-fluid">
          {data.length < 1 ? (
            <strong style={{ color: "#fff" }}>
              Sorry! No matching record found!
            </strong>
          ) : (
            <div className="card-body table-responsive p-0">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header tdl-heading">
                      <h3></h3>
                      <div className="card-tools float-right">
                        <div className="input-group input-group-sm">
                          <form className="form-inline d-flex justify-content-center md-form form-sm">
                            <input
                              className="form-control"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                              onChange={handleSearch}
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body table-responsive p-0">
                      <table className="table table-hover text-nowrap table-hover">
                        <thead>
                          <tr>
                            <th>
                              Name
                              <i
                                onClick={() => handleAscSorting("name")}
                                className="fa fa-arrow-up fa-xs float-right"
                                style={{
                                  cursor: "pointer",
                                }}
                              />
                              <i
                                onClick={() => handleDesSorting("name")}
                                className="fa fa-arrow-down fa-xs float-right"
                                style={{
                                  cursor: "pointer",
                                }}
                              />
                            </th>
                            <th>
                              Type
                              <i
                                onClick={() => handleAscSorting("buckle_type")}
                                className="fa fa-arrow-up fa-xs float-right"
                                style={{
                                  cursor: "pointer",
                                }}
                              />
                              <i
                                onClick={() => handleDesSorting("buckle_type")}
                                className="fa fa-arrow-down fa-xs float-right"
                                style={{
                                  cursor: "pointer",
                                }}
                              />
                            </th>
                            <th>Colour</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Stock</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentRecords.length > 0 &&
                            currentRecords.map((belt, index) => {
                              return (
                                <tr key={index}>
                                  <td className="td-width">{belt.name}</td>
                                  <td className="td-width">
                                    <img
                                      className="mr-3 rounded-circle"
                                      style={{ width: "50px" }}
                                      src="data:image/jpeg;base64,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"
                                      alt="icon"
                                    />
                                    {belt.buckle_type}
                                  </td>
                                  <td className="td-width">{belt.color}</td>
                                  <td className="td-width">Rs:{belt.price}</td>
                                  <td className="td-width">{belt.size}</td>
                                  <td className="td-width">{belt.stock}</td>
                                  <td>
                                    <i
                                      onClick={() => handleEdit(belt.id)}
                                      className="fa fa-edit fa-lg pr-2"
                                      style={{
                                        color: "#28a745",
                                        cursor: "pointer",
                                      }}
                                    ></i>
                                    <i
                                      onClick={() => handleDelete(belt.id)}
                                      style={{
                                        color: "#bb2d38",
                                        cursor: "pointer",
                                      }}
                                      className="fa fa-trash-o fa-lg "
                                      aria-hidden="true"
                                    ></i>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer ">
                      <div className="row">
                        <div className="col-sm-12 col-md-5">
                          <div className="dataTables_info">
                            Showing{" "}
                            {currentRecords.length < 1
                              ? "0"
                              : indexOfFirstRecord + 1}{" "}
                            to{" "}
                            {indexOfLastRecord > currentRecords.length
                              ? currentRecords.length
                              : indexOfLastRecord}{" "}
                            of {data.length} entries
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <Pagination
                            postsPerPage={recordPerPage}
                            totalPosts={data.length}
                            paginate={paginate}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>
            </div>
          )}{" "}
          {/* /.card-body */}
        </div>
        {/* /.card */}
        {/* /.container-fluid */}
      </section>
    </>
  );
};
export default Table;
