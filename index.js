// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse JSON bodies

// In-memory storage
let books = [];
let nextId = 1;

// Root
app.get('/', (req, res) => {
  res.send('Books API is running. Use /books endpoints.');
});

/**
 * GET /books
 * Return all books
 */
app.get('/books', (req, res) => {
  res.json(books);
});

/**
 * GET /books/:id
 * Return one book by id
 */
app.get('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

/**
 * POST /books
 * Create a new book
 * Body: { title, author, year?, isbn? }
 */
app.post('/books', (req, res) => {
  const { title, author, year, isbn } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }
  const book = { id: nextId++, title, author, year: year || null, isbn: isbn || null };
  books.push(book);
  res.status(201).json(book);
});

/**
 * PUT /books/:id
 * Update an existing book (partial update supported)
 * Body: { title?, author?, year?, isbn? }
 */
app.put('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Book not found' });

  // Update only provided fields
  const { title, author, year, isbn } = req.body;
  if (title !== undefined) books[idx].title = title;
  if (author !== undefined) books[idx].author = author;
  if (year !== undefined) books[idx].year = year;
  if (isbn !== undefined) books[idx].isbn = isbn;

  res.json(books[idx]);
});

/**
 * DELETE /books/:id
 * Delete a book
 */
app.delete('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Book not found' });

  books.splice(idx, 1);
  // 204 No Content is standard for successful delete with no body
  res.sendStatus(204);
});

/* Simple error handler (optional) */
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`Books API listening at http://localhost:${PORT}`);
});
