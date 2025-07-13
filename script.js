function firstWord(s) {
  // your code here
	let word = s.trim();

	let spaceIndex = word.indexOf(" ");

	if(spaceIndex === -1){
		return word;
	}else{
		return word.slice(0,spaceIndex);
	}
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
