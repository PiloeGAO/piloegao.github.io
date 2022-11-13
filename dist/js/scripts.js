var text = ["Software Developer", "Pipeline Developer", "~ C++/Python ~", "🏗️🔨💻", "🇫🇷"];
var counter = 0;
var elem = $("#job-title");
setInterval(change, 3000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}