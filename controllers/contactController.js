import Contact from "../models/contact.js";

export const getContacts = async (req, res) => {
  try {
    const contactos = await Contact.find();
    res.status(200).json(contactos);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener contactos",
      error: error.message
    });
  }
};

export const createContact = async (req, res) => {
  try {
    const contacto = await Contact.create(req.body);

    res.status(201).json({
      mensaje: "Contacto creado correctamente",
      contacto
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear contacto",
      error: error.message
    });
  }
};

export const updateContact = async (req, res) => {
  try {
    const contacto = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!contacto) {
      return res.status(404).json({
        mensaje: "Contacto no encontrado"
      });
    }

    res.status(200).json({
      mensaje: "Contacto actualizado correctamente",
      contacto
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar contacto",
      error: error.message
    });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contacto = await Contact.findByIdAndDelete(req.params.id);

    if (!contacto) {
      return res.status(404).json({
        mensaje: "Contacto no encontrado"
      });
    }

    res.status(200).json({
      mensaje: "Contacto eliminado correctamente"
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar contacto",
      error: error.message
    });
  }
};