function calculateTimeDifference() {
    var currentDate = new Date();

    var anniversaryDate = new Date("2023-02-14T21:15:00");

    var timeDifference = currentDate - anniversaryDate;

    timeDifference += 86400000;

    var years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
    var months = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
    var days = Math.floor((timeDifference % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    var hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
    var seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

    document.getElementById("years").innerHTML = str_pad_left(years, '0', '2');
    document.getElementById("months").innerHTML = str_pad_left(months, '0', '2');
    document.getElementById("days").innerHTML = str_pad_left(days, '0', '2');
    document.getElementById("hours").innerHTML = str_pad_left(hours, '0', '2');
    document.getElementById("minutes").innerHTML = str_pad_left(minutes, '0', '2');
    document.getElementById("seconds").innerHTML = str_pad_left(seconds, '0', '2');
}

calculateTimeDifference();

setInterval(function() {
    calculateTimeDifference();
}, 1000);


function str_pad_left(str, padChar, length) {
    str = String(str);
  
    if (str.length >= length) {
      return str;
    }
  
    var padCount = length - str.length;
  
    var padString = padChar.repeat(padCount);
  
    return padString + str;
  }
 
   // Number of heart emojis
   const numHearts = 50;
    
   // Generate random position for heart emojis
   const generateRandomPosition = () => {
     const xPos = Math.random() * window.innerWidth;
     const yPos = Math.random() * window.innerHeight;
     return {x: xPos, y: yPos};
   };
   
   // Create heart emoji elements and add to DOM
   const createHeartEmojis = () => {
     const snowflakesContainer = document.getElementById('snowflakesContainer');
     for (let i = 0; i < numHearts; i++) {
       const heartEmoji = document.createElement('span');
       heartEmoji.className = 'snowflake';
       heartEmoji.innerHTML = '❤️'; // Heart emoji
       const {x, y} = generateRandomPosition();
       heartEmoji.style.left = `${x}px`;
       heartEmoji.style.top = `${y}px`;
       snowflakesContainer.appendChild(heartEmoji);
     }
   };
   
   // Start the animation
   const startAnimation = () => {
     createHeartEmojis();
     setInterval(() => {
       const snowflakes = document.getElementsByClassName('snowflake');
       for (let i = 0; i < snowflakes.length; i++) {
         const snowflake = snowflakes[i];
         const yPos = parseFloat(snowflake.style.top);
         const newPos = yPos + 1;
         if (newPos > window.innerHeight) {
           snowflake.style.top = '0px';
           snowflake.style.left = `${Math.random() * window.innerWidth}px`;
         } else {
           snowflake.style.top = `${newPos}px`;
         }
       }
     }, 10);
   };
   
   // Call the startAnimation function to begin the snowfall effect
   startAnimation();