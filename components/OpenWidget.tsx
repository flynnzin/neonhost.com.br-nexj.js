import { useEffect } from "react";

const OpenWidget: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__ow = (window as any).__ow || {};
      (window as any).__ow.organizationId = "25ce0692-2b59-4d7d-b682-3d0e74cc5269";
      (window as any).__ow.integration_name = "manual_settings";
      (window as any).__ow.product_name = "openwidget";

      (function (n, t, c) {
        function i(n: any) {
          return e._h ? e._h.apply(null, n) : e._q.push(n);
        }
        var e: any = {
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
            const script = t.createElement("script");
            script.async = true;
            script.type = "text/javascript";
            script.src = "https://cdn.openwidget.com/openwidget.js";
            t.head.appendChild(script);
          },
        };
        if (!(n as any).__ow.asyncInit) e.init();
        (n as any).OpenWidget = (n as any).OpenWidget || e;
      })(window, document, [].slice);
    }
  }, []);

  return null; // O chat carrega pelo script, então não precisa renderizar nada
};

export default OpenWidget;
