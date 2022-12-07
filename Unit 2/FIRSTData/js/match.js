let games = JSON.parse(localStorage['games']);
const matchesPerPage = 10;
let currPage = 1;

document.getElementById("previous").addEventListener("click", btnPrevious);
document.getElementById("next").addEventListener("click", btnNext);
document.getElementById("submit").addEventListener("click", checkError);
document.getElementById("allteam").addEventListener("click", startclear);
document.getElementById("delete").addEventListener("click", errorButtonReverse);

//creates the pagination buttons
function createPagination(){
    const pageCount = Math.ceil(games.length / matchesPerPage);
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

//Changes styling of the buttons if the user cannot use them
function disableButtons(){
  const pageCount = Math.ceil(games.length / matchesPerPage);
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
  createTable(games.slice((page-1)*matchesPerPage, page*matchesPerPage));
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
  if(currPage < Math.ceil(games.length / matchesPerPage)){
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
    showPage(currPage);
  }

//Adds styling to error message and makes it visible
function errorButton(message){
  let errormsgouter = document.querySelector('#errormsgouter');
  errormsgouter.classList.add('message');
  errormsgouter.classList.add('is-danger');
  errormsgouter.classList.add('m-3');

  let errormsg = document.querySelector('#errormsg');
  errormsg.classList.add('message-body');

  let deletebtn = document.querySelector('#delete');
  deletebtn.classList.remove('hidden');

  document.querySelector('#errormsg').textContent = message;

}

//takes aways styling to error message and makes it inivisible
function errorButtonReverse(){
  let errormsgouter = document.querySelector('#errormsgouter');
  errormsgouter.classList.remove('message');
  errormsgouter.classList.remove('is-danger');
  errormsgouter.classList.remove('m-3');

  let errormsg = document.querySelector('#errormsg');
  errormsg.classList.remove('message-body');

  let deletebtn = document.querySelector('#delete');
  deletebtn.classList.add('hidden');

  document.querySelector('#errormsg').textContent = '';

}



//Checks the team number the user entered in for errors
  function checkError(){
    if(isNaN(document.getElementById("teamnum").value)){
        errorButton('Not a number! Please enter a team number.');
    }else{
        if(parseInt(document.getElementById("teamnum").value) < 0){
            errorButton('Team numbers cannot be negative! Please enter a team number.');
        }else{
            if(newTeamArray(parseInt(document.getElementById("teamnum").value), JSON.parse(localStorage['games'])) == ''){
                errorButton('The number you have entered is not a team competing at this competition. Please enter a team.');
            }else{
                teamFilter();
            }
    }
  }
}

//Creates a table of games with only a specific team
  function teamFilter(){
    games = JSON.parse(localStorage['games']);
    let gamesNew = newTeamArray(parseInt(document.getElementById("teamnum").value), games);
    games = gamesNew;
    createTable(games);
    let paginationArea = document.querySelector('#pagination');
    paginationArea.replaceChildren();
    document.getElementById("previous").style.display = 'none';
    document.getElementById("next").style.display = 'none';
    errorButtonReverse();

  }

  //returns an array that contains games only with team num
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

      games = newGames;
      return games;

  }

  //Creates an array of all team numbers in no particular order
  /*function createTeamsList(){
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
}*/

//Creates a table of games from the array games
  function createTable(games){
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
          cell.textContent = game.RedAll[0].stat1;
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
          cell.textContent = game.RedAll[0].stat2;
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
          cell.textContent = game.RedAll[0].stat3;
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
          cell.textContent = game.BlueAll[0].stat1;
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
          cell.textContent = game.BlueAll[0].stat2;
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
          cell.textContent = game.BlueAll[0].stat3;
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

  //Sorts data in a column of the table
  function sort(field){
      if(field == 'Qual'){
          games = games.sort((gameA, gameB) => gameA.Qual - gameB.Qual);
      }else if(field === 'PTSRed'){
          games = games.sort((gameA, gameB) => gameB.RedAll[0].auto + gameB.RedAll[0].teleop + gameB.RedAll[0].fouls - (gameA.RedAll[0].auto + gameA.RedAll[0].teleop + gameA.RedAll[0].fouls));
      }else if(field === 'PTSBlue'){
          games = games.sort((gameA, gameB) => gameB.BlueAll[0].auto + gameB.BlueAll[0].teleop + gameB.BlueAll[0].fouls - (gameA.BlueAll[0].auto + gameA.BlueAll[0].teleop + gameA.BlueAll[0].fouls));
      }

      let paginationArea = document.querySelector('#pagination');
      paginationArea.replaceChildren();
      currPage = 1;
      if(games.length > matchesPerPage){
        createPagination();
      }
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
