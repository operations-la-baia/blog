// do not do any of this if it's mobile 
const isMobile = window.matchMedia("(max-width: 768px)");

if (! isMobile.matches) {
  console.log("here")
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
      })

      // Attach the mouseleave listener
      span.addEventListener('pointerleave', () => {
          // span.classList.remove("getbig");
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