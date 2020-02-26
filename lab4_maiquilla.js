function generator()
{
	
	
	
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	var d = document.getElementById("d").value;
	var e = document.getElementById("e").value;
	var f = document.getElementById("f").value;
	var depart = document.getElementById("depart").value;
	var ret = document.getElementById("ret").value;
	var check = d.includes("@");
	
	if(!a||!b||!c||!d||!e||!f||!depart||!ret){
		
		alert("Please don't leave a blank");
	}
	// else{
		// return(1);
	// }
	 else if(check == false){
		alert("Must be a valid email address!!");
		if(depart >= ret){
		alert("Please check your departure and return date..");
	}
	}
	// else {
		// return(1);
	// }
	 else if(depart >= ret){
		alert("Please check your departure and return date..");
		 if(check == false){
		alert("Must be a valid email address!!");
		 }
		
	}
	// else{
		// return(1);
	// }
	else{
   document.getElementById("rate").innerHTML = "Booking Succes... "
   document.getElementById("rates").innerHTML = "Thank you " + b +", Here's your inputted information: "
   document.getElementById("rate1").innerHTML = "Last Name: "+a;
   document.getElementById("rate2").innerHTML = "First Name: "+b;
   document.getElementById("rate3").innerHTML = "Gender: "+c;
   document.getElementById("rate4").innerHTML = "Email Address: "+d;
   document.getElementById("rate5").innerHTML = "Origin: "+e;
   document.getElementById("rate6").innerHTML = "Destination: "+f;
   document.getElementById("rate7").innerHTML = "Departure Date: "+depart;
   document.getElementById("rate8").innerHTML = "Return Date: "+ret;
   
	}
	
}


