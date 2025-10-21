import { Router } from "express";

const router = Router();

let books = [
  { id: "1001", title: "El Señor de los Anillos", author: "J.R.R. Tolkien" },
  { id: "2002", title: "It (Eso)", author: "Stephen King" },
  { id: "3003", title: "Los tres mosqueteros", author: "Alejandro Dumas" },
];

// rutas
router.get("/", (req, res) => {
  try {
    books.length > 0
      ? res.status(200).json({ message: "Listado de libros", payload: books })
      : res.status(400).json({ message: "No hay libros para mostrar" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
});
const ID_REGEX = /^[0-9]{4,6}$/;

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   if (!ID_REGEX.test(id)) {
//     return res.status(400).json({ error: "Formato de id invalido" });
//   }
//   const book = books.find((b) => b.id === id);
//   // validar si no existe
//   if (!book) return res.status(404).json({ error: "Libro no encontrado" });
//   res.status(200).json({ message: `Libro con id: ${id}`, payload: book });
// });
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   if (!ID_REGEX.test(id)) {
//     return res.status(400).json({ error: "Formato de id invalido" });
//   }
//   const book = books.find((b) => b.id === id);
//   // validar si no existe
//   //   if (!book) return res.status(404).json({ error: "Libro no encontrado" });
//   //   res.status(200).json({ message: `Libro con id: ${id}`, payload: book });
// });
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   if (!ID_REGEX.test(id)) {
//     return res.status(400).json({ error: "Formato de id invalido" });
//   }
//   const book = books.find((b) => b.id === id);
//   // validar si no existe
//   //   if (!book) return res.status(404).json({ error: "Libro no encontrado" });
//   //   res.status(200).json({ message: `Libro con id: ${id}`, payload: book });
// });

// PARAM
router.param("id", (req, res, next, id) => {
  console.log(id);
  if (!ID_REGEX.test(id)) {
    return res.status(400).json({ error: "Formato de id invalido" });
  }
  const book = books.find((b) => b.id === id);

  if (!book) return res.status(404).json({ error: "Libro no encontrado" });
  req.book = book;
  next();
});

// rutas concatenadas
router
  .route("/:id")
  .get((req, res) => {
    res.status(200).json({ message: "Libro encontrado", payload: req.book });
  })
  .put((req, res) => {
    const { title, author } = req.body;
    // validamos recibir los datos

    const bookIndex = books.findIndex((b) => b.id === req.book.id);

    const updateBook = { ...req.book, title, author };
    books[bookIndex] = updateBook;
    res.status(200).json({ message: "Libro actualizado", payload: updateBook });
  });
// ESTO NO FUNCIONA EN EXPRESS 5
// router.get('*' ,(req, res) => {
//   res.status(404).send("Recurso no encontrado");
// });

export default router;
