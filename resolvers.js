const Book = require("./models/book");
const Author = require("./models/author");
const Publisher = require("./models/publisher");
const { Schema } = require("mongoose");

const resolvers = {
  Query: {
    //Libros
    getAllBooks: async () => {
      const books = await Book.find();
      return books;
    },
    getBook: async (_, { id }) => {
      const book = await Book.findById(id);
      return book;
    },
    //Autores
    getAllAuthors: async () => {
      const authors = await Author.find();
      return authors;
    },
    getAuthor: async (_, { id }) => {
      const author = await Author.findById(id);
      return author;
    },
    //Publisher
    getAllPublishers: async () => {
      const publishers = await Publisher.find();
      return publishers;
    },
    getPublisher: async (_, { id }) => {
      const publisher = await Publisher.findById(id);
      return publisher;
    },
  },
  Mutation: {
    //Book
    createBook: async (_, args) => {
      const newBook = new Book(args.book);
      await newBook.save();
      return newBook;
    },
    updateBook: async (_, { id, book }) => {
      const bookUpdated = await Book.findByIdAndUpdate(
        id,
        {
          $set: book,
        },
        { new: true }
      );
      return bookUpdated;
    },
    //Author
    createAuthor: async (_, args) => {
      const { firstName, lastName, country } = args.author;
      const newAuthor = new Author({
        firstName,
        lastName,
        country,
      });
      await newAuthor.save();
      return newAuthor;
    },
    updateAuthor: async (_, { id, author }) => {
      const authorUpdated = await Author.findByIdAndUpdate(
        id,
        {
          $set: author,
        },
        {
          new: true,
        }
      );
      return authorUpdated;
    },
    //Publisher
    createPublisher: async (_, args) => {
      const newPublisher = new Publisher(args.publisher);
      await newPublisher.save();
      return newPublisher;
    },
    updatePublisher: async (_, { id, publisher }) => {
      const publisherUpdated = await Publisher.findByIdAndUpdate(
        id,
        {
          $set: publisher,
        },
        {
          new: true,
        }
      );
      return publisherUpdated;
    },
  },
};

module.exports = { resolvers };
