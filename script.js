//your code here

const text = document.getElementById("evaluatedText");
const h3 = document.querySelector("h3");
text.addEventListener("keyup",func);
function func() {
	h3.innerText = text.value.length;
}

