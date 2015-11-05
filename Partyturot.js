Marks = new Mongo.Collection("marks");
Assignments = new Mongo.Collection("assignments");

function isValidMark(text) {
    var num = parseInt(text);
    return !isNaN(num) && num >= 0 && num <= 100;
}

if (Meteor.isClient) {

    Template.body.helpers({
        "marks": function () {
            return Marks.find({});
        },
        "average": function () {
            var marks = Marks.find({});
            var numOfMarks = marks.count();
            var total = 0;
            var average = 0;
            marks.forEach(function (doc) {
                total += parseInt(doc.mark)
            });
            if (numOfMarks != 0) {
                average = total / numOfMarks;
            }
            return average;
        },
		"assignments": function(){
			return Assignments.find({});
		}
    });
	
	Template.assignment.helpers({
		"text": function(){
			return this.text;
		},
		"dueDate": function(){
			return this.dueDate;
		}
		
	});
	
	Template.assignment.events({
		"click .xdelete_assignment": function(){
			Assignments.remove(this._id);
		}
		
	});

    Template.body.events({
        'click #add_mark_button': function (event) {
            event.preventDefault();
            var mark = $("#add_mark_input").val();
			var receivedDate = $("#mark_received_date_input").val();
            if (isValidMark(mark)) {
                Marks.insert({
					"documentCreationDate": new Date(),
                    "mark": mark,
                    "receivedDate": receivedDate
                });
            }
            $("#add_mark_input").val("");
	        $("#mark_received_date_input").val("");
        },
        "click .xdelete": function (event) {
            event.preventDefault();
            Marks.remove(this._id);
        },
		"click #add_assignment_button": function(event){
			event.preventDefault();
			var text = $("#add_assignment_text_input").val();
			var dueDate = $("#assignment_due_date_input").val();
			Assignments.insert({
				"documentCreationDate": new Date(),
				"text": text,
				"dueDate":dueDate
			});
			$("#add_assignment_text_input").val("");
			$("#assignment_due_date_input").val("");
		}
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
