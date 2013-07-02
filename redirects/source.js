window.onload = function () {
    document.getElementById("open-with-redirection").onclick = function () {
        window.open("http://MichaelPro.local/~mbishop/index.html");
    };

    document.getElementById("open-without-redirection").onclick = function () {
    window.open("/redirects/authenticated.html");
    };
}

