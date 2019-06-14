const Post = require('../models/Post');

module.exports = {
  async delete(req, res) {
    const post = await Post.findById(req.params.id);

    await post.delete();

    req.io.emit('delete', post);

    return res.json(post);
  }
};
