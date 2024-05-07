import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  borrowerDetails: {
    name: {
      type: String,
      required: true,
    },
    emailID: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
  },
  lenderDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  paymentDetails:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },
  isPaid:{
    type: Boolean,
    required: true,
    default: false,
  },
  reminder:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reminder",
    required: true,
  }
  
});

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)

export default Ticket;