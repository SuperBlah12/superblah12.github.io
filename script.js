const input = document.querySelector("#myInput");
const submitForm = document.querySelector("#submitForm");
const progressBar = document.querySelector("#progress");

var GAME = false;
var DEBUG = true;

var pass = [false,false,false,false,false,false,false,false,false,false,false,false,false]


var displayKeys = ["$8!2V@N5$H03","Month$","8agels","l!ttletwelvetoes","2pointfivefour","GanVmede","M@gnesium","DragoNs","Disciple5","birthStones","cHristmas","Virg0","Blu3"];

var FinalMessage = "SB12 VANS SHOE"
//SB12 VANS SHOE

var currentDir = "C:\\>"
/* TODO:
 * DIR
 * SYSTEMINFO 
 */
 
 var currentScreen = ""


window.onload = function () {
  if (DEBUG) {
	print('DEBUG MODE ACTIVE',0);
	input.disabled = false;
	input.value = currentDir;
  } else {
	sConnect()
  }
};

const textArea = document.querySelector("#textArea");

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  rawCommand = input.value.substring(currentDir.length)
  command = rawCommand.toLowerCase()
  if(!GAME){
	processInput(command,rawCommand);
  } else {
	processGameInput(command,rawCommand);
  }
  textArea.scrollTop = textArea.scrollHeight;
  input.value = currentDir;
});

async function sConnect() {
  input.disabled = true;
  await print('Connecting... Please wait. ',50);
  await sleep(5000)
  await addPrint('\nLoading variables...',50);
  await sleep(2000)
  await addPrint(' Done')
  await sleep(500)
  await addPrint('\nLoading scripts...',50);
  await sleep(4000)
  await addPrint(' Done')
  await sleep(500)
  await addPrint('\nEngaging protocols...',50);
  await sleep(3000)
  await addPrint(' Done')
  await sleep(500)
  await addPrint('\nInitializing Connection.',50);
  await addPrint(".....",800);
  await addPrint("..",2000);
  await sleep(2000)
  await addPrint(" Done",50);
  await sleep(500)
  await print("Connected! Type /list for the list of all avaiable commands.",50);
  input.disabled = false;
  input.value = currentDir;
};

function sEngage() {
	matrixEffect();
    sClear();
    print("Follow the white rabbit.",50);
}

function sClear() {
  textArea.value = "";
  input.value = currentDir;
};

function sGame() {
	GAME = true;
	drawGameScreen();
}

function sList() {
	const commandList = [
		"",
		"Available commands:",
		"list or help  - List all commands.",
		"clear or cls - Clear screen.",
		"connect - Connect to the server.",
		"dir - List files on server.",
		"Run programs (ending in .exe) by typing their name.)"
	];
	var arrJoin = commandList.join("\n");
	addPrint(arrJoin);
	input.value = currentDir;
};

async function sDir() {
	await print(""+currentDir+"dir\n");
	var arrJoin = ""
	var rootList = [
		"",
		"Volume in drive C has no label.",
		"Volume Serial Number is SB12-HBBC",
		" ",
		"Directory of C:\\",
		"08/13/2023  01:29 PM   <DIR>          boot",
		"09/09/2023  12:10 PM   <DIR>          Log",
		"08/13/2023  01:29 PM   <DIR>          Program Files",
		"08/13/2023  01:29 PM   <DIR>          Users",
		"09/09/2023  12:10 PM   <DIR>          Windows",
		"08/26/2023  05:27 PM           10,116 birthday.exe",
		"05/18/2020  01:29 PM            1,715 engage.exe",
		"            2 File(s)          11,831 bytes",
		"            6 Dir(s)    12,884,901,888 bytes free",
	];
	arrJoin = rootList.join("\n")
	addPrint(arrJoin);
	input.value = currentDir;
};

