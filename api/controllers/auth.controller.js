import bcrypt from 'bcrypt'

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  //db operations
  res.json({username,email,password})
}
export const login = (req, res) => {
  //db operations
}
export const logut = (req, res) => {
  //db operations
}