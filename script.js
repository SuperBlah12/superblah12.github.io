function encrypt() {
	var inputText = document.getElementById('inputText').value;
	var key = document.getElementById('key').value;
	const alphabet = "abcdefghijklmnopqrstuvwxyz,.!?- ";
	if (inputText && key) {
		key = prepString(key);
		inputText = replaceSpecialChars(inputText);
		console.log(inputText);
		inputText = "-b-" + inputText + "-e-";
		var encryptedText = applyOneTimePad(inputText, key, alphabet, true);
		encryptedText = appendRandomLetters(encryptedText, 3200, alphabet);
		//encryptedText = insertSpace(encryptedText, 80);
		document.getElementById('result').value = encryptedText;
	} else {
		alert("Please enter both text & key.");
	}
}

function decrypt() {
	var inputText = document.getElementById('inputText').value;
	var key = document.getElementById('key').value;
	//var bookmark = document.getElementById('bookmark').checked;
	const alphabet = "abcdefghijklmnopqrstuvwxyz,.!?- ";
	//if (bookmark) {
	//    keyMark = key;
	//    msgMark = inputText;
	//    inputText = getPageText(msgMark);
	//    key = getPageText(keyMark);
	if (inputText && key) {
		key = prepString(key);
		inputText = prepString(inputText);
		var decryptedText = applyOneTimePad(inputText, key, alphabet, false);
		console.log(decryptedText);
		decryptedText = extractSubstring(decryptedText);
		decryptedText = reverseReplaceSpecialChars(decryptedText)
		document.getElementById('result').value = decryptedText;
	} else {
		alert("Please enter both text & key.");
	}
}


function applyOneTimePad(text, key, alphabet, encrypt) {
	// Input validation
	if (typeof text !== 'string' || typeof key !== 'string') {
		throw new Error('Invalid input types. All inputs must be strings.');
	}
	const alphabetLength = alphabet.length;
	let result = '';
	for (let i = 0; i < text.length; i++) {
		const charIndex = alphabet.indexOf(text[i]);
		if (charIndex === -1) { // Check for unsupported characters
			result += text[i]; // Append unchanged for unsupported characters
			continue;
		}
		const keyIndex = alphabet.indexOf(key[i % key.length]);
		let newIndex;
		if (encrypt) {
			newIndex = (charIndex + keyIndex) % alphabetLength;
		} else {
			newIndex = (charIndex - keyIndex + alphabetLength) % alphabetLength;
		}
		result += alphabet[newIndex];
	}
	return result;
}

function prepString(inputString) {
	// A) Convert to lowercase
	let lowerCaseString = inputString.toLowerCase();
	// B) Remove special characters (except comma, period, !, ?, -, and space)
	let sanitizedString = lowerCaseString.replace(/[^a-z0-9.,!\?\- ]/g, '');
	//sanitizedString = sanitizedString.replace('/[\t]', '');
	//console.log(sanitizedString);
	return sanitizedString;
}

function replaceSpecialChars(text) {
	const replacements = {
		"'": '-apro-',
		'"': '-dquo-',
		':': '-coln-',
		';': '-scln-',
		'_': '-uscr-',
		'/': '-slsh-',
		'\\': '-bsls-',
		'|': '-pipe-',
		'+': '-plus-',
		'=': '-eqls-',
		'(': '-lpar-',
		')': '-rpar-',
		'[': '-lsqb-',
		']': '-rsqb-',
		'{': '-lclb-',
		'}': '-rclb-',
		'<': '-lthn-',
		'>': '-gthn-',
		'@': '-aatt-',
		'#': '-hash-',
		'$': '-dllr-',
		'%': '-pcnt-',
		'^': '-cart-',
		'&': '-apsd-',
		'*': '-astk-',
		'~': '-tlde-',
		'`': '-btic-',
		'\n': '-nlne-',
		'\r': '-cret-',
		'\t': '-tabb-',
		'0': '?z?',
		'1': '?o?',
		'2': '?w?',
		'3': '?e?',
		'4': '?r?',
		'5': '?v?',
		'6': '?x?',
		'7': '?s?',
		'8': '?t?',
		'9': '?n?',
		'A': '!a!',
		'B': '!b!',
		'C': '!c!',
		'D': '!d!',
		'E': '!e!',
		'F': '!f!',
		'G': '!g!',
		'H': '!h!',
		'I': '!i!',
		'J': '!j!',
		'K': '!k!',
		'L': '!l!',
		'M': '!m!',
		'N': '!n!',
		'O': '!o!',
		'P': '!p!',
		'Q': '!q!',
		'R': '!r!',
		'S': '!s!',
		'T': '!t!',
		'U': '!u!',
		'V': '!v!',
		'W': '!w!',
		'X': '!x!',
		'Y': '!y!',
		'Z': '!z!'
		// Add more replacements as needed
	};
	return text.split('').map(char => replacements[char] || char).join('');
}

