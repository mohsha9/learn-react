function createElement(reactElement, container) {
  /*
  const element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.children;
  element.setAttribute('href', reactElement.props.href)
  element.setAttribute('target', reactElement.props.target)
  element.setAttribute('class', reactElement.props.class)
  container.appendChild(element);
*/
  const element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == 'children') continue;
    element.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(element);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
    class: "link",
  },
  children: "Click to open google",
};

const mainContainer = document.querySelector("#root");

createElement(reactElement, mainContainer);
