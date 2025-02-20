import { useEffect } from "react";

const OpenWidget: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ow = (window as any).__ow || {};
    ow.organizationId = "25ce0692-2b59-4d7d-b682-3d0e74cc5269";
    ow.integration_name = "manual_settings";
    ow.product_name = "openwidget";
    (window as any).__ow = ow;

    if ((window as any).__ow.asyncInit) return;

    const OpenWidget = (window as any).OpenWidget || {
      _q: [],
      _h: null,
      _v: "2.0",
      on: (...args: any) => OpenWidget._q.push(["on", args]),
      once: (...args: any) => OpenWidget._q.push(["once", args]),
      off: (...args: any) => OpenWidget._q.push(["off", args]),
      get: (...args: any) => {
        if (!OpenWidget._h) throw new Error("[OpenWidget] You can't use getters before load.");
        return OpenWidget._q.push(["get", args]);
      },
      call: (...args: any) => OpenWidget._q.push(["call", args]),
      init: () => {
        const script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = "https://cdn.openwidget.com/openwidget.js";
        document.head.appendChild(script);
      },
    };
    OpenWidget.init();
    (window as any).OpenWidget = OpenWidget;
  }, []);

  return null;
};

export default OpenWidget;
