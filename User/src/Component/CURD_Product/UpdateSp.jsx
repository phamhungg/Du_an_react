import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../Layout';
import { Link } from "react-router-dom";

function UpdateSp() {
  const { MaSanPham } = useParams();
  const [product, setProduct] = useState({
    MaSanPham: '',
    TenSanPham: '',
    MaDanhMuc: '',
    MoTaSanPham: '',
    Mausac: '',
    Giaban: '',
    AnhDaiDien: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Gửi yêu cầu HTTP đến API
    fetch(`http://localhost:4000/api/sp/getbyid/${MaSanPham}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [MaSanPham]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }

  function handleFileChange(e) {
    setProduct({
      ...product,
      AnhDaiDien: e.target.files[0],
    });
  }

  function edit() {
    const formData = new FormData();
    formData.append('file', product.AnhDaiDien);

    axios
      .post('http://localhost:4000/upload', formData)
      .then((response) => {
        const updatedProduct = { ...product, AnhDaiDien: response.data.filename.originalname };
        axios.post('http://localhost:4000/api/sp/update', updatedProduct).then((response) => {
        });
      });
  }

  return (
    <Layout>
      <div className="container">
        <h3>Cập nhật sản phẩm</h3>
        <form>
        <Link to="/sp" className="btn btn-primary">
                        Sản phẩm
                    </Link>{" "}
          <div className="form-group">
            <label>Mã sản phẩm:</label>
            <input
              className="form-control"
              type="text"
              name="MaSanPham"
              value={product.MaSanPham}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Tên sản phẩm:</label>
            <input
              className="form-control"
              type="text"
              name="TenSanPham"
              value={product.TenSanPham}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Mã danh mục:</label>
            <input
              className="form-control"
              type="text"
              name="MaDanhMuc"
              value={product.MaDanhMuc}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Mô tả sản phẩm:</label>
            <input
              className="form-control"
              type="text"
              name="MoTaSanPham"
              value={product.MoTaSanPham}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Ảnh đại diện:</label>
            <input
              type="file"
              name="AnhDaiDien"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-group">
            <label>Màu sắc:</label>
            <input
              className="form-control"
              type="text"
              name="Mausac"
              value={product.Mausac}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Giá bán:</label>
            <input
              className="form-control"
              type="number"
              name="Giaban"
              value={product.Giaban}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-info" onClick={()=>{edit();  alert('Sửa sản phẩm thành công'); navigate('/sp')}}>Lưu</button>
        </form>
      </div>
    </Layout>
  );
}

export default UpdateSp;
