const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

 router.get('/:slug', controller.getBySlug)
 router.get('/admin/:id', controller.getById)
 router.get('/tags/:tag', controller.getByTag)
 router.get('/', controller.get);
 router.post('/', controller.post);
 router.put('/:id', controller.put);
 router.delete('/:id', controller.delete);

module.exports = router;
