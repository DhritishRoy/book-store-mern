import Contact from "../model/contact.model.js";

export const contactUs = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    //const contact = await Contact.findOne({ email });
    const createUser = new Contact({
      fullname: fullname,
      email: email,
      message: message,
    });
    await createUser.save();
    res.status(200).json({
      message: "Contact Feedback Received",
      contact: {
        _id: createUser._id,
        fullname: createUser.fullname,
        email: createUser.email,
        message: createUser.message,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
