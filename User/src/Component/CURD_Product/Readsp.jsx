import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Layout';

function Readsp() {
  const { MaSanPham } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Gửi yêu cầu HTTP đến API
    fetch(`http://localhost:4000/api/sp/getbyid/${MaSanPham}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [MaSanPham]);

  return (
    <Layout>
      <div className="container">
        <div className="my-4">
          <h2>Chi tiết sản phẩm</h2>
          <Link to="/sp" className="btn btn-primary">
            Danh mục
          </Link>
          <span className="mx-2">/</span>
          <span>Xem</span>
        </div>

        <div>
          <h2>Mã sản phẩm: {product.MaSanPham}</h2>
          <h2>Mã danh mục: {product.MaDanhMuc}</h2>
          <h2>Tên sản phẩm: {product.TenSanPham}</h2>
          <div className="form-group">
            <label>Mô tả sản phẩm:</label>
            <textarea
              className="form-control"
              name="MoTaSanPham"
              value={product.MoTaSanPham}
              readOnly
              rows="4"
            />
          </div>
          <h2>Ảnh: {product.AnhMinhHoa}</h2>
          <h2>Màu sắc: {product.Mausac}</h2>
          <h2>Giá bán: {product.Giaban}</h2>
          <div>
            <Link to="/sp" className="btn btn-primary">
              Quay lại
            </Link>
            <Link to={`/editsp/${product.MaSanPham}`} className="btn btn-info ml-2">
              Chỉnh sửa
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Readsp;
