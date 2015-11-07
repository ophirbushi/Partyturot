Marks = new Mongo.Collection("marks");
Assignments= new Mongo.Collection("assignments");
Attendance = new Mongo.Collection("attendance");



if (Meteor.isClient) {


}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
