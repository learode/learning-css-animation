

let $body = document.getElementsByTagName("body")[0];

$body.className += "still-loading";

window.addEventListener("load", showPage, false);


function showPage() {
    console.log($body.className)
  $body.className = $body.className.replace("still-loading", "");
};



