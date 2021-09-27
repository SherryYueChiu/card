window.onload = () => {
  new ClipboardJS('.copy');

  popDonate = (elm) => {
    /** @type HTMLElement */
    const platform = elm.getAttribute("platform").trim();
    const linkType = elm.getAttribute("data-type").trim();
    const copyContent = elm.getAttribute("data-content-type");
    if (linkType === "link") {
      Swal.fire(
        `謝謝你用${platform}贊助`,
        `將導向贊助${copyContent}`,
        'success'
      );
    } else if (linkType === "text") {
      if (copyContent)
        Swal.fire(
          `謝謝你用${platform}贊助`,
          `先幫您把${copyContent}複製起來了`,
          'success'
        );
    }
  }
};

// register service worker
navigator.serviceWorker.register('service-worker.js', { scope: "." });