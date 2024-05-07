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
    },
  ],
  upiNo: [
    {
      type: Number,
    },
  ],
  bankDetails: {
    bankAccountNumber: {
      type: Number,
    },
    bankIFSCCode: {
      type: String,
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