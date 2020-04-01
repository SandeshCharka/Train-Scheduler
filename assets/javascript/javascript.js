
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

var name = "";
var age = "";
var phone = "";

function writeData() {
    name = $("#nameField").val().trim(),
    age = $("#ageField").val().trim()

    database.ref("User").set({
        name: name,
        age: age
    });
}