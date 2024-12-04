/*
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.prop.href);
  domElement.setAttribute("target", reactElement.prop.target);
  container.appendChild(domElement);
}
*/
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  container.appendChild(domElement)  
}

const reactEl = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click for google",
};

const maincontainer = document.getElementById("root");
customRender(reactEl, maincontainer);

