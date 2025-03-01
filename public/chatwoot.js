(function(d, t) {
    var BASE_URL = "https://app.chatwoot.com";
    var g = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
    g.src = BASE_URL + "/packs/js/sdk.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g, s);
    g.onload = function () {
      // @ts-ignore
      window.chatwootSDK.run({
        websiteToken: "rw6cEHkmXEhGotozKLk7PyKJ",
        baseUrl: BASE_URL,
      });
    };
  })(document, "script");
  