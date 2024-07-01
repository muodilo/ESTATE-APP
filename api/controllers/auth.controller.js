import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    //db operations
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password:hashedPassword,
      }
    })
  
    console.log(newUser);
    res.status(201).json({ message: "user created successfully",newUser });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "failed to create user" });
  }
  
}
export const login =async (req, res) => {
  const { username, password } = req.body;

  try {
    //check if user exists
    const user = await prisma.user.findUnique({
      where:{username}
    })

    if (!user) return res.status(401).json({ message: "Invalid Credentials" });
    //check if the password is correct
    const isPasswordValid = await bcrypt(password, user.password);
    if(!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials" });
  
    //generate cokie tken and send t the user
    res.setHeader("set-Cookie", "test=" + "myValue");
    
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Failed to login"})
  }

}
export const logut = (req, res) => {
  //db operations
}