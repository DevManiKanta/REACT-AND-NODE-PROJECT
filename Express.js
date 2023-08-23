const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let todos = [
  { sno: 1, title: 'Buy milk' },
  { sno: 2, title: 'Walk the dog' },
];

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = { sno: todos.length + 1, title: req.body.text };
  todos.push(newTodo);
  res.send('Todo added successfully');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


