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
                ContactListView: contactListView
            })            
        }
    });

}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    ContactList.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contactList/add_edit', {
                title: 'Edit Name', 
                name: nameToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = ContactList({
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
        // console.log(req.body);
        // refresh the book list
        res.redirect('/contactList/list');
    }
});
}

module.exports.displayAddPage = (req, res, next) => {
    let newItem = ContactList();

    res.render('contactList/add_edit', {
        title: 'Add a new Name',
        name: newName
    })          
}

module.exports.processAddPage = (req, res, next) => {
    let newItem = ContactList({
        _id: req.body.id,
        item: req.body.name,
        number: req.body.number,
        email: req.body.email
       
    });


ContactList.create(newName, (err, item) =>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        // refresh the book list
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