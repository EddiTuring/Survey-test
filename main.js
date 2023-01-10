const button = document.querySelector("#finish");

button.addEventListener("click", checkTest);

function checkTest(){
	let result = 0;

	let q1 = document.querySelector("#q1").value.toLowerCase();
	if (q1 === "рейкьявик"){
		result++;
	}
	let q2 = document.querySelector("#q2").value.toLowerCase();
	if (q2 === "токио"){
		result++;
	}

	let q3 = document.querySelector("#q3").value.toLowerCase();
	if (q3 === "хельсинки"){
		result++;
	}

	let q4 = document.querySelector("#q4").value.toLowerCase();
	if (q4 === "брюссель"){
		result++;
	}

	let q5 = document.querySelector("#q5").value.toLowerCase();
	if (q5 === "мадрид"){
		result++;
	}

	alert("Количество правильных ответов:" + result)
	console.log(result)
}
