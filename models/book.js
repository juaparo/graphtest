const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  isbn: {
    type: String,
    trim: true,
    required: true,
  },
  synopsis: {
    type: String,
    trim: true,
  },
  genres: String,
  publicationYear: Date,
  publisher: {
    type: Schema.Types.ObjectId,
    ref: "Publisher",
  },
  authors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
  ],
});

bookSchema.pre("find", function (next) {
  this.populate("authors");
  next();
});
bookSchema.pre("findOne", function (next) {
  this.populate("authors");
  next();
});

bookSchema.pre("find", function (next) {
  this.populate("publisher");
  next();
});
bookSchema.pre("findOne", function (next) {
  this.populate("publisher");
  next();
});

module.exports = model("Book", bookSchema);
