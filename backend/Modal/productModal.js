import mongoose  from "mongoose";
const Schema = mongoose.Schema;


const productSchema = new Schema({
    productName: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,  // Optional: Trims whitespace from the beginning and end of the string
    },
    productImage: {
        type: String,
        required: [true, "Product image is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be at least 10 characters long"],
    },
    quantity: {
        type: [Number],
        required: [true, "Quantity is required"],
        validate: {
            validator: function (v) {
                return v.every(q => q >= 0); 
            },
            message: "All quantities must be at least 0",
        },
    },
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    features: {
        type: String,
        required: [true, "Features are required"],
    },
});


const ProductModal = mongoose.model('Product',productSchema);
export default ProductModal;