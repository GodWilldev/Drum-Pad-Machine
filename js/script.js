
$(document).ready(function() {
    $('*').on('keydown', function(e) {
        var key = String.fromCharCode(e.keyCode);
        if (keys.includes(key)) {
            $("#"+key).click();
        }
    });

    sounds.forEach(sound => {
        $("#"+sound.key+"-pad").click(function(e){
            //$("#"+sound.key+"-pad").hover();
            e.preventDefault();
            let k = document.getElementById(sound.key);
            k.pause();
            k.currentTime = 0;
            k.play();

            let message = document.getElementById("pad-name");
            message.textContent = sound.name;

            $("#"+sound.key+"-pad").addClass('drum-pad-triggered');
            $("#pad-name").addClass('message');

            setTimeout(() => {
                $("#"+sound.key+"-pad").addClass('drum-pad').removeClass('drum-pad-triggered');
            }, 100);
        });

    });
});

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const sounds = [
  {
      key: "Q",
      name: "Kick",
      path: "./sound/kick"
  },
  {
      key: "W",
      name: "Hihat Closed",
      path: "./sound/hihat_closed"
  },
  {
      key: "E",
      name: "Snare",
      path: "./sound/snare"
  },
  {
      key: "A",
      name: "Sidestick",
      path: "./sound/sidestick"
  },
  {
      key: "S",
      name: "Hihat Opened",
      path: "./sound/hihat_opened"
  },
  {
      key: "D",
      name: "clap",
      path: "./sound/clap"
  },
  {
      key: "Z",
      name: "Tom High",
      path: "./sound/tom_hi"
  },
  {
      key: "X",
      name: "Tom Low",
      path: "./sound/tom_low"
  },
  {
      key: "C",
      name: "Crash",
      path: "./sound/crash"
  }
];