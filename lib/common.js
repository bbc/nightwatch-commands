var cssify = require('./cssify.js');

module.exports = {
  convertPageObject: function (selector) {
    var selElement = selector;
    // If the element comes from a section of a page object element will be an array of   
    // objects starting from the outermost ancestor (section), and ending with the element  
    // Join their selectors in order  
    if (selector && typeof selector !== 'string') { 
      for (var i = 0; i < selector.length; i++) {  
        oElement = selector[i];  
        selElement += ' ' + oElement.element; 
      } 
    }
    return selElement;
  },

  convertXPath: function (selector) {
    // If we know the selector starts as an xpath, then we convert it to css
    if(selector[0] === '/' || selector.substring(0,2) === './') {
      // Remove the dot from the start of string
      if(selector[0] === '.') {
        selector.substring(1, selector.length);
      }
      selector = cssify.convert(selector);
    }
    return selector;
  },

  basicIdentity: function (selector) {
    // If the selector starts with a . or # we strip that out so that we can reference an item by its ID
    if(selector.indexOf('.') > selector.indexOf('#')) {
      selector = selector.split('.').pop();
    } else if (selector.indexOf('.') < selector.indexOf('#')) {
      selector = selector.split('#').pop();
    }
    return selector;
  }
};
