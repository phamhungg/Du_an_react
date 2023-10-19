import { Table, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/danh-muc/get-all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (MaDanhMuc) => {
    const confirmDelete = window.confirm("Bạn có muốn xóa không?");

    if (confirmDelete) {
      axios
        .delete("http://localhost:4000/api/danh-muc/delete/" + MaDanhMuc)
        .then((res) => {
           // eslint-disable-next-line no-restricted-globals
          location.reload();
        });
    }
  };
  return (
    <Layout>
 <main className="main-container">
      <div className="main-title">
        <h3>Danh Mục</h3>
      </div>
      <Link to="/admin" className="custom-link">
        Trang chủ
      </Link>{" "}
      <span>/</span> <span>Danh mục</span>
      <div>
        <Link to="/add" className="btn btn-success">
          Thêm mới +
        </Link>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mã danh mục</th>
              <th>Tên danh mục</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data.map((Dl, index) => (
              <tr key={index}>
                <td>{Dl.MaDanhMuc}</td>
                <td>{Dl.TenDanhMuc}</td>
                <td>
                  <Link
                    to={`/read/${Dl.MaDanhMuc}` } // Kiểm tra xem Dl có tồn tại và có MaLoaiHang trước khi tạo đường dẫn URL
                    className="btn btn-sm btn-info"
                  >
                    Xem
                  </Link>

                  <Link
                    to={`/edit/${Dl.MaDanhMuc}`}
                    className="btn btn-sm btn-primary mx-2"
                  >
                    Sửa
                  </Link>

                  <button
                    onClick={() => handleDelete(Dl.MaDanhMuc)}
                    className="btn btn-sm btn-danger"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </main>
    </Layout>
   
  );
};

export default Category;
