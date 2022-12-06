const createError = require('http-errors');
const mongoose = require('mongoose');

const People = require('../Models/People.model');

module.exports = {
  getAllPeoples: async (req, res, next) => {
    try {
      const results = await People.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewPeople: async (req, res, next) => {
    try {
      const people = new People(req.body);
      const result = await people.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  findPeopleById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const people = await People.findById(id);
      if (!people) {
        throw createError(404, 'Person does not exist.');
      }
      res.send(people);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid person id'));
        return;
      }
      next(error);
    }
  },

  updateAPeople: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await People.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Person does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Person Id'));
      }

      next(error);
    }
  },

  deleteAPeople: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await People.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Person does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Person id'));
        return;
      }
      next(error);
    }
  }
};
