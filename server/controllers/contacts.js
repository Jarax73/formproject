const Contact = require("../models/contacts");

exports.createContact = (request, response) => {
    const contactObject = request.body;
    const contact = new Contact({
        ...contactObject,
    });

    contact
        .save()
        .then((result) => response.status(201).json({ result }))
        .catch((error) => {
            response.status(400).json({ error });
        });
};

exports.getContacts = (request, response) => {
    Contact.find()
    .then(contacts => response.status(200).json({ contacts }))
    .catch((error) => response.status(400).json({ error }));
}