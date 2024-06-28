const $startGameButtonFirstPlayer = document.querySelector(".start-quiz1")
const $startGameButtonSecondPlayer = document.querySelector(".start-quiz2")
const $startGameButtonThirdPlayer = document.querySelector(".start-quiz3")
const $getRankingButton = document.querySelector(".ranking-quiz")
const $imagem = document.querySelector(".container2")
const $nextQuestionButtonFirstPlayer = document.querySelector(".next-question1")
const $nextQuestionButtonSecondPlayer = document.querySelector(".next-question2")
const $nextQuestionButtonThirdPlayer = document.querySelector(".next-question3")
const $questionsContainerFirstPlayer = document.querySelector(".questions-container1")
const $questionsContainerSecondPlayer = document.querySelector(".questions-container2")
const $questionsContainerThirdPlayer = document.querySelector(".questions-container3")
const $questionTextFirstPlayer = document.querySelector(".questionFirstPlayer")
const $questionTextSecondPlayer = document.querySelector(".questionSecondPlayer")
const $questionTextThirdPlayer = document.querySelector(".questionThirdPlayer")
const $answersContainerFirstPlayer = document.querySelector(".answers-container1")
const $answersContainerSecondPlayer = document.querySelector(".answers-container2")
const $answersContainerThirdPlayer = document.querySelector(".answers-container3")
const audio = new Audio("./midias/Lobby Music (Original Soundtrack).mp3")
const audioFinal = new Audio("./midias/we-are-the-champions-copia.mp3")
const $rankingContainer = document.querySelector(".ranking-container")


import { questionsFirstPlayer, questionsSecondPlayer, questionsThirdPlayer } from "./questions.js"

let currentQuestionIndexFirstPlayer = 0
let currentQuestionIndexSecondPlayer = 0
let currentQuestionIndexThirdPlayer = 0
let totalCorrectFirstPlayer = 0
let totalCorrectSecondPlayer = 0
let totalCorrectThirdPlayer = 0

$startGameButtonFirstPlayer.addEventListener("click", startGameFirstPlayer)
$startGameButtonSecondPlayer.addEventListener("click", startGameSecondPlayer)
$startGameButtonThirdPlayer.addEventListener("click", startGameThirdPlayer)
$nextQuestionButtonFirstPlayer.addEventListener("click", displayNextQuestionFirstPlayer)
$nextQuestionButtonSecondPlayer.addEventListener("click", displayNextQuestionSecondPlayer)
$nextQuestionButtonThirdPlayer.addEventListener("click", displayNextQuestionThirdPlayer)
$getRankingButton.addEventListener("click", getRanking)

function startGameFirstPlayer() {
  $startGameButtonFirstPlayer.classList.add("hide")
  $startGameButtonSecondPlayer.classList.add("hide")
  $startGameButtonThirdPlayer.classList.add("hide")
  $questionsContainerFirstPlayer.classList.remove("hide")
  $imagem.classList.add("hide")
  $getRankingButton.classList.add("hide")
  displayNextQuestionFirstPlayer()
}

function startGameSecondPlayer() {
  $startGameButtonFirstPlayer.classList.add("hide")
  $startGameButtonSecondPlayer.classList.add("hide")
  $startGameButtonThirdPlayer.classList.add("hide")
  $questionsContainerSecondPlayer.classList.remove("hide")
  $imagem.classList.add("hide")
  $getRankingButton.classList.add("hide")
  displayNextQuestionSecondPlayer()
}

function startGameThirdPlayer() {
  $startGameButtonFirstPlayer.classList.add("hide")
  $startGameButtonSecondPlayer.classList.add("hide")
  $startGameButtonThirdPlayer.classList.add("hide")
  $questionsContainerThirdPlayer.classList.remove("hide")
  $imagem.classList.add("hide")
  $getRankingButton.classList.add("hide")
  displayNextQuestionThirdPlayer()
}

function displayNextQuestionFirstPlayer() {
  resetStateFirstPlayer()
  audio.play()

  if (questionsFirstPlayer.length === currentQuestionIndexFirstPlayer) {
    return finishGameFirstPlayer()
  }

  $questionTextFirstPlayer.textContent = questionsFirstPlayer[currentQuestionIndexFirstPlayer].questionFirstPlayer
  questionsFirstPlayer[currentQuestionIndexFirstPlayer].answersFirstPlayer.forEach(answerFirstPlayer => {
    const newAsnwerFirstPlayer = document.createElement("button")
    newAsnwerFirstPlayer.classList.add("button", "answer1")
    newAsnwerFirstPlayer.textContent = answerFirstPlayer.text
    if (answerFirstPlayer.correct) {
      newAsnwerFirstPlayer.dataset.correct = answerFirstPlayer.correct
    }
    $answersContainerFirstPlayer.appendChild(newAsnwerFirstPlayer)
    newAsnwerFirstPlayer.addEventListener("click", selectAnswerFirstPlayer)
  })
}

