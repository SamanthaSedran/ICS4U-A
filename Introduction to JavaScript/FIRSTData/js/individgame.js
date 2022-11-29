//Onload function, sets up the page
function start(){
    const dataString = localStorage.getItem('games');
    const games = JSON.parse(dataString);
    let params = (new URL(document.location)).searchParams;

    const game = games.filter(game => game.Qual == params.get('Qual'));

    document.querySelector('#test').textContent = 'Qualification Match ' + games[params.get('Qual')-1].Qual;
    console.log("worked!");
    createGame(games[params.get('Qual')-1]); 
    createGameDetails(games[params.get('Qual')-1]);

    document.title = 'Qualification Match ' + params.get('Qual');

  }

  //Creates a table of data for a specific game
  function createGame(game){
      let tableBody = document.querySelector('#standings tbody');

      tableBody.replaceChildren();

      document.querySelector('#gameinfo').textContent = `In Qualification Match ${game.Qual}, teams ${game.RedAll[0].stat1}, ${game.RedAll[0].stat2}, and ${game.RedAll[0].stat3} were on the red alliance and teams ${game.BlueAll[0].stat1}, ${game.BlueAll[0].stat2}, and ${game.BlueAll[0].stat3} were on the blue alliance.`;

      makeGameSummary(game);

      const row = document.createElement('tr');
          let cell = document.createElement('td');
          let link = document.createElement('a');
          link.href = 'individgame.html?Qual=' + game.Qual;
          link.textContent = game.Qual;
          cell.textContent = '';
          cell.appendChild(link);
          row.appendChild(cell);

          cell = document.createElement('td');
          link = document.createElement('a');
          link.href = 'individteam.html?Team=' + game.RedAll[0].stat1;
          link.textContent = game.RedAll[0].stat1;
          cell.classList.toggle('light-red');
          cell.textContent = '';
          if(game.Winner == 'R'){
            cell.classList.add('has-text-weight-bold');
          }
          cell.appendChild(link);
          row.appendChild(cell);

          cell = document.createElement('td');
          link = document.createElement('a');
          link.href = 'individteam.html?Team=' + game.RedAll[0].stat2;
          link.textContent = game.RedAll[0].stat2;
          cell.classList.toggle('light-red');
          cell.textContent = '';
          if(game.Winner == 'R'){
            cell.classList.add('has-text-weight-bold');
          }
          cell.appendChild(link);
          row.appendChild(cell);

          cell = document.createElement('td');
          link = document.createElement('a');
          link.href = 'individteam.html?Team=' + game.RedAll[0].stat3;
          link.textContent = game.RedAll[0].stat3;
          cell.classList.toggle('light-red');
          cell.textContent = '';
          if(game.Winner == 'R'){
            cell.classList.add('has-text-weight-bold');
          }
          cell.appendChild(link);
          row.appendChild(cell);

          cell = document.createElement('td');
          link = document.createElement('a');
          link.href = 'individteam.html?Team=' + game.BlueAll[0].stat1;
          link.textContent = game.BlueAll[0].stat1;
          cell.classList.toggle('light-blue');
          cell.textContent = '';
          if(game.Winner == 'B'){
            cell.classList.add('has-text-weight-bold');
          }
          cell.appendChild(link);
          row.appendChild(cell);

          cell = document.createElement('td');
          link = document.createElement('a');
          link.href = 'individteam.html?Team=' + game.BlueAll[0].stat2;
          link.textContent = game.BlueAll[0].stat2;
          cell.classList.toggle('light-blue');
          cell.textContent = '';
          if(game.Winner == 'B'){
            cell.classList.add('has-text-weight-bold');
          }
          cell.appendChild(link);
          row.appendChild(cell);

          cell = document.createElement('td');
          link = document.createElement('a');
          link.href = 'individteam.html?Team=' + game.BlueAll[0].stat3;
          link.textContent = game.BlueAll[0].stat3;
          cell.classList.toggle('light-blue');
          cell.textContent = '';
          if(game.Winner == 'B'){
            cell.classList.add('has-text-weight-bold');
          }
          cell.appendChild(link);
          row.appendChild(cell);

          cell = document.createElement('td');
          cell.textContent = game.RedAll[0].auto + game.RedAll[0].teleop + game.RedAll[0].fouls;
          cell.classList.toggle('has-background-danger-light');
          if(game.Winner == 'R'){
            cell.classList.add('has-text-weight-bold');
          }
          row.appendChild(cell);

          cell = document.createElement('td');
          cell.textContent = game.BlueAll[0].auto + game.BlueAll[0].teleop + game.BlueAll[0].fouls;
          cell.classList.toggle('has-background-link-light');
          if(game.Winner == 'B'){
            cell.classList.add('has-text-weight-bold');
          }
          row.appendChild(cell);

          tableBody.appendChild(row);
      
  }

  //Writes the game summary text breakdown
  function makeGameSummary(game){
    let winner = '';
    let winnerscore = 0;

    if(game.Winner != 'T'){
      if(game.Winner=='R'){
        winner = 'red';
        winnerscore = game.RedAll[0].auto + game.RedAll[0].teleop + game.RedAll[0].fouls;
      }else if(game.Winner=='B'){
        winner = 'blue';
        winnerscore = game.BlueAll[0].auto + game.BlueAll[0].teleop + game.BlueAll[0].fouls;
      }else if(game.Winner=='T'){
        winner = '';
      }

      document.querySelector('#gamesummary').textContent = `The ${winner} alliance won this match with a score of ${winnerscore}.`;
    }else{
      document.querySelector('#gamesummary').textContent = `This match ended in a tie with a score of ${game.RedAll[0].auto + game.RedAll[0].teleop + game.RedAll[0].fouls}`;
    }
  }

  //Creates a table of a summary of the game statistics data like Auto points, teleop points, ...etc.
  function createGameDetails(game){
      let tableBody = document.querySelector('#details tbody');

      tableBody.replaceChildren();

      let row = document.createElement('tr');
      let cell = document.createElement('td');
      cell.textContent = game.RedAll[0].auto;
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = "Autonomous Points";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = game.BlueAll[0].auto;
      row.appendChild(cell);
      tableBody.appendChild(row);

      row = document.createElement('tr');
      cell = document.createElement('td');
      cell.textContent = game.RedAll[0].teleop;
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = "Teleoperated Points";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = game.BlueAll[0].teleop;
      row.appendChild(cell);
      tableBody.appendChild(row);

      row = document.createElement('tr');
      cell = document.createElement('td');
      cell.textContent = game.RedAll[0].fouls;
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = "Foul Points";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = game.BlueAll[0].fouls;
      row.appendChild(cell);
      tableBody.appendChild(row);

      row = document.createElement('tr');
      cell = document.createElement('td');
      cell.textContent = game.RedAll[0].auto + game.RedAll[0].teleop + game.RedAll[0].fouls;
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = "Total Score";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = game.BlueAll[0].auto + game.BlueAll[0].teleop + game.BlueAll[0].fouls;;
      row.appendChild(cell);
      tableBody.appendChild(row);

      row = document.createElement('tr');
      cell = document.createElement('td');
      cell.textContent = game.RedAll[0].rp;
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = "Ranking Points";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = game.BlueAll[0].rp;
      row.appendChild(cell);
      tableBody.appendChild(row);

      
  }

  //Creates hamburger menu
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
        adminButton();
  
      });
    });
  });

  //Adds and takes away styling to admin button
  function adminButton() {
    let adminbtni = document.getElementById("adminbtninner");
    adminbtni.classList.toggle("button");
    adminbtni.classList.toggle("is-light");
    adminbtni.classList.toggle("admin");
  }



