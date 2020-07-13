self.onceDefined=function(e){"use strict";return e.default=(...e)=>Promise.all(e.map(e=>customElements.whenDefined(e).then(()=>customElements.get(e)))).then(e=>1===e.length?e[0]:e),e}({}).default;
