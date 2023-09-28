const { Router } = require('express');
const controller = require('../controller');

const router = Router();

router.get('/login', controller.login);
router.get('/dash-board-details', controller.dashBoardDetails);
router.post('/submit-form', controller.SubmitForm);
router.get('/leave-form-details', controller.leaveDetails);
module.exports = router;

