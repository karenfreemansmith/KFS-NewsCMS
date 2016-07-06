var expect = require("chai").expect;

//test suite
describe("categories", function() {
  //require module with code to be tested...
  var getCategories = require("../js/category.js").getCategories;
  //unit test
  it("should return list of categories", function() {
    //test code
    expect(getCategories()).to.be.a("array");
    expect(getCategories()).to.include("us");
  });

  var addCategory = require("../js/category.js").addCategory;
  //unit test
  it("should add category", function() {
    //test code
    expect(addCategory('sports')).to.include('sports');
  });

  var editCategory = require("../js/category.js").editCategory;
  //unit test
  it("should update category", function() {
    //test code
    expect(editCategory('world','international')).to.include('international');
  });

  var deleteCategory = require("../js/category.js").deleteCategory;
  //unit test
  it("should delete category", function() {
    //test code
    expect(deleteCategory('politics')).to.not.include('politics');
  });
});
