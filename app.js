window.onload = () => {
  new ClipboardJS('.copy');

  popDonate = (elm) => {
    /** @type HTMLElement */
    let platform = elm.getAttribute("platform");
    let copyContent = elm.getAttribute("data-clipboard-text");
    Swal.fire(
      `謝謝你的${platform}贊助`,
      `幫您把 ${copyContent} 複製起來了`,
      'success'
    );
  }
};

// register service worker
navigator.serviceWorker.register('service-worker.js', { scope: "." });