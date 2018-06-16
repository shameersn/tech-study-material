const express = require('express');
const router = express.Router();
const Joi = require('joi');

const courses = [
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

router.get('/', (req, res) => res.send(courses));

router.post('/', (req, res) => {

  const { error } = validateCourse(req.body);

  if(error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);

  res.send(courses[courses.length - 1])
});

router.put('/:id', (req, res) => {
  
  const course = courses.find(cource => cource.id === parseInt(req.params.id));
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
  const course = courses.find(cource => cource.id === parseInt(req.params.id));
  if(!course) {
    res.status(404).send('Resource not found');
    return;
  }

  res.send(course);
});

router.delete('/:id', (req, res) => {
  const course = courses.find(cource => cource.id === parseInt(req.params.id));
  if(!course) {
    res.status(404).send('Resource not found');
    return;
  }

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

function validateCourse(course) {
  const courseSchema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course, courseSchema);

}

module.exports = router;