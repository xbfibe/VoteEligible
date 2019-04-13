function vote(){
	var age;

	age = document.getElementById("Age").value;

	if(age < 18){
		document.write("UnEligible to Vote");
	}else{
		document.write("Eligible to Vote");
	}
}