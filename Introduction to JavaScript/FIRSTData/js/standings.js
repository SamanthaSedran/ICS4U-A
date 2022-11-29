let games = JSON.parse(localStorage['games']);
const teamsPerPage = 10;
let currPage = 1;
let rankTeam = [];
let totalTeams = 0;

document.getElementById("previous").addEventListener("click", btnPrevious);
document.getElementById("next").addEventListener("click", btnNext);

//creates the pagination buttons
function createPagination(){
    const pageCount = Math.ceil(games.length / teamsPerPage);
    let pagination = document.querySelector('#pagination');

    document.getElementById("previous").style.display = 'inline';
    document.getElementById("next").style.display = 'inline';

    for(let i=0; i<pageCount; i++){
      let pageButton = document.createElement('li');
      pageButton.textContent = i+1;
      pageButton.classList.toggle('pagination-link');
      pageButton.onclick = () => {
        showPage(i+1);
        currPage = i+1;
        currButtons();
        disableButtons();
      }
      if(currPage == i+1){
        pageButton.classList.add('is-current');
      }else{
        pageButton.classList.remove('is-current');
      }
      pagination.appendChild(pageButton);
      disableButtons();

    }
}

//Sets up the current styling on the pagination buttons
function currButtons(){
  let paginationArea = document.querySelector('#pagination');
  paginationArea.replaceChildren();
  createPagination();
}

//Changes styling of the buttons if they are disabled
function disableButtons(){
  const pageCount = Math.ceil(games.length / teamsPerPage);
  const previous = document.getElementById("previous");
  const next = document.getElementById("next");

  if(currPage == 1){
    previous.classList.add('is-light');
    next.classList.remove('is-light');
    previous.disabled = true;
  }else if(currPage == pageCount){
    next.classList.add('is-light');
    previous.classList.remove('is-light');
    next.disabled = true;
  }else{
    previous.classList.remove('is-light');
    next.classList.remove('is-light');
  }
}

//creates a table of elements on a particular page
function showPage(page){
  createTable(rankTeam.slice((page-1)*teamsPerPage, page*teamsPerPage));
}

// Functionality for previous button
function btnPrevious(){
  if(currPage > 1){
    currPage--;
    showPage(currPage);
    disableButtons();
    currButtons();
  }
}

// Functionality for next button
function btnNext(){
  if(currPage < Math.ceil(games.length / teamsPerPage)){
    currPage++;
    showPage(currPage);
    disableButtons();
    currButtons();
  }
}

// Resets to the inital condition of the page and resets games to its initial value
  function startclear(){
    games = JSON.parse(localStorage['games']);
    currPage = 1;
    showPage(currPage);
    currButtons();
  }

 //onload function
  function start(){
    createPagination();
    rank(detailedTeams(createTeamsList(games), games));
    showPage(currPage);
  }


  //Creates an array of teams with their average match data
  function detailedTeams(teams, games){
    let moreinfoteams = [];

    teams.forEach((team) => {
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
      detailteam['AutoAvg'] = autoavg.toFixed(2);
      detailteam['TeleopAvg'] = teleopavg.toFixed(2);
      detailteam['FoulAvg'] = foulavg.toFixed(2);
      detailteam['TotscoreAvg'] = totscoreavg.toFixed(2);
      detailteam['TotRP'] = rankingtot;
      detailteam['RPAvg'] = rankingavg.toFixed(2);
      detailteam['Wins'] = wins;
      detailteam['Ties'] = ties;
      detailteam['Losses'] = totteamgames - wins - ties;
      detailteam['Rank'] = 0;
      moreinfoteams.push(detailteam);
      
    });

    return moreinfoteams;

  }

  /*//Creates a new array of games of only games that team number is in
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

  }*/

  //Creates an array of all team numbers in no particular order
  function createTeamsList(games){
      let teams = [];
      games.forEach((game) => {
          if(!teams.includes(game.RedAll[0].stat1)){
              teams.push(game.RedAll[0].stat1);
              totalTeams++;
          }
          if(!teams.includes(game.RedAll[0].stat2)){
              teams.push(game.RedAll[0].stat2);
              totalTeams++;
          }
          if(!teams.includes(game.RedAll[0].stat3)){
              teams.push(game.RedAll[0].stat3);
              totalTeams++;
          }
          if(!teams.includes(game.BlueAll[0].stat1)){
              teams.push(game.BlueAll[0].stat1);
              totalTeams++;
          }
          if(!teams.includes(game.BlueAll[0].stat2)){
              teams.push(game.BlueAll[0].stat2);
              totalTeams++;
          }
          if(!teams.includes(game.BlueAll[0].stat3)){
              teams.push(game.BlueAll[0].stat3);
              totalTeams++;
          }
      })
      return teams;
  }

  //Creates a table with each row showcasing the ranking data for that particular team
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

  //Ranks the teams and sets rankTeam to be equal to the array of the team numbers ranked
  function rank(teams){
      teams = teams.sort((teamA, teamB) => teamB.RPAvg - teamA.RPAvg);
      let rank = 0;
      teams.forEach((team) => {
        rank++;
        team.Rank = rank;

      })

      rankTeam = teams;
      
  }

//Sorts the columns of the table by different fields
  function sort(field){
      let teams = detailedTeams(createTeamsList(games), games);
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

      rankTeam = teams;

      let paginationArea = document.querySelector('#pagination');
      paginationArea.replaceChildren();
      currPage = 1;
      createPagination();
      showPage(currPage);
  }

  //Creates Hamburger Menu
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