let teamGames = [];

//Onload function, sets up page
function start(){
    const games = JSON.parse(localStorage.getItem('games'));
    let params = (new URL(document.location)).searchParams;
    teamGames = newTeamArray(params.get('Team'), games);
    document.querySelector('#test').textContent = "Team " + params.get('Team');
    createGames(teamGames);
    document.title = "Team " + params.get('Team');
    teamData(teamGames, params.get('Team'));
  }

  //Creates an array of games with only that team number in it
  function newTeamArray(num, games){
    let newGames = [];
    games.forEach((game) => {
      if(game.RedAll[0].stat1 == num || game.RedAll[0].stat2 == num || game.RedAll[0].stat3 == num){
            newGames.push(game);
      }
      if(game.BlueAll[0].stat1 == num || game.BlueAll[0].stat2 == num || game.BlueAll[0].stat3 == num){
         newGames.push(game);
      }
      });
      return newGames;

  }

  //creates a table out of the games array
  function createGames(games){
      let tableBody = document.querySelector('#standings tbody');

      tableBody.replaceChildren();

      games.forEach((game) => {
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
          
      });

  }

  //Creates a table for the team's stats
  function teamData(games, num){
      let tableBody = document.querySelector('#teamdata tbody');

      tableBody.replaceChildren();

      let autoavg = 0;
      let teleopavg = 0;
      let foulavg = 0;
      let totscoreavg = 0;
      let rankingavg = 0;
      let wins = 0;
      let ties = 0;

      games.forEach((game) => {
      if(game.RedAll[0].stat1 == num || game.RedAll[0].stat2 == num || game.RedAll[0].stat3 == num){
          autoavg += game.RedAll[0].auto;
          teleopavg += game.RedAll[0].teleop;
          foulavg += game.BlueAll[0].fouls;
          totscoreavg += game.RedAll[0].auto + game.RedAll[0].teleop + game.RedAll[0].fouls;;
          rankingavg += game.RedAll[0].rp;
          if(game.Winner == 'R'){
            wins += 1;
          }

      }
      if(game.BlueAll[0].stat1 == num || game.BlueAll[0].stat2 == num || game.BlueAll[0].stat3 == num){
          autoavg += game.BlueAll[0].auto;
          teleopavg += game.BlueAll[0].teleop;
          foulavg += game.RedAll[0].fouls;
          totscoreavg += game.BlueAll[0].auto + game.BlueAll[0].teleop + game.BlueAll[0].fouls;;
          rankingavg += game.BlueAll[0].rp;
          if(game.Winner == 'B'){
            wins += 1;
          }
      }
      if(game.Winner == 'T'){
        ties += 1;
      }
      });

      autoavg /= games.length;
      teleopavg /= games.length;
      foulavg /= games.length;
      totscoreavg /= games.length;
      let rankingtot = rankingavg;
      document.querySelector('#teaminfo').textContent = `Team ${num} has an average of ${rankingtot} ranking points per match and a record of ${wins} win(s), ${games.length-wins-ties} loss(es), and ${ties} tie(s).`;
      document.querySelector('#teamsummary').textContent = `This page provides data on team ${num}. Including a list of all of their matches and their match statistics. `;

      rankingavg /= games.length;



      let row = document.createElement('tr');
      let cell = document.createElement('td');
      cell.textContent = "Average Autonomous Points";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = autoavg.toFixed(2);
      row.appendChild(cell);
      tableBody.appendChild(row);

      row = document.createElement('tr');
      cell = document.createElement('td');
      cell.textContent = "Average Teleoperated Points";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = teleopavg.toFixed(2);
      row.appendChild(cell);
      tableBody.appendChild(row);

      row = document.createElement('tr');
      cell = document.createElement('td');
      cell.textContent = "Average Foul Point Deductions";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = foulavg.toFixed(2);
      row.appendChild(cell);
      tableBody.appendChild(row);

      row = document.createElement('tr');
      cell = document.createElement('td');
      cell.textContent = "Average Match Score";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = totscoreavg.toFixed(2);
      row.appendChild(cell);
      tableBody.appendChild(row);

      row = document.createElement('tr');
      cell = document.createElement('td');
      cell.textContent = "Average Ranking Points";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = rankingavg.toFixed(2);
      row.appendChild(cell);
      tableBody.appendChild(row);

      row = document.createElement('tr');
      cell = document.createElement('td');
      cell.textContent = "Record: W-L-T";
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = `${wins}-${games.length-wins-ties}-${ties}`;
      row.appendChild(cell);
      tableBody.appendChild(row);

  }

  //Sorts data in a column of the table
  function sort(field){
    if(field == 'Qual'){
        teamGames = teamGames.sort((gameA, gameB) => gameA.Qual - gameB.Qual);
    }else if(field == 'PTSRed'){
        teamGames = teamGames.sort((gameA, gameB) => gameB.RedAll[0].auto + gameB.RedAll[0].teleop + gameB.RedAll[0].fouls - (gameA.RedAll[0].auto + gameA.RedAll[0].teleop + gameA.RedAll[0].fouls));
    }else if(field == 'PTSBlue'){
        teamGames = teamGames.sort((gameA, gameB) => gameB.BlueAll[0].auto + gameB.BlueAll[0].teleop + gameB.BlueAll[0].fouls - (gameA.BlueAll[0].auto + gameA.BlueAll[0].teleop + gameA.BlueAll[0].fouls));
    }

    createGames(teamGames);
}

  //Creates the hamburger menu
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