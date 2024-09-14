const Unit = require('../models/Unit');

// Get unit by ID
exports.getUnitById = async (req, res) => {
  try {
    const unit = await Unit.findById(req.params.id).populate('sessions');
    if (!unit) {
      return res.status(404).json({ message: 'Unit not found' });
    }
    res.status(200).json(unit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
