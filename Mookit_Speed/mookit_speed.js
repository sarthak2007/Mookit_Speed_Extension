document.onkeydown = function (e) {
    if (e.shiftKey) {
        curr_speed = document.querySelector('video').playbackRate;

        // keycode for ","
        if (e.keyCode == 188 && curr_speed > 0) {
            document.getElementById('currentSpeed').innerText = (curr_speed - 0.25) + "x"
            document.querySelector('video').playbackRate = curr_speed - 0.25
        }
        // keycode for "."
        else if (e.keyCode == 190 && curr_speed < 16) {
            document.getElementById('currentSpeed').innerText = (curr_speed + 0.25) + "x"
            document.querySelector('video').playbackRate = curr_speed + 0.25
        }
    }
};