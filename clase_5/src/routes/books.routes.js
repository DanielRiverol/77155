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

export default router;
