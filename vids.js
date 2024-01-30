const vids = ["Videos /Shia-Doit.mp4", "Videos /Joey-Goes-Off.mp4", "Videos /Joey-D-MD.mp4"]

const chosen = Math.floor(Math.random() * 3);

const vidCh = vids[chosen]

const video = document.getElementById("video").src = vidCh;

