import { Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Product = () => {

  
  const [data, setData] = useState([]);
  


  useEffect(() => {
    axios
      .get("http://localhost:4000/api/sp/get-all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (MaSanPham) => {
    const confirmDelete = window.confirm("Bạn có muốn xóa không?");

    if (confirmDelete) {
      axios
        .delete("http://localhost:4000/api/sp/delete/" + MaSanPham)
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
        <h3>Sản Phẩm</h3>
      </div>
      <Link to="/admin" className="custom-link">
        Trang chủ
      </Link>{" "}
      <span>/</span> <span>Sản Phẩm</span>
      <div>
        <Link to="/addsp" className="btn btn-success">
          Thêm mới +
        </Link>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mã Sản Phẩm</th>
              <th>Tên Sản Phẩm</th>
              <th>Ảnh</th>
              
              <th>Giá bán</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
          {/* {data && data.map((Dl) => ( */}
            {data.map((Dl, index) => (
              <tr key={index}>
                <td>{Dl.MaSanPham}</td>
                <td>{Dl.TenSanPham}</td>
                {/* <td>{Dl.AnhDaiDien}</td> */}
                <td>
                <img src={process.env.PUBLIC_URL +`/uploads/${Dl.AnhDaiDien}`}  style={{ width: 100 }} />
                                                    </td>
                
                <td>{Dl.Giaban}</td>
                <td>
                  <Link
                    to={`/readsp/${Dl.MaSanPham}` } // Kiểm tra xem Dl có tồn tại và có MaLoaiHang trước khi tạo đường dẫn URL
                    className="btn btn-sm btn-info"
                  >
                    Xem
                  </Link>

                  <Link
                    to={`/editsp/${Dl.MaSanPham}`}
                    className="btn btn-sm btn-primary mx-2"
                   
                  
               
                  >
                    Sửa
                  </Link>

                  <button
                    onClick={() => handleDelete(Dl.MaSanPham)}
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

export default Product;
