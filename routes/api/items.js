const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/items');

//@route GET api/items
//@desc Get All items
//@access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({ data: -1 })
    .then(items => res.json(items))
}); 

//@route POST api/items
//@desc create a post
//@access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.skill
    });

    newItem.save().then(items => res.json(items));
}); 

//@route DELETE api/items/id
//@desc Delete a post
//@access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(items => items.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;