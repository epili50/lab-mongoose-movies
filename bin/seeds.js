

const Celebrity = require("../models/celebrity.model");
const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_URI)
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const seedsCelebrities =  [
    {
      name: "Dwayne Johnson",
      occupation: "Actor, Producer, Former Professional Wrestler",
      catchPhrase: "Just bring it!",
    },
    {
      name: "Taylor Swift",
      occupation: "Singer-Songwriter",
      catchPhrase: "This is a new year. A new beginning. And things will change.",
    },
    {
      name: "Elon Musk",
      occupation: "Entrepreneur, CEO of SpaceX and Tesla",
      catchPhrase:
        "When something is important enough, you do it even if the odds are not in your favor.",
    },
  ];

// Gestionamos la asincronía mediante una función de callback que se ejecuta cuando ha insertado (o no) los documentos en la base de datos
Celebrity.create(seedsCelebrities, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Documents created successfully. ", result)
    }
});
