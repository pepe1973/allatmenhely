const express = require('express');
const { getAllCatsBackend } = require('../controllers/catsControllersBackend');

const router = express.Router();

// Összes macska lekérdezése
router.get('/', getAllCatsBackend);
// Egy, speciális macska lekérdezése
// router.get('/:id', );
// Egy macska feltöltése
// router.post('/',);
// Egy, speciális macska frissítése
// router.put('/:id',);
// Egy, speciális macska törlése
// router.delete('/:id',);

module.exports = router;