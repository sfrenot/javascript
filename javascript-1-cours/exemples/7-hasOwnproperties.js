function forEachIn(object, action) {
    for (var property in object) {
          if (Object.prototype.hasOwnProperty.call(object, property))
                  action(property, object[property]);
            }
}

var test = {name: "Mordecai", hasOwnProperty: "Uh-oh"};
forEachIn(test, function(name, value) {
    print("Property ", name, " = ", value);
});
