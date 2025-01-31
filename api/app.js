import express from 'express';
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("server is running on port 8800")
})

