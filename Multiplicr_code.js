function searchMult(){
	var mult = document.getElementById("mult").value;
	var resultDiv = document.getElementById("result");
	var result = "";
	var n1 = 0;
	var n2 = 0;
	
	resultDiv.innerHTML = "";
	
	for(var i = 0; i < 1000; i++){
		for(var j = 0; j < 1000; j++){
			if((i * j) == mult){
				result += i + " x " + j + " = " + mult;	
				result += "<br>"
			}
		}
	}
			
	if(mult != ""){
		resultDiv.innerHTML += result;
	}
}
	
