import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


mongoose.connect("mongodb://localhost:27017/aryan");

const PeopleSchema = new mongoose.Schema({
    name: String,
    age : Number,
})
const Person = mongoose.model('Person',PeopleSchema);
const aryan = new Person({
    name: 'Aryan',
    age: 20,
});
const Vishu = new Person({
    name: 'Vishu',
    age: 20,
});
const Harshad = new Person({
    name: 'Harshad',
    age: 20,
});

// if (aryan === true) {
aryan.save();
Vishu.save();
Harshad.save();
