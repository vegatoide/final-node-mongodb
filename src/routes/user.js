const express = require('express');
const userSchema = require('../models/users.js')
const router = express.Router();

//create user
router.post('/apiusers', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//show all users
router.get('/apiusers', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//show a singular user
router.get('/apiusers/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update user
router.put('/apiusers/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: {name, email, password} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete user
router.delete('/apiusers/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;