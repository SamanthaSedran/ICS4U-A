document.getElementById("addgame").addEventListener("click", checkErrors);
document.getElementById("delete").addEventListener("click", errorButtonReverse);
let games = [];


//Gets the games when loading the site on a browser without games in local storage
function getGames() {
  games = JSON.parse(localStorage['games']);
}

//Removes a game from games in local storage - used for testing purposes
function removeGame(num){
 games = JSON.parse(localStorage['games']);
 games.splice(num, 1);
 localStorage.setItem('games', JSON.stringify(games));

}


//Creates the orginal games array then adds it to local storage
function initGames(){
let game = {};
game['Qual'] = 1;
game['Winner'] = 'R';
game['RedAll'] = [{
 'stat1':865,
 'stat2':3161,
 'stat3':4015,
 'auto':6,
 'teleop':17,
 'fouls':4,
 'rp':2
}];
game['BlueAll'] = [{
 'stat1':7520,
 'stat2':914,
 'stat3':8764,
 'auto':2,
 'teleop':0,
 'fouls':0,
 'rp':0
}];
games.push(game);

//HELLLLLOOOOOOOOOOOOOOOOOOOOOOOOO :) - From Nathan

game = {};
game['Qual'] = 2;
game['Winner'] = 'B';
game['RedAll'] = [{
 'stat1':771,
 'stat2':2198,
 'stat3':2386,
 'auto':6,
 'teleop':7,
 'fouls':4,
 'rp':0
}];
game['BlueAll'] = [{
 'stat1':6397,
 'stat2':2200,
 'stat3':1360,
 'auto':8,
 'teleop':28,
 'fouls':0,
 'rp':2
}];
games.push(game);

game = {};
game['Qual'] = 3;
game['Winner'] = 'B';
game['RedAll'] = [{
 'stat1':1334,
 'stat2':5032,
 'stat3':1360,
 'auto':2,
 'teleop':0,
 'fouls':8,
 'rp':0
}];
game['BlueAll'] = [{
 'stat1':7520,
 'stat2':610,
 'stat3':3161,
 'auto':6,
 'teleop':13,
 'fouls':12,
 'rp':2
}];
games.push(game);

game = {};
game['Qual'] = 4;
game['Winner'] = 'B';
game['RedAll'] = [{
 'stat1':5032,
 'stat2':4015,
 'stat3':865,
 'auto':8,
 'teleop':18,
 'fouls':8,
 'rp':0
}];
game['BlueAll'] = [{
 'stat1':771,
 'stat2':2200,
 'stat3':610,
 'auto':16,
 'teleop':36,
 'fouls':0,
 'rp':2
}];
games.push(game);

game = {};
game['Qual'] = 5;
game['Winner'] = 'R';
game['RedAll'] = [{
 'stat1':8764,
 'stat2':2386,
 'stat3':1334,
 'auto':6,
 'teleop':6,
 'fouls':16,
 'rp':2
}];
game['BlueAll'] = [{
 'stat1':914,
 'stat2':6397,
 'stat3':2198,
 'auto':2,
 'teleop':4,
 'fouls':4,
 'rp':0
}];
games.push(game);

game = {};
game['Qual'] = 6;
game['Winner'] = 'R';
game['RedAll'] = [{
 'stat1':1334,
 'stat2':610,
 'stat3':2198,
 'auto':8,
 'teleop':17,
 'fouls':0,
 'rp':2
}];
game['BlueAll'] = [{
 'stat1':4015,
 'stat2':771,
 'stat3':6397,
 'auto':4,
 'teleop':3,
 'fouls':0,
 'rp':0
}];
games.push(game);

game = {};
game['Qual'] = 7;
game['Winner'] = 'B';
game['RedAll'] = [{
 'stat1':914,
 'stat2':1360,
 'stat3':3161,
 'auto':0,
 'teleop':4,
 'fouls':4,
 'rp':0
}];
game['BlueAll'] = [{
 'stat1':2200,
 'stat2':865,
 'stat3':2386,
 'auto':18,
 'teleop':30,
 'fouls':12,
 'rp':3
}];
games.push(game);

game = {};
game['Qual'] = 8;
game['Winner'] = 'B';
game['RedAll'] = [{
 'stat1':8764,
 'stat2':2198,
 'stat3':5032,
 'auto':10,
 'teleop':12,
 'fouls':4,
 'rp':0
}];
game['BlueAll'] = [{
 'stat1':7520,
 'stat2':3161,
 'stat3':2200,
 'auto':6,
 'teleop':33,
 'fouls':0,
 'rp':2
}];
games.push(game);

game = {};
game['Qual'] = 9;
game['Winner'] = 'R';
game['RedAll'] = [{
 'stat1':610,
 'stat2':8764,
 'stat3':4015,
 'auto':10,
 'teleop':18,
 'fouls':4,
 'rp':2
}];
game['BlueAll'] = [{
 'stat1':2386,
 'stat2':771,
 'stat3':7520,
 'auto':8,
 'teleop':7,
 'fouls':4,
 'rp':0
}];
games.push(game);

game = {};
game['Qual'] = 10;
game['Winner'] = 'B';
game['RedAll'] = [{
 'stat1':1360,
 'stat2':6397,
 'stat3':5032,
 'auto':4,
 'teleop':14,
 'fouls':0,
 'rp':0
}];
game['BlueAll'] = [{
 'stat1':865,
 'stat2':1334,
 'stat3':914,
 'auto':6,
 'teleop':15,
 'fouls':4,
 'rp':2
}];
games.push(game);

game = {};
game['Qual'] = 11;
game['Winner'] = 'B';
game['RedAll'] = [{
 'stat1':5032,
 'stat2':7520,
 'stat3':6397,
 'auto':6,
 'teleop':24,
 'fouls':0,
 'rp':0
}];
game['BlueAll'] = [{
 'stat1':2200,
 'stat2':914,
 'stat3':4015,
 'auto':10,
 'teleop':40,
 'fouls':32,
 'rp':2
}];
games.push(game);
localStorage.setItem('games', JSON.stringify(games));

}

