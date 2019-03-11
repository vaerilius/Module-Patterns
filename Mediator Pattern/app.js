class User {
   constructor(name) {
      this.name = name;
      this.chatroom  = null;
   }

   send(message, to) {
      this.chatroom.send(message, this, to)
   }
   recieve (message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
   }

   
}

const Chatroom = function () {
   let users = {};

   return {
      register: function(user) {
         users[user.name] = user;
         user.chatroom = this;
      },
      send: function (message, from, to) {
         if (to) {
            to.recieve(message, from);
         } else {
            for (key in users) {
          if (users[key] !== from) {
             users[key].recieve(message,from);
          }
            }
         }
      }
   }
}


const pekka = new User('Pekka');
const maiju = new User('Maiju');
const bot = new User('chatbot');


const chatroom = new Chatroom();

chatroom.register(pekka);
chatroom.register(maiju);
chatroom.register(bot);


pekka.send('I love U', maiju);
maiju.send('I love computers',pekka);
bot.send('Juuhuu');