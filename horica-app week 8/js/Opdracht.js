var fris = 0;
var bier = 0;
var wijn = 0;
var bbal8 = 0;
var bbal16 = 0;
const PRICEFRIS = 2.00;
const PRICEBIER = 4.50;
const PRICEWIJN = 5.50;
const PRICEBBAL8 = 3.00;
const PRICEBBAL16 = 4.50;

function start(){
	while (loop = true) {
		order = prompt("Welke bestelling wilt u toevoegen?\n\n Kies uit fris, bier, wijn of snack. Type 'stop' om de rekening te krijgen") .toLowerCase();
		if (order == "fris"){
			aantalFris = Number(prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?"));
			fris = fris + aantalFris
			if (fris == 0){
				alert("U heeft niets toegevoegd.");
			}
			else if (isNaN(fris)){
				alert("Bestelling mislukt, voer a.u.b. een getal in.");
			}
			else {
				alert("Klik op OK om verder te gaan.\n\nAantal: "+ fris +"\nPrijs: €"+ (fris*PRICEFRIS).toFixed(2));
			}
		}
		else if (order == "bier"){
			aantalBier = Number(prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?"));
			bier = bier + aantalBier
			if (bier == 0){
				alert("U heeft niets toegevoegd.");
			}
			else if (isNaN(bier)){
				alert("Bestelling mislukt, voer a.u.b. een getal in.");
			}
			else {
				alert("Klik op OK om verder te gaan.\n\nAantal: "+ bier +"\nPrijs: €"+ (bier*PRICEBIER).toFixed(2));
			}
		}
		else if (order == "wijn"){
			aantalWijn = Number(prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?"));
			wijn = wijn + aantalWijn
			if (wijn == 0){
				alert("U heeft geen wijn toegevoegd.");
			}
			else if (isNaN(wijn)){
				alert("Bestelling mislukt, voer a.u.b. een getal in.");
			}
			else {
				alert("Klik op OK om verder te gaan.\n\nAantal: "+ wijn +"\nPrijs: €"+ (wijn*PRICEWIJN).toFixed(2));
			}
		}
		else if (order == "snack"){
			snack = prompt("Hoeveel snacks wilt u toevoegen aan uw bestelling?\n\nU kunt kiezen uit schalen van 8 of 16 bitterballen.");
			if (snack == 8){
				aantalBbal8 = Number(prompt("Hoeveel schalen van 8 bitterballen wilt u bestellen?"));
				bbal8 = bbal8 + aantalBbal8
					if (bbal8 == 0){
						alert("U heeft geen bitterballen toegevoegd.");
					}
					else {
						alert("Klik op OK om verder te gaan.\n\nAantal: "+ bbal8 +"\nPrijs: €"+ (bbal8*PRICEBBAL8).toFixed(2));
					}
			}
			else if (snack == 16){
				aantalBbal16 = Number(prompt("Hoeveel schalen van 16 bitterballen wilt u bestellen?"));
				bbal16 = bbal16 + aantalBbal16
					if (bbal16 == 0){
						alert("U heeft geen bitterballen toegevoegd.");
					}
					else {
						alert("Klik op OK om verder te gaan.\n\nAantal: "+ bbal16 +"\nPrijs: €"+ (bbal16*PRICEBBAL16).toFixed(2));
					}
			}
			else if (isNaN(snack)){
				alert("Bestelling mislukt, voer a.u.b. een getal in.\n\n Kies tussen 8 of 16.");
			}
			else {
				alert("Bestelling mislukt, probeer opnieuw!\n\n Kies tussen 8 of 16.");
			}
		}
		else if (order == "stop") {
			loop = false
			
			var totalFris = fris*PRICEFRIS;
			var totalBier = bier*PRICEBIER;
			var totalWijn = wijn*PRICEWIJN;
			var totalBbal8 = bbal8*PRICEBBAL8;
			var totalBbal16 = bbal16*PRICEBBAL16;

			var totalPrice = totalFris + totalBier + totalWijn + totalBbal8 + totalBbal16;

			if (totalFris > 0){
				document.getElementById("FrisBill").innerHTML = "Het aantal fris wat u heeft besteld: " + fris
    			document.getElementById("Frispt").innerHTML = "Dat kost dan €" + totalFris
    		}
    		if (totalBier > 0){
    			document.getElementById("BierBill").innerHTML = "Het aantal bier wat u heeft besteld: " + bier
 			   	document.getElementById("Bierpt").innerHTML = "Dat kost dan €" + totalBier
    		}
    		if (totalWijn > 0){
				document.getElementById("WijnBill").innerHTML = "Het aantal wijn wat u heeft besteld: " + wijn
 			   	document.getElementById("Wijnpt").innerHTML = "Dat kost dan €" + totalWijn
    		}
    		if (totalBbal8 > 0){
    			document.getElementById("Bbal8Bill").innerHTML = "Het aantal bitterbalschalen van 8 dat u heeft besteld: " + bbal8
	 	   		document.getElementById("Bbal8pt").innerHTML = "Dat kost dan €" + totalBbal8
	 		}
    		if (totalBbal16 > 0){
		    document.getElementById("Bbal16Bill").innerHTML = "Het aantal bitterbalscahelen van 16 dat u heeft besteld: " + bbal16
		    document.getElementById("Bbal16pt").innerHTML = "Dat kost dan €" + totalBbal16
			}
 		   	document.getElementById("Bill").innerHTML = "Het totale bedrag is: €" + totalPrice;

		return
		}
		else {
			alert("Dit is geen optie.\n\n U kunt alleen kiezen uit 'fris', 'bier', 'wijn', 'snacks' en 'stop'");
		}
	}
}
start();