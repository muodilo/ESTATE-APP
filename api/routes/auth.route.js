import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ message: "create" });
})

router.post('/login', (req, res) => {
  res.json({ message: "login" });
})

router.post('/logout', (req, res) => {
  res.json({ message: "logout" });
})

export default router;