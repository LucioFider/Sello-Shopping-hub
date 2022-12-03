import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/img/product1.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="/img/product2.jpg" alt="" />
          <button>
            <Link className="link" to="/products/2">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/product6.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/product3.jpg" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  Season
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/product4.jpg" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  Children
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/product5.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
