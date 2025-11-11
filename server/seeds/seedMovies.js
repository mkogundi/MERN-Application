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

    // Create movies
    const movies = await Movie.insertMany([
      {
        title: 'The Matrix',
        year: 1999,
        genre: genres.find(g => g.name === 'Sci-Fi')._id,
        director: 'Lana Wachowski, Lilly Wachowski',
        rating: 8.7,
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        posterUrl: 'https://via.placeholder.com/300x450?text=The+Matrix'
      },
      {
        title: 'Inception',
        year: 2010,
        genre: genres.find(g => g.name === 'Sci-Fi')._id,
        director: 'Christopher Nolan',
        rating: 8.8,
        description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Inception'
      },
      {
        title: 'The Avengers',
        year: 2012,
        genre: genres.find(g => g.name === 'Action')._id,
        director: 'Joss Whedon',
        rating: 8.0,
        description: 'Earth\'s mightiest heroes must come together and learn to fight as a team to save the planet from an alien invasion.',
        posterUrl: 'https://via.placeholder.com/300x450?text=The+Avengers'
      },
      {
        title: 'The Shawshank Redemption',
        year: 1994,
        genre: genres.find(g => g.name === 'Drama')._id,
        director: 'Frank Darabont',
        rating: 9.3,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Shawshank+Redemption'
      },
      {
        title: 'Forrest Gump',
        year: 1994,
        genre: genres.find(g => g.name === 'Drama')._id,
        director: 'Robert Zemeckis',
        rating: 8.8,
        description: 'The presidencies of Kennedy and Johnson unfold from the perspective of an Alabama man with an IQ of 75.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Forrest+Gump'
      },
      {
        title: 'The Pursuit of Happyness',
        year: 2006,
        genre: genres.find(g => g.name === 'Drama')._id,
        director: 'Gabriele Muccino',
        rating: 8.2,
        description: 'A struggling salesman takes custody of his son as he\'s poised to begin a life-changing professional endeavor.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Pursuit+of+Happyness'
      },
      {
        title: 'Superbad',
        year: 2007,
        genre: genres.find(g => g.name === 'Comedy')._id,
        director: 'Greg Mottola',
        rating: 7.6,
        description: 'Two co-dependent high schoolers are forced to deal with separation when their plan to stage a booze-soaked party goes awry.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Superbad'
      },
      {
        title: 'The Grand Budapest Hotel',
        year: 2014,
        genre: genres.find(g => g.name === 'Comedy')._id,
        director: 'Wes Anderson',
        rating: 8.1,
        description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy under an exceptional concierge.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Grand+Budapest+Hotel'
      },
      {
        title: 'The Ring',
        year: 2002,
        genre: genres.find(g => g.name === 'Horror')._id,
        director: 'Gore Verbinski',
        rating: 7.1,
        description: 'A journalist must investigate a mysterious videotape which seems to cause the death of anyone in a week of viewing it.',
        posterUrl: 'https://via.placeholder.com/300x450?text=The+Ring'
      },
      {
        title: 'A Quiet Place',
        year: 2018,
        genre: genres.find(g => g.name === 'Horror')._id,
        director: 'John Krasinski',
        rating: 7.5,
        description: 'In a world where creatures hunt by sound, a family must survive in silence.',
        posterUrl: 'https://via.placeholder.com/300x450?text=A+Quiet+Place'
      },
      {
        title: 'Titanic',
        year: 1997,
        genre: genres.find(g => g.name === 'Romance')._id,
        director: 'James Cameron',
        rating: 7.8,
        description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Titanic'
      },
      {
        title: 'The Notebook',
        year: 2004,
        genre: genres.find(g => g.name === 'Romance')._id,
        director: 'Nick Cassavetes',
        rating: 7.8,
        description: 'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.',
        posterUrl: 'https://via.placeholder.com/300x450?text=The+Notebook'
      },
      {
        title: 'Interstellar',
        year: 2014,
        genre: genres.find(g => g.name === 'Sci-Fi')._id,
        director: 'Christopher Nolan',
        rating: 8.6,
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Interstellar'
      },
      {
        title: 'Spirited Away',
        year: 2001,
        genre: genres.find(g => g.name === 'Animation')._id,
        director: 'Hayao Miyazaki',
        rating: 8.6,
        description: 'During her family\'s move to the suburbs, a sullen girl wanders into a world ruled by gods, witches, and spirits.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Spirited+Away'
      },
      {
        title: 'Toy Story',
        year: 1995,
        genre: genres.find(g => g.name === 'Animation')._id,
        director: 'John Lasseter',
        rating: 8.3,
        description: 'A cowboy doll is profoundly threatened and jealous when a new spaceman toy supplants him as top toy in a bedroom.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Toy+Story'
      },
      {
        title: 'The Dark Knight',
        year: 2008,
        genre: genres.find(g => g.name === 'Action')._id,
        director: 'Christopher Nolan',
        rating: 9.0,
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
        posterUrl: 'https://via.placeholder.com/300x450?text=The+Dark+Knight'
      },
      {
        title: 'Jaws',
        year: 1975,
        genre: genres.find(g => g.name === 'Thriller')._id,
        director: 'Steven Spielberg',
        rating: 8.0,
        description: 'When a giant man-eating great white shark arrives on the shores of a New England beach town, the local police chief has to protect the townspeople.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Jaws'
      },
      {
        title: 'Se7en',
        year: 1995,
        genre: genres.find(g => g.name === 'Thriller')._id,
        director: 'David Fincher',
        rating: 8.6,
        description: 'Two detectives hunt a serial killer who uses the seven deadly sins as his motives.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Se7en'
      },
      {
        title: 'Your Name',
        year: 2016,
        genre: genres.find(g => g.name === 'Animation')._id,
        director: 'Makoto Shinkai',
        rating: 8.4,
        description: 'Two strangers find themselves mysteriously swapping bodies and must uncover the reason behind the phenomenon to return to their original bodies.',
        posterUrl: 'https://via.placeholder.com/300x450?text=Your+Name'
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