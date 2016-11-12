'use strict'

var React = require('react')
var listener = require('./listener')
var _ = require('underscore')
var classNames = require('classnames')

module.exports = function (Component, wrapStyles = {}, componentStyles = {}) {
  class Wrap extends React.Component {
    constructor() {
      super()

      this.state = {
        loaded: false,
        width: 0,
        height: 0,
        activeBounds: [],
      }

      this.debounce = _.debounce(function () {
        this.setState({ debounced: true })
      }, 100)

      this.handleResize = this.handleResize.bind(this)
      this.handleLookup = this.handleLookup.bind(this)
    }

    handleResize(log) {
      var component = this.wrap
      this.setState({ loaded: true, debounced: false, width: component.clientWidth, height: component.clientHeight, activeBounds: this.calculateBounds(component.clientWidth, component.clientHeight) })
      this.debounce()
    }

    calculateBounds(newWidth, newHeight) {
      var bounds = Component.bounds && Component.bounds()
      var activeBounds = []

      if (bounds) {
        for (var boundName in bounds) {
          if (bounds.hasOwnProperty(boundName)) {
            var boundValue = bounds[boundName]

            var minWidth = boundValue.minWidth || 0
            var maxWidth = boundValue.maxWidth || 99999

            if (boundValue.minWidth || boundValue.maxWidth) {
              if (newWidth > minWidth && newWidth < maxWidth) {
                activeBounds.push(boundName)
              }
            }

            var minHeight = boundValue.minHeight || 0
            var maxHeight = boundValue.maxHeight || 99999

            if (boundValue.minHeight || boundValue.minHeight) {
              if (newHeight > minHeight && newHeight < minHeight) {
                activeBounds.push(boundName)
              }
            }

          }
        }
      }

      return activeBounds
    }

    componentDidMount() {
      var component =
      listener.add(this.component, this.handleResize)

      if (!this.state.loaded) {
        this.handleResize()
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.loaded && _.isEqual(this.state.activeBounds,
        nextState.activeBounds) && nextState.debounced !== true) {
        return false
      }

      return true
    }

    componentWillUnmount() {
      listener.remove(this.component, this.handleResize)
    }

    handleLookup(bound) {
      if (this.state.activeBounds.indexOf(bound) > -1) {
        return true
      } else {
        return false
      }
    }

    render() {
      const styles = {
        wrap: {
          position: 'relative',
          height: '100%',
        },
        component: {
          height: '100%',
        },
      }
      return (
        <div ref={ wrap => (this.wrap = wrap) } style={{ ...styles.wrap, ...wrapStyles }}>
          <div
            ref={ component => (this.component = component) }
            className={ classNames(this.state.activeBounds) }
            style={{ ...styles.component, ...componentStyles }}
          >
            { this.state.loaded && this.state.width > 0 ?
              <Component {...this.props }
                width={ this.state.width }
                height={ this.state.height }
                activeBounds={ this.state.activeBounds }
                isBound={ this.handleLookup }/>
              : null }
          </div>
        </div>
      )
    }
  }

  return Wrap
}