function displayNextQuestionSecondPlayer() {
  resetStateSecondPlayer()
  audio.play()

  if (questionsSecondPlayer.length === currentQuestionIndexSecondPlayer) {
    return finishGameSecondPlayer()
  }

  $questionTextSecondPlayer.textContent = questionsSecondPlayer[currentQuestionIndexSecondPlayer].questionSecondPlayer
  questionsSecondPlayer[currentQuestionIndexSecondPlayer].answersSecondPlayer.forEach(answerSecondPlayer => {
    const newAsnwerSecondPlayer = document.createElement("button")
    newAsnwerSecondPlayer.classList.add("button", "answer2")
    newAsnwerSecondPlayer.textContent = answerSecondPlayer.text
    if (answerSecondPlayer.correct) {
      newAsnwerSecondPlayer.dataset.correct = answerSecondPlayer.correct
    }
    $answersContainerSecondPlayer.appendChild(newAsnwerSecondPlayer)
    newAsnwerSecondPlayer.addEventListener("click", selectAnswerSecondPlayer)
  })
}

function displayNextQuestionThirdPlayer() {
  resetStateThirdPlayer()
  audio.play()

  if (questionsThirdPlayer.length === currentQuestionIndexThirdPlayer) {
    return finishGameThirdPlayer()
  }

  $questionTextThirdPlayer.textContent = questionsThirdPlayer[currentQuestionIndexThirdPlayer].questionThirdPlayer
  questionsThirdPlayer[currentQuestionIndexThirdPlayer].answersThirdPlayer.forEach(answerThirdPlayer => {
    const newAsnwerThirdPlayer = document.createElement("button")
    newAsnwerThirdPlayer.classList.add("button", "answer3")
    newAsnwerThirdPlayer.textContent = answerThirdPlayer.text
    if (answerThirdPlayer.correct) {
      newAsnwerThirdPlayer.dataset.correct = answerThirdPlayer.correct
    }
    $answersContainerThirdPlayer.appendChild(newAsnwerThirdPlayer)

    newAsnwerThirdPlayer.addEventListener("click", selectAnswerThirdPlayer)
  })
}

