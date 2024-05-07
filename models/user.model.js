import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkUserID: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
    },
    phoneNo: {
      type: String,
      required: true,
      unique: [true, "Phone number already exists"],
    },
    paymentDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    },
    ticketDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


const User= mongoose.models.User || mongoose.model("User", userSchema);

export default User;
