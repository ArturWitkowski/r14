$(function() {
function Telefon(marka, cena, kolor, foto) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.foto = foto;
}

Telefon.prototype.printInfo = function () {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
};

Telefon.prototype.showImg = function () {
	$("#phoneImg img").remove();
	$("#phoneImg").append("<img src= images/" + this.foto + ">");
};

var iPhone6S = new Telefon("Apple", 2250, "srebrny", "iPhone6S.jpg");
var lumia930 = new Telefon("Nokia", 2600, "czarny", "lumia.jpg");
var galaxyS6 = new Telefon("Samsung", 3000, "złoty", "samsung.jpg");


$("#btn1").click(function() {lumia930.showImg()});	
$("#btn2").click( function() {iPhone6S.showImg()});
$("#btn3").click(function() {galaxyS6.showImg()});

iPhone6S.printInfo();
lumia930.printInfo();
galaxyS6.printInfo();
	
});


	