function matrixEffect() {
	let c = document.getElementById("c");
	let ctx = c.getContext("2d");

	//making the canvas full screen
	c.height = window.innerHeight + 200;
	c.width = window.innerWidth;

	//chinese characters - taken from the unicode charset
	let chinese =
	"田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
	//converting the string into an array of single characters
	chinese = chinese.split("");

	let fontSize = 16;
	let columns = c.width / fontSize; //number of columns for the rain
	//an array of drops - one per column
	let drops = [];
	//x below is the x coordinate
	//1 = y co-ordinate of the drop(same for every drop initially)
	for (let x = 0; x < columns; x++) drops[x] = 1;

	//drawing the characters
	function draw() {
		//Black BG for the canvas
		//translucent BG to show trail
		ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
		ctx.fillRect(0, 0, c.width, c.height);

		ctx.fillStyle = "#0F0"; //green text
		ctx.font = fontSize + "px arial";
		//looping over drops
		for (let i = 0; i < drops.length; i++) {
			//a random chinese character to print
			let text = chinese[Math.floor(Math.random() * chinese.length)];
			//x = i*fontSize, y = value of drops[i]*fontSize
			ctx.fillText(text, i * fontSize, drops[i] * fontSize);

			//sending the drop back to the top randomly after it has crossed the screen
			//adding a randomness to the reset to make the drops scattered on the Y axis
			if (drops[i] * fontSize > c.height && Math.random() > 0.975) drops[i] = 0;

			//incrementing Y coordinate
			drops[i]++;
		}
	}
	setInterval(draw, 33);
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processGameInput(input,rawInput){
	switch(input){
		case "test":
			if(DEBUG)
				await updateGameScreen("Hi Tyler!")
			else
				await updateGameScreen("ERROR - DEBUG MODE NOT ACTIVE")
			break;
		case "$8!2V@N5SH03":
		case "$8!2v@n5sh03":
			await drawVans()
			break;
		//PASSCODES
		case "months": //ONE
			pass[1] = true;
			await updateGameScreen("[LOCATION HINT].");
			break;
		case "bagel":
		case "bagels": //TWO
			pass[2] = true;
			await updateGameScreen("[LOCATION HINT].");
			break;
		case "little twelvetoes":
		case "littletwelvetoes": //THREE
			pass[3] = true;
			await updateGameScreen("[LOCATION HINT]");
			break;
		case "twopointfivefour":
		case "2.54":
		case "two point five four": //FOUR
			pass[4] = true;
			await updateGameScreen("[LOCATION HINT]");
			break;
		case "ganymede": //FIVE
			pass[5] = true;
			await updateGameScreen("[LOCATION HINT]");
			break;
		case "magnesium": //SIX
			pass[6] = true;
			await updateGameScreen("[LOCATION HINT]");
			break;
		case "dragon":
		case "dragons": //SEVEN
			pass[7] = true;
			await updateGameScreen("[LOCATION HINT]");
			break;
		case "disciples": //EIGHT
			pass[8] = true;
			await updateGameScreen("[LOCATION HINT]");
			break;
		case "birth stones"
		case "birthstones": //NINE
			pass[9] = true;
			await updateGameScreen("[LOCATION HINT]");
			break;
		case "christmas": //TEN
			pass[10] = true;
			await updateGameScreen("[LOCATION HINT]");
			break;
		case "virgo": //ELEVEN
			pass[11] = true;
			await updateGameScreen("[LOCATION HINT]");
			break;
		case "blue": //TWELVE
			pass[12] = true;
			await updateGameScreen("[LOCATION HINT]");
			break;
		//SECONDARY QUESTIONS
		case "dozen"://QUESTION 2
			await updateGameScreen("ERROR - Further decryption needed.","QUERY> Which dozen do you put schmear on?");
			break;
		case "multiplication rock":
		case "multiplication rocks"://QUESTION 3
			await updateGameScreen("ERROR - Further decryption needed.","REQUEST> Define corrupted song.");
			break;
		case "ruler"://QUESTION 4
			await updateGameScreen("ERROR - Further decryption needed.","REQUEST> Convert 1 inch into Centimeters.");
			break;
		case "jupiter"://QUESTION 5
			await updateGameScreen("ERROR - Further decryption needed.","QUERY> Which moon of Jupiter is the largest?");
			break;
		case "chromatic"://QUESTION 7
			await updateGameScreen("ERROR - Further decryption needed.","QUERY> Scales are commonly found in Dungeons", "attached to what mythological creatures?");
			break;
		case "chromatic"://QUESTION 9?
			await updateGameScreen("ERROR - Further decryption needed.","QUERY> Scales are commonly found in Dungeons", "attached to what mythological creatures?");
			break;
		case "zodiac"://QUESTION 11
			await updateGameScreen("ERROR - Further decryption needed.","QUERY> September 7th, 2011 matches which sign?");
			break;
		case "color wheel"://QUESTION 12
			await updateGameScreen("ERROR - Further decryption needed.","QUERY> Where on the wheel does this color land?", "HEXADECIMAL CODE #3155A9");
			break;
		case "quit":
			GAME = false;
			sClear();
			await print("Game quit.")
			break;
		default:
			await updateGameScreen("ERROR - Input invalid.","Type \"quit\" to exit.","Progress will be saved")
			break;
	}
}

function processInput(input,rawInput) {
	switch(input){
		case "/clear":
		case "cls":
			sClear();
			break;
		case "/list":
		case "help":
			sList();
			break;
		case"/connect":
			sConnect();
			break;
		case "/sb12":
			sSB12();
			flag1 = true;
			break;
		case "utest":
			sUpdateTest();
			break;
		case "engage.exe":
			sEngage();
			break;
		case "birthday.exe":
			sGame();
			break;
		case "dir":
			sDir();
			break;
		case "cd windows":
		case "cd boot":
		case "cd log":
		case "cd program files":
		case "cd \"program files\"":
		case "cd users":
			addPrint("\n"+currentDir+rawInput+"\nCannot enter directory: Access Denied.")
			break;
		default: 
			addPrint("\nERROR: Unknown command! Type /list or 'help' for list of commands.");
			break;
	}
}

async function drawGameScreen(){
	var screen = ""
	screen += placeInMid("Birthday Terminal")+"\n";
	screen += placeInMid("Enter passwords to unlock secrets")+"\n";
	screen += placeInMid("Twelve in total")+"\n";
	screen += "\n";
	screen += placeInMid(" ") + "\n";
	screen += placeInMid(" ") + "\n";
	screen += placeInMid(" ") + "\n";
	screen += "\n\n";
	for (var i = 1;i<13;i++){
		console.log(i)
		var line = i + ":";
		if(pass[i])
			line += displayKeys[i];
		else
			line += space(displayKeys[i].length)
		line += space(20-displayKeys[i].length)
		i = i+1;
		console.log(i)
		line += i + ":";
		if(pass[i])
			line += displayKeys[i];
		else
			line += space(displayKeys[i].length)
		line += space(17-displayKeys[i].length)
		screen += placeInMid(line)+"\n"
	}
	await print(screen,50)
}

async function drawVans(){
	var screen = ""
	screen += placeInMid("===============================================================================")+"\n";
	screen += placeInMid("|                                                   .==.    .=====.           |")+"\n";
	screen += placeInMid("|  ===    /========================                |###|   |#######|          |")+"\n";
	screen += placeInMid("|  \\##\\  /###======================    \\\\  //      |###| |###====###|         |")+"\n";
	screen += placeInMid("|   \\##\\/###/ /##\\   |#\\ |#| /###\\      \\\\//        |##| |==|    |##|         |")+"\n";
	screen += placeInMid("|    \\#####/ /#/\\#\\  |##\\|#| \\#\\        //\\\\        |##|        |###|         |")+"\n";
	screen += placeInMid("|     \\###/ /##==##\\ |#|\\##|   \\#\\     //  \\\\       |##|      |###|           |")+"\n";
	screen += placeInMid("|      \\#/ /##/  \\##\\|#| \\#| \\###/                  |##|    |###|             |")+"\n";
	screen += placeInMid("|                    .==           :#-=-           .=##=============.         |")+"\n";
	screen += placeInMid("|                    :#@%-         .%#==:          |################|         |")+"\n";
	screen += placeInMid("|                    .=%@@@@@@***@@%%###+-         '================'         |")+"\n";
	screen += placeInMid("|                     :-+#%%%%%%%%%@@%%%**-::.                                |")+"\n";
	screen += placeInMid("|                     :::+%%####*#%@%+*#*=***+-... .                          |")+"\n";
	screen += placeInMid("|                     ::::+%%%%%%%%#*-:++=+*-:+-=-:=-.                        |")+"\n";
	screen += placeInMid("|                    .:::-=****##%#*+=+##*=+*=+=--.*%*-                       |")+"\n";
	screen += placeInMid("|                    -****##**#%%%#%%@@@@@@@%%#****%%%=                       |")+"\n";
	screen += placeInMid("|                    =@@@%%%%%%%%#%%%%%%%%###%%#%%%###=                       |")+"\n";
	screen += placeInMid("|                    -@@%%%%###%#%%%%%%#####****####*:.                       |")+"\n";
	screen += placeInMid("|                    -%@@%%%%%#%#%%%%%%%###***+-....                          |")+"\n";
	screen += placeInMid("===============================================================================")+"\n";
	await print(screen,10)
}

async function updateGameScreen(messagea = " ",messageb = " ", messagec = " "){
	var screen = ""
	screen += placeInMid("Birthday Terminal")+"\n";
	screen += placeInMid("Enter passwords to unlock secrets")+"\n";
	screen += placeInMid("Twelve in total")+"\n";
	screen += "\n";
	screen += placeInMid(messagea) + "\n";
	screen += placeInMid(messageb) + "\n";
	screen += placeInMid(messagec) + "\n";
	screen += "\n\n";
	for (var i = 1;i<13;i++){
		console.log(i)
		var line = i + ":";
		if(pass[i])
			line += displayKeys[i];
		else
			line += space(displayKeys[i].length)
		line += space(20-displayKeys[i].length)
		i = i+1;
		console.log(i)
		line += i + ":";
		if(pass[i])
			line += displayKeys[i];
		else
			line += space(displayKeys[i].length)
		line += space(17-displayKeys[i].length)
		screen += placeInMid(line)+"\n"
	}
	await print(screen,0)
}

function space(num) {
	var block = "";
	for (i=0;i<num;i++){
		block = block + " ";
	}
	return  block
}

function placeInMid(text){
	var ext = 80-text.length;
	var left = Math.ceil(ext/2)
	var right = ext-left;
	return space(left)+text+space(right);
}

async function print(text, speed=0){
	var screen = "";
	for(i=0;i<text.length;i++){
		if(text[i] === " " || text[i] === "\n"){
			screen += text[i];
			textArea.value = screen;
		}
		else {
			await sleep(speed);
			screen += text[i];
			textArea.value = screen;
		}
	}
	currentScreen = screen;
}

async function addPrint(text, speed=0){
	var screen = "";
	var update = currentScreen + text
	for(i=0;i<update.length;i++){
		if(update[i] === currentScreen[i]){
			screen += update[i];
			textArea.value = screen;
		}
		else {
			await sleep(speed);
			screen += update[i];
			textArea.value = screen;
		}
	}
	currentScreen = screen;
}