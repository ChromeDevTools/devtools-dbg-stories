function testServiceWorker() {
  navigator.serviceWorker.register("crbug-1401339-sw.js").then(swr => {
    swr.pushManager
      .subscribe({
        applicationServerKey: "fake" // not an ArrayBuffer to force an error
      })
      .catch(function(e) {
        console.error("caught", e);
      });
  });
}