function resetStateFirstPlayer() {
  while ($answersContainerFirstPlayer.firstChild) {
    $answersContainerFirstPlayer.removeChild($answersContainerFirstPlayer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButtonFirstPlayer.classList.add("hide")
}

function resetStateSecondPlayer() {
  while ($answersContainerSecondPlayer.firstChild) {
    $answersContainerSecondPlayer.removeChild($answersContainerSecondPlayer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButtonSecondPlayer.classList.add("hide")
}

function resetStateThirdPlayer() {
  while ($answersContainerThirdPlayer.firstChild) {
    $answersContainerThirdPlayer.removeChild($answersContainerThirdPlayer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButtonThirdPlayer.classList.add("hide")
}

function selectAnswerFirstPlayer(event) {
  const answerClickedFirstPlayer = event.target

  if (answerClickedFirstPlayer.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrectFirstPlayer++
  } else {
    document.body.classList.add("incorrect")
  }

  document.querySelectorAll(".answer1").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  $nextQuestionButtonFirstPlayer.classList.remove("hide")
  currentQuestionIndexFirstPlayer++
}

function selectAnswerSecondPlayer(event) {
  const answerClickedSecondPlayer = event.target

  if (answerClickedSecondPlayer.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrectSecondPlayer++
  } else {
    document.body.classList.add("incorrect")
  }

  document.querySelectorAll(".answer2").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  $nextQuestionButtonSecondPlayer.classList.remove("hide")
  currentQuestionIndexSecondPlayer++
}

function selectAnswerThirdPlayer(event) {
  const answerClickedThirdPlayer = event.target

  if (answerClickedThirdPlayer.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrectThirdPlayer++
  } else {
    document.body.classList.add("incorrect")
  }

  document.querySelectorAll(".answer3").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  $nextQuestionButtonThirdPlayer.classList.remove("hide")
  currentQuestionIndexThirdPlayer++
}

function finishGameFirstPlayer() {
  const totalQuestionsFirstPlayer = questionsFirstPlayer.length
  const performance = Math.floor(totalCorrectFirstPlayer * 100 / totalQuestionsFirstPlayer)

  var message = ""
  var emoji = ""

  var infoPlayer1 = [totalCorrectFirstPlayer, "Player 1"]
  localStorage.setItem("infoPlayer1", infoPlayer1)

  switch (true) {
    case (performance >= 90):
      message = "Excellent!"
      emoji = "&#129321;"
      break
    case (performance >= 70):
      message = "Good job!"
      emoji = "&#128526;"
      break
    case (performance >= 50):
      message = "Nice try!"
      emoji = "&#128521;"
      break
    default:
      message = "Nice try!"
      emoji = "&#128521;"
  }

  $questionsContainerFirstPlayer.innerHTML =
    `
      <p class="final-message">
        Score: ${totalCorrectFirstPlayer} out of ${totalQuestionsFirstPlayer}
        <span>${message}${emoji}</span>
      </p>
      <button 
        onclick=window.location.reload() 
        class="button"
      >
        Next player
      </button>
    `
}

function finishGameSecondPlayer() {
  const totalQuestionsSecondPlayer = questionsSecondPlayer.length
  const performance = Math.floor(totalCorrectSecondPlayer * 100 / totalQuestionsSecondPlayer)

  var infoPlayer2 = [totalCorrectSecondPlayer, "Player 2"]
  localStorage.setItem("infoPlayer2", infoPlayer2)

  let message = ""
  let emoji = ""

  switch (true) {
    case (performance >= 90):
      message = "Excellent!"
      emoji = "&#129321;"
      break
    case (performance >= 70):
      message = "Good job!"
      emoji = "&#128526;"
      break
    case (performance >= 50):
      message = "Nice try!"
      emoji = "&#128521;"
      break
    default:
      message = "Nice try!"
      emoji = "&#128521;"
  }

  $questionsContainerSecondPlayer.innerHTML =
    `
      <p class="final-message">
        Score: ${totalCorrectSecondPlayer} out of ${totalQuestionsSecondPlayer}
        <span>${message}${emoji}</span>
      </p>
      <button 
        onclick=window.location.reload() 
        class="button"
      >
        Next player
      </button>
    `
}

function finishGameThirdPlayer() {
  const totalQuestionsThirdPlayer = questionsThirdPlayer.length
  const performance = Math.floor(totalCorrectThirdPlayer * 100 / totalQuestionsThirdPlayer)

  var infoPlayer3 = [totalCorrectThirdPlayer, "Player 3"]
  localStorage.setItem("infoPlayer3", infoPlayer3)

  let message = ""
  let emoji = ""

  switch (true) {
    case (performance >= 90):
      message = "Excellent!"
      emoji = "&#129321;"
      break
    case (performance >= 70):
      message = "Good job!"
      emoji = "&#128526;"
      break
    case (performance >= 50):
      message = "Nice try!"
      emoji = "&#128521;"
      break
    default:
      message = "Nice try!"
      emoji = "&#128521;"
  }
  $rankingContainer.classList.remove("hide")
  $questionsContainerThirdPlayer.innerHTML =
    `
    <p class="final-message">
      Score: ${totalCorrectThirdPlayer} out of ${totalQuestionsThirdPlayer}
      <span>${message}${emoji}</span>
    </p>
    <button
      onclick=window.location.reload() 
      class="button"
    >
      Go back
    </button>
    
  `
}

function getRanking() {

  audioFinal.play()

  $rankingContainer.classList.remove('hide')
  $startGameButtonFirstPlayer.classList.add("hide")
  $startGameButtonSecondPlayer.classList.add("hide")
  $startGameButtonThirdPlayer.classList.add("hide")
  $imagem.classList.add("hide")
  $getRankingButton.classList.add("hide")

  var data = [localStorage.getItem("infoPlayer1").split(","), localStorage.getItem("infoPlayer2").split(","), localStorage.getItem("infoPlayer3").split(",")]

  var dataSorted = data.sort()

  $rankingContainer.innerHTML =
    `
  <img class = "img2" src = "midias/ozsLt41qIx.png" >
  <table>
          <thead>
              <tr>
                  <th>Position</th>
                  <th>Player</th>
                  <th>Points</th> 
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1ª</td>
                  <td>${dataSorted[2][1]}</td>
                  <td>${dataSorted[2][0]}</td>
              </tr>
              <tr>
                  <td>2ª</td>
                  <td>${dataSorted[1][1]}</td>
                  <td>${dataSorted[1][0]}</td>
              </tr>
               <tr>
                  <td>3ª</td>
                  <td>${dataSorted[0][1]}</td>
                  <td>${dataSorted[0][0]}</td>
              </tr>
          </tbody>
      </table>
  `

}




