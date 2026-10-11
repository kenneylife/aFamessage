import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import connectDB from './lib/db.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));


app.get('/health', (req, res) => {
  res.status(200).json({ok: true})
})

app.listen(process.env.PORT, () => {
  connectDB()
  console.log('Server is runing at http://localhost:'+process.env.PORT)
});