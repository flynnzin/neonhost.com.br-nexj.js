import { useEffect } from "react";

const OpenWidget: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined" || document.getElementById("openwidget-script")) return;

    const ow = (window as any).__ow ??= {
      organizationId: "25ce0692-2b59-4d7d-b682-3d0e74cc5269",
      integration_name: "manual_settings",
      product_name: "openwidget",
    };

    if (ow.asyncInit) return;

    // Adiciona preload do script para otimizar carregamento
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.href = "https://cdn.openwidget.com/openwidget.js";
    preloadLink.as = "script";
    document.head.appendChild(preloadLink);

    // Carregar script de forma assíncrona e eficiente
    const loadScript = () => {
      const script = document.createElement("script");
      script.id = "openwidget-script";
      script.async = true;
      script.defer = true;
      script.src = "https://cdn.openwidget.com/openwidget.js";
      script.onload = () => {
        (window as any).OpenWidget ??= {
          _q: [],
          _h: null,
          _v: "2.0",
          on: (...args: any) => (window as any).OpenWidget._q.push(["on", args]),
          once: (...args: any) => (window as any).OpenWidget._q.push(["once", args]),
          off: (...args: any) => (window as any).OpenWidget._q.push(["off", args]),
          get: (...args: any) => {
            if (!(window as any).OpenWidget._h) throw new Error("[OpenWidget] You can't use getters before load.");
            return (window as any).OpenWidget._q.push(["get", args]);
          },
          call: (...args: any) => (window as any).OpenWidget._q.push(["call", args]),
        };
      };
      document.head.appendChild(script);
    };

    // Usa requestIdleCallback para carregar o script quando a CPU estiver livre
    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadScript);
    } else {
      setTimeout(loadScript, 2000); // Carregar após 2s como fallback
    }
  }, []);

  return null;
};

export default OpenWidget;
