# [React Bounds](http://casesandberg.github.io/react-bounds/) Element Queries in React

* **Like Media Queries** - Set min and max values like breakpoints.

* **Use the Bounds in JS** - Active bounds are passed down as props.

* **Use the Bounds in CSS** - Use the bound names to style the component with CSS.

## Installation & Usage

```
npm install react-bounds --save
```

### Wrap a Component

Require `react-bounds` into a component. Wrap the export with `bounds.wrap` and react-bounds will start tracking the width and height of the component.
```
var React = require('react');
var bounds = require('react-bounds');

var SomeComponent = React.createClass({
  render(){
    return <div>Some Component</div>
  }
});

module.exports = bounds.wrap(SomeComponent);
```

### Define Bounds

Create a bounds method that returns an object with all of the bound information for that component:
```
var React = require('react');
var bounds = require('react-bounds');

var SomeComponent = React.createClass({

  bounds() {
    return {
      'bound-name': {
        minWidth: 0,
        maxWidth: 500,
      },
    };
  }

  render(){
    return <div>{ this.props.activeBounds }</div>
  }
});

module.exports = bounds.wrap(SomeComponent);
```

> Use with inline styles via [ReactCSS](http://reactcss.com/)
