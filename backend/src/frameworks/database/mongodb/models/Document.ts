import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  appointmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  fileData: {
    type: String,
    required: true,
  },
});

documentSchema.index({ appointmentId: 1, fileName: 1 }, { unique: true });

export default mongoose.model("Document", documentSchema);
