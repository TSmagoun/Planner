window.onload = function() {
    colorByHour();
    save9am();
    save10am();
    save11am();
    save12pm();
    save1pm();
    save2pm();
    save3pm();
    save4pm();
    save5pm();
}


//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar


var currentDay = moment().format("dddd");
$("#currentDay").append(currentDay)

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

var now = new Date().getHours();

function colorByHour() {
    // 9 AM
    if (now > 9) {
        $("#9amInput").addClass("past");
    } else if (now >= 9 && now < 10) {
        $("#9amInput").addClass("present");
    } else if (now < 9) {
        $("#9amInput").addClass("future");
    }
    // 10 AM
    if (now > 10) {
        $("#10amInput").addClass("past");
    } else if (now >= 10 && now < 11) {
        $("#10amInput").addClass("present");
    } else if (now < 10) {
        $("#10amInput").addClass("future");
    }
    // 11 AM
    if (now > 11) {
        $("#11amInput").addClass("past");
    } else if (now >= 11 && now < 12) {
        $("#11amInput").addClass("present");
    } else if (now < 11) {
        $("#11amInput").addClass("future");
    }
    // 12 PM
    if (now > 12) {
        $("#12pmInput").addClass("past");
    } else if (now >= 12 && now < 13) {
        $("#12pmInput").addClass("present");
    } else if (now < 12) {
        $("#12pmInput").addClass("future");
    }
    // 1 PM
    if (now > 13) {
        $("#1pmInput").addClass("past");
    } else if (now >= 13 && now < 14) {
        $("#1pmInput").addClass("present");
    } else if (now < 13) {
        $("#1pmInput").addClass("future");
    }
    // 2 pm
    if (now > 14) {
        $("#2pmInput").addClass("past");
    } else if (now >= 14 && now < 15) {
        $("#2pmInput").addClass("present");
    } else if (now < 14) {
        $("#2pmInput").addClass("future");
    }
    // 3 PM
    if (now > 15) {
        $("#3pmInput").addClass("past");
    } else if (now >= 15 && now < 16) {
        $("#3pmInput").addClass("present");
    } else if (now < 15) {
        $("#3pmInput").addClass("future");
    }
    // 4 PM
    if (now > 16) {
        $("#4pmInput").addClass("past");
    } else if (now >= 16 && now < 17) {
        $("#4pmInput").addClass("present");
    } else if (now < 16) {
        $("#4pmInput").addClass("future");
    }
    // 5 PM
    if (now > 17) {
        $("#5pmInput").addClass("past");
    } else if (now >= 17 && now < 18) {
        $("#5pmInput").addClass("present");
    } else if (now < 17) {
        $("#5pmInput").addClass("future");
    }

}
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage

function save9am() {
    var userInput = document.getElementById("9amInput");
    var savedInput = document.getElementById("9amInput");
    var save_button = document.getElementById("button9am");
  
    save_button.addEventListener("click", updateOutput);
  
    savedInput.textContent = localStorage.getItem("content9am");
    userInput.value = localStorage.getItem("content9am");
  
    function updateOutput() {
      localStorage.setItem("content9am", userInput.value);
  
      savedInput.textContent = userInput;
    }
  }

  function save10am() {
    var userInput = document.getElementById("10amInput");
    var savedInput = document.getElementById("10amInput");
    var save_button = document.getElementById("button10am");
  
    save_button.addEventListener("click", updateOutput);
  
    savedInput.textContent = localStorage.getItem("content10am");
    userInput.value = localStorage.getItem("content10am");
  
    function updateOutput() {
      localStorage.setItem("content10am", userInput.value);
  
      savedInput.textContent = userInput.value;
    }
  }

  function save11am() {
    var userInput = document.getElementById("11amInput");
    var savedInput = document.getElementById("11amInput");
    var save_button = document.getElementById("button11am");
  
    save_button.addEventListener("click", updateOutput);
  
    savedInput.textContent = localStorage.getItem("content11am");
    userInput.value = localStorage.getItem("content11am");
  
    function updateOutput() {
      localStorage.setItem("content11am", userInput.value);
  
      savedInput.textContent = userInput.value;
    }
  }

  function save12pm() {
    var userInput = document.getElementById("12pmInput");
    var savedInput = document.getElementById("12pmInput");
    var save_button = document.getElementById("button12pm");
  
    save_button.addEventListener("click", updateOutput);
  
    savedInput.textContent = localStorage.getItem("content12pm");
    userInput.value = localStorage.getItem("content12pm");
  
    function updateOutput() {
      localStorage.setItem("content12pm", userInput.value);
  
      savedInput.textContent = userInput.value;
    }
  }

  function save1pm() {
    var userInput = document.getElementById("1pmInput");
    var savedInput = document.getElementById("1pmInput");
    var save_button = document.getElementById("button1pm");
  
    save_button.addEventListener("click", updateOutput);
  
    savedInput.textContent = localStorage.getItem("content1pm");
    userInput.value = localStorage.getItem("content1pm");
  
    function updateOutput() {
      localStorage.setItem("content1pm", userInput.value);
  
      savedInput.textContent = userInput.value;
    }
  }

  function save2pm() {
    var userInput = document.getElementById("2pmInput");
    var savedInput = document.getElementById("2pmInput");
    var save_button = document.getElementById("2pmInput");
  
    save_button.addEventListener("click", updateOutput);
  
    savedInput.textContent = localStorage.getItem("content2pm");
    userInput.value = localStorage.getItem("content2pm");
  
    function updateOutput() {
      localStorage.setItem("content2pm", userInput.value);
  
      savedInput.textContent = userInput.value;
    }
  }

  function save3pm() {
    var userInput = document.getElementById("3pmInput");
    var savedInput = document.getElementById("3pmInput");
    var save_button = document.getElementById("button3pm");
  
    save_button.addEventListener("click", updateOutput);
  
    savedInput.textContent = localStorage.getItem("content3pm");
    userInput.value = localStorage.getItem("content3pm");
  
    function updateOutput() {
      localStorage.setItem("content3pm", userInput.value);
  
      savedInput.textContent = userInput.value;
    }
  }

  function save4pm() {
    var userInput = document.getElementById("4pmInput");
    var savedInput = document.getElementById("4pmInput");
    var save_button = document.getElementById("button4pm");
  
    save_button.addEventListener("click", updateOutput);
  
    savedInput.textContent = localStorage.getItem("content4pm");
    userInput.value = localStorage.getItem("content4pm");
  
    function updateOutput() {
      localStorage.setItem("content4pm", userInput.value);
  
      savedInput.textContent = userInput.value;
    }
  }

  function save5pm() {
    var userInput = document.getElementById("5pmInput");
    var savedInput = document.getElementById("5pmInput");
    var save_button = document.getElementById("button5pm");
  
    save_button.addEventListener("click", updateOutput);
  
    savedInput.textContent = localStorage.getItem("content5pm");
    userInput.value = localStorage.getItem("content5pm");
  
    function updateOutput() {
      localStorage.setItem("content5pm", userInput.value);
  
      savedInput.textContent = userInput.value;
    }
  }
