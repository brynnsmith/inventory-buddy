const InvItem = require('../models/InvItem'); //change model to invItem

module.exports = {
  getInvItems: async (req, res) => {
    console.log(req.user);
    try {
      const invItems = await InvItem.find();

      res.render('invItems.ejs', { items: invItems, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createInvItem: async (req, res) => {
    try {
      await InvItem.create({
        itemName: req.body.itemName,
        SKU: req.body.SKU,
        quantity: req.body.quantity,
        date: new Date(),
      });
      console.log('Inventory Item has been added!');
      res.redirect('/invItems');
    } catch (err) {
      console.log(err);
    }
  },
  setQuantity: async (req, res) => {
    const quantity = req.body.quantity;
    try {
      await InvItem.findOneAndUpdate(
        { _id: req.body.itemIdFromJSFile },
        {
          quantity: quantity,
        }
      ).then((result) => {
        console.log(`Quantity changed: ${quantity}`);
        res.json('Quantity Changed');
      });
    } catch (err) {
      console.log(err);
    }
  },
  deleteInvItem: async (req, res) => {
    console.log(req.body.itemIdFromJSFile);
    try {
      await InvItem.findOneAndDelete({ _id: req.body.itemIdFromJSFile });
      console.log('Deleted inventory item');
      res.json('Deleted item');
    } catch (err) {
      console.log(err);
    }
  },
};
