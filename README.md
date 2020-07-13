# once-defined

A minimalistic, ~140 bytes, boilerplate to wait for Custom Elements, or libraries, definition.

```js
import onceDefined from 'once-defined';
// const onceDefined = require('once-defined');
// <script src="//unpkg.com/once-defined">

// other custom elements
onceDefined('outer-comp', 'inner-comp').then(([Outer, Inner]) => {
  // define your components when Outer or Inner classes
  // have been registered
});

// uce library example
onceDefined('uce-lib').then(({define, render, html, svg, css}) => {
  // define your components
});
```

If the awaited component/library is just one entry, it's returned right away. If it's a list of entries, each entry will be found in its related index.



## Why

The standard decided that once you `customElements.whenDefined(tagName)` you need to `customElements.get(tagName)` once the initial, explicit, intent to wait/retrieve it, is resolved, as specs don't return what you were waiting for once resolved.

With this module, that weights nothing, you can forget about the following boilerplate:

```js
customElements.whenDefined(thing).then(
  () => customElements.get(thing)
).then(thing => {
  console.log('finally we have', thing);
});
```

Just `onceDefined(thing).then(thing => { ... })` and call it a day 🎉
