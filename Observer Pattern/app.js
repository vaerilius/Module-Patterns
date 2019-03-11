function EventObserver() {
   this.observers = [];
}

EventObserver.prototype = {
   subscribe: function (fn) {
      this.observers.push(fn);
      console.log(`You are now subscribed to ${fn.name}`);
   },
   unsubscribe: function (fn) {
      this.observers = this.observers.filter(function (item) {   
         if (item !== fn) {
            return item;
         }
      });

      console.log(`You are now unsubscribed from ${fn.name}`);
   },
   fire: function(){
      this.observers.forEach(function (item) {
         item.call();
      });
   }

}

const click = new EventObserver();
document.querySelector('.milli').addEventListener('click', function () {
   click.subscribe(getCurretMilloseconds);
});

document.querySelector('.unmilli').addEventListener('click', function () {
   click.unsubscribe(getCurretMilloseconds);
});

document.querySelector('.fire').addEventListener('click', function () {
   click.fire();
});

document.querySelector('.seconds').addEventListener('click', function () {
   click.subscribe(getCurretSeconds);
});

document.querySelector('.unseconds').addEventListener('click', function () {
   click.unsubscribe(getCurretSeconds);
});

const getCurretMilliseconds = function () {
   console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}
const getCurretSeconds = function () {
   console.log(`Current Seconds: ${new Date().getSeconds()}`);
}