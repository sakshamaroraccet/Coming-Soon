
// Document ready!
function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
      // Document is already ready, call the callback directly
      callbackFunc();
    } else if (document.addEventListener) {
      // All modern browsers to register DOMContentLoaded
      document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
      // Old IE browsers
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
          callbackFunc();
        }
      });
    }
  }
  
  /** TEST CONTROLS **/
  ready(function() {
      var preloader = document.getElementById('preloader');
      var btns = document.getElementsByTagName('button');
      
      // Test
      setTimeout(function(){ preloader.className = 'slide-in' }, 500);
      setTimeout(function(){ preloader.className = 'slide-out' }, 1500);
      
      // Itterate through animation test buttons
      for(var i = 0; i < btns.length; i++) {
          var el = btns[i];   
          el.onclick = function() {
              var tempClass = this.id
              // Remove.. well equals empty. No need for if/else
              preloader.className = tempClass.replace(/remove/g, '');
          };
      }
  });


  
  // my next birthday
const newDate = new Date('sep 12 23 23:59:59').getTime()
const countdown = setInterval(() =>{
  
const date = new Date().getTime()
const diff = newDate - date

const month =  Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
const days = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24))
const hours =  Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      document.querySelector(".seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds
      document.querySelector(".minutes").innerHTML = minutes < 10 ? '0' + minutes :minutes
      document.querySelector(".hours").innerHTML = hours < 10 ? '0' + hours : hours
      document.querySelector(".days").innerHTML = days < 10 ? '0' + days : days
      document.querySelector(".months").innerHTML = month < 10 ? '0' + month : month

if(diff === 0){
  clearInterval(countdown)
        document.querySelector(".countdown").innerHTML = 'Happy Birthday Ahmed'
}

}, 1000)