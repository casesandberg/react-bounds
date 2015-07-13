/* jshint node: true, esnext: true, browser: true */
"use strict";

var React = require('react');
var ReactCSS = require('reactcss');

var listener = require('./listener');



module.exports = function(Component) {
  class ComponentQuery extends ReactCSS.Component {

    constructor() {
      super();

      this.state = {
        loaded: false,
        width: 0,
        activeBounds: []
      };

      this.handleResize = this.handleResize.bind(this);
    }

    classes() {
      return {
        'default': {
          wrap: {
            position: 'relative'
          }
        }
      };
    }

    handleResize(e) {
      var bounds = this.calculateBounds(React.findDOMNode(this.refs.wrap).clientWidth);
      this.setState({ width: React.findDOMNode(this.refs.wrap).clientWidth, activeBounds: bounds });
    }

    calculateBounds(newWidth) {
      console.log('newWidth', newWidth);
      if (Component.bounds) {
        var bounds = [];
        for (var boundName in Component.bounds()) {
          if (Component.bounds().hasOwnProperty(boundName)) {
            var boundValue = Component.bounds()[boundName];
            if (newWidth > boundValue[0] && newWidth < boundValue[1]) {
              bounds.push(boundName);
            }
          }
        }
        return bounds;
      }

      return false;
    }

    componentDidMount() {
      var element = React.findDOMNode(this.refs.component);
      listener.add(element, this.handleResize);

      var bounds = this.calculateBounds(React.findDOMNode(this.refs.wrap).clientWidth);

      if (!this.state.loaded) {
        this.setState({ loaded: true, width: React.findDOMNode(this.refs.wrap).clientWidth, activeBounds: bounds  });
      }
    }

    componentWillUnmount() {
      var element = React.findDOMNode(this.refs.component);
      listener.remove(element, this.handleResize);
    }

    render() {
      var component;
      if (this.state.loaded && this.state.width > 0) {
        component = <Component {...this.props } {...this.state} />;
      }
      return (
        <div ref="wrap" style={ this.styles().wrap }>
          <div ref="component">
            { component }
          </div>
        </div>
      )
    }
  }

  return ComponentQuery;
};
