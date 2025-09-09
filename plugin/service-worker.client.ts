export default defineNuxtPlugin(() => {
  if (process.client) {
    window.addEventListener("DOMContentLoaded", () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope);
          })
          .catch((err) => {
            console.error("Service Worker registration failed:", err);
          });
      }
    });
  }
});
