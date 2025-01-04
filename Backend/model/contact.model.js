import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  fullname: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  message: {
    type: "string",
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
