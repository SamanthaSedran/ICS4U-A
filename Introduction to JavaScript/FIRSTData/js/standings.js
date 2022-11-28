function start() {
    let games = JSON.parse(localStorage['games']);
    adminButton();
    rank(detailedTeams(createTeamsList(games), games));
  }

  function getTeams(){
    let games = JSON.parse(localStorage['games']);
    return detailedTeams(createTeamsList(games), games);
  }

  //Creates an array of teams with their average match data
  function detailedTeams(teams, games){
    let moreinfoteams = [];

    teams.forEach((team) => {
      //let onlyteam = newTeamArray(team, games);
      let autoavg = 0;
      let teleopavg = 0;
      let foulavg = 0;
      let totscoreavg = 0;
      let rankingavg = 0;
      let wins = 0;
      let ties = 0;
      let totteamgames = 0;

      games.forEach((game) => {
      if(game.RedAll[0].stat1 == team || game.RedAll[0].stat2 == team || game.RedAll[0].stat3 == team){
          autoavg += game.RedAll[0].auto;
          teleopavg += game.RedAll[0].teleop;
          foulavg += game.BlueAll[0].fouls;
          totscoreavg += game.RedAll[0].auto + game.RedAll[0].teleop + game.RedAll[0].fouls;;
          rankingavg += game.RedAll[0].rp;
          totteamgames++;
          if(game.Winner == 'R'){
            wins += 1;
          }

      }
      if(game.BlueAll[0].stat1 == team || game.BlueAll[0].stat2 == team || game.BlueAll[0].stat3 == team){
          autoavg += game.BlueAll[0].auto;
          teleopavg += game.BlueAll[0].teleop;
          foulavg += game.RedAll[0].fouls;
          totscoreavg += game.BlueAll[0].auto + game.BlueAll[0].teleop + game.BlueAll[0].fouls;;
          rankingavg += game.BlueAll[0].rp;
          totteamgames++;
          if(game.Winner == 'B'){
            wins += 1;
          }
      }
      if(game.Winner == 'T'){
        ties += 1;
      }
      });

      autoavg /= totteamgames;
      teleopavg /= totteamgames;
      foulavg /= totteamgames;
      totscoreavg /= totteamgames;
      let rankingtot = rankingavg;
      rankingavg /= totteamgames;

      let detailteam = {};
      detailteam['TeamNum'] = team;
      detailteam['AutoAvg'] = autoavg;
      detailteam['TeleopAvg'] = teleopavg;
      detailteam['FoulAvg'] = foulavg;
      detailteam['TotscoreAvg'] = totscoreavg;
      detailteam['TotRP'] = rankingtot;
      detailteam['RPAvg'] = rankingavg;
      detailteam['Wins'] = wins;
      detailteam['Ties'] = ties;
      detailteam['Losses'] = totteamgames - wins - ties;
      detailteam['Rank'] = 0;
      moreinfoteams.push(detailteam);
      
    });

    return moreinfoteams;

  }

  //Creates a new array of games of only games that team num is in
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

  //Creates an array of all team numbers in no particular order
  function createTeamsList(games){
      let teams = [];
      games.forEach((game) => {
          if(!teams.includes(game.RedAll[0].stat1)){
              teams.push(game.RedAll[0].stat1);
          }
          if(!teams.includes(game.RedAll[0].stat2)){
              teams.push(game.RedAll[0].stat2);
          }
          if(!teams.includes(game.RedAll[0].stat3)){
              teams.push(game.RedAll[0].stat3);
          }
          if(!teams.includes(game.BlueAll[0].stat1)){
              teams.push(game.BlueAll[0].stat1);
          }
          if(!teams.includes(game.BlueAll[0].stat2)){
              teams.push(game.BlueAll[0].stat2);
          }
          if(!teams.includes(game.BlueAll[0].stat3)){
              teams.push(game.BlueAll[0].stat3);
          }
      })
      return teams;
  }

  function createTable(teams){
      let tableBody = document.querySelector('#standings tbody');

      tableBody.replaceChildren();

      teams.forEach((team) => {

      let row = document.createElement('tr');
      let cell = document.createElement('td');
      cell.textContent = team.Rank;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.textContent = team.TeamNum;
      link = document.createElement('a');
      link.href = 'individteam.html?Team=' + team.TeamNum;
      link.textContent = team.TeamNum;
      cell.textContent = '';
      cell.appendChild(link);
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.textContent = team.RPAvg;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.textContent = team.TotscoreAvg;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.textContent = team.AutoAvg;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.textContent = team.TeleopAvg;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.textContent = `${team.Wins}-${team.Losses}-${team.Ties}`;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.textContent = team.TotRP;
      row.appendChild(cell);

      tableBody.appendChild(row);

  });

  }

  function rank(teams){
      teams = teams.sort((teamA, teamB) => teamB.RPAvg - teamA.RPAvg);
      let rank = 0;
      teams.forEach((team) => {
        rank++;
        team.Rank = rank;

      })
      createTable(teams);
  }


  function sort(field){
      let teams = getTeams();
      teams = teams.sort((teamA, teamB) => teamB.RPAvg - teamA.RPAvg);
      let rank = 0;
      teams.forEach((team) => {
        rank++;
        team.Rank = rank;

      })

      if(field == 'Rank'){
          
      }else if(field === 'Match'){
        teams = teams.sort((teamA, teamB) => teamB.TotscoreAvg - teamA.TotscoreAvg);
      }else if(field === 'Auto'){
        teams = teams.sort((teamA, teamB) => teamB.AutoAvg - teamA.AutoAvg);
      }else if(field === 'Teleop'){
        teams = teams.sort((teamA, teamB) => teamB.TeleopAvg - teamA.TeleopAvg);
      }else if(field === 'Record'){
        teams = teams.sort((teamA, teamB) => teamB.Wins - teamA.Wins);
      }else if(field === 'TotRP'){
        teams = teams.sort((teamA, teamB) => teamB.TotRP - teamA.TotRP);
      }

      createTable(teams);
  }

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
        let adminbtnoo = document.getElementById("adminbtnouterouter");
        adminbtnoo.classList.toggle('adminbutton');
  
      });
    });
  });

  function adminButton() {
    let adminbtno = document.getElementById("adminbtnouter");
    adminbtno.classList.toggle("buttons");
  
    let adminbtni = document.getElementById("adminbtnouter");
    adminbtni.classList.toggle("button");
    adminbtni.classList.toggle("is-light");
  
  }