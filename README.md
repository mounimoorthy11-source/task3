# 📚 Books REST API (Node.js + Express)

A simple REST API to manage a list of books.  
- **In-memory storage** (no database)  
- CRUD operations: **Create, Read, Update, Delete**  
- Perfect for learning REST API basics with Node.js & Express.  

---

## 🚀 Features
- `GET /books` → List all books
- `GET /books/:id` → Get book by ID
- `POST /books` → Add a new book
- `PUT /books/:id` → Update an existing book
- `DELETE /books/:id` → Remove a book

---

## 🛠 Tools Used
- [Node.js](https://nodejs.org/) (JavaScript runtime)
- [Express](https://expressjs.com/) (web framework)
- [Postman](https://www.postman.com/) (API testing tool)
- VS Code (optional but recommended)

---

## 📂 Project Setup

### 1️⃣ Clone or Download

git clone <repo_url>
cd books-api
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Run the API
bash
Copy
Edit
# Development mode (auto-restart on changes)
npm run dev

# Production mode
npm start
Server will run at:

arduino
Copy
Edit
http://localhost:3000
📌 API Endpoints
1. List all books
GET /books

bash
Copy
Edit
curl http://localhost:3000/books
2. Get a book by ID
GET /books/:id

bash
Copy
Edit
curl http://localhost:3000/books/1
3. Add a new book
POST /books

bash
Copy
Edit
curl -X POST http://localhost:3000/books \
-H "Content-Type: application/json" \
-d '{"title":"1984","author":"George Orwell","year":1949}'
4. Update an existing book
PUT /books/:id

bash
Copy
Edit
curl -X PUT http://localhost:3000/books/1 \
-H "Content-Type: application/json" \
-d '{"title":"Nineteen Eighty-Four"}'
5. Delete a book
DELETE /books/:id

bash
Copy
Edit
curl -X DELETE http://localhost:3000/books/1
🧪 Testing with Postman
Open Postman

Create a new request

Choose the HTTP method (GET, POST, PUT, or DELETE)

Enter the endpoint URL (e.g., http://localhost:3000/books)

For POST/PUT, go to Body → raw → JSON and enter the book details

Click Send

📄 Notes
Data is stored in memory — it resets when the server restarts.

For persistence, you can:

Save to a JSON file (using fs)

Use a small database like SQLite, lowdb, or MongoDB.

To allow browser-based requests from other domains, add:

bash
Copy
Edit
npm install cors
and in server.js:

js
Copy
Edit
const cors = require('cors');
app.use(cors());
🧑‍💻 Author
Built as a simple Node.js + Express learning project.

yaml
Copy
Edit

---

Do you want me to **update this README** so it also includes the **full `server.js` 

output
<img width="1478" height="833" alt="Screenshot 2025-08-08 104239" src="https://github.com/user-attachments/assets/36a38d27-bd64-4ae3-a753-560ac40b5580" />

