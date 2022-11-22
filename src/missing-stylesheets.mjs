function insertStylesheet() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'missing-stylesheets-dynamic.css';
  link.type = 'text/css';
  document.head.appendChild(link);
}

insertStylesheet();
