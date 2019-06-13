const moongose = require('mongoose');

const PostSchema = new moongose.Schema(
  {
    author: String,
    place: String,
    description: String,
    hastag: String,
    image: String,
    likes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = moongose.model('Post', PostSchema);
