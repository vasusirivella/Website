function fun() {
    var n = document.getElementById("Voter_name").value;
    var a = document.getElementById("Voter_age").value;
    var g = document.getElementById("Gender").value;
    if (a >= 18 && g === "Female") {
        alert(n+' Voting Successfully.');
    }
    else if (a >= 21 && g === "Male") {
        alert(n+' Voting Successfully.');
    }
    else {
        alert("Not Egilible for vote.");
    }
}
