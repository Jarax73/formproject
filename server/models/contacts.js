const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        firstName: {type: "string", required: true},
        lastName: {type: "string", required: true},
        group: {type: "string", required: true},
        bio: {type: "string", required: true},
        image: {type: "string", required: true}
    }
);

module.exports = mongoose.model('Contact', contactSchema);