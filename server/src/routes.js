const express = require('express');
const multer = require('multer');
const uploadsConfig = require('./config/upload');
const PostConctroller = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const DeleteController = require('./controllers/DeleteController');

const routes = new express.Router();
const upload = multer(uploadsConfig);

routes.post('/posts', upload.single('image'), PostConctroller.store);
routes.get('/posts', PostConctroller.index);

routes.post('/posts/:id', LikeController.store);

routes.delete('/posts/:id', DeleteController.delete);
module.exports = routes;
