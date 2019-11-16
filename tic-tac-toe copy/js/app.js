
  let gameBoard = document.querySelectorAll('.userInput')
  let clicks = 1;


  for(let i =0; i < gameBoard.length; i++){
    gameBoard[i].addEventListener('click', ()=>{
      if (gameBoard[i].innerHTML !== 'X' && gameBoard[i].innerHTML !== 'O'){
        if (clicks % 2 === 0){
          gameBoard[i].innerHTML = 'O'
        }else{
          gameBoard[i].innerHTML = 'X'
        }
        clicks++
      }
      if (gameBoard[0].innerHTML ==='X' && gameBoard[1].innerHTML === 'X' && gameBoard[2].innerHTML==='X'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[3].innerHTML ==='X' && gameBoard[4].innerHTML === 'X' && gameBoard[5].innerHTML==='X'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[6].innerHTML ==='X' && gameBoard[7].innerHTML === 'X' && gameBoard[8].innerHTML==='X'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[0].innerHTML ==='X' && gameBoard[3].innerHTML === 'X' && gameBoard[6].innerHTML==='X'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[1].innerHTML ==='X' && gameBoard[4].innerHTML === 'X' && gameBoard[7].innerHTML==='X'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[2].innerHTML ==='X' && gameBoard[5].innerHTML === 'X' && gameBoard[8].innerHTML==='X'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[0].innerHTML ==='X' && gameBoard[4].innerHTML === 'X' && gameBoard[8].innerHTML==='X'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[2].innerHTML ==='X' && gameBoard[4].innerHTML === 'X' && gameBoard[6].innerHTML==='X'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[0].innerHTML ==='O' && gameBoard[1].innerHTML === 'O' && gameBoard[2].innerHTML==='O'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[3].innerHTML ==='O' && gameBoard[4].innerHTML === 'O' && gameBoard[5].innerHTML==='O'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[6].innerHTML ==='O' && gameBoard[7].innerHTML === 'O' && gameBoard[8].innerHTML==='O'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[0].innerHTML ==='O' && gameBoard[3].innerHTML === 'O' && gameBoard[6].innerHTML==='O'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[1].innerHTML ==='O' && gameBoard[4].innerHTML === 'O' && gameBoard[7].innerHTML==='O'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[2].innerHTML ==='O' && gameBoard[5].innerHTML === 'O' && gameBoard[8].innerHTML==='O'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[0].innerHTML ==='O' && gameBoard[4].innerHTML === 'O' && gameBoard[8].innerHTML==='O'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }
    if (gameBoard[2].innerHTML ==='O' && gameBoard[4].innerHTML === 'O' && gameBoard[6].innerHTML==='O'){
      document.querySelector('.winner').innerHTML = 'CONGRATS! YOU WON'
    }

  })
}

// still need to create the fix for the edge case for reseting after winner found 
//edge case for resetting when there is a tie

//beginning of trying to make it OOJS 

//get all boxes add them to variable
// const divs = document.querySelectorAll('#userInput')

//add an event listener to each individual box
// divs.forEach(function (el){
//   el.addEventListener('click', ()=>(
//     alert('this click works')
//     if (this.textContent === ''){
//       game.checkPlayer()
//       let const = createTextNode()


//     }
//   ))
// })