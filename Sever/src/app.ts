import express, { Request, Response } from 'express';
import router from './routes';

import cors from 'cors';

import multer from 'multer';




const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

// app.use(express.static('public'))

app.use('/api', router);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "E:/Workspace/Reacjs/Duanbanhang/User/public/Uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const filename = req.file;

  res.status(200).json({ filename });
});




// app.get('/',(req,res)=>{
//   const sql = 'select * from sanpham';
//   db.query(sql, (err,result)=>{
//     if (err) return res.json("Error");
//     return res.json(result);
//   })
// })
// const storage = multer.diskStorage({
//   destination: (req, res,cb) =>{
//     cb(null,'public/images')
//   },
//   filename:(req, res,cb)=>{
//     cb(null,file.filename="_"+Date.now()+path.extname(file.priginalname))
//   }
// });
// const upload = multer({
//   storage: storage
// })
// app.post('/upload',upload.single('image'),(req, res) => {
// const image = req.file.filename;
// const sql = "UPDATE sanpham Anhminhhoa SET = ?";
// db.query(sql,[image],(err,result)=>{
//   if (err) return res.json({Message: "Error updating image"});
//   return res.json({Status: 'success'})
// }

// })





