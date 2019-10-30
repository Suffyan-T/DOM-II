// Your code goes here

// Event One
// Make the logo change color on mouseover
let logo = document.querySelector('.logo-heading');
logo.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "yellow";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

// Event Two
// Scales the bus image with mouse wheel
  let busImage = document.querySelector('.intro').querySelector('img');
//   console.log(busImage);
  
  function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    busImage.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  busImage.onwheel = zoom;
 

// Event Three
// Makes the headings bigger
  let headings = document.querySelectorAll('h2');
  console.log(headings);
  headings.forEach(function(element){
    element.addEventListener('mouseenter', () => { 

        element.classList.toggle('bigText');
      });
      
      element.addEventListener('mouseleave', () => { 
      
          element.classList.toggle('bigText');
        });
  });


// Event Four
// preventdefault
  let allATags = document.querySelectorAll('a');
  for (let i = 0; i < allATags.length; i++) {
    allATags[i].addEventListener('click', (event) => {
        event.preventDefault();
        });
        
}


// Event Five
// Makes Second Image dissapear on mouseover
const letsGoImage = document.querySelector('.img-content');
letsGoImage.addEventListener('mouseenter', () => { 

    letsGoImage.style.opacity = "1";
  });
letsGoImage.addEventListener('mouseleave', () => {
    letsGoImage.style.opacity = "1";
    
    letsGoImage.addEventListener('mouseenter', () => { 

        letsGoImage.style.opacity = "0";
      });

});


// Event Six
// Turn backgorund color of paragraphs yellow on double click
// Might be useful to keep track of what you have read by marking it yellow
let paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function(element){

    element.addEventListener('dblclick', () => {
        element.style.backgroundColor = "yellow";
    })
  });


// Event Seven
// Makes the bottom content text bigger
let bottomContentText = document.querySelector('.content-pick').querySelectorAll('p');
console.log(bottomContentText);
bottomContentText.forEach(function(element){
    element.addEventListener('mouseenter', () => { 

      element.classList.toggle('bigText');
    });
    
    element.addEventListener('mouseleave', () => { 
    
        element.classList.toggle('bigText');
      });
});

// Event Eight
// Changes Window background on doubleclick

window.addEventListener('dblclick', (event) => {
    event.target.style.background = "yellow";
    setTimeout(function(){event.target.style.background = ""}, 5000);
})


// Event Nine
// Activates alert() when sign up button is pressed
const bottomButtons = document.querySelectorAll('.btn');
    bottomButtons.forEach(function(elem){
        elem.addEventListener('click', (event) => {
        alert(`Thank You for Signing UP!`)
        event.stopPropagation();
    })
})

// Event TEN
// Changes color of footer text to red on mouseover
let footerContent = document.querySelector('.footer').querySelector('p');
   console.log(footerContent);
    footerContent.addEventListener('mouseenter', () => { 
        footerContent.style.color = "red";
    });
    
    footerContent.addEventListener('mouseleave', () => { 
        footerContent.style.color = "black";
      });

