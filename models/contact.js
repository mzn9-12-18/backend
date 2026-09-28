import mongoose from "mongoose";

const contactoSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  email: String
});

const Contact = mongoose.model("Contact", contactoSchema);

export default Contact;