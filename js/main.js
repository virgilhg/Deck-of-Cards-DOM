document.querySelector('button').addEventListener('click', compare)

let deckId = ""

fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      deckId = data.deck_id
       
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

function compare(){
const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  let player1 = getFetch(url)

  function getFetch(val){
    fetch(val)
      .then (res => res.json())
      .then (data => {
        document.querySelector('#player1').src = data.cards[0].image
        let player1 = cardValueConverter(data.cards[0].value)

        document.querySelector('#player2').src = data.cards[1].image
        let player2 = cardValueConverter(data.cards[1].value)

        if(player1 > player2){
          document.querySelector('#compare').innerHTML = 'Player 1 Wins!'
        }else if(player1 < player2){
          document.querySelector('#compare').innerHTML = 'Player 2 Wins!'
        }else{
          document.querySelector('#compare').innerHTML = "It's a tie!!"
        }
      })
        .catch(err =>{
        console.log(`error ${err}`)
      })
  }
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