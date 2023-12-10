const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body
  
    if (!username || !password) {
      console.log('Please provide email and password' )
    }
  
    const id = new Date().getDate()
  
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  
    res.status(200).json({ msg: 'user created', token })
  }

  const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
  
    const data = {
        msg: `Hello, ${req.user.username}`,
        secret: `Secret Token- ${luckyNumber}`,
      }
    console.log(JSON.stringify(data));
  }
  
  module.exports = {
    login,
    dashboard,
  }