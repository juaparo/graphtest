const mongoose = require("mongoose");
const author = require("./models/author");
const book = require("./models/book");
const publisher = require("./models/publisher");

mongoose.connect("mongodb://localhost/books", {
  useNewUrlParser: true,
});

const createAuthors = () => {
  const newAuthors = author.insertMany([
    {
      firstName: "Gabriel",
      lastName: "García",
      country: "Colombia",
    },
    {
      firstName: "Candelario",
      lastName: "Obeso",
      country: "Colombia",
    },
    {
      firstName: "Rafael",
      lastName: "Pombo",
      country: "Colombia",
    },
    {
      firstName: "Eustasio",
      lastName: "Rivera",
      country: "Colombia",
    },
    {
      firstName: "Jorge",
      lastName: "Isaacs",
      country: "Colombia",
    },
    {
      firstName: "German",
      lastName: "Castro",
      country: "Colombia",
    },
    {
      firstName: "Porfirio",
      lastName: "Barba Jacob",
      country: "Colombia",
    },
  ]);

  if (newAuthors) console.log("Authors saved successfully!");
};

const createPublishers = () => {
  const newPublishers = publisher.insertMany([
    {
      name: "Alianza Distribuidora de Colombia",
      foundationYear: "2004",
    },
    {
      name: "Babel Libros",
      foundationYear: "2012",
    },
    {
      name: "Carvajal Ediciones",
      foundationYear: "1940",
    },
    {
      name: "Cooperativa Editorial Magisterio",
      foundationYear: "2012",
    },
    {
      name: "Ediciones Fondo de Cultura Económica",
      foundationYear: "1990",
    },
    {
      name: "Ediciones SM",
      foundationYear: "2002",
    },
    {
      name: "Editorial Gato Malo",
      foundationYear: "1996",
    },
    {
      name: "Editorial Planeta",
      foundationYear: "1980",
    },
    {
      name: "Educar Editores",
      foundationYear: "1996",
    },
    {
      name: "Grupo Penta",
      foundationYear: "1998",
    },
  ]);

  if (newPublishers) console.log("Publishers saved successfully!");
};

const createBooks = () => {
  const newBooks = book.insertMany([
    {
      title: "Crónica de una muerte anunciada ",
      isbn: "978-84-9759-243-7",
      synopsis: "El día en que lo iban a matar, Santiago Nasar se levantó a las 5.30 de la mañana para esperar el buque en que llegaba el obispo.",
      genres: "Ficción, Fantasía",
      publicationYear: "1967",
    },
    {
      title: "El amor en los tiempos del cólera ",
      isbn: "978-84-9759-245-1",
      synopsis: "García Márquez traza la historia de un amor que no ha sido correspondido por medio siglo. Aunque nunca parece estar propiamente contenido, el amor fluye a través de la novela de mil maneras: alegre, melancólico, enriquecedor, siempre sorprendente.",
      genres: "amor,ficción,",
      publicationYear: "1985",
    },
    {
      title: "LA HORA DE TINIEBLAS Y OTROS ESCRITOS",
      isbn: "978-958-5495-16-6",
      synopsis: "",
      genres: "cuentos",
      publicationYear: "1854",
    },
    {
      title: "Nuestra guerra ajena",
      isbn: "978-958-424-17-95",
      synopsis: "Castro Caycedo relata y explica cómo llegó el narcotráfico al país hace 40 años, de la mano del Ejército de Estados Unidos",
      genres: "historia",
      publicationYear: "2014",
    },
    {
      title: "Mi alma se la dejo al diablo",
      isbn: "9789586020817",
      synopsis: "Relatos, Reportajes directos, documentales o testimoniales, como quiere llamárseles, menos novelas o 'Periodismo novelado' por que este último no existe.",
      genres: "fantasía",
      publicationYear: "1982",
    },
    {
      title: "La tierra de Córdoba",
      isbn: "9788416594689",
      synopsis: "Poema dedicado por el escritor colombiano Jorge Isaacs a Antioquia, a la raza antioqueña, a las gentes de la 'montaña' entre quienes quiso que se le enterrara, según se lo expresó en carta a su amigo Juan Clímaco Arbeláez",
      genres: "historia",
      publicationYear: "1892",
    }
  ]);

  if (newBooks) console.log("Books saved successfully!");
};

createAuthors();
createPublishers();
createBooks();
