
//Changes class of div surrounding checked radiobuttons
//that reflect different css styles called
//highlight and nohighlight
function highlightRadioButtons() {
	
    //highlight radio button with radioid1 if checked
	if(document.getElementById('radioButton1').checked == true){
	document.getElementById('radioDiv1').classList = "highlight";
	document.getElementById('radioDiv2').classList = "nohighlight";
	document.getElementById('radioDiv3').classList = "nohighlight";
	
	}
	else if(document.getElementById('radioButton2').checked == true){
	document.getElementById('radioDiv1').classList = "nohighlight";
	document.getElementById('radioDiv2').classList = "highlight";
	document.getElementById('radioDiv3').classList = "nohighlight";
	}
	
	else if(document.getElementById('radioButton3').checked == true){
	document.getElementById('radioDiv1').classList = "nohighlight";
	document.getElementById('radioDiv2').classList = "nohighlight";
	document.getElementById('radioDiv3').classList = "highlight";
	}
	
    //don't highlight any radio buttons if checked
	else {
	document.getElementById('radioDiv1').classList = "nohighlight";
	document.getElementById('radioDiv2').classList = "nohighlight";
	document.getElementById('radioDiv3').classList = "nohighlight";
	}
	
}

//Changes class of div surrounding checked check boxes
//that reflect different css styles
function highlightCheckBoxes() {
	
    //highlight checkBox1 if checcked
	if(document.getElementById('checkBox1').checked == true){
	document.getElementById('checkBoxDiv1').classList = "highlight";
	
	}
	else{
		document.getElementById('checkBoxDiv1').classList = "nohighlight";
	}
	
	if(document.getElementById('checkBox1').checked == true){
	document.getElementById('checkBoxDiv2').classList = "highlight";
	
	}
	else{
		document.getElementById('checkBoxDiv2').classList = "nohighlight";
	}
	
	if(document.getElementById('checkBox3').checked == true){
	document.getElementById('checkBoxDiv3').classList = "highlight";
	
	}
	else{
		document.getElementById('checkBoxDiv3').classList = "nohighlight";
	}
	
}


