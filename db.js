const { connect } = require("mongoose");

const conncetDb = async () => {
  try {
    await connect("mongodb://localhost/books");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { conncetDb };
