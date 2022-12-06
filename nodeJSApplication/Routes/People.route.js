const express = require('express');
const router = express.Router();

const PeopleController = require('../Controllers/People.Controller');

//Get a list of all Peoples
router.get('/', PeopleController.getAllPeoples);

//Create a new People
router.post('/', PeopleController.createNewPeople);

//Get a People by id
router.get('/:id', PeopleController.findPeopleById);

//Update a People by id
router.patch('/:id', PeopleController.updateAPeople);

//Delete a People by id
router.delete('/:id', PeopleController.deleteAPeople);

module.exports = router;
