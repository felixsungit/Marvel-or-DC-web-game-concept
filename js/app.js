var when = 0;
var correctTimes = 0;
var counter = 10;

var heroProtoype = {
	name: "name",
	marvel: false,
	id: 0,
	shown:false,
	loc: ".png"

};

function Hero (name, marvel, id, shown, loc) {
	this.name = name;
	this.marvel = marvel;
	this.id = id;
	this.shown = shown;
	this.loc = loc

}

var heroList = [];

heroList[0] = new Hero ( 'Iron Man', true, 0, false, '#' );
heroList[1] = new Hero ( 'Thor', true, 1, false, '#' );
heroList[2] = new Hero ( 'Captain America', true, 2, false, '#' );
heroList[3] = new Hero ( 'Hulk', true, 3, false, '#' );
heroList[4] = new Hero ( 'Spider-Man', true, 4, false, '#' );


heroList[5] = new Hero ( 'Batman', false, 5, false, '#' );
heroList[6] = new Hero ( 'Superman', false, 6, false, '#' );
heroList[7] = new Hero ( 'Robin', false, 7, false, '#' );
heroList[8] = new Hero ( 'Joker', false, 7, false, '#' );
heroList[9] = new Hero ( 'The Flash', false, 7, false, '#' );


$("#start").click(function(){
	$("#start").hide();
	$("#name").show();
	$("#marvelBtn").show();
	$("#dcBtn").show();
	$("#timer_div").show();

	// $("#name").css("display", "inline-block");
	$("#marvelBtn").css("display", "inline-block");
	$("#dcBtn").css("display", "inline-block");
	$("#timer_div").css("display", "inline-block");


});

$("#restart").click(function(){
	$("#restart").hide();
	$("#name").show();
	$("#marvelBtn").show();
	$("#dcBtn").show();
	$("#timer_div").show();

	// $("#name").css("display", "inline-block");
	$("#marvelBtn").css("display", "inline-block");
	$("#dcBtn").css("display", "inline-block");
	$("#timer_div").css("display", "inline-block");

	correctTimes = 0;

	for (var i = 0; i < heroList.length; i++){
		heroList[i].shown = false;
	}

	when = Math.floor(Math.random()*10);
	$("#name").text(heroList[when].name);

	


});






when = Math.floor(Math.random()*10);
$("#name").text(heroList[when].name);

$("#marvelBtn").click(function(){
	if (heroList[when].marvel == true){
		heroList[when].shown = true;

		counter = 10;
		correctTimes++;

		if (correctTimes != 10){
			while ( heroList[when].shown == true){
				when = Math.floor(Math.random()*10);
			}
			$("#name").text(heroList[when].name);
			
		}else{
			$("#name").text("win");
			$("#restart").show();
		}

		 
		

		

	}else{

		$("#name").hide();
		$("#marvelBtn").hide();
		$("#dcBtn").hide();
		$("#timer_div").hide();

		$("#restart").show();

		counter = 10;

		
	}


});

$("#dcBtn").click(function(){
	if(heroList[when].marvel == false){
		counter = 10;
		heroList[when].shown = true;

		
		correctTimes++;
		if (correctTimes != 10){
			while ( heroList[when].shown == true && correctTimes != 10 ){
				when = Math.floor(Math.random()*10);
			}
			$("#name").text(heroList[when].name);
		}else{
			$("#name").text("win");
			$("#restart").show();
		}
		


		

		console.log(correctTimes);

	}else{

		$("#name").hide();
		$("#marvelBtn").hide();
		$("#dcBtn").hide();
		$("#timer_div").hide();

		$("#restart").show();

		counter = 10;

		
	}

});



var interval = setInterval(function() {
    
    $("#timer").text(counter);
    if (counter == 0) {
       $("#name").hide();
			$("#marvelBtn").hide();
			$("#dcBtn").hide();
			$("#timer_div").hide();

			$("#restart").show();
        
    }else{
    	counter--;
    }

    
}, 1000);

// if(correctTimes == 10){
// 	$("#name").text("win");
// }


console.log(correctTimes);