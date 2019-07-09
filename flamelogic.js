//DOM Objects
var my = document.querySelector("#my-name");
var crush = document.querySelector("#crush-name");
var checker = document.querySelector("#checker");
var result = document.querySelector("#result");

//Function to remove letters
function removeNonLetters(a){
	var newString = "";
	for(var i=0; i<a.length; i++){
		if((a[i]>='A' && a[i]<='Z')||(a[i]>='a' && a[i]<='z')){
			newString += a[i];
		}
	}
	return newString;
};

checker.onclick = function(){    
    result.innerHTML = flameChecker(compareStrings(my.value, crush.value)); //Works
};

function flameChecker(n){
    var fVar = n%5;//The remainder determines the result
    var res = "";
    switch(fVar){
        case 1:
            res = "Friends";
            break;
        case 2:
            res = "Lovers";
            break;
        case 3:
            res = "Affectionate";
            break;
        case 4:
            res = "Marriage";
            break;
        case 0:
            res = "Enemies";
            break; 
    }
    return res;
}

function compareStrings(a,b){
    a = removeNonLetters(a.toLowerCase());
    b = removeNonLetters(b.toLowerCase());
    // Logic below
    for(var i=0;i<a.length;i++){
        for(var j=0;j<b.length;j++){
            if(a.charAt(i)===b.charAt(j)){
                a = a.slice(0,i) + a.slice(i+1);
                b = b.slice(0,j) + b.slice(j+1);
                i=0;
            }
        }
    }
    return a.length + b.length;
}