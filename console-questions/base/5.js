function a() {
    var temp = 10;
    function b() {
        console.log(temp);
    }
    b();
}
a();

function a() {
    var temp = 10;
    b();
}
function b() {
    console.log(temp);
}
a();

// function a 两个都会变量提升