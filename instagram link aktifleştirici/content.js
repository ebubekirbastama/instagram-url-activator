function linkifyTextNodes(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const urlRegex = /(\bhttps?:\/\/[^\s<>"]+|\bwww\.[^\s<>"]+)/gi;
    if (urlRegex.test(node.textContent)) {
      const span = document.createElement('span');
      const parts = node.textContent.split(urlRegex);
      parts.forEach(part => {
        if (urlRegex.test(part)) {
          let href = part;
          if (!href.startsWith('http')) {
            href = 'http://' + href;
          }
          const a = document.createElement('a');
          a.href = href;
          a.textContent = part;
          a.target = '_blank';
          a.style.color = '#065fd4';
          a.style.textDecoration = 'underline';
          span.appendChild(a);
        } else {
          span.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode.replaceChild(span, node);
    }
  } else if (
    node.nodeType === Node.ELEMENT_NODE &&
    node.tagName.toLowerCase() !== 'a' &&
    node.tagName.toLowerCase() !== 'script' &&
    node.tagName.toLowerCase() !== 'style'
  ) {
    for (let i = 0; i < node.childNodes.length; i++) {
      linkifyTextNodes(node.childNodes[i]);
    }
  }
}

// İlk yükleme
linkifyTextNodes(document.body);

// Instagram dinamik içerik yüklediği için MutationObserver ile sürekli kontrol et
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      linkifyTextNodes(node);
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });
