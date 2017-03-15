  create = function () {
    var name = "coucou";
    display = function () {
      console.log("-->", name);
    }
    return display;
  }
  name = "bye";
  create()();
  console.log("->", name)

