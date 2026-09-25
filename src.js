// do not do any of this if it's mobile 
const isMobile = window.matchMedia("(max-width: 768px)");

if (! isMobile.matches) {
  const walloftext = document.getElementById("walloftext");

  const characters = walloftext.innerHTML.split('');
  const container = document.getElementById("container")

  counter = 0;

  characters.forEach(char => {
    counter += 1

    const span = document.createElement('span');
    span.classList.add("normal")
    span.textContent = char;

    if (counter % 2 == 0) {
      // Attach the mouseenter listener
      span.addEventListener('pointerover', (event) => {
          span.classList.add("getbig");
          span.animate(
            [
              {transform: 'rotate(0deg)'},
              {transform: 'rotate(360deg)'}
            ],
            {
              duration: 2000,
              iterations: Infinity,
              easing: 'linear'
            }
           
          )
      })

      // Attach a click listener 
      // span.addEventListener("click", () => {
      //   // Animate 
      //   console.log("here")
      //   span.classList.add("getbig");
      //   span.animate(
      //     [
      //       { transform: 'rotate(0deg)' },
      //       { transform: 'rotate(360deg)' }
      //     ], 
      //   {
      //     duration: 2000,       // Duration in milliseconds (2 seconds)
      //     iterations: Infinity, // Keep spinning forever
      //     easing: 'linear'      // Maintain a smooth, constant speed
      //   }
      // )})

      // Attach the mouseleave listener
      span.addEventListener('pointerleave', () => {
          span.classList.remove("getbig");
          span.style.opacity = "100";
      });

      // Append the newly created character span back to the container
      container.appendChild(span);
    }
    
  });

  function revealme() {
    const me = document.getElementById("me");
    me.classList.toggle("appear")
  }
}