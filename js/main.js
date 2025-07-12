//Get the deck
let deckId = ""

fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      deckId = data.deck_id
       
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  fetch(url)
    .then (res => res.json())
    .then (data => {
      console.log(data)
      const player1Val= Number(cardValueConverter(data.cards[0].value))
      document.querySelector('#player1').src = data.cards[0].image
    })
     if(player1Val< player2Value){
          document.querySelector("h3").innerText= "Player 2 won"
       }
       else if(player1Val> player2Value){
          document.querySelector("h3").innerText= "Player 1 won"
       }
       else{
          document.querySelector("h3").innerText= "It's time for War"
       }

      .catch(err =>{
      console.log(`error ${err}`)
    })
}

function cardValueConverter(val){
  if(val === "KING"){
    return 14
  }
  else if(val === "ACE")
    {return 13}
  else if(val === "QUEEN")
    {return 12}
  else if(val === "JACK")
    {return 11}
  else
    return Number(val)

}


// Dylan's Code


let deckId2 = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  deckId2 = data.deck_id
})
.catch(err => {
    console.log(`error ${err}`)
});


document.querySelector('button').addEventListener('click', getPlayer2)

function getPlayer2(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('#player2').src = data.cards[0].image
    let player2Value = cardValueConverter(data.cards[0].value)
  })
    return player2Value
  .catch(err => {
      console.log(`error ${err}`)
  });
}











































// let deckId = ''

// fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         deckId = data.deck_id
        
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });


// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
  
//   const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         let val1 = Number(cardValue( data.cards[0].value ))
//         let val2 = Number(cardValue( data.cards[1].value ))
//         document.querySelector('#player1').src = data.cards[0].image
//         document.querySelector('#player2').src = data.cards[1].image
//         if(val1 > val2){
//           document.querySelector('h3').innerText = 'Player 1 WON!'
//         }else if(val1 < val2){
//           document.querySelector('h3').innerText = 'Player 2 WON!'
//         }else{
//           document.querySelector('h3').innerText = 'WAR!'
//         }
        
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// function cardValue(val){
//   if(val === "ACE"){
//     return 14
//   }else if (val === "KING"){
//     return 13
//   }else if(val === "QUEEN"){
//     return 12
//   }else if(val === "JACK"){
//     return 11
//   }else{
//     return Number(val)
//   }
// }
