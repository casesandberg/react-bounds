'use strict';

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
        activeBounds: [],
      };

      this.handleResize = this.handleResize.bind(this);
    }

    classes() {
      return {
        'default': {
          wrap: {
            position: 'relative',
          },
        },
      };
    }

    handleResize(e) {
      var element = React.findDOMNode(this.refs.wrap).clientWidth;
      this.setState({ width: React.findDOMNode(this.refs.wrap).clientWidth, activeBounds: this.calculateBounds(element) });
    }

    calculateBounds(newWidth) {
      var bounds = Component.bounds();
      var activeBounds = [];

      if (bounds) {
        for (var boundName in bounds) {
          if (bounds.hasOwnProperty(boundName)) {
            var boundValue = bounds[boundName];
            var widthMin = boundValue.min || 0;
            var widthMax = boundValue.max || 0;

            if (newWidth > widthMin && newWidth < widthMax) {
              activeBounds.push(boundName);
            }
          }
        }
      }

      return activeBounds;
    }

    componentDidMount() {
      var element = React.findDOMNode(this.refs.component);
      var wrap = React.findDOMNode(this.refs.wrap);
      listener.add(element, this.handleResize);

      if (!this.state.loaded) {
        this.setState({ loaded: true, width: wrap.clientWidth, activeBounds: this.calculateBounds(wrap.clientWidth) });
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
      );
    }
  }

  return ComponentQuery;
};
