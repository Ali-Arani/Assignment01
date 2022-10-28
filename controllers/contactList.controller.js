// create a reference to the model
let ContactList = require('../models/contactList.model');

exports.contactListView = function(req, res, next) {  
    ContactList.find((err, contactListView) => {
        
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contactList/list', {
                title: 'Contact List', 
                ContactListView: contactListView,
                userName: req.user ? req.user.username : ''
            })            
        }
    }).collation({locale: "en" }).sort({name: 'asc'});

}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    ContactList.findById(id, (err, nameToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contactList/add_edit', {
                title: 'Edit Contact', 
                name: nameToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedName = ContactList({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
      
    });



ContactList.updateOne({_id: id}, updatedName, (err) => {
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
            // refresh the Contact list
            res.redirect('/contactList/list');
    }
});
}

module.exports.displayAddPage = (req, res, next) => {
    let newName = ContactList();

    res.render('contactList/add_edit', {
        title: 'Add a new Contact',
        name: newName,
        userName: req.user ? req.user.username : ''
    })          
}

module.exports.processAddPage = (req, res, next) => {
    let newName = ContactList({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
       
    });


ContactList.create(newName, (err, name) =>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        // refresh the contact list
        console.log(name);
        res.redirect('/contactList/list');
    }
});

}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

   ContactList.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contactList/list');
        }
    });
}