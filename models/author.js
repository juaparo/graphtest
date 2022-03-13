const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  country: {
    type: String,
    trim: true,
    required: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

authorSchema.pre("find", function (next) {
  this.populate("books");
  next();
});
authorSchema.pre("findOne", function (next) {
  this.populate("books");
  next();
});

module.exports = model("Author", authorSchema);
