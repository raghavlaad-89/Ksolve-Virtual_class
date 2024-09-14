require('dotenv').config(); // Ensure this is at the top to load environment variables
const mongoose = require('mongoose'); // Import mongoose
const connectDB = require('./config/db'); // Adjust path as needed
const Class = require('./models/Class'); // Adjust path as needed
const Unit = require('./models/Unit');   // Adjust path as needed
const Session = require('./models/Session'); // Adjust path as needed
const sampleData = require('./sampleData'); // Adjust path as needed

const seedDatabase = async () => {
  try {
    // Connect to MongoDB using connectDB from db.js
    await connectDB();

    // Clear existing data
    await Class.deleteMany({});
    await Unit.deleteMany({});
    await Session.deleteMany({});

    // Create and save documents
    for (const classData of sampleData) {
      // Create sessions
      for (const unitData of classData.units) {
        const sessionDocs = await Session.insertMany(unitData.sessions);
        unitData.sessions = sessionDocs.map(session => session._id);
      }

      // Create units
      const unitDocs = await Unit.insertMany(classData.units);
      classData.units = unitDocs.map(unit => unit._id);

      // Create and save classes
      const createdClass = await Class.create({
        ...classData,
        units: classData.units
      });

      console.log(`Created class: ${createdClass.name}`);
    }

    console.log('Database seeding complete!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close(); // Close the connection after seeding
  }
};

seedDatabase();
