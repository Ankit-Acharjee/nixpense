import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
    required: true,
  },
  nextRemainderDate: {
    type: Date,
    required: true,
  },
  frequency: {
    type: String,
    enum: ["daily", "2 days", "3 days", "weekly"],
    required: true,
  },
  method: {
    type: String,
    enum: ["email", "sms"],
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

reminderSchema.index({ ticket: 1, method: 1 }, { unique: true });

const Reminder = mongoose.models.Reminder || mongoose.model("Reminder", reminderSchema);

export default Reminder;