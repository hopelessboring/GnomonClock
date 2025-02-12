var t0;					// zeit des letzten aufrufs
var interval = 60000;	// aktualisierungsintervall
var delta_total = 0;	// aufsummierte abweichungen
let updateInterval; // Store interval ID

function setTime() {
    // Update time display immediately
    updateTimeDisplay();

    // Set up animation delays as before
    d = new Date();
    delay = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();

    console.log(d);
    console.log('set new delay -' + delay + 's');

    // set animation delay
    document.getElementById("bg-h1").style.animationDelay = '-' + delay + 's';
    document.getElementById("bg-h2").style.animationDelay = '-' + delay + 's';
    document.getElementById("bg-m1").style.animationDelay = '-' + delay + 's';
    document.getElementById("bg-m2").style.animationDelay = '-' + delay + 's';
    document.getElementById("bg-s1").style.animationDelay = '-' + delay + 's';
    document.getElementById("bg-s2").style.animationDelay = '-' + delay + 's';

    document.getElementById("fg-h1").style.animationDelay = '-' + delay + 's';
    document.getElementById("fg-h2").style.animationDelay = '-' + delay + 's';
    document.getElementById("fg-m1").style.animationDelay = '-' + delay + 's';
    document.getElementById("fg-m2").style.animationDelay = '-' + delay + 's';
    document.getElementById("fg-s1").style.animationDelay = '-' + delay + 's';
    document.getElementById("fg-s2").style.animationDelay = '-' + delay + 's';

    // Store the interval ID so we can clear it later
    updateInterval = setInterval(updateTimeDisplay, 1000);

    t0 = d.getTime();
    setInterval(reload_page, interval);
}

function updateTimeDisplay() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('bg-h1').textContent = hours[0];
    document.getElementById('bg-h2').textContent = hours[1];
    document.getElementById('bg-m1').textContent = minutes[0];
    document.getElementById('bg-m2').textContent = minutes[1];
    document.getElementById('bg-s1').textContent = seconds[0];
    document.getElementById('bg-s2').textContent = seconds[1];

    document.getElementById('fg-h1').textContent = hours[0];
    document.getElementById('fg-h2').textContent = hours[1];
    document.getElementById('fg-m1').textContent = minutes[0];
    document.getElementById('fg-m2').textContent = minutes[1];
    document.getElementById('fg-s1').textContent = seconds[0];
    document.getElementById('fg-s2').textContent = seconds[1];
}

function reload_page() {
    console.log('reload_page fired');

    d = new Date();
    runtime = d.getTime() - t0;    // duration since last run, should be = 60000
    delta = runtime - interval;     // deviation of runtime from expected value
    t0 = d.getTime();              // store current time

    delta_total += delta;          // sum of all deviations
    if (Math.abs(delta_total) > 60000) {  // if total drift exceeds 1 minute
        location.reload();
    }
}