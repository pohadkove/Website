var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["-1.1em", 0],
    translateZ: 0,
    duration: 1300,
    delay: (el, i) => 50 * i
  })
//
anime({ 
    targets: document.querySelector(".content"),
    innerHTML: "Thinking 100% Sleep 0%",
    easing: 'linear',
    round: 1,
    delay: 2000 ,
}); 

//setTimeout(() => {
  //const load = document.getElementById('load');

  // 👇️ removes element from DOM
  //load.style.display = 'none';

  // 👇️ hides element (still takes up space on page)
  // box.style.visibility = 'hidden';
//}, 3400); // 👈️ time in milliseconds

