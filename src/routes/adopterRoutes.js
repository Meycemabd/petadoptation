const express = require('express');
const adopterController = require('../controllers/adopterController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Adopter:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the adopter
 *         name:
 *           type: string
 *           description: The name of the adopter
 *         email:
 *           type: string
 *           description: The email of the adopter
 *         phone:
 *           type: string
 *           description: The phone number of the adopter
 *         petsAdopted:
 *           type: array
 *           items:
 *             type: string
 *             description: The IDs of the adopted pets
 *       example:
 *         name: John Doe
 *         email: johndoe@example.com
 *         phone: 123-456-7890
 *         petsAdopted: []
 */

/**
 * @swagger
 * tags:
 *   name: Adopters
 *   description: The adopters managing API
 */

/**
 * @swagger
 * /api/adopters:
 *   post:
 *     summary: Create a new adopter
 *     tags: [Adopters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Adopter'
 *     responses:
 *       201:
 *         description: The adopter was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adopter'
 *       400:
 *         description: Bad request
 */
router.post('/adopters', adopterController.createAdopter);

/**
 * @swagger
 * /api/adopters:
 *   get:
 *     summary: Returns the list of all the adopters
 *     tags: [Adopters]
 *     responses:
 *       200:
 *         description: The list of the adopters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Adopter'
 */
router.get('/adopters', adopterController.getAdopters);

/**
 * @swagger
 * /api/adopters:
 *   get:
 *     summary: Returns the list of all the adopters
 *     tags: [Adopters]
 *     responses:
 *       200:
 *         description: The list of the adopters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Adopter'
 */
router.put('/adopters/:id', adopterController.updateAdopter);

/**
 * @swagger
 * /api/adopters/{id}:
 *   put:
 *     summary: Update the adopter by ID
 *     tags: [Adopters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The adopter ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Adopter'
 *     responses:
 *       200:
 *         description: The adopter was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adopter'
 *       404:
 *         description: Adopter not found
 *       400:
 *         description: Bad request
 */
router.delete('/adopters/:id', adopterController.deleteAdopter);

module.exports = router;

