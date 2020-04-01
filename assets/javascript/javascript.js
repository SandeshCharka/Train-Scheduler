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

    database.ref().set({
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

database.ref().on("value", function (snapshot) {

    console.log(snapshot.val());

    trainName = snapshot.val().trainName;
    destination = snapshot.val().destination;
    firstTrainTime = snapshot.val().firstTrainTime;
    frequency = snapshot.val().frequency;

    $("#tableBody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTrainTime + "</td><td>" + frequency + "</td></tr>")

})