function reverseReplaceSpecialChars(text) {
	const reverseReplacements = {
		'-apro-': "'",
		'-dquo-': '"',
		'-coln-': ':',
		'-scln-': ';',
		'-uscr-': '_',
		'-slsh-': '/',
		'-bsls-': '\\',
		'-pipe-': '|',
		'-plus-': '+',
		'-eqls-': '=',
		'-lpar-': '(',
		'-rpar-': ')',
		'-lsqb-': '[',
		'-rsqb-': ']',
		'-lclb-': '{',
		'-rclb-': '}',
		'-lthn-': '<',
		'-gthn-': '>',
		'-aatt-': '@',
		'-hash-': '#',
		'-dllr-': '$',
		'-pcnt-': '%',
		'-cart-': '^',
		'-apsd-': '&',
		'-astk-': '*',
		'-tlde-': '~',
		'-btic-': '`',
		'-nlne-': '\n',
		'-cret-': '\r',
		'-tabb-': '\t',
		'?z?': '0',
		'?o?': '1',
		'?w?': '2',
		'?e?': '3',
		'?r?': '4',
		'?v?': '5',
		'?x?': '6',
		'?s?': '7',
		'?t?': '8',
		'?n?': '9',
		'!a!': 'A',
		'!b!': 'B',
		'!c!': 'C',
		'!d!': 'D',
		'!e!': 'E',
		'!f!': 'F',
		'!g!': 'G',
		'!h!': 'H',
		'!i!': 'I',
		'!j!': 'J',
		'!k!': 'K',
		'!l!': 'L',
		'!m!': 'M',
		'!n!': 'N',
		'!o!': 'O',
		'!p!': 'P',
		'!q!': 'Q',
		'!r!': 'R',
		'!s!': 'S',
		'!t!': 'T',
		'!u!': 'U',
		'!v!': 'V',
		'!w!': 'W',
		'!x!': 'X',
		'!y!': 'Y',
		'!z!': 'Z',
		'-b-': '',
		'-e-': ''
		// Add more reverse replacements as needed
	};
	let result = text;
	for (const anchor in reverseReplacements) {
		if (reverseReplacements.hasOwnProperty(anchor)) {
			const replacement = reverseReplacements[anchor];
			const regex = new RegExp(escapeRegExp(anchor), 'g');
			result = result.replace(regex, replacement);
		}
	}
	return result;
}
// Function to escape special characters in a string to be used in a regex
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function appendRandomLetters(inputString, length, alphabet) {
	if (inputString.length >= length) {
		return inputString; // No need to append if already at or beyond the desired length
	}

	let result = inputString;
	while (result.length < length) {
		const randomIndex = Math.floor(Math.random() * alphabet.length);
		result += alphabet.charAt(randomIndex);
	}

	return result;
}

/*async function getPageText(hexAddress) {
  const url = `https://libraryofbabel.app/ref/@${hexAddress}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const pageContentDiv = doc.querySelector('.PageContent');
    if (pageContentDiv) {
      const preTag = pageContentDiv.querySelector('pre');
      if (preTag) {
        return preTag.textContent; //textContent preserves newlines
      } else {
        return 'No <pre> tag found within PageContent.';
      }
    } else {
      return 'PageContent div not found.';
    }
  } catch (error) {
    return `Error: ${error.message}`;
  }
}*/

function extractSubstring(inputString) {
	const startMarker = "-b-";
	const endMarker = "-e-";

	const startIndex = inputString.indexOf(startMarker);
	const endIndex = inputString.indexOf(endMarker);

	if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
		return inputString.substring(startIndex, endIndex + endMarker.length);
	} else {
		return null; // Return null if the markers are not found or not in the correct order
	}
}

function insertSpace(str, n) {
	const regex = new RegExp(`.{1,${n}}`, 'g');
	return str.match(regex).join('\n');
}
