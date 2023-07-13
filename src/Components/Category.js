import React, { useState } from "react";
import Button from "./Button";
import { carList } from "./CarItems";
import ReactPaginate from "react-paginate";

const Category = () => {
  const categoryColor = carList.category.colors;
  const categoryType = carList.category.type;
  const cars = carList.car;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const carsToDisplay = cars.slice(startIndex, endIndex);

  const pageCount = Math.ceil(cars.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="container-fluid mx-2">
        <div className="row mx-2 mt-5">
        <div className="col-3 mt-2">
            {categoryColor.map((data) => (
              <Button key={data} title={data} />
            ))}
            {categoryType.map((data) => (
              <Button key={data} title={data} />
            ))}
          </div>
          <div className="col-9 mt-5">
            <div className="row">
              {carsToDisplay.map((car) => (
                <div className="col-md-4 mb-2" key={car.id}>
                  <div className="card ">
                    <img
                      src={car.image}
                      className="image-output image-fluid"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className=" text-center card-title">{car.type}</h5>
                      <ul className="text-center card-text">
                        <li>
                          <strong>Color:</strong>
                          {car.color}
                        </li>
                        <li>
                          <strong>Model:</strong>
                          {car.model}
                        </li>
                        <li>
                          <strong>Year:</strong>
                          {car.year}
                        </li>
                        <li>
                          <strong>Price:</strong>
                          {car.price}
                        </li>
                      </ul>
                      <button className="btn btn-warning border border-dark">
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ReactPaginate
        className="d-flex justify-content-center mt-3 paginate-items"
        previousLabel={
          <span
            style={{
              fontSize: "16px",
              border: "1px solid #000",
              padding: "5px 10px",
              textDecoration: "none !important",
            }}
          >
            Previous
          </span>
        }
        nextLabel={
          <span 
            style={{
              fontSize: "16px",
              border: "1px solid #000",
              padding: "5px 10px",
              textDecoration: "none !important",
            }}
          >
            Next
          </span>
        }
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Category;




