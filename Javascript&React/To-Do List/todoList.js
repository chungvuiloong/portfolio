						function things_todo(){

							//create a li element


							let list = document.createElement("li", "BUTTON");


							// Testing editing
							// document.getElementsByClassName("li").contentEditable = true;


							let theList = document.getElementById("informationInput").value;


							let items = document.createTextNode(theList);


							list.appendChild(items);
							

							// makes the list editable WITHOUT EDIT BUTTON
							list.contentEditable = true;



								if (theList === "") {
									alert("You must write something");
								}
								else {
									document.getElementById("myList").appendChild(list);
								}
								document.getElementById("informationInput").value ="";

						}



						