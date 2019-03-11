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

// const ItemCtrl = (function () {
//    const array = [];

//    function add(object) {
//       array.push(object);
//       console.log('object added');
//    }
//    function get(id) {
//       return array.find(find => {
//          return find.id=== id;
//       });
//    }
//    return {
//       add: add,
//       get: get
//    }
// })();

// ItemCtrl.add({id: 1, name: 'John'});
// console.log(ItemCtrl.get(1));

// Factory Pattern'

// function MemberFactory() {
//   this.createMember = function(name, type) {
//     let member;

//     if (type === "simple") {
//       member = new SimpleMembership(name);
//     } else if (type === "standard") {
//       member = new StandardMembership(name);
//     } else if (type === "super") {
//       member = new SuperMembership(name);
//     }

//     member.type = type;

//     member.define = function() {
//       console.log(`${this.name} (${this.type}): ${this.cost}`);
//     };

//     return member;
//   };
// }

// const SimpleMembership = function(name) {
//   this.name = name;
//   this.cost = "5€";
// };
// const StandardMembership = function(name) {
//   this.name = name;
//   this.cost = "15€";
// };
// const SuperMembership = function(name) {
//   this.name = name;
//   this.cost = "25€";
// };

// const members = [];
// const factory = new MemberFactory();

// try {
//   members.push(factory.createMember("John Doe", "simple"));
//   members.push(factory.createMember("Jane Doe", "super"));
//   members.push(factory.createMember("Jake Doe", "standrd"));
//   members.forEach(menber => {
//     menber.define();
//   });
// } catch (error) {
//   console.log(error);
// }




