angular-component-demo
======================

Super simple demo of self contained AngularJS component architecture.

The code is all pretty self explanatory, but the basic idea is that by bundling the template (and ultimately CSS as well) with the component, you get a fully self contained, portable unit. Directives are obviously a great vehicle for this approach, so all that is really necessary to add is template inlining and self compilation/DOM insertion.

The full component is packaged as its own Angular module.

```
var angular = require('angular');

module.exports = angular.module('demo-component', [])
  .constant('template', require('./template.html'))
  .directive('demoComponent', require('./DemoDirective'))
  .controller('DemoController', require('./DemoController'));
```

The directive then gets the `$compile` service and its template injected thanks to Angular's DI. Its only real purpose is to then turn the template into an actual DOM node and insert it, and to specify the controller to be used.

```
'use strict';

var angular = require('angular');

module.exports = function DemoDirective ($compile, template) {

  return {
    scope: {
      list: '='
    },
    restrict: 'E',
    controller: 'DemoController',
    link: function (scope, element) {

      var el = angular.element(template);
      el = $compile(el)(scope);
      angular.element(element[0]).append(el);

    }
  };

};

```

The controller is then free of any UI knowledge and can focus on the duties a controller should, like managing the `$scope`, etc.

The component can then be used by simply `require()`-ing it in and listing it as a module your app (or your higher level component) depends on, and then declaring its usage in the DOM like normal.

`<demo-component list="people"></demo-component>`

## Try it yourself

Clone the repo, `npm install` (demo-component is already in `node_modules`), then `browserify app.js > dist/bundle.js`.