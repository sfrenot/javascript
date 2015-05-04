Object.prototype.properties = function() {
  var result = [];
  for (var property in this)
    result.push(property);
  return result;
};
