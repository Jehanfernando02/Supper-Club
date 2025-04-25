const SupperPlan = require('../models/SupperPlan');

// Hardcoded supper plans for various Sri Lankan events
const supperPlans = {
  'avurudu': [
    {
      theme: 'Sinhala and Tamil New Year Celebration',
      menu: ['Kiribath with Lunu Miris', 'Kavum and Kokis', 'Mung Kevum', 'Banana with Treacle'],
      ambience: ['Kolam floor designs', 'Traditional oil lamps', 'Fresh banana leaves as placemats'],
      music: ['Raban rhythms', 'Sinhala Avurudu songs'],
    },
    {
      theme: 'Avurudu Festive Gathering',
      menu: ['Milk Rice', 'Athirasa', 'Aggala', 'Traditional Sweetmeats Platter'],
      ambience: ['Rangoli decorations', 'Oil lamp lighting ceremony', 'Palm leaf decor'],
      music: ['Traditional Sinhalese drums', 'Avurudu folk songs'],
    },
  ],
  'vesak': [
    {
      theme: 'Vesak Serenity',
      menu: ['Vegetable Rice', 'Dhal Curry', 'Papadam', 'Kesel Muwa'],
      ambience: ['Lanterns (Vesak kudu)', 'White lotus flowers', 'Candles around the table'],
      music: ['Buddhist chants', 'Instrumental Sinhala music'],
    },
    {
      theme: 'Vesak Full Moon Celebration',
      menu: ['Kiri Bath', 'Cashew Curry', 'Mango Salad', 'Watalappan'],
      ambience: ['Paper lanterns', 'Buddha statue centerpiece', 'Soft white lighting'],
      music: ['Pirith chanting', 'Calm Buddhist hymns'],
    },
  ],
  'poson': [
    {
      theme: 'Poson Devotion',
      menu: ['Yellow Rice', 'Brinjal Moju', 'Green Bean Curry', 'Kokis'],
      ambience: ['White flags', 'Oil lamps', 'Minimalist decor with Buddhist symbols'],
      music: ['Poson devotional songs', 'Instrumental flute music'],
    },
  ],
  'deepavali': [
    {
      theme: 'Deepavali Festival of Lights',
      menu: ['Vegetable Biryani', 'Sambar', 'Rasam', 'Gulab Jamun'],
      ambience: ['Oil lamps (diyas)', 'Rangoli with vibrant colors', 'Marigold flowers'],
      music: ['Tamil devotional songs', 'Classical Carnatic music'],
    },
    {
      theme: 'Diwali Family Feast',
      menu: ['Masala Dosa', 'Coconut Chutney', 'Payasam', 'Laddu'],
      ambience: ['Candles and fairy lights', 'Colorful tablecloths', 'Flower petals on the table'],
      music: ['Hindu bhajans', 'Instrumental sitar music'],
    },
  ],
  'thai pongal': [
    {
      theme: 'Thai Pongal Harvest Feast',
      menu: ['Pongal (sweet rice)', 'Vadai', 'Sambar', 'Coconut Sambol'],
      ambience: ['Clay pot decor', 'Banana leaf placemats', 'Sugar cane stalks'],
      music: ['Tamil folk songs', 'Nadaswaram music'],
    },
  ],
  'esala perahera': [
    {
      theme: 'Esala Perahera Grandeur',
      menu: ['Red Rice', 'Fish Ambul Thiyal', 'Polos Curry', 'Watalappan'],
      ambience: ['Elephant figurines', 'Gold and red table decor', 'Traditional Kandy lamps'],
      music: ['Drum beats from Perahera', 'Kandyan dance music'],
    },
  ],
  'christmas': [
    {
      theme: 'Sri Lankan Christmas Celebration',
      menu: ['Turkey Curry', 'Yellow Rice', 'Christmas Cake', 'Breudher'],
      ambience: ['Christmas tree centerpiece', 'Fairy lights', 'Red and green table decor'],
      music: ['Christmas carols in Sinhala', 'Instrumental Jingle Bells'],
    },
  ],
  'eid': [
    {
      theme: 'Eid-ul-Fitr Feast',
      menu: ['Chicken Biryani', 'Wattalapam', 'Falooda', 'Samosas'],
      ambience: ['Crescent moon decor', 'Green and gold table setting', 'Lanterns'],
      music: ['Nasheeds', 'Traditional Qawwali music'],
    },
  ],
  'sinhala wedding': [
    {
      theme: 'Traditional Sinhala Wedding',
      menu: ['Milk Rice with Lunu Miris', 'Chicken Curry', 'Seeni Sambol', 'Watalappan'],
      ambience: ['Poruwa centerpiece', 'Jasmine flower garlands', 'Oil lamps'],
      music: ['Traditional wedding drums', 'Sinhala love songs'],
    },
    {
      theme: 'Sinhala Wedding Feast',
      menu: ['Red Rice', 'Fish Curry', 'Brinjal Moju', 'Kiri Pani'],
      ambience: ['Betel leaf trays', 'Brass lamps', 'White and gold decor'],
      music: ['Kandyan drum beats', 'Sinhala folk music'],
    },
  ],
  'tamil wedding': [
    {
      theme: 'Tamil Wedding Extravaganza',
      menu: ['Biryani with Chicken', 'Mutton Curry', 'Sambar and Rasam', 'Payasam'],
      ambience: ['Marigold flower garlands', 'Brass lamps with oil wicks', 'Banana leaf dining setup'],
      music: ['Carnatic classical music', 'Tamil wedding songs'],
    },
  ],
  'birthday': [
    {
      theme: 'Sri Lankan Birthday Bash',
      menu: ['Fried Rice', 'Chicken Curry', 'Cutlets', 'Chocolate Biscuit Pudding'],
      ambience: ['Balloons and streamers', 'Colorful tablecloths', 'Candles on the cake'],
      music: ['Sinhala birthday songs', 'Party pop playlist'],
    },
  ],
  'anniversary': [
    {
      theme: 'Romantic Anniversary Dinner',
      menu: ['Coconut Rice', 'Prawn Curry', 'Pol Sambol', 'Watalappan'],
      ambience: ['Candles and rose petals', 'Soft fairy lights', 'Intimate table setting'],
      music: ['Romantic Sinhala ballads', 'Instrumental love songs'],
    },
  ],
  'family reunion': [
    {
      theme: 'Family Reunion Feast',
      menu: ['Yellow Rice', 'Fish Ambul Thiyal', 'Dhal Curry', 'Papadam'],
      ambience: ['Large communal table', 'Traditional woven mats', 'Tropical flowers'],
      music: ['Sinhala folk songs', 'Baila music'],
    },
  ],
  'baby shower': [
    {
      theme: 'Seemantham Baby Shower',
      menu: ['Pongal', 'Vadai', 'Fruit Salad', 'Kesari'],
      ambience: ['Pastel decorations', 'Flower garlands', 'Traditional kolam designs'],
      music: ['Tamil lullabies', 'Soft Carnatic music'],
    },
  ],
  'colombo dinner': [
    {
      theme: 'Modern Colombo Dinner Party',
      menu: ['Kottu Roti', 'Devilled Chicken', 'Egg Hoppers', 'Chocolate Biscuit Pudding'],
      ambience: ['Modern tableware', 'Ambient lighting', 'Urban decor with plants'],
      music: ['Sri Lankan pop hits', 'Jazz instrumentals'],
    },
    {
      theme: 'Colombo Fusion Night',
      menu: ['Sri Lankan-style Tacos', 'Spicy Prawn Curry', 'Hoppers with Lunu Miris', 'Coconut Panna Cotta'],
      ambience: ['Chic table setting', 'String lights', 'Minimalist decor'],
      music: ['Modern Baila remixes', 'Sinhala indie music'],
    },
  ],
  'seaside': [
    {
      theme: 'Seaside Gathering',
      menu: ['Crab Curry', 'Fish Fry', 'Coconut Rice', 'Mango Chutney'],
      ambience: ['Seashell decor', 'Blue and white tablecloths', 'Candles in the sand'],
      music: ['Calypso-style Baila', 'Ocean wave instrumentals'],
    },
  ],
  'village feast': [
    {
      theme: 'Rustic Village Feast',
      menu: ['Red Rice', 'Jackfruit Curry', 'Pol Sambol', 'Kiri Bath'],
      ambience: ['Clay pots', 'Banana leaf plates', 'Coconut shell candle holders'],
      music: ['Traditional folk songs', 'Raban playing'],
    },
  ],
  'spicy night': [
    {
      theme: 'Spicy Food Night',
      menu: ['Jaffna Crab Curry', 'Devilled Chicken', 'Polos Ambul', 'Kochchi Sambol'],
      ambience: ['Red chili decor', 'Clay pot serving dishes', 'Vibrant tablecloths'],
      music: ['Upbeat Tamil folk music', 'Spicy Baila beats'],
    },
  ],
  'vegetarian': [
    {
      theme: 'Vegetarian Festival',
      menu: ['Vegetable Fried Rice', 'Dhal Curry', 'Brinjal Moju', 'Cashew Curry'],
      ambience: ['Green table decor', 'Flower centerpieces', 'Soft lighting'],
      music: ['Calm Sinhala melodies', 'Instrumental music'],
    },
  ],
  'jaffna': [
    {
      theme: 'Jaffna Cultural Night',
      menu: ['Jaffna Crab Curry', 'Kool with Seafood', 'Odiyal Kool', 'Spicy Mutton Fry'],
      ambience: ['Palm leaf decorations', 'Clay pot serving dishes', 'Bright red and yellow tablecloths'],
      music: ['Tamil folk music', 'Jaffna traditional beats'],
    },
  ],
  'kandy': [
    {
      theme: 'Kandy Cultural Evening',
      menu: ['Red Rice', 'Chicken Curry', 'Polos Curry', 'Watalappan'],
      ambience: ['Kandyan lamp decor', 'Traditional brassware', 'Floral arrangements'],
      music: ['Kandyan drum beats', 'Upcountry folk songs'],
    },
  ],
  'galle literary': [
    {
      theme: 'Galle Literary Festival Dinner',
      menu: ['Seafood Risotto', 'Fish Ambul Thiyal', 'Hoppers', 'Coconut Panna Cotta'],
      ambience: ['Books as centerpieces', 'Soft ambient lighting', 'Elegant table setting'],
      music: ['Classical Sinhala music', 'Instrumental jazz'],
    },
  ],
  'harvest': [
    {
      theme: 'Harvest Celebration',
      menu: ['Yellow Rice', 'Pumpkin Curry', 'Pol Sambol', 'Kesel Muwa'],
      ambience: ['Sheaves of paddy', 'Clay pots with flowers', 'Rustic table setting'],
      music: ['Harvest folk songs', 'Traditional drumming'],
    },
  ],
};

