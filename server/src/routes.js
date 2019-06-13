const express = require('express');
const multer = require('multer');
const uploadsConfig = require('./config/upload');
const PostConctroller = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadsConfig);

routes.post('/posts', upload.single('image'), PostConctroller.store);
routes.get('/posts', PostConctroller.index);

routes.post('/posts/:id', LikeController.store);
module.exports = routes;
