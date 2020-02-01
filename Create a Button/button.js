var btn = document.getElementById("btn");
btn.innerHTML = "0";
document.body.appendChild(btn);

btn.onclick = function() {
    btn.innerHTML++;
}