// Generate a supper plan based on the user's craving
const generateSupperPlan = async (req, res) => {
  const { craving } = req.body;

  if (!craving) {
    return res.status(400).json({ message: 'Craving is required' });
  }

  try {
    const cravingLower = craving.toLowerCase();
    let plans = [];

    // Map cravings to events
    if (cravingLower.includes('avurudu') || cravingLower.includes('sinhala new year') || cravingLower.includes('tamil new year')) {
      plans = supperPlans['avurudu'];
    } else if (cravingLower.includes('vesak')) {
      plans = supperPlans['vesak'];
    } else if (cravingLower.includes('poson')) {
      plans = supperPlans['poson'];
    } else if (cravingLower.includes('deepavali') || cravingLower.includes('diwali')) {
      plans = supperPlans['deepavali'];
    } else if (cravingLower.includes('thai pongal') || cravingLower.includes('pongal')) {
      plans = supperPlans['thai pongal'];
    } else if (cravingLower.includes('esala') || cravingLower.includes('perahera')) {
      plans = supperPlans['esala perahera'];
    } else if (cravingLower.includes('christmas')) {
      plans = supperPlans['christmas'];
    } else if (cravingLower.includes('eid') || cravingLower.includes('ramadan')) {
      plans = supperPlans['eid'];
    } else if (cravingLower.includes('sinhala wedding')) {
      plans = supperPlans['sinhala wedding'];
    } else if (cravingLower.includes('tamil wedding')) {
      plans = supperPlans['tamil wedding'];
    } else if (cravingLower.includes('birthday')) {
      plans = supperPlans['birthday'];
    } else if (cravingLower.includes('anniversary')) {
      plans = supperPlans['anniversary'];
    } else if (cravingLower.includes('family reunion')) {
      plans = supperPlans['family reunion'];
    } else if (cravingLower.includes('baby shower') || cravingLower.includes('seemantham')) {
      plans = supperPlans['baby shower'];
    } else if (cravingLower.includes('colombo') || cravingLower.includes('modern')) {
      plans = supperPlans['colombo dinner'];
    } else if (cravingLower.includes('seaside') || cravingLower.includes('beach')) {
      plans = supperPlans['seaside'];
    } else if (cravingLower.includes('village') || cravingLower.includes('rustic')) {
      plans = supperPlans['village feast'];
    } else if (cravingLower.includes('spicy')) {
      plans = supperPlans['spicy night'];
    } else if (cravingLower.includes('vegetarian')) {
      plans = supperPlans['vegetarian'];
    } else if (cravingLower.includes('jaffna')) {
      plans = supperPlans['jaffna'];
    } else if (cravingLower.includes('kandy')) {
      plans = supperPlans['kandy'];
    } else if (cravingLower.includes('galle') || cravingLower.includes('literary')) {
      plans = supperPlans['galle literary'];
    } else if (cravingLower.includes('harvest')) {
      plans = supperPlans['harvest'];
    }

    // If no specific event matches, return a default plan
    if (plans.length === 0) {
      plans = [
        {
          theme: 'Custom Sri Lankan Feast',
          menu: ['Rice and Curry', 'Pol Sambol', 'Dhal Curry', 'Papadam'],
          ambience: ['Coconut shell candle holders', 'Woven palm leaf mats', 'Tropical flower centerpieces'],
          music: ['Traditional Baila music', 'Sinhala folk songs'],
        },
      ];
    }

    // Randomly select one plan from the available options
    const selectedPlan = plans[Math.floor(Math.random() * plans.length)];
    res.json(selectedPlan);
  } catch (error) {
    console.error('Error generating supper plan:', error.message);
    res.status(500).json({ message: 'Error generating supper plan', error: error.message });
  }
};

