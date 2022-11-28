document.getElementById("submit").addEventListener("click", checkError);
document.getElementById("allteam").addEventListener("click", paginationIndex1);
document.getElementById("button1").addEventListener("click", paginationIndex1);
document.getElementById("button2").addEventListener("click", paginationIndex2);
document.getElementById("button3").addEventListener("click", paginationIndex3);


  function paginationIndex1(){
    games = JSON.parse(localStorage['games']);
    const pageCount = Math.ceil(games.length / 10);

    let pagearray = [];
    let pagebefore = 0;

    for(let i=0; i<10; i++){
      pagearray.push(games[pagebefore+i]);
    }

    adminButton();

    createTable(pagearray);
  }

  function paginationIndex2(){
    games = JSON.parse(localStorage['games']);
    const pageCount = Math.ceil(games.length / 10);

    let pagearray = [];
    let pagebefore = 10;

    for(let i=0; i<10; i++){
      pagearray.push(games[pagebefore+i]);
    }

    createTable(pagearray);
  }

  function paginationIndex3(){
    games = JSON.parse(localStorage['games']);
    const pageCount = Math.ceil(games.length / 10);

    let pagearray = [];
    let pagebefore = 10;

    for(let i=0; i<10; i++){
      pagearray.push(games[pagebefore+i]);
    }

    createTable(pagearray);
  }

  function checkError(){
    games = JSON.parse(localStorage['games']);
    if(isNaN(document.getElementById("teamnum").value)){
        alert('Not a number! Please enter a team number.');
    }else{
        if(parseInt(document.getElementById("teamnum").value) < 0){
            alert('Team numbers cannot be negative! Please enter a team number.');
        }else{
            if(newTeamArray(parseInt(document.getElementById("teamnum").value), games) == ''){
                alert('The number you have entered is not a team competing at this competition. Please enter a team.');
            }else{
                teamFilter();
            }
    }
  }
}

  function teamFilter(){
    games = JSON.parse(localStorage['games']);
    createTable(newTeamArray(parseInt(document.getElementById("teamnum").value), games));
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

  function sort(field){
      let games = JSON.parse(localStorage['games']);
      if(field == 'Qual'){
          games = games.sort((gameA, gameB) => gameA.Qual - gameB.Qual);
      }else if(field === 'PTSRed'){
          games = games.sort((gameA, gameB) => gameB.RedAll[0].auto + gameB.RedAll[0].teleop + gameB.RedAll[0].fouls - (gameA.RedAll[0].auto + gameA.RedAll[0].teleop + gameA.RedAll[0].fouls));
      }else if(field === 'PTSBlue'){
          games = games.sort((gameA, gameB) => gameB.BlueAll[0].auto + gameB.BlueAll[0].teleop + gameB.BlueAll[0].fouls - (gameA.BlueAll[0].auto + gameA.BlueAll[0].teleop + gameA.BlueAll[0].fouls));
      }

      createTable(games);
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