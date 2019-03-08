const UI = (function () {
   let text = 'private text';
   const thisIsPrivateFunction = function () {
      const h1 = document.querySelector('h1');
      h1.textContent = text;
   }
   return {
      thisIsPublicFunction: function() {
         thisIsPrivateFunction(text);
         console.log(text);
      }
   }
})();

UI.thisIsPublicFunction();