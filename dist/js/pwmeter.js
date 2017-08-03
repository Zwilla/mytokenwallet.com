function objectDump(obj) {
  this.result = '';
  this.indent = -2;

  this.dumpLayer = function (obj) {
    this.indent += 2;

    for (var i in obj) {
      if (typeof(obj[i]) == "object") {
        this.result += "\n" +
          "              ".substring(0, this.indent) + i +
          ": " + "\n";
        this.dumpLayer(obj[i]);
      }
      else {
        this.result +=
          "              ".substring(0, this.indent) + i +
          ": " + obj[i] + "\n";
      }
    }
    this.indent -= 2;
  };

  this.dumpLayer(obj);
  return this.result;
}

function checkPassword(pwd, toConsole) {
  var output = document.getElementById('output');

  if (pwd !== '') {
    var ret = zxcvbn(pwd);

    // send result to console
    if (toConsole) {


      var explanation = document.getElementById('explanation');
      explanation.innerHTML = 'How the password "<strong>' + pwd + '</strong>" was broken into parts:\n';
      explanation.innerHTML += objectDump(ret.match_sequence);
    }

    output.innerHTML = 'Estimating strength of password "' + pwd + '":\n\n';
    output.innerHTML += 'Strength score (1-5): ' + (ret.score + 1) + "\n";
    output.innerHTML += 'Rank: ' + ret.sequence[0].rank + "\n";
    output.innerHTML += '----------------------------------------------' + "\n";
    output.innerHTML += 'feedback warning: ' + (ret.feedback.warning) + "\n";
    output.innerHTML += 'feedback suggestions: ' + (ret.feedback.suggestions[0]) + "\n";
    output.innerHTML += 'feedback suggestions: ' + (ret.feedback.suggestions[1]) + "\n";
    output.innerHTML += 'feedback suggestions: ' + (ret.feedback.suggestions[2]) + "\n";
    output.innerHTML += 'feedback suggestions: ' + (ret.feedback.suggestions[3]) + "\n";
    output.innerHTML += '----------------------------------------------' + "\n";
    output.innerHTML += 'Crack time: offline fast: ' + ret.crack_times_display.offline_fast_hashing_1e10_per_second + "\n";
    output.innerHTML += 'Crack time: offline fast: ' + ret.crack_times_seconds.offline_fast_hashing_1e10_per_second + "\n";
    output.innerHTML += '----------------------------------------------' + "\n";
    output.innerHTML += 'Crack time: offline slow: ' + ret.crack_times_display.offline_slow_hashing_1e4_per_second + "\n";
    output.innerHTML += 'Crack time: offline slow: ' + ret.crack_times_seconds.offline_slow_hashing_1e4_per_second + "\n";
    output.innerHTML += '----------------------------------------------' + "\n";
    output.innerHTML += 'Crack time: online (10/s) : ' + ret.crack_times_display.online_no_throttling_10_per_second + "\n";
    output.innerHTML += 'Crack time: online (10/s) : ' + ret.crack_times_seconds.online_no_throttling_10_per_second + "\n";
    output.innerHTML += '----------------------------------------------' + "\n";
    output.innerHTML += 'Crack time: online (100/h) : ' + ret.crack_times_display.online_throttling_100_per_hour + "\n";
    output.innerHTML += 'Crack time: online (100/h) : ' + ret.crack_times_seconds.online_throttling_100_per_hour + "\n";
    output.innerHTML += '----------------------------------------------' + "\n";
    output.innerHTML += 'Guesses: ' + (ret.guesses) + "\n";
    output.innerHTML += 'Guesses log10: ' + (ret.guesses_log10) + "\n";
    output.innerHTML += '----------------------------------------------' + "\n";

    output.className = 'strength' + (ret.score + 1);
  }
  else {
    output.innerHTML = '';
  }
}
