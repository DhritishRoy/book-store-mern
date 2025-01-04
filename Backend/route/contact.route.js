import express from "express";
import { contactUs } from "../controller/contact.controller.js";

const router = express.Router();
router.post("/contactus", contactUs);

export default router;
