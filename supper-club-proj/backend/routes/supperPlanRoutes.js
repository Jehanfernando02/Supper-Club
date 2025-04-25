const express = require('express');
const router = express.Router();
const {
  generateSupperPlan,
  saveSupperPlan,
  getSupperPlans,
  getSharedPlans,
  toggleSharePlan,
} = require('../controllers/supperPlanController');

router.post('/', generateSupperPlan);
router.post('/save', saveSupperPlan);
router.get('/', getSupperPlans);
router.get('/shared', getSharedPlans);
router.put('/share/:id', toggleSharePlan);

module.exports = router;