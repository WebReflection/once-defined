/**
 * @param {string|string[]} names one or more `customElements` names
 * @return {HTMLElement|HTMLElement[]} one or more classes defined through
 * the `customElements` registry
 */
export default names => {
  const all = [].concat(names);
  return Promise.all(
    all.map(name => customElements.whenDefined(name).then(
      () => customElements.get(name)
    ))
  ).then(result => all.length < 2 ? result[0] : result);
};
