console.log("yihaaa");
var testComponent = {
  template: require("./js-test.template.html"),
  bindings: {
    text: "<"
  },
  controller: function() {
    var $ctrl = this;

    console.log("Component loaded");
  }
};

angular.module("testModule").component("testComponent", testComponent);
