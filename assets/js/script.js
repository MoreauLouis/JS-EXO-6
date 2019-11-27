var validation = document.getElementById('submit');
validation.addEventListener('click', f_valid);
function f_valid() {
	var Shoe = document.getElementById(`Shoe`).value;
	var Birth  = document.getElementById(`Birth`).value;

  var result = ((Shoe * 2 + 5) * 50) - Birth + 1769;
  alert(result);
}
