const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const Genre = require('../models/Genre');
require('dotenv').config();

const seedMovies = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding...');

    // Clear existing data
    await Movie.deleteMany({});
    await Genre.deleteMany({});
    console.log('Cleared existing data');

    // Create genres first
    const genres = await Genre.insertMany([
      { name: 'Action', description: 'High-octane adventures and thrilling sequences' },
      { name: 'Drama', description: 'Emotional stories exploring human experiences' },
      { name: 'Comedy', description: 'Humorous films meant to entertain and make you laugh' },
      { name: 'Sci-Fi', description: 'Science fiction and futuristic storytelling' },
      { name: 'Horror', description: 'Scary and suspenseful films' },
      { name: 'Romance', description: 'Love stories and romantic adventures' },
      { name: 'Thriller', description: 'Suspenseful and edge-of-your-seat experiences' },
      { name: 'Animation', description: 'Animated films for all ages' },
    ]);
    console.log(`✅ ${genres.length} genres created`);

    // Create movies with working poster URLs
    const movies = await Movie.insertMany([
      {
        title: 'The Matrix',
        year: 1999,
        genre: genres.find(g => g.name === 'Sci-Fi')._id,
        director: 'Lana Wachowski, Lilly Wachowski',
        rating: 8.7,
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        posterUrl: '/assets/posters/the-matrix.svg'
      },
      {
        title: 'Inception',
        year: 2010,
        genre: genres.find(g => g.name === 'Sci-Fi')._id,
        director: 'Christopher Nolan',
        rating: 8.8,
        description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
        posterUrl: '/assets/posters/inception.svg'
      },
      {
        title: 'The Shawshank Redemption',
        year: 1994,
        genre: genres.find(g => g.name === 'Drama')._id,
        director: 'Frank Darabont',
        rating: 9.3,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl: '/assets/posters/shawshank-redemption.svg'
      },
      {
        title: 'The Dark Knight',
        year: 2008,
        genre: genres.find(g => g.name === 'Action')._id,
        director: 'Christopher Nolan',
        rating: 9.0,
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
        posterUrl: '/assets/posters/dark-knight.svg'
      },
      {
        title: 'Interstellar',
        year: 2014,
        genre: genres.find(g => g.name === 'Sci-Fi')._id,
        director: 'Christopher Nolan',
        rating: 8.6,
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        posterUrl: '/assets/posters/interstellar.svg'
      },
      {
        title: 'Spirited Away',
        year: 2001,
        genre: genres.find(g => g.name === 'Animation')._id,
        director: 'Hayao Miyazaki',
        rating: 8.6,
        description: 'During her family\'s move to the suburbs, a sullen girl wanders into a world ruled by gods, witches, and spirits.',
        posterUrl: '/assets/posters/spirited-away.svg'
      },
      {
        title: 'Pulp Fiction',
        year: 1994,
        genre: genres.find(g => g.name === 'Drama')._id,
        director: 'Quentin Tarantino',
        rating: 8.9,
        description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        posterUrl: '/assets/posters/pulp-fiction.svg'
      },
      {
        title: 'Forrest Gump',
        year: 1994,
        genre: genres.find(g => g.name === 'Drama')._id,
        director: 'Robert Zemeckis',
        rating: 8.8,
        description: 'The presidencies of Kennedy and Johnson unfold from the perspective of an Alabama man with an IQ of 75.',
        posterUrl: '/assets/posters/forrest-gump.svg'
      },
      {
        title: 'Avatar',
        year: 2009,
        genre: genres.find(g => g.name === 'Sci-Fi')._id,
        director: 'James Cameron',
        rating: 7.8,
        description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
        posterUrl: '/assets/posters/avatar.svg'
      },
      {
        title: 'The Avengers',
        year: 2012,
        genre: genres.find(g => g.name === 'Action')._id,
        director: 'Joss Whedon',
        rating: 8.0,
        description: 'Earth\'s mightiest heroes must come together and learn to fight as a team to save the planet from an alien invasion.',
        posterUrl: '/assets/posters/avengers.svg'
      }
    ]);
    console.log(`✅ ${movies.length} movies created`);

    console.log('✨ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedMovies();
