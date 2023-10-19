"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const app = (0, express_1.default)();
const PORT = 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use(express.static('public'))
app.use('/api', routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "E:/Workspace/Reacjs/Duanbanhang/Admin/public/Uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage });
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
