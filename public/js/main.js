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
