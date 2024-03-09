var son1 = +prompt("1-sonni kriting")
var son2 = +prompt("2-sonni kriting")
var son3 = +prompt("3-sonni kriting")

var kichikSon = son1;
var kattaSon = son1;

if (son2 < kichikSon) {
    kichikSon = son2;

} else if (son2 > kattaSon) {
    kattaSon = son2;
}

if (son3 < kichikSon) {
    kichikSon = son3;

} else if (son3 > kattaSon) {
    kattaSon = son3;
}

var ortaQiymat = (son1 + son2 + son3) - kichikSon - kattaSon;
alert(" o'rta qiymat " + ortaQiymat);

