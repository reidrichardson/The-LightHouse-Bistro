// gets date and formats 
// prints in time div

function todate()
{
	var date = new Date();
	var n = date.toDateString();
	var time = date.toLocaleTimeString();

	document.getElementById("time").innerHTML ="Today is: " + n + ' ' + time + " (Eastern Standard Time)";
}


// applies color changing to table rows
window.onload = function()
{
	var test = document.getElementsByTagName('table').length; //Grabs number of tables in document
	for (var i = 0; i < test; i++)//runs through the tables in document
	{
		var x = document.getElementsByTagName('table'); //grabs table
		if (x[i].className == "tableclass") //checks if matches the table class
		{
			var z = x[0].rows.length;
			for (var y = 0; y < z; y++)
			{
				var xx = x[0].getElementsByTagName('tr');
				if (xx[y].className != "tableHeading") //makes sure that it does edit grab table headings
				{
					xx[y].onmouseover = function()   // activates when you mouse over row
					{
						var zz = this.getElementsByTagName('td'); // grabs table data
						for (var yy = 0; yy < z; yy++)
						{
							zz[yy].style.backgroundColor = "lightblue"; // sets background color
							zz[yy].style.color = 'white'; // sets font color
						}
						var  xxx = this.getElementsByTagName('a'); // now checks for hyperlinks
						for (var yyy = 0; yyy < xxx.length; yyy++)
						{
								xxx[yyy].style.color = "yellow"; // changes hyperlinks to yellow color
						}
					}
					xx[y].onmouseout = function() // triggered when your mouse leaves row
					{
						var zz = this.getElementsByTagName('td');  //grab table data
						for (var yy = 0; yy < z; yy++)
						{
							zz[yy].style.backgroundColor = ""; //set background color to null
							zz[yy].style.color = ''; // set text color to null
						}
						var  xxx = this.getElementsByTagName('a'); // target hyperlink
						for (var yyy = 0; yyy < xxx.length; yyy++)
						{
								xxx[yyy].style.color = ""; // set text color to null
						}
					}
				}
			}
		}
	}
}