import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../Layout";

function Add() {
  const [values, setValues] = useState({
    TenDanhMuc: "",
   
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

  
    axios
      .post("http://localhost:4000/api/danh-muc/create", values)
      .then((res) => {
        console.log(res);
        navigate("/danhmuc");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout>
 <div className="">
      <div className="">
        <form onSubmit={handleSubmit}>
          <h2>Thêm Danh Mục</h2>
          <Link to="/danhmuc" className="custom-link">
            Danh mục
          </Link>{" "}
          <span>/</span> Thêm
          <div className="mb-2">
            <label>Tên danh mục</label>
            <input
              htmlFor="text"
              placeholder="Nhập Tên Danh Mục"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, TenDanhMuc: e.target.value })
              }
            />
          </div>
          {/* <div className="mb-2">
            <label>Tải ảnh danh mục</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={(e) => {
                const file = e.target.files[0];
                setValues({ ...values, image: file });
              }}
            />
          </div> */}
          <button className="btn btn-success">Thêm</button>
        </form>
      </div>
    </div>
    </Layout>
   
  );
}

export default Add;






