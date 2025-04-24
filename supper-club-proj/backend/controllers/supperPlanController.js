const SupperPlan = require('../models/SupperPlan');

const generateSupperPlan = (req, res) => {
  const { craving } = req.body;

  if (craving.toLowerCase().includes('avurudu')) {
    return res.json({
      theme: 'Avurudu Festive',
      menu: [
        'Kiribath with Lunu Miris',
        'Kavum and Kokis',
        'Mung Kevum',
        'Traditional Avurudu Sweetmeats Platter',
      ],
      ambience: [
        'Kolam floor designs',
        'Traditional oil lamps',
        'Fresh banana leaves as placemats',
      ],
      music: [
        'Traditional Sinhalese drums',
        'Avurudu celebration songs',
      ],
    });
  }

  res.json({
    theme: 'Custom',
    menu: ['Mock Dish 1', 'Mock Dish 2'],
    ambience: ['Mock Ambience 1', 'Mock Ambience 2'],
    music: ['Mock Music 1', 'Mock Music 2'],
  });
};

const saveSupperPlan = async (req, res) => {
  try {
    const { theme, menu, ambience, music, craving } = req.body;
    const supperPlan = new SupperPlan({
      theme,
      menu,
      ambience,
      music,
      craving,
    });
    await supperPlan.save();
    res.status(201).json({ message: 'Supper plan saved successfully', supperPlan });
  } catch (error) {
    res.status(500).json({ message: 'Error saving supper plan', error });
  }
};

const getSupperPlans = async (req, res) => {
  try {
    const plans = await SupperPlan.find().sort({ createdAt: -1 });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching supper plans', error });
  }
};

module.exports = { generateSupperPlan, saveSupperPlan, getSupperPlans };