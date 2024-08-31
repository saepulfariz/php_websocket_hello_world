var conn = new WebSocket('ws://localhost:8080');
conn.onopen = function (e) {
    console.log("Connection established!");
};

conn.onmessage = function (e) {
    // console.log(e.data);

    var msg = e.data.split(":");
    // console.log(msg);

    if (msg[0].trim() == 'setwelcome') {
        var writeback = msg[1];
        var output = document.getElementById('output');
        if (output) {
            output.innerHTML = writeback;
        }
        // conn.send('write:' + writeback);
    }
};

var btnSubmit = document.getElementById('submit');

if (btnSubmit) {

    btnSubmit.addEventListener('click', function () {
        var runningText = document.getElementById('running-text').value;
        conn.send("setwelcome : " + runningText);
    })
}

conn.onclose = function () {
    //$("#calling").html("Teller <?=$teller;?> Off");
    console.log('Gak konek');
};