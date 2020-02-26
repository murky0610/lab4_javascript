function generator() {

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;
    var depart = document.getElementById("depart").value;
    var ret = document.getElementById("ret").value;
    var check = d.includes("@");

    if (!a || !b || !c || !d || !e || !f || !depart || !ret) {

        alert("Please don't leave a blank");
    } else if (check == false) {
        alert("Must be a valid email address!!");
        if (depart >= ret) {
            alert("Please check your departure and return date..");
        }
    } else if (depart >= ret) {
        alert("Please check your departure and return date..");
        if (check == false) {
            alert("Must be a valid email address!!");
        }

    } else {
        alert("Booking Succes!!! ");

    }

}