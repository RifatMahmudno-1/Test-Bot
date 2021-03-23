module.exports = function (mongoose) {
    const format = new mongoose.Schema({
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true
        }
    });
    return format
};