const mongoose = require('mongoose');
require('dotenv').config();

console.log('🧪 Testing MongoDB connection...');
console.log('URI (first 50 chars):', process.env.MONGODB_URI?.substring(0, 50) || 'NOT SET');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log('✅ SUCCESS: MongoDB connected!');
  
  // Try to access the database
  mongoose.connection.db.admin().ping((err, result) => {
    if (err) {
      console.error('❌ Ping error:', err);
    } else {
      console.log('✅ Ping successful:', result);
    }
    
    // List databases
    mongoose.connection.db.admin().listDatabases((err, result) => {
      if (err) {
        console.error('❌ List databases error:', err);
      } else {
        console.log('✅ Databases found:', result.databases.map(db => db.name));
      }
      process.exit(0);
    });
  });
})
.catch(err => {
  console.error('❌ FAILED: MongoDB connection error');
  console.error('Error message:', err.message);
  console.error('Error code:', err.code);
  console.error('Full error:', JSON.stringify(err, null, 2));
  process.exit(1);
});
