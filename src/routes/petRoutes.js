const express = require('express');
const petController = require('../controllers/petController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       required:
 *         - name
 *         - species
 *         - age
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the pet
 *         name:
 *           type: string
 *           description: The name of the pet
 *         species:
 *           type: string
 *           description: The species of the pet
 *         age:
 *           type: number
 *           description: The age of the pet
 *         adopted:
 *           type: boolean
 *           description: The adoption status of the pet
 *       example:
 *         name: Bella
 *         species: Dog
 *         age: 3
 *         adopted: false
 */

/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: The pets managing API
 */

/**
 * @swagger
 * /api/pets:
 *   post:
 *     summary: Create a new pet
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       201:
 *         description: The pet was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       400:
 *         description: Bad request
 */
router.post('/pets', petController.createPet);

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Returns the list of all the pets
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: The list of the pets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 */
router.get('/pets', petController.getPets);

/**
 * @swagger
 * /api/pets/{id}:
 *   put:
 *     summary: Update the pet by the id
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       200:
 *         description: The pet was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       404:
 *         description: The pet was not found
 *       400:
 *         description: Bad request
 */
router.put('/pets/:id', petController.updatePet);

/**
 * @swagger
 * /api/pets/{id}:
 *   delete:
 *     summary: Remove the pet by id
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet id
 *     responses:
 *       200:
 *         description: The pet was deleted
 *       404:
 *         description: The pet was not found
 */
router.delete('/pets/:id', petController.deletePet);

module.exports = router;