'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var listener = require('./listener');
var _ = require('underscore');

module.exports = function(Component) {
  class ComponentQuery extends ReactCSS.Component {

    constructor() {
      super();

      this.state = {
        loaded: false,
        width: 0,
        height: 0,
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

    handleResize() {
      var component = React.findDOMNode(this.refs.wrap);
      var wrap = React.findDOMNode(this.refs.wrap);
      this.setState({ loaded: true, width: wrap.clientWidth, height: wrap.clientHeight, activeBounds: this.calculateBounds(component.clientWidth, component.clientHeight) });
    }

    calculateBounds(newWidth, newHeight) {
      var bounds = Component.bounds();
      var activeBounds = [];

      if (bounds) {
        for (var boundName in bounds) {
          if (bounds.hasOwnProperty(boundName)) {
            var boundValue = bounds[boundName];

            var minWidth = boundValue.minWidth || 0;
            var maxWidth = boundValue.maxWidth || 99999;

            if (boundValue.minWidth || boundValue.maxWidth) {
              if (newWidth > minWidth && newWidth < maxWidth) {
                activeBounds.push(boundName);
              }
            }

            // var minHeight = boundValue.minHeight || 0;
            // var maxHeight = boundValue.maxHeight || 99999;
            //
            // if (boundValue.minHeight || boundValue.minHeight) {
            //   if (newHeight > minHeight && newHeight < minHeight) {
            //     activeBounds.push(boundName);
            //   }
            // }

          }
        }
      }

      return activeBounds;
    }

    componentDidMount() {
      var component = React.findDOMNode(this.refs.component);
      listener.add(component, this.handleResize);

      if (!this.state.loaded) {
        this.handleResize();
      }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   if (this.state.loaded && _.isEqual(this.state.activeBounds, nextState.activeBounds)) {
    //     return false;
    //   }
    //
    //   return true;
    // }

    componentWillUnmount() {
      var component = React.findDOMNode(this.refs.component);
      listener.remove(component, this.handleResize);
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
