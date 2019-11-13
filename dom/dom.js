window.dom = {
  find(selector) {
    return document.querySelectorAll(selector);
  },
  style(node, key, value) {
    node.style[key] = value;
  },
  each(array, fn) {
    list = Array.from(array);
    console.log(list);
    list.map(fn);
  }
};
