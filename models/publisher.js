const { Schema, model } = require("mongoose");

const publisherSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  foundationYear: {
    type: Date,
    required: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ]
});

publisherSchema.pre("find", function (next) {
  this.populate("books");
  next();
});
publisherSchema.pre("findOne", function (next) {
  this.populate("books");
  next();
});

module.exports = model("Publisher", publisherSchema);
