const router = require('express').Router();
const apiRoutes = require('./api'); // Import the API routes
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes); // Use the API routes under /api
router.use('/', homeRoutes); // Use the home routes
router.use('/dashboard', dashboardRoutes); // Use the dashboard routes

module.exports = router;
