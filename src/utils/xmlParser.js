// Parses XML fetched as text into a plain JS object using the browser's DOMParser
export const parseXML = (xmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlString, 'application/xml');
  return xmlNodeToObject(doc.documentElement);
};

const xmlNodeToObject = (node) => {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent.trim();
  }

  const result = {};
  const children = Array.from(node.childNodes).filter(
    (n) => n.nodeType !== Node.COMMENT_NODE
  );

  // Collect attributes
  if (node.attributes && node.attributes.length > 0) {
    result._attributes = {};
    Array.from(node.attributes).forEach((attr) => {
      result._attributes[attr.name] = attr.value;
    });
  }

  // Collect child elements
  const elementChildren = children.filter((n) => n.nodeType === Node.ELEMENT_NODE);
  const textChildren = children.filter((n) => n.nodeType === Node.TEXT_NODE);

  if (elementChildren.length === 0) {
    const text = textChildren.map((t) => t.textContent).join('').trim();
    if (result._attributes) {
      result._text = text;
      return result;
    }
    return text;
  }

  elementChildren.forEach((child) => {
    const key = child.tagName;
    const value = xmlNodeToObject(child);
    if (result[key] !== undefined) {
      if (!Array.isArray(result[key])) {
        result[key] = [result[key]];
      }
      result[key].push(value);
    } else {
      result[key] = value;
    }
  });

  return result;
};

// Ensures a value is always an array (handles single-element XML nodes)
export const toArray = (value) => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};
