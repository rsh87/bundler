console.log("yihaaa");
var testComponent = {
  template: require("src/components/test-component-2/components/js-test.template.html"),
  bindings: {
    text: "<"
  },
  controller: function() {
    var $ctrl = this;

    console.log("Component loadeded!");
  }
};

angular.module("testModule").component("testComponent", testComponent);
