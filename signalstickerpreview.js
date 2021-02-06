function parseParameters(hash) {
    var params = {};

    hash.split("&").forEach(function (item) {
        var parts = item.split("=");
        if (parts.length == 2) {
            params[parts[0]] = parts[1];
        }
    });

    return params;
}


let container = document.getElementById("add-stickers-button");

let previewButton = document.createElement('button');
previewButton.className = "button button-large";
previewButton.style.margin = "0 auto 20px auto";
previewButton.style.display = "block";

let previewLink = document.createElement("a")

let params = parseParameters(window.location.hash.substr(1));
previewLink.href = `https://signalstickers.com/pack/${params.pack_id}?key=${params.pack_key}`;
previewLink.target = "_blank";
previewLink.className = "no-underline";
previewLink.innerText = "PREVIEW on signalstickers.com";

previewButton.appendChild(previewLink)
container.appendChild(previewButton);
