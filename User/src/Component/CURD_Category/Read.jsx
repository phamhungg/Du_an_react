import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../Layout";

function Read() {
  const { MaDanhMuc } = useParams();
  const [LH, setLH] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu HTTP đến API
    axios.get(`http://localhost:4000/api/danh-muc/getbyid/${MaDanhMuc}`)
      .then((response) => {
        setLH(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [MaDanhMuc]);

  return (
    <Layout>
      <div className="container">
        <div className="my-4">
          <h2>Chi tiết danh mục</h2>
          <Link to="/danhmuc" className="btn btn-primary">
            Danh mục
          </Link>
          <span className="mx-2">/</span> Xem
        </div>
        <div>
          <h4>Mã Loại Hàng: {LH.MaDanhMuc}</h4>
          <h4>Tên Loại Hàng: {LH.TenDanhMuc}</h4>
        </div>
        <div className="my-3">
          <Link to="/danhmuc" className="btn btn-primary">
            Quay lại
          </Link>
          <Link to={`/edit/${LH.MaDanhMuc}`} className="btn btn-info mx-2">
            Sửa
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Read;
