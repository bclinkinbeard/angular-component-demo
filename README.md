angular-component-demo
======================

Simple demo of using [Atomify](https://github.com/Techwraith/atomify) to create AngularJS components.

The code is all pretty self explanatory, but by inlining the template and controller via `require()`, directives become a great delivery mechanism. With Atomify bundling the CSS and assets as well, you get a fully self contained, portable unit.

```
module.exports = function () {

  return {
    restrict: 'E',
    scope: {
      list: '='
    },
    template: require('./template.html'),
    controller: require('./DemoController')
  };

};
```

The component can then be used by simply `require()`-ing it in as a directive, and then declaring its usage in the DOM like normal.

```js
angular.module('app', [])
  .directive('demoComponent', require('demo-component'));
```

`<demo-component list="people"></demo-component>`

## Try it yourself

Clone the repo, `npm install` (demo-component is already in `node_modules`), then `browserify app.js > dist/bundle.js` and open `dist/index.html`.
