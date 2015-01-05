var React = require('react');

var Child = React.createClass({
  displayName: 'Child',
  contextTypes: {
    name: React.PropTypes.string
  },
  // callMeAnythingYYY: function(){},
  // componentWillReceiveProps: function() {},
  render: function() {
    return React.DOM.div(null, this.context.name);
  }
});

var Parent = React.createClass({
  displayName: 'Parent',
  childContextTypes: {
    name: React.PropTypes.string
  },
  getChildContext: function() {
    return {
      name: this.constructor.displayName,
    };
  },
  // callMeWhateverZZZ: function() {},
  // componentDidMount: function() {},
  render: function() {
    return React.createElement(Child);
  }
});

module.exports = function() {
  return React.renderToString(React.createElement(Parent));
};
