let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text="bold";
tg.MainButton.setText("italic")
tg.MainButton.textColor = "#F55353";
tg.MainButton.color = "143F6B";
tg.MainButton.setParams = ("yellow": "#FFD700"});


let btn = document.getElementById("btn");
btn.addEventListener('click', function(){
	if (tg.MainButton.isVisible){
		tg.MainButton.hide()
	}
	else{
		tg.MainButton.show()
	}
});


let btnED = document.getElementById("btnED")
btnEd.addEventListener('click', function(){
	if (tg.MainButton.isActive){
		tg.MainButton.setParams({"red": "#B22222"});
		tg.MainButton.disable();
	}
	else{
		tg.MainButton.setParams({"yellow": "#FFD700"});
		tg.MainButton.enable();
	}
});


Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send");
});


let usercard = document.getElementById("usercard");

let profName = document.createElement('p');
profName.innerText = `$(tg.initDataUnsafe.user.first_name}
${tg.intiDataUnsafe.user.last_name}
$(tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
usercard.appendChild(profName);

let userid = document.createElement('p');
userid.innerText = `$(tg.initDataUnsafe.user.id}`;
usercard.appendChild(userid);
