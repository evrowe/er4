import { findDOMNode } from 'react-dom';

// serializes form data into an object
export function getFormElements(node) {
  const formElements = findDOMNode(node);
  return [].slice.call(formElements).reduce((data, element) => {
    if (!element.name) { return data; }
    data[element.name] = element.value;
    return data;
  }, {});
}
