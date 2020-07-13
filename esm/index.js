export default (...$) => Promise.all(
  $.map(_ => customElements.whenDefined(_).then(
    () => customElements.get(_)
  ))
).then($ => $.length === 1 ? $[0] : $);
