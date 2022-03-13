const { gql } = require("apollo-server-express");

const typeDefs = gql`
  #Inicio:: Definición de tipos
  type Book {
    id: ID
    title: String
    isbn: String
    synopsis: String
    genres: String
    publicationYear: String
    authors: [Author!]
    publisher: Publisher
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    country: String
    books: [Book!]
  }

  type Publisher {
    id: ID
    name: String
    foundationYear: String
    books: [Book!]
  }
  #Fin::Definición de tipos

  #Inicio:: Etructura de entras
  input BookInput { #Libro
    title: String
    isbn: String
    synopsis: String
    genres: String
    publicationYear: String
    authors: [String]
    publisher: String
  }

  input AuthorInput { #Autor
    firstName: String
    lastName: String
    country: String
    books: [String]
  }

  input PublisherInput {
    name: String
    foundationYear: String
    books: [String]
  }
  #Fin:: Etructura de entras

  #Inicio::Consultas
  type Query {
    #Operaciones de los libros
    getAllBooks: [Book]
    getBook(id: ID): Book
    #Operaciones de los autores
    getAllAuthors: [Author]
    getAuthor(id: ID): Author
    #Operaciones de las editoriales
    getAllPublishers: [Publisher]
    getPublisher(id: ID): Publisher
  }
  #Fin::Consultas

  #Inicio:: Escritura
  type Mutation {
    #Operaciones de los libros
    createBook(book: BookInput): Book
    updateBook(id: ID!, book: BookInput): Book
    #Operaciones de los autores
    createAuthor(author: AuthorInput): Author
    updateAuthor(id: ID, author: AuthorInput): Author
    #Operaciones de las editoriales
    createPublisher(publisher: PublisherInput): Publisher
    updatePublisher(id: ID, publisher: PublisherInput): Publisher
  }
  #Fin:: Escritura
`;

module.exports = { typeDefs };
