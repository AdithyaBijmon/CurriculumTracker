const adminModel = require('../src/admin/adminModel');
const jwt = require('jsonwebtoken');


exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await adminModel.findOne({ username });

    if (!user || user.role !== 'admin') {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
