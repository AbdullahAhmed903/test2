import { Schema, model } from "mongoose";

const hodliSchema = new Schema(
  {
    name: String,
    base_unit: String,
    quote_unit: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
  },
  { timestamps: true }
);
const hodliModel = model("Hodli", hodliSchema);
export default hodliModel;
