// Code Side Baar ka js

document.getElementById("openBtn").addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "250px";
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "0";
});

// Sidebar close when clicked outside
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openBtn");
  const searchBox = document.querySelector(".search-box"); // Added search box to exception

  if (
    !sidebar.contains(event.target) &&
    !openBtn.contains(event.target) &&
    !searchBox.contains(event.target) // Prevent closing when clicking inside search box
  ) {
    sidebar.style.width = "0";
  }
});

/// new code input box ka4

let availakey = [
  { keyword: "html", url: "https://www.w3schools.com/html/" },
  { keyword: "css", url: "https://www.w3schools.com/css/" },
  { keyword: "java", url: "https://www.w3schools.com/java/" },
  { keyword: "java script", url: "https://www.w3schools.com/js/" },
  { keyword: "python", url: "https://www.w3schools.com/python/" },
  { keyword: "hcvxv", url: "sidebar.html" },
  { keyword: "Result Cherk", url: "student Result.html" },
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const searchButton = document.getElementById("search-button");

// Input typing ke waqt suggestions show karna
inputBox.onkeyup = function (event) {
  event.stopPropagation(); // Prevent side effects
  performSearch(); // Typing ke dauran search suggestions show kare
};

// Input box par click hone par results box chhupana
inputBox.onclick = function () {
  resultsBox.style.display = "block"; // Show results when input is clicked
};

// Button click par result ko redirect kare
searchButton.onclick = function (event) {
  event.preventDefault(); // Prevent default behavior (if inside form)
  performSearchAndRedirect(); // Button click karne par redirect kare
};

// Typing ke dauran search suggestions dikhaye
function performSearch() {
  let input = inputBox.value.toLowerCase();

  // Only show results if input is not empty
  if (input.trim() === "") {
    resultsBox.style.display = "none"; // Hide results if input is empty
    return; // Exit the function if no input
  }

  let result = availakey.filter((item) => {
    return item.keyword.toLowerCase().includes(input);
  });

  display(result); // Suggestions show kare

  if (!result.length) {
    resultsBox.innerHTML = ""; // Agar result na ho toh clear kare
    resultsBox.style.display = "none"; // Hide results if no match
  } else {
    resultsBox.style.display = "block"; // Show results if matches found
  }
}

// Button click karne par URL par redirect kare
function performSearchAndRedirect() {
  let input = inputBox.value.toLowerCase();
  let result = availakey.find((item) => {
    return item.keyword.toLowerCase().includes(input);
  });

  if (result) {
    window.location.href = result.url; // Redirect kare
  } else {
    alert("No matching result found!"); // Agar match na ho
  }
}

// Search suggestions ko show karna
function display(result) {
  const content = result
    .map((item) => {
      return (
        "<li onclick=\"redirectToPage('" +
        item.url +
        "')\">" +
        item.keyword +
        "</li>"
      );
    })
    .join(""); // Join li items

  resultsBox.innerHTML = "<ul>" + content + "</ul>"; // Show list
}

// Click par redirect kare
function redirectToPage(url) {
  window.location.href = url;
}

// Mouse out event par results box chhupana
document.addEventListener("click", function (event) {
  if (!inputBox.contains(event.target) && !resultsBox.contains(event.target)) {
    resultsBox.style.display = "none"; // Hide results if clicked outside
  }
});

// let availakey = [
//   { keyword: "html", url: "https://www.w3schools.com/html/" },
//   { keyword: "css", url: "https://www.w3schools.com/css/" },
//   { keyword: "java", url: "https://www.w3schools.com/java/" },
//   { keyword: "java Script", url: "https://www.w3schools.com/js/" },
//   { keyword: "python", url: "https://www.w3schools.com/python/" },
//   { keyword: "hcvxv", url: "sidebar.html" },
//   { keyword: "Result Cherk", url: "student Result.html" },
// ];

// const resultsBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");
// const searchButton = document.getElementById("search-button");

// inputBox.onkeyup = function (event) {
//   event.stopPropagation();
//   performSearch();
// };

// searchButton.onclick = function (event) {
//   event.preventDefault(); // Prevent default behavior (if inside a form)
//   performSearch(); // Perform search on button click
// };

// function performSearch() {
//   let result = [];
//   let input = inputBox.value;
//   if (input.length) {
//     result = availakey.filter((item) => {
//       return item.keyword.toLowerCase().includes(input.toLowerCase());
//     });
//     console.log(result);

//     // Automatic redirect if exactly one match
//     if (result.length === 1) {
//       redirectToPage(result[0].url);
//     }
//   }

//   display(result);
//   if (!result.length) {
//     resultsBox.innerHTML = "";
//   }
// }

// function display(result) {
//   const content = result.map((item) => {
//     return (
//       "<li onclick=\"redirectToPage('" +
//       item.url +
//       "')\">" +
//       item.keyword +
//       "</li>"
//     );
//   });
//   resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
// }

// function redirectToPage(url) {
//   window.location.href = url; // Redirect to the selected URL
// }

// let availakey = [
//   { keyword: "html", url: "https://www.w3schools.com/html/" },
//   { keyword: "css", url: "https://www.w3schools.com/css/" },
//   { keyword: "java", url: "https://www.w3schools.com/java/" },
//   { keyword: "java Script", url: "https://www.w3schools.com/js/" },
//   { keyword: "python", url: "https://www.w3schools.com/python/" },
//   { keyword: "hcvxv", url: "sidebar.html" },
//   { keyword: "Result Cherk", url: "student Result.html" },
// ];

// const resultsBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");
// const searchButton = document.getElementById("search-button");

// // Search function when typing in input box
// inputBox.onkeyup = function (event) {
//   event.stopPropagation(); // Stop propagation to prevent sidebar close
//   performSearch(); // Perform search on keyup
// };

// // Search function when clicking on button or icon inside button
// searchButton.onclick = function (event) {
//   event.preventDefault(); // Prevent default behavior (if inside a form)
//   performSearch(); // Perform search on button click
// };

// function performSearch() {
//   let result = [];
//   let input = inputBox.value;
//   if (input.length) {
//     result = availakey.filter((item) => {
//       return item.keyword.toLowerCase().includes(input.toLowerCase());
//     });
//     console.log(result);
//   }
//   display(result);
//   if (!result.length) {
//     resultsBox.innerHTML = "";
//   }
// }

// function display(result) {
//   const content = result.map((item) => {
//     return (
//       "<li onclick=\"redirectToPage('" +
//       item.url +
//       "')\">" +
//       item.keyword +
//       "</li>"
//     );
//   });
//   resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
// }

// function redirectToPage(url) {
//   window.location.href = url; // Redirect to the selected URL
// }

// let availakey = [
//   { keyword: "html", url: "https://www.w3schools.com/html/" },
//   { keyword: "css", url: "https://www.w3schools.com/css/" },
//   { keyword: "java", url: "https://www.w3schools.com/java/" },
//   { keyword: "java Script", url: "https://www.w3schools.com/js/" },
//   { keyword: "python", url: "https://www.w3schools.com/python/" },
//   { keyword: "hcvxv", url: "sidebar.html" },
//   { keyword: "Result Cherk", url: "student Result.html" },
// ];

// const resultsBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");

// inputBox.onkeyup = function (event) {
//   event.stopPropagation(); // Stop propagation to prevent sidebar close
//   let result = [];
//   let input = inputBox.value;
//   if (input.length) {
//     result = availakey.filter((item) => {
//       return item.keyword.toLowerCase().includes(input.toLowerCase());
//     });
//     console.log(result);
//   }
//   display(result);
//   if (!result.length) {
//     resultsBox.innerHTML = "";
//   }
// };

// function display(result) {
//   const content = result.map((item) => {
//     return (
//       "<li onclick=\"redirectToPage('" +
//       item.url +
//       "')\">" +
//       item.keyword +
//       "</li>"
//     );
//   });
//   resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
// }

// function redirectToPage(url) {
//   window.location.href = url; // Redirect to the selected URL
// }

// document.getElementById("openBtn").addEventListener("click", function () {
//   document.getElementById("sidebar").style.width = "250px";
// });

// document.getElementById("closeBtn").addEventListener("click", function () {
//   document.getElementById("sidebar").style.width = "0";
// });

// // Sidebar close when clicked outside
// document.addEventListener("click", function (event) {
//   const sidebar = document.getElementById("sidebar");
//   const openBtn = document.getElementById("openBtn");

//   if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
//     sidebar.style.width = "0";
//   }
// });

// //input box code

// let availakey = [
//   { keyword: "html", url: "https://www.w3schools.com/html/" },
//   { keyword: "css", url: "https://www.w3schools.com/css/" },
//   { keyword: "java", url: "https://www.w3schools.com/java/" },
//   { keyword: "java Script", url: "https://www.w3schools.com/js/" },
//   { keyword: "python", url: "https://www.w3schools.com/python/" },
//   { keyword: "hcvxv", url: "sidebar.html" }, // Placeholder link
//   { keyword: "Result Cherk", url: "student Result.html" }, // Placeholder link
// ];

// const resultsBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");

// inputBox.onkeyup = function () {
//   let result = [];
//   let input = inputBox.value;
//   if (input.length) {
//     result = availakey.filter((item) => {
//       return item.keyword.toLowerCase().includes(input.toLowerCase());
//     });
//     console.log(result);
//   }
//   display(result);
//   if (!result.length) {
//     resultsBox.innerHTML = "";
//   }
// };

// function display(result) {
//   const content = result.map((item) => {
//     return (
//       "<li onclick=\"redirectToPage('" +
//       item.url +
//       "')\">" +
//       item.keyword +
//       "</li>"
//     );
//   });
//   resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
// }

// // Mock Data: यह डेटा असल में backend से आता है
const studentData = {
  10001: {
    name: "Jay Shikha Kushwaha",
    result: "Pass",
    marks: 20,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  10002: {
    name: "Princi Kushwaha",
    result: "Pass",
    marks: 21,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  10003: {
    name: "Shivangi Sahu",
    result: "Pass",
    marks: 30,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  10004: {
    name: "Fatima Khan",
    result: "Fail",
    marks: 19,
    maximum_marks: 45,
    Test: "Html Css ",
  },
  10005: {
    name: "Saurbh Yadav",
    result: "Pass",
    marks: 22,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  10006: {
    name: "sulekha Yadav",
    result: "Pass",
    marks: 28,
    maximum_marks: 45,
    Test: "Html Css ",
  },
  10007: {
    name: "Jyoti Kushwaha",
    result: "Pass",
    marks: 31,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  10008: {
    name: "Prerna Kushwaha",
    result: "Pass",
    marks: 35,
    maximum_marks: 45,
    Test: "Html Css ",
  },
  10009: {
    name: "Raj Kumari Verma",
    result: "Pass",
    marks: 29,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  100010: {
    name: "Tanish Verma",
    result: "Pass",
    marks: 32,
    maximum_marks: 40,
    Test: "Ms Word",
  },

  67890: { name: "सीता", result: "Fail", marks: 40 },
  666666: {
    name: "Ramesh",
    result: "Pass",
    marks: 90,
    Father_Name: 50,
  },
  11121: { name: "गणेश", result: "Pass", marks: 92 },
};

function checkResult() {
  // Input से रोल नंबर प्राप्त करें
  const rollNumber = document.getElementById("rollNumber").value;

  // रोल नंबर को चेक करें और result दिखाएं
  const result = studentData[rollNumber];

  if (result) {
    document.getElementById("resultDisplay").innerHTML = `
          <p>Full_Name: ${result.name}</p>
          <p>Result: ${result.result}</p>
          <p>Marks: ${result.marks}</p>
          <p>Maximum_Marks: ${result.maximum_marks}</p>
          <p>Test: ${result.Test} </p>
      `;
  } else {
    document.getElementById(
      "resultDisplay"
    ).innerHTML = `<p>कृपया सही रोल नंबर दर्ज करें।</p>`;
  }
}

// /// input box

// // यह फ़ंक्शन यूज़र को संबंधित पेज पर रीडायरेक्ट करेगा
// // function redirectToPage(url) {
// //   window.location.href = url;
// // }

// // document.getElementById("openBtn").addEventListener("click", function () {
// //   document.getElementById("sidebar").style.width = "250px";
// // });

// // document.getElementById("closeBtn").addEventListener("click", function () {
// //   document.getElementById("sidebar").style.width = "0";
// // });

// // // Sidebar close when clicked outside
// // document.addEventListener("click", function (event) {
// //   const sidebar = document.getElementById("sidebar");
// //   const openBtn = document.getElementById("openBtn");

// //   if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
// //     sidebar.style.width = "0";
// //   }
// // });
