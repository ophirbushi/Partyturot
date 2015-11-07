Marks = new Mongo.Collection("marks");
Assignments = new Mongo.Collection("assignments");
Attendance = new Mongo.Collection("attendance");

Marks2 = new Mongo.Collection("marks2");
Assignments2 = new Mongo.Collection("assignments2");
Attendance2 = new Mongo.Collection("attendance2");

course1 = {
    "courseName": "course1",
    "active": "active_course",
    "marks": Marks,
    "assignments": Assignments,
    "attendance": Attendance
};
course2 = {
    "courseName": "course2",
    "active": "non_active_course",
    "marks": Marks2,
    "assignments": Assignments2,
    "attendance": Attendance2
};

courses = [course1, course2];
courses["course1"] = course1;
courses["course2"] = course2;

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
            return courses;
        }
    });

    Template.body.events({

    });

    Template.course.helpers({
        "courseName": function () {
            return this.courseName;
        },
        "active": function () {
            return this.active;
        },
        "assignments": function () {
            return this.assignments.find({});
        },
        "marks": function () {
            return this.marks.find({});
        },
        "attendances": function () {
            return this.attendance.find({});
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}


