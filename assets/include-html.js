document.addEventListener("DOMContentLoaded", (e) => {
  const include = (elDiv, dataUrl) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        let html = xhr.responseText;
        elDiv.outerHTML = html;
      } else {
        let message = xhr.statusText || "Ocurrió un error";
        elDiv.outerHTML = `Error ${xhr.status}: ${message}`;
      }
    });
    xhr.open("get", dataUrl);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  document.querySelectorAll("[data-include]").forEach((el) => {
    include(el, el.dataset.include);
  });
});
