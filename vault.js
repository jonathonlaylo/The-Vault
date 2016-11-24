'use strict';
module.exports = function() {

// variable storing value, key, and vault
  var _key = 0;
  var _value = 0;
  var vault = {};

// setting the values into valut from the key
  function setValue(key, value){
   vault[key] = value;
   return vault;
  }

// if key exits return it into valut, if not return null
  function getValue(key){
    if(key in vault){
      return vault[key];
    }else{
      return null;
    }
  }

  return {
    setValue: setValue,
    getValue: getValue
  };
};
