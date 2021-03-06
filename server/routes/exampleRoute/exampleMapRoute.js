const route = require('express').Router();

// destructure the schema you need from index.js
const {ExampleSchema} = require('../../../database');


//add example to exampleSchema collection
route.post('/', (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  ExampleSchema.create({name, age})
    .then(example => {
      res.session.user = 'authenticated';
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      res.status(400).send('Error');
    })
});

module.exports = route;