

//create array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

var imageList = new Array();
imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
imageList[5] = "images/drawing/thumbs/artwork_6.jpg";
imageList[6] = "images/drawing/thumbs/artwork_7.jpg";
imageList[7] = "images/drawing/thumbs/artwork_8.jpg";
imageList[8] = "images/drawing/thumbs/artwork_9.jpg";
imageList[9] = "images/drawing/thumbs/artwork_10.jpg";
imageList[10] = "images/drawing/thumbs/artwork_11.jpg";
imageList[11] = "images/drawing/thumbs/artwork_12.jpg";
imageList[12] = "images/drawing/thumbs/artwork_13.jpg";
imageList[13] = "images/drawing/thumbs/artwork_14.jpg";
imageList[14] = "images/drawing/thumbs/artwork_15.jpg";
imageList[15] = "images/drawing/thumbs/artwork_16.jpg";
imageList[16] = "images/drawing/thumbs/artwork_17.jpg";

//**jws The commented out code below I had to do to get the lists assigned and visible in function below.
//**Yet saw on W3C Schools that if you assign a variable without declaring it with var then it becomes global automatically.
// var drawingList = new Array();
// var oilList = new Array();
// var watercolorList = new Array();

// var drawingCount = 25;
// var oilCount = 8;
// var watercolorCount = 10;
// 	
// for(var i = 0; i < drawingCount; i++)
// {
	// drawingList[i] = "images/drawing/thumbs/artwork_" + (i+1) + ".jpg";
// 		
// }
// for(var j = 0; j < oilCount; j++)
// {
	// oilList[j] = "images/oil/thumbs/artwork_" + (j+1) + ".jpg";
// }
// 
// for(var k = 0; k < watercolorCount; k++)
// {
	// watercolorList[k] = "images/watercolor/thumbs/artwork_" + (k+1) + ".jpg";
// }
//**jws end of commented out code

//buildDrawingList I wanted to use loops to build my lists also. I want to also thin this out a little.
//tried looking up getting a count of files in a directory but can't find where javascript has that ability on its own.
function buildDrawingList()
{
	var i = 0;

	var drawingCount = 25;
	var oilCount = 8;
	var watercolorCount = 10;
	//If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
	//http://www.w3schools.com/js/js_scope.asp
	//I tried just declaring the variable above without defining it yet when I defined it in one function it was not visible in the other function.
	drawingList = new Array();
	oilList = new Array();
	watercolorList = new Array();
	//i counter is declared above and I use it over and over and just reset it to 0 before using it again.
	for(;i < drawingCount; i++)
	{
		drawingList[i] = "images/drawing/thumbs/artwork_" + (i+1) + ".jpg";
		
	}
	i = 0;
	for(;i < oilCount; i++)
	{
		oilList[i] = "images/oil/thumbs/artwork_" + (i+1) + ".jpg";
	}
	i = 0;
	for(;i < watercolorCount; i++)
	{
		watercolorList[i] = "images/watercolor/thumbs/artwork_" + (i+1) + ".jpg";
	}
	
}
//create the buildThumbnail function
function buildThumbnails()
{
    //hook onto the thumbs div
    var drawingThumbsDiv = document.getElementById("drawingThumbs");
    var oilThumbsDiv = document.getElementById("oilThumbs");
    var watercolorThumbsDiv = document.getElementById("watercolorThumbs");
    var counter = 0;
    //create an output variable
    var output = "";
    var drawingOutput = "";
    var oilOutput = "";
    var watercolorOutput = "";
    //I am using individual counters as something weird happened so did not work like above
    var i = 0;
    for(; i < drawingList.length; i++)
    {
        //concatenation assignment operator..
        drawingOutput += '<img src="' + drawingList[i] + '" />';
    }
	i = 0;
    for(; i < oilList.length; i++)
    {
        //concatenation assignment operator..
        oilOutput += '<img src="' + oilList[i] + '" />';
    }
	i = 0;
    for(; i < watercolorList.length; i++)
    {
        //concatenation assignment operator..
        watercolorOutput += '<img src="' + watercolorList[i] + '" />';
    }
    drawingThumbsDiv.innerHTML = drawingOutput;
    oilThumbsDiv.innerHTML = oilOutput;
    watercolorThumbsDiv.innerHTML = watercolorOutput;
    // thumbsDiv.innerHTML = 
    // '<img src="' + imageList[0] + '" />' + 
    // '<img src="' + imageList[1] + '" />' +
    // '<img src="' + imageList[2] + '" />' +
    // '<img src="' + imageList[3] + '" />' +    
    // '<img src="' + imageList[4] + '" />'
    // ;
}



window.onload=function()
{
	buildDrawingList();
	buildThumbnails();//use or fire off this function
	//or invoke the function

};