//Creates an array of elements that need to be checked. 
//An Errorray - an array filled with possible errors. I was very proud that I came up with this :)
function createCheckErroray(){
  let checkarray = [];
  checkarray.push(document.getElementById("RStat1").value);
  checkarray.push(document.getElementById("RStat2").value);
  checkarray.push(document.getElementById("RStat3").value);
  checkarray.push(document.getElementById("BStat1").value);
  checkarray.push(document.getElementById("BStat2").value);
  checkarray.push(document.getElementById("BStat3").value);

  return checkarray;

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

//Checks the data the user inputted for errors
function checkErrors(){
  let cleared = 0;
  if(document.getElementById("RStat1").value == '' || document.getElementById("RStat2").value == '' || document.getElementById("RStat3").value == '' || document.getElementById("BStat1").value == '' || document.getElementById("BStat2").value == '' || document.getElementById("BStat3").value == '' || document.getElementById("RAuto").value == '' || document.getElementById("RTeleop").value == '' || document.getElementById("RBFouls").value == '' || document.getElementById("RRP").value == '' || document.getElementById("BAuto").value == '' || document.getElementById("BTeleop").value == '' || document.getElementById("BRFouls").value == '' || document.getElementById("BRP").value == '' || document.querySelector('#ROutcome').value == 'Outcome' || document.querySelector('#BOutcome').value == 'Outcome'){
    errorButton('Missing a field. Please enter another value.');
}else{
  if(isNaN(document.getElementById("Qual").value)){
    errorButton('Not a number! Please enter another qualification match number.');
 }else{
    if(isNaN(document.getElementById("RStat1").value) || isNaN(document.getElementById("RStat2").value) || isNaN(document.getElementById("RStat3").value) || isNaN(document.getElementById("BStat1").value) || isNaN(document.getElementById("BStat2").value) || isNaN(document.getElementById("BStat3").value)){
      errorButton('Not a number! Please enter a team.');
    }else{
        if(isNaN(document.getElementById("RAuto").value) || isNaN(document.getElementById("RTeleop").value) || isNaN(document.getElementById("RBFouls").value) || isNaN(document.getElementById("RRP").value) || isNaN(document.getElementById("BAuto").value) || isNaN(document.getElementById("BTeleop").value) || isNaN(document.getElementById("BRFouls").value) || isNaN(document.getElementById("BRP").value)){
          errorButton('Not a number! Please enter another value.');
        }else{
            if(document.querySelector('#ROutcome').value == 'Winner' && document.querySelector('#BOutcome').value == 'Winner'){
              errorButton('Both teams cannot win! Enter another game outcome.');
            }else if(document.querySelector('#ROutcome').value == 'Loser' && document.querySelector('#BOutcome').value == 'Loser'){
              errorButton('Both teams cannot lose! Enter another game outcome.');
            }else if((document.querySelector('#ROutcome').value == 'Tie' && document.querySelector('#BOutcome').value != 'Tie') || (document.querySelector('#BOutcome').value == 'Tie' && document.querySelector('#ROutcome').value != 'Tie')){
              errorButton('Not a possible game outcome! Enter another game outcome.');
            }else{
                if(parseInt(document.getElementById("RStat1").value) < 0 || parseInt(document.getElementById("RStat2").value) < 0 || parseInt(document.getElementById("RStat3").value) < 0 || parseInt(document.getElementById("BStat1").value) < 0 || parseInt(document.getElementById("BStat2").value) < 0 || parseInt(document.getElementById("BStat3").value) < 0 || parseInt(document.getElementById("RAuto").value) < 0 || parseInt(document.getElementById("RTeleop").value) < 0 || parseInt(document.getElementById("RBFouls").value) < 0 || parseInt(document.getElementById("BAuto").value) < 0 || parseInt(document.getElementById("BTeleop").value) < 0 || parseInt(document.getElementById("BRFouls").value) < 0 || parseInt(document.getElementById("RRP").value) < 0 || parseInt(document.getElementById("BRP").value) < 0 || parseInt(document.getElementById("Qual").value) < 0){
                  errorButton('No values can be negative! Please enter another value.');
                }else{
                  let erroray = createCheckErroray();
                  let counter = 0;
                  erroray.forEach((entry1) => {
                    let value = entry1;
                    erroray.forEach((entry2) => {
                      if(value == entry2){
                        counter++;
                      }
                    });
                  });
                  if(counter > 6){
                    errorButton('A team cannot be entered multiple times! Please enter a different team');
                  }else{
                    games.forEach((game) => {
                      if(document.getElementById("Qual").value == game.Qual){
                        errorButton("This qualification match has already been entered in the system. Please enter another match number.");
                      }else{
                        cleared++;
                      }
                    });
                    if(cleared == games.length){
                      addData();
                    }
                  } 
                }
            }
        }
    }

 }
}

}

//adds the game the user inputted to the games array and local storage
function addData(){
   let game = {};
   game['Qual'] = parseInt(document.getElementById("Qual").value);
   if(document.querySelector('#ROutcome').value == 'Winner'){
     game['Winner'] = 'R';
   }else if(document.querySelector('#BOutcome').value == 'Winner'){
     game['Winner'] = 'B';
   }else{
     game['Winner'] = 'T';
   }
   game['RedAll'] = [{
    'stat1':parseInt(document.getElementById("RStat1").value),
    'stat2':parseInt(document.getElementById("RStat2").value),
    'stat3':parseInt(document.getElementById("RStat3").value),
    'auto':parseInt(document.getElementById("RAuto").value),
    'teleop':parseInt(document.getElementById("RTeleop").value),
    'fouls':parseInt(document.getElementById("RBFouls").value),
    'rp':parseInt(document.getElementById("RRP").value)
   }];
   game['BlueAll'] = [{
     'stat1':parseInt(document.getElementById("BStat1").value),
    'stat2':parseInt(document.getElementById("BStat2").value),
    'stat3':parseInt(document.getElementById("BStat3").value),
    'auto':parseInt(document.getElementById("BAuto").value),
    'teleop':parseInt(document.getElementById("BTeleop").value),
    'fouls':parseInt(document.getElementById("BRFouls").value),
    'rp':parseInt(document.getElementById("BRP").value)
   }];
   games.push(game);

   console.log(games);
   localStorage.setItem('games', JSON.stringify(games));
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

