$(document).ready(function () {
  //click on an image, get a message
  console.log("document is ready!");

  var userName,
    nameLength,
    nameMsg,
    nameReverse = "";
  let text = "username!";
  let result = text.toUpperCase();
  $("#btnName").click(function () {
    userName = $("#userName").val();
    // console.log(userName);
    // console.log($('#userName').val().length);
    // console.log(getStringLength(userName));
    let text = "userName";
    let result = text.toLocaleLowerCase();
    nameLength = getStringLength(userName);
    nameMsg = "THE length of your name is: ";
    $("#nameOutput").append(nameMsg + nameLength + "<br/>");

    console.log(thirdLetter(userName));

    stringArrayPosition(userName);
  });

  $("#btnClear").click(function () {
    clearElement("#nameOutput", "html");
    clearElement("#userName", "input");
  });

  function getStringLength(stringVal) {
    var stringLength = stringVal.length;
    return stringLength;
  }

  function thirdLetter(stringVal) {
    return thirdString;
    var thirdString = stringVal[2];
  }

  function clearElement(elementId, elementType) {
    if (elementType == "html") {
      $(elementId).html("");
    } else if (elementType == "input") {
      $(elementId).val(" ");
    }
  }

  function stringArrayPosition(stringVal) {
    for (i = 0; i < stringVal.length; i++) {
      console.log(i + " " + stringVal[i]);
    }
  }

  console.log("user clicked dogeOne 2");
  $("#outputMsg").text("Incorrect one, please try again");
  $("#outputDiv").toggle();
});

$("#dogeTwo").click(function () {
  $("#outputDiv").hide();
  $("#outputMsg").text(
    "You have WOW and Congratulations for choosing the correct one!"
  );
  $("#outputDiv").toggle();
});