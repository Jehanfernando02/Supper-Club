const express = require('express');
const router = express.Router();
const { generateSupperPlan, saveSupperPlan, getSupperPlans } = require('../controllers/supperPlanController');

router.post('/', generateSupperPlan);
router.post('/save', saveSupperPlan);
router.get('/', getSupperPlans);

module.exports = router;