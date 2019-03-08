//Standard module pattern

// const UI = (function () {
//    let text = 'private text';
//    const thisIsPrivateFunction = function () {
//       const h1 = document.querySelector('h1');
//       h1.textContent = text;
//    }
//    return {
//       thisIsPublicFunction: function() {
//          thisIsPrivateFunction(text);
//          console.log(text);
//       }
//    }
// })();

// UI.thisIsPublicFunction();


//revealing module pattern

const ItemCtrl = (function () {
   const array = [];

   function add(object) {
      array.push(object);
      console.log('object added');
   }
   function get(id) {
      return array.find(find => {
         return find.id=== id;
      });
   }
   return {
      add: add,
      get: get
   }
})();

ItemCtrl.add({id: 1, name: 'John'});
console.log(ItemCtrl.get(1));
