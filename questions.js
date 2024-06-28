const questionsFirstPlayer = [
    {
      questionFirstPlayer: "Which sentence is in the simple present tense?",
      answersFirstPlayer: [
        { text: 'The teacher spells very well.', correct: true },
        { text: 'The teacher is spelling the words for the students.', correct: false },
        { text: 'The teacher spelled very well.', correct: false },
        { text: 'The teacher will spell the words later.', correct: false }
      ]
    },
    {
      questionFirstPlayer: "What is the past tense of 'forbid'?",
      answersFirstPlayer: [
        { text: 'forbided', correct: false },
        { text: 'forbidden', correct: false },
        { text: 'forbade', correct: true },
        { text: 'forbaded', correct: false }
      ]
    },
    {
      questionFirstPlayer: "What is the past tense of 'Nick can calculate very quickly'?",
      answersFirstPlayer: [
        { text: 'Nick calculated very quickly.', correct: false },
        { text: 'Nick could calculate very quickly.', correct: true },
        { text: 'Nick was calculating very quickly.', correct: false },
        { text: 'Nick can not count.', correct: false }
      ]
    },
    {
      questionFirstPlayer: "What is the passive of 'Amanda wrote the story'?",
      answersFirstPlayer: [
        { text: 'The story was written by Amanda.', correct: true },
        { text: 'The story wrote Amanda', correct: false },
        { text: 'The story was wrote by Amanda.', correct: false },
        { text: 'The story is written by Amanda.', correct: false }
      ]
    },
    {
      questionFirstPlayer: "Which are the correct prepositions?",
      answersFirstPlayer: [
        { text: "The holidays start on 3 o'clock on Friday.", correct: false },
        { text: "The holidays start on 3 o'clock at Friday.", correct: false },
        { text: "The holidays start at 3 o'clock at Friday.", correct: false },
        { text: "The holidays start at 3 o'clock on Friday.", correct: true }
      ]
    },
  
  ]
  
  const questionsSecondPlayer = [
      {
        questionSecondPlayer: "Which sentence is in past continuous tense?",
        answersSecondPlayer: [
            { text: "John never studies.", correct: false },
            { text: "John will be studying.", correct: false },
            { text: "John was studying.", correct: true },
            { text: "John is studying", correct: false }
        ]
      },
      {
        questionSecondPlayer: "What is the past tense of 'shake'?",
        answersSecondPlayer: [
          { text: "shook", correct: true },
          { text: "shaked", correct: false },
          { text: "shaken", correct: false },
          { text: "shaket", correct: false }
        ]
      },
      {
        questionSecondPlayer: "How do you congratulate someone on their birthday?",
        answersSecondPlayer: [
          { text: 'I wish you have a happy birthday.', correct: false },
          { text: 'I wish you a happy birthday.', correct: true },
          { text: 'I wish you get a happy birthday.', correct: false },
          { text: 'You are very old.', correct: false }
        ]
      },
      {
        questionSecondPlayer: "What is the passive of 'They will finish the book.'?",
        answersSecondPlayer: [
          { text: 'The book will be finish by them.', correct: false },
          { text: 'Will they ever finish the book?', correct: false },
          { text: 'The book will be finished by they.', correct: false },
          { text: 'The book will be finished by them.', correct: true }
        ]
      },
      {
        questionSecondPlayer: "Select the one prepostion: My puppy zoomed across the yard.",
        answersSecondPlayer: [
          { text: 'zoomed', correct: false },
          { text: 'yard', correct: false },
          { text: 'puppy', correct: false },
          { text: 'across', correct: true }
        ]
      },
      
    ]
  
    const questionsThirdPlayer = [
      {
        questionThirdPlayer: "Which sentence is in past perfect tense?",
        answersThirdPlayer: [
          { text: "Michael can only do 1 push-up.", correct: false },
          { text: "Michael did 50 push-ups perfectly.", correct: false },
          { text: "Michael did 50 push-ups.", correct: false },
          { text: "Michael had done 50 push-ups.", correct: true }
        ]
      },
      {
        questionThirdPlayer: "What is the past tense of 'rise'?",
        answersThirdPlayer: [
          { text: "rised", correct: false },
          { text: "risen", correct: false },
          { text: "rose", correct: true },
          { text: "raise", correct: false }
        ]
      },
      {
        questionThirdPlayer: "Which is an antonym of 'huge'?",
        answersThirdPlayer: [
          { text: "big", correct: false },
          { text: "tiny", correct: true },
          { text: "hug", correct: false },
          { text: "enormous", correct: false }
        ]
      },
      {
        questionThirdPlayer: "If you've done your homework, how do you answer the question: 'haven't you done your homework?'?",
        answersThirdPlayer: [
          { text: "Yes, I have.", correct: true },
          { text: "No, I haven't.", correct: false },
          { text: "Yes, I haven't.", correct: false },
          { text: "No, I have.", correct: false }
        ]
      },
      {
        questionThirdPlayer: "Which phrasal verb is correct?",
        answersThirdPlayer: [
          { text: "The spaceship took off.", correct: true },
          { text: "The spaceship gave off.", correct: false },
          { text: "The spaceship took on.", correct: false },
          { text: "What is a spaceship?", correct: false }
        ]
      },
    ]

    export {questionsFirstPlayer, questionsSecondPlayer, questionsThirdPlayer}