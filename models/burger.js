
  
// Inside `burger.js`, import `orm.js` into `burger.js`
const orm = require("../config/orm.js");

// Inside `burger.js`, create the code that will
// call the ORM functions using burger specific input for the ORM.
let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

  delete: function(filters, cb){
      orm.delete("burgers", filters, res => cb(res));
  }
};

// Export at the end of the `burger.js` file.
module.exports = burger;