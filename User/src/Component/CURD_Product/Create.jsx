import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../Layout";

function Create() {
  const [sanp_name, setSanp_name] = useState("");
  const [danhmuc_id, setDanhmucid] = useState("");
  const [mota, setMota] = useState("");
  const [mausac, setmausac] = useState("");
  const [giaban, setGiaban] = useState("");
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      MaDanhMuc: danhmuc_id,
      TenSanPham: sanp_name,
      MoTaSanPham: mota,
      AnhDaiDien: file,
      Mausac: mausac,
      Giaban: giaban,
    };
    const formData = new FormData();
    formData.append("file", file);

    return axios.post("http://localhost:4000/upload", formData).then((response) => {
      data.AnhDaiDien = response.data.filename.originalname;
      axios.post("http://localhost:4000/api/sp/create", data)
      .then((response) => {
        alert("Thêm sản phẩm thành công");
        navigate("/sp");
      });
    });
  };

  return (
    <Layout>
      <div className="container">
        <div className="my-4">
          <h2>Thêm sản phẩm</h2>
          <Link to="/sp" className="btn btn-primary">
            Sản phẩm
          </Link>
          <span className="mx-2">/</span>
          <span>Thêm</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>Mã danh mục:</label>
            <input
              name="danhmuc_id"
              value={danhmuc_id}
              onChange={(e) => setDanhmucid(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Mã danh mục"
            />
          </div>
          <div className="mb-2">
            <label>Tên sản phẩm:</label>
            <input
              name="sanp_name"
              value={sanp_name}
              onChange={(e) => setSanp_name(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Tên sản phẩm"
            />
          </div>
          <div className="mb-2">
            <label>Ảnh đại diện:</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className="mb-2">
            <label>Mô tả sản phẩm:</label>
            <textarea
              name="mota"
              value={mota}
              onChange={(e) => setMota(e.target.value)}
              className="form-control"
              placeholder="Mô tả sản phẩm"
              rows="4"
            />
          </div>
          <div className="mb-2">
            <label>Màu sắc:</label>
            <input
              name="mausac"
              value={mausac}
              onChange={(e) => setmausac(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Màu sắc"
            />
          </div>
          <div className="mb-2">
            <label>Giá bán:</label>
            <input
              name="giaban"
              value={giaban}
              onChange={(e) => setGiaban(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Giá bán"
            />
          </div>
          <button className="btn btn-success">Thêm</button>
        </form>
      </div>
    </Layout>
  );
}

export default Create;
