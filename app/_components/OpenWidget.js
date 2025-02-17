import { useEffect } from "react";

const OpenWidget = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.__ow = window.__ow || {};
      window.__ow.organizationId = "25ce0692-2b59-4d7d-b682-3d0e74cc5269";
      window.__ow.integration_name = "manual_settings";
      window.__ow.product_name = "openwidget";

      (function (n, t, c) {
        function i(n) {
          return e._h ? e._h.apply(null, n) : e._q.push(n);
        }
        var e = {
          _q: [],
          _h: null,
          _v: "2.0",
          on: function () {
            i(["on", c.call(arguments)]);
          },
          once: function () {
            i(["once", c.call(arguments)]);
          },
          off: function () {
            i(["off", c.call(arguments)]);
          },
          get: function () {
            if (!e._h)
              throw new Error("[OpenWidget] You can't use getters before load.");
            return i(["get", c.call(arguments)]);
          },
          call: function () {
            i(["call", c.call(arguments)]);
          },
          init: function () {
            var n = t.createElement("script");
            n.async = !0;
            n.type = "text/javascript";
            n.src = "https://cdn.openwidget.com/openwidget.js";
            t.head.appendChild(n);
          },
        };
        !n.__ow.asyncInit && e.init(), (n.OpenWidget = n.OpenWidget || e);
      })(window, document, [].slice);
    }
  }, []);

  return null; // Como o script só carrega o chat, não precisa renderizar nada
};

export default OpenWidget;
