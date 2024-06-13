let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text="bold";
tg.MainButton.setText("ВЫБЕРИТЕ ТОВАР")
tg.MainButton.textColor = "#000000";
tg.MainButton.color = "#EB6772";
tg.MainButton.hide();

var cotcand = document.getElementById("btn1");
var cotcandps = document.getElementById("pls1");
var cotcandms = document.getElementById("mns1");
var lemon = document.getElementById("btn2");
var lemonps = document.getElementById("pls2");
var lemonms = document.getElementById("mns2");
var don = document.getElementById("btn3");
var donps = document.getElementById("pls3");
var donms = document.getElementById("mns3");
var cof = document.getElementById("btn4");
var cofps = document.getElementById("pls4");
var cofms = document.getElementById("mns4");
var cheesc = document.getElementById("btn5");
var cheescps = document.getElementById("pls5");
var cheescms = document.getElementById("mns5");
var cupcak = document.getElementById("btn6");
var cupcakps = document.getElementById("pls6");
var cupcakms = document.getElementById("mns6");

var items = {
	"cottoncandy": {"kol-vo":0,
					"price":599,
					"sum":0
	},
	"lemonade": {"kol-vo":0,
				"price":295,
				"sum":0,
	},
	"donut": {"kol-vo":0,
			"price":550,
			"sum":0
	},
	"coffee": {"kol-vo":0,
			"price":495,
			"sum":0
	},
	"cheescake": {"kol-vo":0,
				"price":700,
				"sum":0
	},
	"cupcake": {"kol-vo":0,
				"price":299,
				"sum":0
	}
};

function change(food,p) {
	items[food]["kol-vo"] += p;
	if (items[food]["kol-vo"] < 0){
		items[food]["kol-vo"] = 0;
	}		
	items[food]["sum"] = items[food]["kol-vo"] * items[food]["price"];
};

function setmb() {
	let butn = items["cottoncandy"]["sum"] + items["lemonade"]["sum"] + items["donut"]["sum"] + items["coffee"]["sum"] + items["cheescake"]["sum"] + items["cupcake"]["sum"];
	tg.MainButton.text = String(butn/100) + " zł";
	tg.MainButton.show();
	tg.MainButton.enable();
	console.log(butn);
};

cotcandps.addEventListener('click', function(){
change("cottoncandy", 1);
cotcand.innerHTML = String(items["cottoncandy"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

lemonps.addEventListener('click', function(){
change("lemonade", 1);
lemon.innerHTML = String(items["lemonade"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

donps.addEventListener('click', function(){
change("donut", 1);
don.innerHTML = String(items["donut"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

cofps.addEventListener('click', function(){
change("coffee", 1);
cof.innerHTML = String(items["coffee"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

cheescps.addEventListener('click', function(){
change("cheescake", 1);
cheesc.innerHTML = String(items["cheescake"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

cupcakps.addEventListener('click', function(){
change("cupcake", 1);
cupcak.innerHTML = String(items["cupcake"]["sum"]/100) + " zł";
console.log(items);
setmb();
});






cotcandms.addEventListener('click', function(){
change("cottoncandy", -1);
cotcand.innerHTML = String(items["cottoncandy"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

lemonms.addEventListener('click', function(){
change("lemonade", -1);
lemon.innerHTML = String(items["lemonade"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

donms.addEventListener('click', function(){
change("donut", -1);
don.innerHTML = String(items["donut"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

cofms.addEventListener('click', function(){
change("coffee", -1);
cof.innerHTML = String(items["coffee"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

cheescms.addEventListener('click', function(){
change("cheescake", -1);
cheesc.innerHTML = String(items["cheescake"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

cupcakms.addEventListener('click', function(){
change("cupcake", -1);
cupcak.innerHTML = String(items["cupcake"]["sum"]/100) + " zł";
console.log(items);
setmb();
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
tg.sendData(String(items));
console.log(items);
});
