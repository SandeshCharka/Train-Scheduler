var config = {
    apiKey: "AIzaSyAs7ksX2Gv5_R6dmH27DXCFawNZbuZLu04",
    authDomain: "train-scheduler-c38b1.firebaseapp.com",
    databaseURL: "https://train-scheduler-c38b1.firebaseio.com",
    projectId: "train-scheduler-c38b1",
    storageBucket: "train-scheduler-c38b1.appspot.com",
    messagingSenderId: "234248320606",
    appId: "1:234248320606:web:4d7f2b82ff84f4be28e6cf",
    measurementId: "G-H9DMZVXSQ2"
};

firebase.initializeApp(config);
var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = "";

$("#submitButton").on("click", function () {

    trainName = $("#nameField").val().trim()
    destination = $("#destinationField").val().trim()
    firstTrainTime = $("#firstTrainField").val().trim()
    frequency = $("#frequencyField").val().trim()

    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    });

    $("#nameField").val("");
    $("#destinationField").val("");
    $("#firstTrainField").val("");
    $("#frequencyField").val("");

    return false;
});

database.ref().on("child_added", function (snapshot) {

    trainName = snapshot.val().trainName;
    destination = snapshot.val().destination;
    firstTrainTime = snapshot.val().firstTrainTime;
    frequency = snapshot.val().frequency;

    // CONVERTING FIRST INPUT 
    var firstTrain = moment(firstTrainTime, "HH:mm").subtract(5, "years");
    // DIFFERENCE IN TIME IN MINUTES
    var diffTime = moment().diff(moment(firstTrain), "minutes");
    // FIND THE REMAINDER FOR THE NEXT TRAIN TIME
    var remainder = diffTime % frequency;
    // frequency - remainder = HOW far next train is
    var nextTrain = frequency - remainder;

    var nextArrival = moment().add(nextTrain, "minutes").format("LT");

    $("#tableBody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + nextTrain + "</td></tr>")

})