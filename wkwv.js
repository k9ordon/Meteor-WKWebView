if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  // scroll test by viljamis https://gist.github.com/viljamis/c91f3c2b04331247d953
  window.addEventListener("scroll", function (e) {
      var $el = document.querySelector(".scroller");
      var $doc = document.documentElement;
      var $body = document.body;
      var top = ($doc && $doc.scrollTop  || $body && $body.scrollTop  || 0);

      $el.innerHTML = "We're at " + top + "px";
  }, false);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
