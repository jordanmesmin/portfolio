const express = require('express');
const app = express();
const path = require('path');
const { add, subtract, multiply, divide } = require('./math.js');

// Définir le dossier des vues et le moteur de templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware pour parser les données POST
app.use(express.urlencoded({ extended: true }));

// Route pour afficher la calculatrice
app.get('/', (req, res) => {
    res.render('accueil', { result: null });
});

app.get('/a propos', (req, res) => {
  res.render('aPropos', { result: null });
});

app.get('/contact', (req, res) => {
  res.render('contact', { result: null });
});

// Route pour traiter le formulaire de calcul
app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  switch (operation) {
      case 'add':
          result = add();
          break;
      case 'subtract':
          result = subtract();
          break;
      case 'multiply':
          result = multiply();
          break;
      case 'divide':
          result = n1 / n2;
          break;
      default:
          result = 'Invalid operation';
  }

  res.render('accueil', { result });
});

app.listen(5000);
console.log('Server is listening on port 8080');