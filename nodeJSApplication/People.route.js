const express = require('express');
const router = express.Router();

const PeopleController = require('./People.Controller');

//Trae todas las listas de people en la base
router.get('/', PeopleController.getAllPeoples);

//Crea a persona
router.post('/', PeopleController.createNewPeople);

//Trae a person con id
router.get('/:id', PeopleController.findPeopleById);

//Modifica a persona con id
router.patch('/:id', PeopleController.updateAPeople);

//Elimina a persona con id
router.delete('/:id', PeopleController.deleteAPeople);

module.exports = router;
