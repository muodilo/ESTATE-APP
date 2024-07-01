import express from 'express';
import authRoutes from './routes/auth.route.js';

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("server is running on port 8800")
})

