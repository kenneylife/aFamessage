import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import fs from  'fs'
import path from 'path'


import connectDB from './lib/db.js';

const app = express();

const publicPath = path.join(path.cwd(), 'public')

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));


app.get('/health', (req, res) => {
  res.status(200).json({ok: true})
})

if(fs.existsSync(publicPath)){
  app.use(express.static(publicPath))
}

app.get('/{*any}', (req, res, next) => {
  res.sendFile(path.join(publicPath, 'index.html'), (err) => next(err))
})

app.listen(process.env.PORT, () => {
  connectDB()
  console.log('Server is runing at http://localhost:'+process.env.PORT)
});