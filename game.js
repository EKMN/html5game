/* Javascript test game (C) 2014 Johannes Ekman - Jekk */
//function names always begin with capital letter. All functions are in logic order

//variables
var audioPreloaded, videoPreloaded = false;
var initialScene = 1;
var currentScene; //takes a value between 1 and 18
var lastScene = 18;
var audiofiles = []; //preloadable audio files. Sample syntax: a_hit: 'assets/audio/a_hit.mp3'
var videofiles = []; //preloadable video files. Sample syntax: v_cannon_sprite: 'assets/video/cannon_sprite.png'
var gameStarted = false;
var gameOver = false; //whether the game is over or not. Will turn to true when the game ends
var scenes = []; //scene names and locations. Sample syntax: scene1: 'assets/scene1.js'
var scores = [initialScore: '', bonusMultiplier: '', highScore: '', newRecord: false]; // '' means string; should probably just be a number.
var health = [min: '0', max: '100', current: ''];
// newRecord should be changed to true whener a new record is made and set to false whenever a new game is started and it should remain false until yet another record is made




PreloadAudio = function() {
    if (audioPreloaded == false) {
        //preload audio
    }
    if (audioPreloaded == true) {
        //do nothing; the audio is already preloaded
    }
}
PreloadSprites = function() {
    if (videoPreloaded == false) {
        //preload the graphics and the video
    }
    if (videoPreloaded == true) {
        //do nothing; the graphics & video are already preloaded
    }
}




CreateGamescene = function() {
    //creates the scene; this function is initial and creates the DOM-object that will wrap the game and its content.
    //TODO: create an html-canvas and append the game & its logic to it
}

UpdateGamescene = function(desiredScene) {
    //updates the scene (ie. levelchange)
    //update current screen. It must be higher than initial scene but lower than last scene (numberwise).
    //a simple currentScene += 1 for each scene change is good. Update scene must have a logic to check what current scene is-
    //and depending on it's number load a scene from scenes[];
}
ResetGamescene = function() {
    //resets the gamescene to the inital one. Essentially a create gamescene.
    //has a fine GUI with stats. When a button is pressed this dissapears

    //when called re-create the scene, respawn the player and reset certain values (scores).
}





HandleInput = function() {
    //handles input with many smaller functions
    var ControlInput = function() {
        //handles how the input is dealt with
    }
    var QuitGame = function() {
        //quit the game. Combo to check for is escape pressed twice.
    }
    var MoveCharacter = function() {
        //move the character by the x,y-axises. Return the x- and y-values by returing an array with the name "charCords[]". It can be accessed by charCords[x] and charCords[y]. eg charCords[x: '500', y: '450'];
    }
    var PauseGame = function() {
        //freeze gametime or the while loop
    }
}





SetScore = function(scores) {
    //count scores after each action round 
    //perhaps take use of the browser built-in data saving system.
}
UpdateScore = function(oldScores) {
    //updates the scores
}




CheckHealth = function() {
    if (health[current] > health[min] && health[current] < health[max]) {
        //player is alive
        return 'alive';
    }
    if (health[current] < health[min]) {
        //player is dead.
        return 'dead';
    }
}




UpdateFrame = function(cordinates, gamescene) {
    //update frame. Updates only the graphics.
    //update the graphics depending on the player movement returned cordinates. Also updates depending on the gamescene
    //if the gamescene changes, ie. gamescene != gamescene_old_value, then fade in and out and change the scene 
}




// I N I T I A L I Z A T I O N (could be wrapped into init = function(); )

//preloads the resources automatically with the auto-invokers
PreloadAudio();
PreloadSprites();


//create the gamescene initially.
CreateGamescene();

//sets the scores
SetScore();


GameLoop = function(tickrate) {

    //gameloop (logic, update, ie.)
    //TODO: create a tickrate handler. Also the best way would probably be to make a GameLoop class so the user would be able to configure
    while (true) {

        HandleInput(); //updates the input cordinates each tick
        UpdateFrame(); //updates the graphics each tick
        UpdateScore(); //updates the score each tick

        //scene & game handler. As long as current scene is less that last scene and bigger or as big as firstscene then the condition will be true
        if (currentScene < lastScene && currentScene >= initialScene) {
            for (var i = 0; i++; i < lastScene) //creates the scene change watches
                if (i == currentScene) { //if the number matches currentScene then change to that Scene
                    UpdateGamescene(i); //updates the gamescene with the number of i, ie if "i" has the value of 15, then UpdateGamescene will update the scene to levels[15].
                }
        }
        //check if the player is dead and if true sets gameover to true
        if (CheckHealth() == 'alive') {
            if (gameOver != false) {
                gameOver = false;
            }
        }
        if (CheckHealth() == 'dead') {
            gameOver = true; //game is over
        }

        //checks if the game is over
        if (gameOver = true) {
            ResetGamescene();
            SetScore(),
            gameOver = false;
        }
    }
}

//GameLoop();