const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.status(401).json({ message: 'Please log in first!' });
  } else {
    next();
  }
};

module.exports = withAuth;
