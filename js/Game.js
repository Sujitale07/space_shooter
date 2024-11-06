try {

    if(window.innerWidth < 768){
         // Clear the main content and adjust body styling for a centered message
    document.body.querySelector('main').remove();
    document.body.classList.add('flex', 'justify-center', 'items-center', 'bg-black', 'text-white', 'flex-col');

    // Create and style the image element
    let image = new Image();
    image.src = 'assets/no-mobile.gif';
    image.alt = 'No Mobile';
    image.classList.add('w-3/4', 'mb-4', 'rounded-lg');

    // Create the text message
    let message = document.createElement('h1');
    message.innerText = 'Please Come on PC!';
    message.classList.add('text-2xl', 'font-bold', 'mt-4', 'text-center', 'bg-gray-800', 'py-2', 'px-4', 'rounded');

    // Append image and message to the body
    document.body.appendChild(image);
    document.body.appendChild(message);

    // Create a custom alert overlay
    let overlay = document.createElement('div');
    overlay.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-black', 'bg-opacity-70', 'flex', 'items-center', 'justify-center', 'z-50');

    // Custom alert box
    let alertBox = document.createElement('div');
    alertBox.classList.add('bg-white', 'text-black', 'p-6', 'rounded-lg', 'shadow-lg', 'text-center', 'max-w-xs');
    alertBox.innerHTML = `
        <p class="text-lg font-semibold mb-4">This Game is Only Available on Desktop</p>
        <button id="close-alert" class="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-600">OK</button>
    `;

    // Append the alert box to the overlay and the overlay to the body
    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);

    // Close alert functionality
    document.getElementById('close-alert').addEventListener('click', () => {
        overlay.remove();
    });
    }else{
    document.addEventListener('DOMContentLoaded', () => {
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.getElementById('progress-text');
            let progress = 0;
        
            // Simulate loading progress
            const loadingInterval = setInterval(() => {
                progress += Math.floor(Math.random() * 10) + 5; // Random progress increments for effect
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(loadingInterval);
                    
                    // Hide loading overlay after loading is complete
                    document.querySelector('.loading-overlay').style.opacity = '0';
                    setTimeout(() => {
                        document.querySelector('.loading-overlay').style.display = 'none';
                    }, 500);
                }
                
                // Update progress bar width and text
                progressFill.style.width = `${progress}%`;
                progressText.innerText = `Loading... ${progress}%`;
            }, 300); // Adjust interval duration as needed
    });
        

    let playGround = document.querySelector('.playground');
    let menu = document.querySelector('.menu');
    let shooter = document.getElementById('space-ship');
    let beam = new Image();
    let numbers_of_bullet = document.querySelector('.numbers_of_bullets_s');
    let fadeInAnimAfterGameStart = document.querySelectorAll('.fadeInAnimAfterGameStart');
    let lifePercentage = document.querySelector('.percentage');
    let quote = document.getElementById('quote')

    let levelNo = document.querySelector('.level') ;
    let bulletsAllocatedElem = document.querySelector('.bullets_allocated') ;

    let blastImageLocation = "./assets/level_one/blast.png";
    let score = document.querySelector('.scoreNumber');
    beam.src = './assets/beam.png';

    function gameOverDisplay(soundEffects, shooter, playGround, menu, game, { score, elem }, controls) {
        alert('game over game will be reset after 10 seconds');
        setTimeout(()=>{
            window.location.reload();
        }, 10000)
    }
    


    function generateAlphabetNumbers() {
        const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        
        const result = [];
    
        for (let i = 1; i <= 100; i++) {
            let numberWord = "";
    
            if (i === 100) {
                numberWord = "one hundred";
            } else if (i >= 20) {
                numberWord = `${tens[Math.floor(i / 10)]}${i % 10 !== 0 ? "-" + ones[i % 10] : ""}`;
            } else if (i >= 10) {
                numberWord = teens[i - 10];
            } else {
                numberWord = ones[i];
            }
    
            result.push(numberWord);
        }
    
        return result;
    }

    let numbersOfVillain = generateAlphabetNumbers();
    ;
   

    // Store currently playing audio in the soundEffects object
    let soundEffects = {
        currentLevelAudio: null, // Reference to the currently playing level sound

        start: () => {
            let audio = new Audio('./sound-effects/start.mp3');
            audio.play();
        },
        fireSoundEffect: () => {
            let audio = new Audio('./sound-effects/firing.mp3');
            audio.volume = 0.6;
            audio.play();
        },
        gameOver: () => {
            let audio = new Audio('./sound-effects/game_over.mp3');
            audio.volume = 0.6;
            audio.play();
        },
        explosion: () => {
            let audio = new Audio('./sound-effects/explosion.mp3');
            audio.volume = 0.6;
            audio.play();
        },
        levelOne: function () {
            this.stopCurrentLevelAudio(); // Stop any currently playing level audio

            let audio = new Audio('./sound-effects/level_one.mp3');
            audio.volume = 0.4;
            audio.play();
            this.currentLevelAudio = audio; // Set as the current level audio
        },
        levelTwo: function () {
            this.stopCurrentLevelAudio(); // Stop any currently playing level audio

            let audio = new Audio('./sound-effects/level_two.mp3');
            audio.volume = 0.4;
            audio.play();
            this.currentLevelAudio = audio; // Set as the current level audio
        },
        levelThree: function () {
            this.stopCurrentLevelAudio(); // Stop any currently playing level audio

            let audio = new Audio('./sound-effects/level_three.mp3');
            audio.volume = 0.4;
            audio.play();
            this.currentLevelAudio = audio; // Set as the current level audio
        },
        levelFour: function () {
            this.stopCurrentLevelAudio(); // Stop any currently playing level audio

            let audio = new Audio('./sound-effects/level_four.mp3');
            audio.volume = 0.4;
            audio.play();
            this.currentLevelAudio = audio; // Set as the current level audio
        },
        levelFive: function () {
            this.stopCurrentLevelAudio(); // Stop any currently playing level audio

            let audio = new Audio('./sound-effects/level_five.mp3');
            audio.volume = 0.4;
            audio.play();
            this.currentLevelAudio = audio; // Set as the current level audio
        },
        stopCurrentLevelAudio: function () {
            if (this.currentLevelAudio) {
                this.currentLevelAudio.pause();
                this.currentLevelAudio.currentTime = 0; // Reset audio to the start
                this.currentLevelAudio = null;
            }
        }
    };

    function addPattern(patterns, css, playGround) {
        let wrapper = document.createElement('div');
        wrapper.classList.add('level_wrapper');

        for (let i = 0; i < patterns.length; i++) {
            wrapper.appendChild(patterns[i]);
            patterns[i].id = numbersOfVillain[i];
        }

        playGround.appendChild(wrapper);
        return wrapper;
    }

    function removePattern(){
        let wrapper = document.querySelector('.level_wrapper');
        console.log('pattern remove')
        wrapper.innerHTML = "";
    }

    function checkEnemyHasDown(fire) {
        let wrapper = document.querySelector('.level_wrapper').children;
        let fireRect = fire.getBoundingClientRect();

        // Iterate through each villain
        for (let villain of wrapper) {
            let villainRect = villain.getBoundingClientRect();

            // Check for collision using bounding rectangles
            if (
                fireRect.right > villainRect.left &&
                fireRect.left < villainRect.right &&
                fireRect.bottom > villainRect.top &&
                fireRect.top < villainRect.bottom
            ) {
                villain.src = blastImageLocation;
                setTimeout(() => {
                    villain.remove();
                    checkForNextLevel(); // Check if the level is complete after a villain is removed
                }, 400);

                console.warn("Villain has been hit!");
                return true;
            }
        }

        return false;
    }

    function checkForNextLevel() {
        let wrapper = document.querySelector('.level_wrapper');
        if (wrapper.children.length === 0) {
            levels.checkLevelAndUpdate(); // Move to the next level
        }
    }

    class Levels {
        level = 1;
        levelOneCompleted = false;
        levelTwoCompleted = false;
    
        constructor(shooter) {
            this.shooter = shooter;
        }

        resetLevels() {
            // Reset level progress to start from level 1
            this.level = 1;
        }
    
        checkLevelAndUpdate() {
            this.level++;
            this[`level${this.level}`](); // Dynamically call the next level method
        }
    
        level1() {
            
            console.log("Level 1 started");
            let villains = [];

            let config = {
                numbersOfVillain: 8,
                pattern: 'normal',
                difficulty: 1
            }
    
            let levelFiveVillain = new Image();
            levelFiveVillain.src = './assets/level_five/villain.png';
            levelFiveVillain.classList.add('level_five_villain');
    
            for (let index = 0; index < config.numbersOfVillain; index++) {
                villains.push(levelFiveVillain.cloneNode());
            }
            
            addPattern(villains, "", playGround);
            levelNo.innerHTML = 1;
            quote.innerHTML = "I don’t need therapy; I just need a better internet connection."
            soundEffects.levelFive(); // Start level two sound and stop level one sound

        }
    
        level2() {
            console.log("Level 2 started");
            let villains = [];
            let config = {
                numbersOfVillain: 8,
                pattern: 'normal',
                difficulty: 1
            }

    
            for (let index = 0; index < config.numbersOfVillain; index++) {
                let levelTwoVillian = new Image();
                levelTwoVillian.src = './assets/level_two/villain.png';
                levelTwoVillian.classList.add('level_two_villain');
                villains.push(levelTwoVillian);
            }
            document.querySelector('.level_wrapper').remove();
            levelNo.innerHTML = 2;
            quote.innerHTML = "Gaming taught me that if you see treasure just lying around, it’s probably a trap."
            addPattern(villains, "", playGround);
            soundEffects.levelTwo(); // Start level two sound and stop level one sound
        }

        level3() {
            console.log("Level 3 started");
            let villains = [];
            let config = {
                numbersOfVillain: 10,
                pattern: 'normal',
                difficulty: 1
            }

            let levelThreeVillain = new Image();
            levelThreeVillain.src = './assets/level_three/villain.png';
            levelThreeVillain.classList.add('level_three_villain');
    
            for (let index = 0; index < config.numbersOfVillain; index++) {
                villains.push(levelThreeVillain.cloneNode());
            }
            document.querySelector('.level_wrapper').remove()
            addPattern(villains, "", playGround);
            levelNo.innerHTML = 3;
            quote.innerHTML = "Behind every gamer is a non-gamer who doesn't understand 'just five more minutes.'"
            soundEffects.levelThree(); // Start level two sound and stop level one sound
        }

        level4() {
            console.log("Level 4 started");
            let villains = [];

            let config = {
                numbersOfVillain: 8,
                pattern: 'normal',
                difficulty: 1
            }
    
            let levelFourVillain = new Image();
            levelFourVillain.src = './assets/level_four/villain.png';
            levelFourVillain.classList.add('level_four_villain');
            for (let index = 0; index < config.numbersOfVillain; index++) {
                villains.push(levelFourVillain.cloneNode());
            }
            document.querySelector('.level_wrapper').remove()
            addPattern(villains, "", playGround);
            levelNo.innerHTML = 4;
            quote.innerHTML = "I paused my game to be here. You’re welcome.";
            soundEffects.levelFour(); // Start level two sound and stop level one sound
        }

        level5() {
           

            console.log("Level 5 started");
            let config = {
                numbersOfVillain: 25,
                pattern: 'normal',
                hint: 'assets/level_one/layout.png',
                difficulty: 1,
                bulletsAllocated: 50
            }

          
            let villains = [];
    
            let levelOneVillian = new Image();
            levelOneVillian.src = './assets/level_one/villain.png';
            levelOneVillian.classList.add('level_one_villain');

            for (let index = 0; index < config.numbersOfVillain; index++) {
                villains.push(levelOneVillian.cloneNode());
            }
            document.querySelector('.level_wrapper').remove()
            addPattern(villains, "", playGround);            
            quote.innerHTML = "Life’s a game, but the graphics are better in the digital world.";
            soundEffects.levelOne(); // Start level one sound
            levelNo.innerHTML = 5;
            
        }
    }
    

    class Game {
        isStart = false;

        constructor(playGround, menu, shooter) {
            this.playGround = playGround;
            this.lifePercentage = 100;
            this.score = 0;
            this.menu = menu;
            this.shooter = shooter;
        }

        decreaseLife(elem, maxHealth) {
            let currentWidth = this.lifePercentage || 100;

            if (currentWidth > 0) {
                this.lifePercentage -= 100 / maxHealth;

                if (this.lifePercentage < 80 && this.lifePercentage > 20) {
                    elem.style.backgroundColor = "yellowgreen";
                } else if (this.lifePercentage < 30) {
                    elem.style.backgroundColor = "red";
                }

                elem.style.width = `${currentWidth}%`; // Corrected the template literal syntax
            } else {
                console.log("Life percentage cannot go below 0%");
            }
        }

        maxLife(elem) {
            elem.style.width = `100%`; // Corrected the template literal syntax
        }


        reset({score, elem}){
            this.score = 0;
            this.maxLife(elem)
            this.updateScore(score)
            
        }

        getLastPosition() {
            return playGround.getBoundingClientRect();
        }

        getMaxLeft() {
            return (window.innerWidth - playGround.clientWidth) / 2;
        }

        getMaxRight() {
            return (window.innerWidth - playGround.clientWidth) / 2 + (playGround.clientWidth);
        }

        updateScore(score) {
            this.score++;
            score.textContent = this.score;
        }
    }

    class Shooter {

        totalBullets = 110;

        constructor(shooter) {
            this.fireShooted = 1;
            this.positionX = 0; // Horizontal position
            this.positionY = 0; // Vertical position
            this.shooter = shooter;
        }

        getCurrentPosition() {
            return this.shooter.getBoundingClientRect();
        }

        shoot(beamElem) {
            console.log('shooting');

            // Check if bullet is available or not
            if(this.totalBullets < this.fireShooted){
                gameOverDisplay(soundEffects, shooter, playGround, menu, game, {score, lifePercentage}, this);
                console.log('gameOver')
                return
            }

            beamElem.id = this.fireShooted;
            soundEffects.fireSoundEffect();
            beamElem.classList.add('beam');
            this.shooter.appendChild(beamElem);

            console.log("Destination", game.getLastPosition());
            console.log("Fire", beamElem.getBoundingClientRect());
            this.showFireShooted(numbers_of_bullet, this.fireShooted);
            this.showFireShooted(bulletsAllocatedElem, this.totalBullets);

            game.decreaseLife(lifePercentage, this.totalBullets);

            const startPosition = beamElem.getBoundingClientRect().bottom;
            const targetPosition = game.getLastPosition().y;
            let currentPosition = startPosition;

            const moveBeam = () => {
                const speed = 10;
                if (currentPosition > targetPosition) {
                    currentPosition -= speed;
                    beamElem.style.transform = `translateY(${-1 * (startPosition - currentPosition)}px)`;
                    setTimeout(() => {
                        beamElem.style.position = 'absolute';
                    }, 500);
                    if (checkEnemyHasDown(beamElem)) {
                        game.updateScore(score);
                        soundEffects.explosion();
                        beamElem.remove();
                        return;
                    }

                    requestAnimationFrame(moveBeam);
                } else {
                    beamElem.remove();                   
                }
            };
            console.log(this.bullletsForLevel)
            requestAnimationFrame(moveBeam);
            this.fireShooted++;
        }

        showFireShooted(elem, data) {
            console.log(elem)
            elem.innerHTML = data;
        }

        moveRight(px) {
            if (this.getCurrentPosition().right + px > game.getMaxRight()) {
                return;
            }
            this.positionX += px;
            this.updatePosition();
        }

        moveLeft(px) {
            if (this.getCurrentPosition().left - px < game.getMaxLeft()) {
                return;
            }
            this.positionX -= px;
            this.updatePosition();
        }

        moveUp(px) {
            if (this.getCurrentPosition().top - 100 - px < game.getLastPosition().top) {
                return;
            }
            this.positionY -= px;
            this.updatePosition();
        }

        moveDown(px) {
            if (this.getCurrentPosition().bottom - px + 50 > game.getLastPosition().bottom) {
                return;
            }
            this.positionY += px;
            this.updatePosition();
        }

        updatePosition() {
            this.shooter.style.transform = `translate(${this.positionX}px, ${this.positionY}px)`;
        }
    }

    let SpaceShooter = new Shooter(shooter);
    let game = new Game(playGround, menu, shooter);
    let levels = new Levels(SpaceShooter);

    // Game Start
    menu.querySelector('#start').addEventListener('click', () => {
        playGround.removeChild(menu);
        game.isStart = true;

        soundEffects.start();
        levels.level1(); // Start with level 1

        Array.from(fadeInAnimAfterGameStart).forEach((elem) => {
            elem.classList.remove('opacity-0');
        });
        shooter.style.bottom = '10%';
    });

    let keys = {}; // Object to track key states

    // Keydown event listener
    window.addEventListener('keydown', (event) => {
        keys[event.key] = true; // Mark the key as pressed
        handleKeyPresses(); // Call function to handle key presses
    });

    // Keyup event listener
    window.addEventListener('keyup', (event) => {
        keys[event.key] = false; // Mark the key as released
    });

    function handleKeyPresses() {
        // Move Right
        if (keys['ArrowRight'] || keys['d']) { // Arrow Right or D
            SpaceShooter.moveRight(10);
        }
    
        // Move Left
        if (keys['ArrowLeft'] || keys['a']) { // Arrow Left or A
            SpaceShooter.moveLeft(10);
        }
    
        // Move Up
        if (keys['ArrowUp'] || keys['w']) { // Arrow Up or W
            SpaceShooter.moveUp(10);
        }
    
        // Move Down
        if (keys['ArrowDown'] || keys['s']) { // Arrow Down or S
            SpaceShooter.moveDown(10);
        }
    
        // Space bar to shoot
        if (keys[' '] && !keys['Control']) { // Space bar to shoot
            let beamElem = beam.cloneNode();
            SpaceShooter.shoot(beamElem);
        }
    }

        // Get elements
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");
    const showControls = document.getElementById("show-btn");

    // Function to show the popup
    function showPopup() {
        popup.classList.remove("hidden");
    }

    // Function to hide the popup
    function hidePopup() {
        popup.classList.add("hidden");
    }

    // Event listener for close button
    closeBtn.addEventListener("click", hidePopup);

    // Show the popup when the page loads
    showControls.onclick = showPopup;
    }
    
} catch (error) {
    console.error('Error initializing game:', error);
}
