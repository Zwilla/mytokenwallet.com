'use strict';

window.addEventListener("beforeunload", function (e) {
  var confMessage = 'It looks like you have been editing something. '
    + 'If you leave before saving, your changes will be lost.';

  (e || window.event).returnValue = confMessage; //Gecko + IE

  return confMessage; //Gecko + Webkit, Safari, Chrome etc.
});

window.addEventListener("unload", function (e) {
  sessionStorage.clear();
  localStorage.clear();
  console.clear();
  $.ajax({
    url: "",
    context: document.body,
    success: function(s,x){

      $('html[manifest=saveappoffline.appcache]').attr('content', '');
      $(this).html(s);
    }
  });
  window.close();
});


function retry(isDone, next) {
  var current_trial = 0, max_retry = 50, interval = 10, is_timeout = false;
  var id = window.setInterval(function () {
    if (isDone()) {
      window.clearInterval(id);
      next(is_timeout);
    }
    if (current_trial++ > max_retry) {
      window.clearInterval(id);
      is_timeout = true;
      next(is_timeout);
    }
  }, 10);
}

function isIE10OrLater(user_agent) {
  var ua = user_agent.toLowerCase();
  if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
    return false;
  }
  var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
  if (match && parseInt(match[1], 10) >= 10) {
    return true;
  }
  var edge = /edge/.exec(ua); return !!(edge && edge[0] == "edge");

}

function detectPrivateMode(callback) {
  var is_private;

  if (window.webkitRequestFileSystem) {
    window.webkitRequestFileSystem(
      window.TEMPORARY, 1,
      function () {
        is_private = false;
      },
      function (e) {
        is_private = true;
      }
    );
  } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
    var db;
    try {
      db = window.indexedDB.open('test');
    } catch (e) {
      is_private = true;
    }

    if (typeof is_private == 'undefined') {
      retry(
        function isDone() {
          return db.readyState == 'done';
        },
        function next(is_timeout) {
          if (!is_timeout) {
            is_private = !db.result;
          }
        }
      );
    }
  } else if (isIE10OrLater(window.navigator.userAgent)) {
    is_private = false;
    try {
      if (!window.indexedDB) {
        is_private = true;

      }
    } catch (e) {
      is_private = true;
    }
  } else if (window.sessionStorage && /Safari/.test(window.navigator.userAgent)) {
    try {
      window.sessionStorage.setItem('test', 1);
    } catch (e) {
      is_private = true;
    }

    if (typeof is_private == 'undefined') {
      is_private = false;
      window.sessionStorage.removeItem('test');
    }
  }

  retry(
    function isDone() {
      return typeof is_private != 'undefined';
    },
    function next(is_timeout) {
      callback(is_private);
    }
  );

  if (is_private){document.getElementById('pass gw_s_03').disabled = false;}
}

detectPrivateMode(
  function (is_private) {

    if (is_private == "undefined") {
      document.getElementById("resultprivate").innerHTML = "<p style=\"background-color: #c82116;text-align: center;color: #ffffff;font-weight: bold;\">Browser not compatible. Brave browser recommended<\/p> ";
    }


    if (is_private === false) {
      document.getElementById("resultprivate").innerHTML = "<p style=\"background-color: #c82116;text-align: center;color: #ffffff;font-weight: bold;\">No private Tab, please open MyTokenWallet on private tab. Recommended<\/p> ";
    }

    if (is_private === true) {
      document.getElementById("resultprivate").innerHTML = "<p style=\"background-color: #52c874;text-align: center;color: #ffffff;font-weight: bold;\">perfect. You are now save on a private tab<\/p> ";
      document.getElementById('pass gw_s_03').disabled = false;
    }
  }
);
