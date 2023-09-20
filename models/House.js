import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    listing_id: {
      type: Number,
      required: true,
    },
    construction_year: {
      type: String,
    },
    floor: {
      type: String,
    },
    bathrooms: {
      type: String,
    },
    bedrooms: {
      type: String,
    },
    kitchens: {
      type: String,
    },
    living_rooms: {
      type: String,
    },
    wc: {
      type: String,
    },
    list_type: {
      type: String,
    },
    price: {
      type: String,
    },
    property_category: {
      type: String,
    },
    property_subcategory: {
      type: String,
    },
    renovation_year: {
      type: String,
    },
    size: {
      type: String,
    },
    street_name: {
      type: String,
    },
    suburb: {
      type: String,
    },
    media: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);