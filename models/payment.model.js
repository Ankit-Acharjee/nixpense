import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  upiID: [
    {
      type: String,
      required: false,
      unique: [true, "UPI ID already exists"],
      trim: true,
      lowercase: [true, "UPI ID must be in lowercase"],
    },
  ],
  upiNo: [
    {
      type: String,
      required: false,
      unique: [true, "UPI number already exists"],
    },
  ],
  bankDetails: {
    bankAccountNumber: {
      type: Number,
      required: false,
      unique: [true, "Bank account number already exists"],
    },
    bankIFSCCode: {
      type: String,
      required: false,
      unique: [true, "IFSC code already exists"],
    },
  },
});

paymentSchema.pre("validate", function (next) {
  if (!this.upiID && !this.upiNo && !this.bankDetails) {
    next(new Error("At least one payment method must be provided."));
  } else {
    next();
  }
});

const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

  export default Payment;