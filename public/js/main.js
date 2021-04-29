// document.querySelector('.datePicker').valueAsDate = new Date()

fetch('/feelingsData')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    if (data.length > 0) {
      document.querySelector('.hideTable').style.display = 'block'
      document.querySelector('#tableWrapper').style.display = 'block'
      let moodTable = document.querySelector('.mood')
      data.forEach((day) => {
        // console.log(day);
        let tableBody = document.querySelector('.tableBody')

        let newRow = document.createElement('tr')
        let date = document.createElement('td')
        let mood = document.createElement('td')
        let message = document.createElement('td')
        date.innerText = day[2]
        mood.innerText = day[0]
        message.innerText = day[1]

        newRow.appendChild(date)
        // newRow.appendChild(genderAncestry)
        newRow.appendChild(mood)
        newRow.appendChild(message)
        tableBody.appendChild(newRow)

        // console.log(data)

      });
    } else {
      document.querySelector('.hideTable').style.display = 'none'
      document.querySelector('#tableWrapper').style.display = 'none'
    }

  })
  .catch(err => {
    console.log(`error ${err}`)
  })


// // survery
// let button = document.querySelector('#submit');
// button.addEventListener('click', () => {
//   let age = document.querySelector("#number").value,
//     race = document.querySelector("#dropdown").value,
//     q1 = document.querySelector(".q1").value,
//     q2 = document.querySelector(".q2").value,
//     q3 = document.querySelector(".q3").value,
//     q4 = document.querySelector(".q4").value,
//     q5 = document.querySelector(".q5").value,
//     q6 = document.querySelector(".q6").value,
//     q7 = document.querySelector(".q7").value,
//     q8 = document.querySelector(".q8").value,
//     q9 = document.querySelector(".q9").value,
//     q10 = document.querySelector(".q10").value,
//     comment = document.querySelector("#comment").value
//     console.log(age);
//   fetch('/surveyQ'), {
//     method: "POST",
//     headers: {'Content-Type': "application/json"},
//
//     body: JSON.stringify({
//       age: 'age',
//       race: 'race',
//       q1: 'q1',
//       q2: 'q2',
//       q3: 'q3',
//       q4: 'q4',
//       q5: 'q5',
//       q6: 'q6',
//       q7: 'q7',
//       q8: 'q8',
//       q9: 'q9',
//       q10:'q10',
//       comment: 'comment'
//     })
//   }
// })

// affirmations rendering on top of journal entries
// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });



// meditation exercise





// affirmations generator
var quotes = [{
    quote: 'It is safe to look within...As I move through th elayers of other peoples opinions and beliefs, I see withtin myself a magnificient being, wise and beautiful. I love what i see in me.',
  },
  {
    quote: 'I am willing to let go... I release others to experience whatever is meaningful to them, and I am free to create that which is meaningful to me.',
  },
  // I refactored the year property to match the instructions so that it is a number instead of a string//
  {
    quote: 'I see my parents as tiny children who need love...I have compassion for my parents childhoods, I now know that I chose them because they were perfect for what I had to learn. I forgive them and set then free, and I set my self free.',
  },
  {
    quote: 'All is well in my world... Everything is working out for my highest good. Out of this situation only good will come. I am safe.',
  },
  {
    quote: 'The point of power is always in the present moment...the past is over and done and has no power over me. I can begin to be free in this moment. Todays thoughts create my future. I am in charge. I now take my own power back. I am safe and I am free.',
  },
  {
    quote: 'Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.',
  },
  {
    quote: 'Dont be pushed around by the fears in your mind. Be led by the dreams in your heart.',
  },
  // I refactored the year property to match the instructions so that it is a number instead of a string//
  {
    quote: 'Instead of worrying about what you cannot control, shift your energy to what you can create.',
  },
  {
    quote: 'Take responsibility of your own happiness, never put it in other people’s hands.',
  },
  {
    quote: 'Be the reason someone smiles. Be the reason someone feels loved and believes in the goodness in people.',
  },
  {
    quote: 'Be mindful. Be grateful. Be positive. Be true. Be kind.',
  },
  {
    quote: 'I am willing to let go... I release others to experience whatever is meaningful to them, and I am free to create that which is meaningful to me.',
  },
  // I refactored the year property to match the instructions so that it is a number instead of a string//
  {
    quote: 'Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.',
  },
  {
    quote: 'All is well in my world... Everything is working out for my highest good. Out of this situation only good will come. I am safe.',
  },
  {
    quote: 'More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.',
  },
  {
    quote: 'The past is a place of reference, not a place of residence; the past is a place of learning, not a place of living.',
  },
  {
    quote: 'Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others',
  },
  // I refactored the year property to match the instructions so that it is a number instead of a string//
  {
    quote: 'Do what is right, not what is easy nor what is popular.',
  },
  {
    quote: 'Life becomes easier and more beautiful when we can see the good in other people.',
  },
  {
    quote: 'Dont let the expectations and opinions of other people affect your decisions. Its your life, not theirs. Do what matters most to you, do what makes you feel alive and happy. Dont let the expectations and ideas of others limit who you are. If you let others tell you who you are, you are living their reality — not yours. There is more to life than pleasing people. There is much more to life than following others prescribed path. There is so much more to life than what you experience right now. You need to decide who you are for yourself. Become a whole being. Adventure.',
  }
];
//getRandomQuote` function returns a random quote object from the quotes array.
function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  var randomQuote = array[quoteIndex];
  return randomQuote;
}
var randomQuote = getRandomQuote(quotes);
//printQuote function displays a new quote each time the user clicks the "Show another quote" button using the printQuote function
function printQuote() {
  var yourStringHere = "";
  var randomQuote = getRandomQuote(quotes);
  yourStringHere += "<p class='quote'>" + randomQuote.quote + "</p>";

  // Created conditional statements to determine what prints  to the page which fixed the properties printing as undefined which i mentioned in my read.me file///
  if (randomQuote.citation) {
    yourStringHere += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    yourStringHere += "<span class='year'>" + randomQuote.year + "</span>";
  }
  yourStringHere += "</p>";
  document.getElementById('quote-box').innerHTML = yourStringHere;
}
printQuote();
document.getElementById('load-quote').addEventListener("click", printQuote, false);
