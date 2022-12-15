

function showHello(str){
	
	var request = new XMLHttpRequest();// per Explorer bisogna usare var xmlwind = new ActiveXObject();
	
	request.onreadystatechange = function(){//callback
		if (this.readyState == 4 && this.status == 200){//quando la risposta è caricata con successo
			console.log(request.responseText);
			document.getElementById("ServerResponse").innerHTML = request.responseText;
		}
	}
	
	request.open("GET","saluto?user="+str, true);//setto la chiamata al server in maniera asincrona
	request.send();//invio la richiesta
	
}