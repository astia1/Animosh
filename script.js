const ring = {
  A: "If you are offended by insults and violence, please cancel, and contnue to the next challnge",
  B1: "Excellent, future compost. Get ready to be humiliated, or die...",
  B2: "Have a nice day",
  C: "A warrior must see his opponent's moves coming.",
  C2: "Observe your opponent Silent Killer's moves and anticipate his future move.",
  //C3: "Jab",
  //C5: "Swing",
  C6: "Oh you just stepped in horse dung!",
  C7: "Did you pee yourself? I think you peed yourself.",
  D1: "What will Silent Killer do in 2 moves? Jab, swing, or block",
  E1: "Silent Killer has chopped off your head, and will use it as a chamber pot! Would you like to pull yourself together and try again?",
  E2: "You have surprised me Pisspants. On to the next challenge!",
  E3: "Go..., just go..., you're not even worth killing... Or would you like to try again",
  E4: "Go clean stables, you louse on a rat anus.",
  F1: "Answer must be jab, swing, or block. Click OK to play again!",
  F2: "No guts, no glory. Now get out of here, before Silent Killer cuts off your arms and and feeds them to his wolverines one by one, propping up your limbless body to watch.",
  I1: "So, you want to be a warrior?",
  I2: "To gain that title and the respect it brings, you must complete 4 challenges.", 
  I3: "The last will be a test of mind, body, and spirit against the GREAT WARRIOR QUOKKA!",
}

function beginRing() {
  // 'confirm' shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.
  const intro = alert(ring.I1);
  //const intro2 = alert(ring.I2);
  //const intro3 = alert(ring.I3);
  const response = confirm(ring.A);
  if (response) {
  // 'alert' shows a message.
    alert(ring.B1);
    nextQuestion();
  } else {
    alert(ring.B2)
  }
}
function nextQuestion() {
  function shuffle(moves) {
  let currentIndex = moves.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [moves[currentIndex], moves[randomIndex]] = [
      moves[randomIndex], moves[currentIndex]];
  }

  //return moves;
}

// Used like so
let arr = ["stab","swing","block","kick","charge" ];
shuffle(arr);
//console.log(arr);
{
  const response1 = alert(ring.C);
  const response2 = alert(ring.C2);
  const response3 = alert(arr[0]);
  const response4 = alert(arr[0]);
  const response6 = alert(ring.C6);
  const response5 = alert(arr[1]);
  const response9 = alert(ring.C7);
  const response7 = alert(arr[2]);
  const response8 = alert(arr[0]);
  // 'prompt' shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
  const response = prompt(`What will Silent Killer do in 2 moves, ${arr[0]}, ${arr[1]}, or ${arr[2]}?`);
  // convert answer to lower case for boolean
  if (response.toLowerCase() === (arr[0])){
    const startOverA = confirm(ring.E3);
    if (startOverA) {
      nextQuestion();
    }
    else  {
    alert(ring.F2);
    }
  }    
  else if (response.toLowerCase() === (arr[1])) {
    alert(ring.E2);
  }
  else if (response.toLowerCase() === (arr[2])) {
    const startOverB = confirm(ring.E1);
    if (startOverB) {
      nextQuestion();
    }
    else  {
    alert(ring.F2);
    }
  }   
  else {
    const startOver = confirm(ring.F1);
    if (startOver) {
      nextQuestion();
    }
    else  {
    alert(ring.F2);
    }
  }    
}
}
//don't forget to initiate your game!!
beginRing();
