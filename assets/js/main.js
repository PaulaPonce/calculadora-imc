
function calcular(){
	var p = document.getElementById('peso').value;
	var e = document.getElementById('estatura').value;

	var res = (p / (e*e)).toFixed(2);
	alert(res);
}

