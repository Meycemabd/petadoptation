const Adopter = require('../models/adopter');

exports.createAdopter = async (req, res) => {
    const adopter = new Adopter(req.body);
    try {
        await adopter.save();
        res.status(201).send(adopter);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAdopters = async (req, res) => {
    try {
        const adopters = await Adopter.find();
        res.status(200).send(adopters);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateAdopter = async (req, res) => {
    try {
        const adopter = await Adopter.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!adopter) {
            return res.status(404).send();
        }
        res.status(200).send(adopter);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteAdopter = async (req, res) => {
    try {
        const adopter = await Adopter.findByIdAndDelete(req.params.id);
        if (!adopter) {
            return res.status(404).send();
        }
        res.status(200).send(adopter);
    } catch (error) {
        res.status(400).send(error);
    }
};