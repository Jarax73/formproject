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
        .catch((error) => response.status(500).json({ error }));
}

exports.getContact = (request, response) => {
    Contact.find({_id: request.params.id})
        .then(contact => response.status(200).json({ contact }))
        .catch((error) => response.status(500).json({ error }))
};

exports.updateContact = (request, response) => {
    Contact.updateOne({ _id: request.params.id }, { ...request.body, _id: request.params.id })
        .then(() => {
            response.status(200).json({ message: "Contact Updated" });
        })
        .catch((error) => response.status(401).json({ error }));
}

exports.deleteContact = (request, response) => {
    Contact.deleteOne({ _id: request.params.id })
        .then(() => {
            response.status(200).json({ message: "Contact Deleted" });
        })
        .catch((error) => response.status(401).json({ error }));
};