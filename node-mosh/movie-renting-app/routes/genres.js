const express = require('express');
const router = express.Router();
const Joi = require('joi');

const genres = [
  {
    id: 1,
    name: 'First one'
  },
  {
    id: 2,
    name: 'Second one'
  },
  {
    id: 3,
    name: 'Third one'
  }
];

router.get('/', (req, res) => res.send(genres));

router.post('/', (req, res) => {

  const { error } = validateCourse(req.body);

  if(error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const course = {
    id: genres.length + 1,
    name: req.body.name
  };
  genres.push(course);

  res.send(genres[genres.length - 1])
});

router.put('/:id', (req, res) => {
  
  const course = genres.find(cource => cource.id === parseInt(req.params.id));
  if(!course) {
    res.status(404).send('Resource not found');
    return;
  }

  const { error } = validateCourse(req.body);

  if(error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  course.name = req.body.name;
  res.send(course);
});

router.get('/:id', (req, res) => {
  const course = genres.find(cource => cource.id === parseInt(req.params.id));
  if(!course) {
    res.status(404).send('Resource not found');
    return;
  }

  res.send(course);
});

router.delete('/:id', (req, res) => {
  const course = genres.find(cource => cource.id === parseInt(req.params.id));
  if(!course) {
    res.status(404).send('Resource not found');
    return;
  }

  const index = genres.indexOf(course);
  genres.splice(index, 1);
  res.send(course);
});

function validateCourse(course) {
  const genreschema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course, genreschema);

}

module.exports = router;