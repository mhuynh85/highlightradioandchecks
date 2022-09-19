# highlightradioandchecks
Functions that highlight selected radio buttons or check boxes.

Highlights are caused by changes in classes called 
highlight and nohighlight that reflect different css class styles.

Requires checkboxes and radio buttons surrounded by divs that are targeted for highlighting.

HTML example:
<div id='radioButton1Container' class='nohighlight'>
<input type='radio' id='radioButton1' name='someName' value='someValue' onclick='highlightRadioButtons()'> RadioButtonName
</div>

CSS examples:

.nohighlight {
	
	background-color: white;
	cursor: pointer;
	font-size: 24px;
	transition: 300ms;
	padding: 5px;
}

.highlight{
	
	background-color: yellow;
	cursor: pointer;
	font-size: 24px;
	transition: 300ms;
	padding: 5px;
	color: white;
}
