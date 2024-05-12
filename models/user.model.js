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
      required: [true, "Name is required"],
      trim: true,
      min: [3, "Name must be at least 3 characters long"],
      max: [50, "Name must be at most 50 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
      trim: true,
      lowercase: [true, "Email must be in lowercase"],
      match: [
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        "Please provide a valid email",
      ],
    },
    phoneNo: {
      type: String,
      required: true,
      unique: [true, "Phone number already exists"],
      trim: true,
        match: [
          /^(\+\d{1,3}[- ]?)?[6789]\d{9}$/,
          "Please provide a valid phone number",
        ],
    },
    paymentDetails: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
        required: true,
      },
    ],
    ticketDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: false,
      
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
