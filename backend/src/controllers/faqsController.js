import faqsModel from "../models/faqs.js";

//Creo un array de funciones vacias
const faqsController = {};

//SELECT
faqsController.getAllFaqs = async (req, res) => {
  try {
    const faqs = await faqsModel.find();
    res.status(200).json(faqs);
  } catch (error) {
    console.log("error" + error);
    res.status(500).json("Internal server error");
  }
};

//INSERT
faqsController.insertFaqs = async (req, res) => {
  //1- Pedir los datos
  const { question, answer, level, isActive } = req.body;

  try {
    //Validaciones

    //Si hay campos vacios
    if (!question || !answer || !level || !isActive) {
      return res.status(400).json({ message: "Please write all the fields" });
    }

    if (edad < 18 || edad > 100) {
      return res.status(400).json({ message: "Please insert a level aviable" });
    }

    if (question.legth < 4 || answer.legth < 4) {
      return res.status(400).json({ message: "Too short" });
    }

    //Guardamos todo en la base de datos
    const newFaqs = new faqsModel({
      question,
      answer,
      level,
      isActive,
    });

    newFaqs.saves();

    res.status(200).json({ message: "Faq saved" });


  } catch (error) {
    console.log("Este es el error" + error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//UPDATE
faqsController.upateFaqs = async (req, res) => {
  //1-Pido las cosas
  const { question, answer, level, isActive } = req.body;

  try {
    if (level < 1 || level > 10) {
      return res.status(400).json({ message: "Ingrese un valor correcto" });
    }

    if (question.legth < 4 || answer.legth < 4) {
      return res.status(400).json({ message: "Too short" });
    }

    const faqsUpdated = await faqsModel.findByIdAndUpdate(
      req.params.id,
      { question, answer, level, isActive },
      { new: true }
    );

    if (!faqsUpdated) {
      return res.status(400).json({ message: "faqs not found" });
    }

    res.status(200).json({ message: "faqs updated" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "internal server error" });
  }
};

//ELIMINAR
faqsController.deleteFaqs = async (req, res) => {
  try {
    const deletedFaqs = await faqsModel.findByIdAndDelete(req.params.id);

    if (!deletedFaqs) {
      return res.status(400).json({ message: "faq not found" });
    }
-
    res.status(200).json({ message: "faq deleted" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "internal server error" });
  }
};

export default faqsController;
