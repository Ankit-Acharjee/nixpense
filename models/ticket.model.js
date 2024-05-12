import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  borrowerDetails: {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    emailID: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        "Please provide a valid email",
      ],
    },
    phoneNo: {
      type: String,
      required: [true, "Phone number is required"],
      match: [
        /^(\+\d{1,3}[- ]?)?[6789]\d{9}$/,
        "Please provide a valid phone number",
      ],
    },
  },
  lenderDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  borrowedDate: {
    type: Date,
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
    min: [1, "Loan amount must be at least 1"],
  },
  paymentDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  reminder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reminder",
    required: true,
  },
});

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
