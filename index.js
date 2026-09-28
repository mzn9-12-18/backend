import express from 'express';
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from  "./config/db.js";
const port = 3000
const app = express();

app.use(express.json());

app.use("/contacts", contactRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenidos al mundo Backend🚀!')
})

app.post('/', (req, res) => {
  res.send('nuevo registro creado!')
})

app.put('/id', (req, res) => {
  res.send('Metodo PUT!')
})

app.delete('/id', (req, res) => {
  res.send('Metodo DELETE!')
})

connectDB();

app.listen(port, () => {
  console.log(`Server Online en puerto: ${port}`)
})