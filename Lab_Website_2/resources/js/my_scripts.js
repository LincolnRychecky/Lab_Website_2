/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];

		function viewStudentStats(id, toggle){
			if(toggle == 1){
			document.getElementById(id).style.visibility = 'visible';
			document.getElementById(id).style.height = 'auto';
		}
		else{
			document.getElementById(id).style.visibility = 'hidden';
			document.getElementById(id).style.height = '0';
		}
		}

		function changeColor(color){

			document.body.style.background = color;

		}

		function loadStatsPage(){
			var table = document.getElementById("stats_table");
			var home_score;
			var away_score;
			var wins = 0;
			var losses = 0;

			for(var row_counter = 2; row_counter<table.rows.length; row_counter++){

					home_score = table.rows[row_counter].cells[2].innerHTML;

					away_score = table.rows[row_counter].cells[3].innerHTML;

					if(home_score > away_score){
						table.rows[row_counter].cells[4].innerHTML = "CU Boulder";
						wins++;
					}
					else{
						table.rows[row_counter].cells[4].innerHTML = "Opponent";
						losses++;
					}
			}

			document.getElementById("wins").innerHTML = wins;
			document.getElementById("losses").innerHTML = losses;

		}

		function loadPlayersPage(){
			var mydiv;
			var aTag;
			for(var counter = 0; counter < players.length; counter++){
				mydiv = document.getElementById("player_selector");
				aTag = document.createElement('a');
				aTag.setAttribute('href', "#");
				aTag.setAttribute('class','dropdown-item');
				aTag.setAttribute('onclick','switchPlayers(' + counter.toString() + ');');
				aTag.innerText = players[counter].name;
				mydiv.appendChild(aTag);
			}

		}


		function switchPlayers(playerNum){
			document.getElementById("p_year").innerHTML = players[playerNum].year;
			document.getElementById("p_major").innerHTML = players[playerNum].major;
			document.getElementById("g_played").innerHTML = players[playerNum].games_played;
			document.getElementById("p_yards").innerHTML = players[playerNum].pass_yards;
			document.getElementById("avg_p_yards").innerHTML = (players[playerNum].pass_yards / players[playerNum].games_played).toFixed(2);
			document.getElementById("r_yards").innerHTML = players[playerNum].rushing_yards;
			document.getElementById("avg_r_yards").innerHTML = (players[playerNum].rushing_yards / players[playerNum].games_played).toFixed(2);
			document.getElementById("rec_yards").innerHTML = players[playerNum].receiving_yards;
			document.getElementById("avg_rec_yards").innerHTML = (players[playerNum].receiving_yards / players[playerNum].games_played).toFixed(2);


		}
