import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../Layout";

function Update() {
  const navigate = useNavigate();
  const { MaDanhMuc } = useParams();
  const[MaDanhMucs, setMaDanhMuc] = useState("");
  const[TenDanhMuc, setTenDanhMuc] = useState("");
  const [valuee, setValue] = useState([]);
  //   MaDanhMuc: '',
  //   TenDanhMuc: '',
  // });

  useEffect(() => {
    // Gửi yêu cầu HTTP đến API
    fetch(`http://localhost:4000/api/danh-muc/getbyid/${MaDanhMuc}` )
    
      .then((response) => response.json())
      .then((data) => setValue(data));
  }, [MaDanhMuc]);
  useEffect(()=>{
    setMaDanhMuc(valuee.MaDanhMuc);
    setTenDanhMuc(valuee.TenDanhMuc);
  }, [valuee])

  function edit() {
    const data = {
      MaDanhMuc: MaDanhMucs,
      TenDanhMuc
    }
        axios.post('http://localhost:4000/api/danh-muc/update', data)
        .then((response) => {
          
        });
      };
  

 

  // function handleInputChange(e) {
  //   const { name, value } = e.target;
  //   setValue({
  //     ...valuee,
  //     [name]: value,
  //   });
  // }

  // console.log(valuee)

  return (
    <Layout>
      <div className="container">
        <div className="my-4">
          <h2>Sửa Danh Mục</h2>
          <Link to="/danhmuc" className="btn btn-primary">
            Danh mục
          </Link>
          <span className="mx-2">/</span>
          <span>Sửa</span>
        </div>
        <form >
        <div className="form-group">
            <label>Mã sản phẩm:</label>
            <input
              className="form-control"
              type="text"
              name="MaDanhMuc"
              value={MaDanhMucs}
              onChange={(e)=>{setMaDanhMuc(e.target.value)}} 
              readOnly
            />
          </div>
          <div className="mb-2">
            <label>Tên danh mục</label>
            <input
              type="text"
              placeholder="Nhập Tên Danh Mục"
              className="form-control"
              value={TenDanhMuc}
              onChange={(e)=>{setTenDanhMuc(e.target.value)}}
            />
          </div>
          <button className="btn btn-success" onClick={()=>{edit(); alert('Sửa danh mục thành công');
          navigate('/danhmuc');}}>Sửa</button>
        </form>
      </div>
    </Layout>
  );
}

export default Update;
