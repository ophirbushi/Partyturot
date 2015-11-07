Marks = new Mongo.Collection("marks");
Assignments = new Mongo.Collection("assignments");
Attendance = new Mongo.Collection("attendance");

function toggleCourses() {
    $(".course").each(function () {
        if ($(this).hasClass("active_course")) {
            $(this).removeClass("active_course");
            $(this).addClass("non_active_course");
        }
        else {
            $(this).addClass("active_course");
            $(this).removeClass("non_active_course");
        }
    });
}


if (Meteor.isClient) {

    Template.body.helpers({
        "courses": function () {
            return [{ "isActive": "active_course", "text": "first course" }, { "isActive": "non_active_course" , "text": "second course"}];
        }
    });

    Template.body.events({
        
    });

    Template.course.helpers({
        "isActive": function () {
            return this.isActive;
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}