// Save a supper plan to the database
const saveSupperPlan = async (req, res) => {
  try {
    const { theme, menu, ambience, music, craving, guests, eventDate, shared } = req.body;
    const supperPlan = new SupperPlan({
      theme,
    menu,
    ambience,
      music,
      craving,
      guests: guests || 0,
      eventDate: eventDate || null,
      shared: shared || false,
    });
    await supperPlan.save();
    res.status(201).json({ message: 'Supper plan saved successfully', supperPlan });
  } catch (error) {
    console.error('Error saving supper plan:', error.message);
    res.status(500).json({ message: 'Error saving supper plan', error: error.message });
  }
};

// Retrieve all saved supper plans
const getSupperPlans = async (req, res) => {
  try {
    const plans = await SupperPlan.find().sort({ createdAt: -1 });
    res.json(plans);
  } catch (error) {
    console.error('Error fetching supper plans:', error.message);
    res.status(500).json({ message: 'Error fetching supper plans', error: error.message });
  }
};

// Retrieve all shared supper plans for the Feast Board
const getSharedPlans = async (req, res) => {
  try {
    const sharedPlans = await SupperPlan.find({ shared: true }).sort({ createdAt: -1 });
    res.json(sharedPlans);
  } catch (error) {
    console.error('Error fetching shared plans:', error.message);
    res.status(500).json({ message: 'Error fetching shared plans', error: error.message });
  }
};

// Toggle the shared status of a supper plan
const toggleSharePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await SupperPlan.findById(id);
    if (!plan) {
      return res.status(404).json({ message: 'Supper plan not found' });
    }
    plan.shared = !plan.shared;
    await plan.save();
    res.json({ message: `Supper plan ${plan.shared ? 'shared' : 'unshared'} successfully`, plan });
  } catch (error) {
    console.error('Error toggling share status:', error.message);
    res.status(500).json({ message: 'Error toggling share status', error: error.message });
  }
};

module.exports = { generateSupperPlan, saveSupperPlan, getSupperPlans, getSharedPlans, toggleSharePlan };