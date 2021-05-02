module.exports = function (mongoose) {
    const format = new mongoose.Schema({
        _id: {
            type: String,
            required: true
        },
        data: {
            type: Array,
            required: true
        },
        playing: {
            type: Number,
            required: false
        }
    });
    return format
};