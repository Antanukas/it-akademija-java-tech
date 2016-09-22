
var EventEmitter = function() {
  this.subscribers = [];

  this.subscribe = function(sub, handler, eventType) {
    this.subscribers.push({
      sub: sub,
      handler: handler,
      eventType: eventType
    });
  },

  this.unsubscribe = function(subToUnsubscribe) {
    this.subscribers = this.subscribers.filter(function(sub) { return sub.sub !== subToUnsubscribe; });
  },

  this.publish = function(event) {
    this.subscribers.filter(function (sub) { return sub.eventType === event.eventType || !sub.eventType; })
      .forEach(function(sub) {
        sub.handler(event);
      });
  };
};

window.EventEmitter = new EventEmitter();
