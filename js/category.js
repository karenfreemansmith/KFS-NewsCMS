function getCategories() {
  return ["world", "us", "politics"];
}

function addCategory(value) {
  return value;
}

function editCategory(oldValue, newValue) {
  return newValue;
}

function deleteCategory(value) {
  return "";
}

module.exports.getCategories = getCategories;
module.exports.addCategory = addCategory;
module.exports.editCategory = editCategory;
module.exports.deleteCategory = deleteCategory;
