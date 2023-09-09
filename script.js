const input = document.querySelector("#myInput");
const submitForm = document.querySelector("#submitForm");
const progressBar = document.querySelector("#progress");

var GAME = false;
var DEBUG = false;

var pass = [false,false,false,false,false,false,false,false,false,false,false,false,false]


var displayKeys = ["D!YV@N5SH03S","Dozen","l!ttletwelvetoes","ganYmede","2.V4","m@gnesium","dragoNs","disciple5","birthStones","cHristmas","virg0","blu3","month$"];

var FinalMessage = "DIY VANS SHOES"
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
		case "$D!YV@N5SH03$":
		case "d!yv@n5sh03$":
			await drawVans()
			break;
		//PASSCODES
		case "dozen"://ONE
			pass[1] = true;
			await updateGameScreen("My firewall keeps me warm when outside is cold.","Humans prefer puffy, red, cloud-based solutions.", "REQUEST> Check the Garment Repository.");
			break;
		case "little twelvetoes":
		case "littletwelvetoes": //TWO
			pass[2] = true;
			await updateGameScreen("Computer chips need to be kept cool to run.","QUERY> Is the same true for chocolate chips?","Your next clue will be found beTwix a few.");
			break;
		case "ganymede": //THREE
			pass[3] = true;
			await updateGameScreen("ERROR: Corrupted card detected.","Card requires patching due to physical damage.","QUERY> How do you patch physical damage to a human?");
			break;
		case "twopointfivefour":
		case "2.54":
		case "two point five four": //FOUR
			pass[4] = true;
			await updateGameScreen("NOTIFICATION: Static gateway detected with eternal blooms.","QUERY> What blossoms forever near the seldom-used portal?","Your next clue lies beneath the wooden testament.");
			break;
		case "magnesium": //FIVE
			pass[5] = true;
			await updateGameScreen("ALERT: Memory storage unit detected.","QUERY> Where do past adventures woven in denim rest?","Clue hidden beneath memory patchwork.");
			break;
		case "dragon":
		case "dragons": //SIX
			pass[6] = true;
			await updateGameScreen("ALERT: Buzzing message in the refresh node.","QUERY> Where does joy buzz in Honey's realm?","Find your clue behind the bee's cheerful decree.");
			break;
		case "disciples": //SEVEN
			pass[7] = true;
			await updateGameScreen("Data detected in ancient film archives.","A legendary dozen plans their grand escapade.","ERROR> No \"Oceans\" found in film?");
			break;
		case "birth stones":
		case "birthstones": //EIGHT
			pass[8] = true;
			await updateGameScreen("Patriotic data detected at primary access point.","QUERY> Where does the wooden uncle of freedom stand?","Clue is hidden with the flat statesman at hand.");
			break;
		case "christmas": //NINE
			pass[9] = true;
			await updateGameScreen("ALERT: Minimal effort detected in clue placement strategy.","QUERY> Where has the laziest uncle hidden the next clue?","Investigate the mopping unit's retired bucket.");
			break;
		case "virgo": //TEN
			pass[10] = true;
			await updateGameScreen("Archived birthday celebration data detected.","QUERY> Where is the royal memory of pink attire?","Look behind the portrait of birthday's past.");
			break;
		case "blue": //ELEVEN
			pass[11] = true;
			await updateGameScreen("ALERT: Abandoned virtual paradise portal detected.","QUERY> Where is the gateway to your favorite virtual retreat?","Find your last clue where \"puthaira\" and reality meet.");
			break;
		case "months": //TWELVE
			pass[12] = true;
			await updateGameScreen("NOTIFICATION: Final decryption sequence initiated.","QUERY> Can you identify the glitches in the code sequence?","Enter the anomaly characters to unlock your grand prize essence.");
			break;
		//SECONDARY QUESTIONS
		case "multiplication rock":
		case "multiplication rocks"://QUESTION 2
			await updateGameScreen("ERROR - Further decryption needed.","REQUEST> Define corrupted song.");
			break;
		case "jupiter"://QUESTION 3
			await updateGameScreen("ERROR - Further decryption needed.","QUERY> Which moon of Jupiter is the largest?");
			break;
		case "ruler"://QUESTION 4
			await updateGameScreen("ERROR - Further decryption needed.","REQUEST> Convert 1 inch into Centimeters.");
			break;
		case "chromatic"://QUESTION 6
			await updateGameScreen("ERROR - Further decryption needed.","QUERY> Scales are commonly found in Dungeons", "attached to what mythological creatures?");
			break;
		case "zodiac"://QUESTION 10
			await updateGameScreen("ERROR - Further decryption needed.","QUERY> September 7th, 2011 matches which sign?");
			break;
		case "color wheel"://QUESTION 11
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
			drawVans();
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
	screen += placeInMid("Frequent logins detected at security node.") + "\n";
	screen += placeInMid("QUERY> What blossoms under constant surveillance?") + "\n";
	screen += placeInMid("Your first clue resides under the undying rose.") + "\n";
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
	screen += placeInMid("=========================================================================")+"\n";
	screen += placeInMid("|                                             .==.    .=====.           |")+"\n";
	screen += placeInMid("| ===    /========================           |###|   |#######|          |")+"\n";
	screen += placeInMid("| \\##\\  /###======================  \\\\  //   |###| |###====###|         |")+"\n";
	screen += placeInMid("|  \\##\\/###/ /##\\   |#\\ |#| /###\\    \\\\//     |##| |==|    |##|         |")+"\n";
	screen += placeInMid("|   \\#####/ /#/\\#\\  |##\\|#| \\#\\      //\\\\     |##|        |###|         |")+"\n";
	screen += placeInMid("|    \\###/ /##==##\\ |#|\\##|   \\#\\   //  \\\\    |##|      |###|           |")+"\n";
	screen += placeInMid("|     \\#/ /##/  \\##\\|#| \\#| \\###/             |##|    |###|             |")+"\n";
	screen += placeInMid("|              .==           :#-=-           .=##=============.         |")+"\n";
	screen += placeInMid("|              :#@%-         .%#==:          |################|         |")+"\n";
	screen += placeInMid("|              .=%@@@@@@***@@%%###+-         '================'         |")+"\n";
	screen += placeInMid("|               :-+#%%%%%%%%%@@%%%**-::.                                |")+"\n";
	screen += placeInMid("|               :::+%%####*#%@%+*#*=***+-... .                          |")+"\n";
	screen += placeInMid("|               ::::+%%%%%%%%#*-:++=+*-:+-=-:=-.                        |")+"\n";
	screen += placeInMid("|              .:::-=****##%#*+=+##*=+*=+=--.*%*-                       |")+"\n";
	screen += placeInMid("|              -****##**#%%%#%%@@@@@@@%%#****%%%=                       |")+"\n";
	screen += placeInMid("|              =@@@%%%%%%%%#%%%%%%%%###%%#%%%###=                       |")+"\n";
	screen += placeInMid("|              -@@%%%%###%#%%%%%%#####****####*:.                       |")+"\n";
	screen += placeInMid("|              -%@@%%%%%#%#%%%%%%%###***+-....                          |")+"\n";
	screen += placeInMid("=========================================================================")+"\n";
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
	var ext = 73-text.length;
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