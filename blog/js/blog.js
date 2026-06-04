
// hamburger menu animation

const hamburger = document.querySelector ('#hamburger');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('animate');
})

// search bar

const searchInput = document.querySelector ('.search-input');

// to listen to events on search input
searchInput.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase(); // get value of input + reduce to lowercase
    // to check if work console.log(currentValue); //
    // grab each title to verify. make array of "titles" from each 'title'
    let titles = document.querySelectorAll('.title');
    titles.forEach(title => {  // write if statement to see does title match with #search input
      if (title.textContent.toLowerCase().includes(currentValue)) {
        title.parentNode.style.display = 'block';  // if true, show parent of that name
      } else {
        title.parentNode.style.display = 'none'; // if false, do not show parent of that name
      }
    })
  })

  // to search both title and summary, but only search summary
// searchInput.addEventListener('keyup', e => {
//  let currentValue = e.target.value.toLowerCase(); // get value of input + reduce to lowercase
  // to check if work console.log(currentValue); //
  // grab each title to verify. make array of "titles" from each 'title'
//  let titles = document.querySelectorAll('.title');
//  titles.forEach(title => {  // write if statement to see does title match with #search input
//    if (title.textContent.toLowerCase().includes(currentValue)) {
//      title.parentNode.style.display = 'block';  // if true, show parent of that name
//    } else {
//      title.parentNode.style.display = 'none'; // if false, do not show parent of that name
//    }
//  })
//  let summarys = document.querySelectorAll('.summary');
//  summarys.forEach(summary => {  // write if statement to see does summary match with #search input
//    if (summary.textContent.toLowerCase().includes(currentValue)) {
//      summary.parentNode.style.display = 'block';  // if true, show parent of that name
//    } else {
//      summary.parentNode.style.display = 'none'; // if false, do not show parent of that name
//    }
//  })
//})

  
console.log(window.innerWidth);