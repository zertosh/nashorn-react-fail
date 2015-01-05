### Explanation

When doing serve-side rendering with React (0.12.2) in Nashorn (tested in `nashorn 1.8.0_25` on Yosemite), something is going on with components that have a context relationship (as in React context, not `this`). Depending on the methods defined on the `Parent` and the `Child`, it either works or you get one of two errors:

1. `TypeError: null is not a function`

2. `Error: Invariant Violation: Child.getChildContext(): childContextTypes must be defined in order to use getChildContext().`
  * In the test case, when you get to this point in `ReactCompositeComponent.js`'s `_processChildContext`, the value of `Child.getChildContext` is actually the `Parent`'s `render` function (huh). In our "real" app, `Child.getChildContext === null` is true, but `Child.getChildContext` is truthy (wtf).

### Test it

You need `node` and Java 8. `npm install` and run `npm run build && npm start`.

In `main.js`, `Parent` and `Child` each have two commented out methods, one is a `ReactCompositeComponentInterface` method, and the other one is just a randomly named one. Try uncommenting different method combinations and you'll see either error or no error.

### Workaround

The "reliable" workaround seems to be to define differently named dummy methods on `Parent` and `Child`.

Sigh.
