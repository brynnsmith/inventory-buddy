const InvItem = require("../models/invItem"); //change model to invItem

module.exports = {
  //get items --> get all items and plug into EJS (get rid of the user id stuff from Leon)

  //add item --> change params to itemName, quantity, SKU, inStock, date

  //change quantity --> change quantity param, add conditional statment for quantity of 0 to change inStock to false (or do that in main.js ?)

  //delete --> pretty much the same

  getInvItems: async (req, res) => {
    console.log(req.user);
    try {
      const invItems = await InvItem.find();
      //const itemsLeft = await InvItem.countDocuments({userId:req.user.id,completed: false})
      res.render("invItems.ejs", { items: invItems, user: req.user });
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
      console.log("Inventory Item has been added!");
      res.redirect("/invItems");
    } catch (err) {
      console.log(err);
    }
  },
  setQuantity: async (req, res) => {
    try {
      //Ryan renaming stuff here blame him if broken
      // Todo to InvItem
      // todoIdFromJSFile to item itemIdFromJSFile
      const quantity = req.body.quantity;
      await InvItem.findOneAndUpdate(
        { _id: req.body.itemIdFromJSFile },
        {
          quantity: quantity,
        }
      );
      console.log(`Quantity changed: ${quantity}`);
      res.json("Quantity Changed");
    } catch (err) {
      console.log(err);
    }
  },
  deleteInvItem: async (req, res) => {
    console.log(req.body.itemIdFromJSFile);
    try {
      await InvItem.findOneAndDelete({ _id: req.body.itemIdFromJSFile });
      console.log("Deleted inventory item");
      res.json("Deleted item");
    } catch (err) {
      console.log(err);
    }
  },
};
