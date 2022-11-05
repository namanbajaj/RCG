function generate() {
    var catImg = document.getElementById("cat");
    var info = fetch("https://api.thecatapi.com/v1/images/search");
    info.then(function(response) {
        return response.json();
    }).then(function(data) {
        catImg.src = data[0].url;
    });    
}