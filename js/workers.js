var months = {
	"1" : "January",
	"2" : "February",
	"3" : "March",
	"4" : "April",
	"5" : "May",
	"6" : "June",
	"7" : "July",
	"8" : "August",
	"9" : "September",
	"10" : "October",
	"11" : "November",
	"12" : "December"
};

var workers={
	"total_workers" : 0,
	"January" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"February" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"March" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"April" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"May" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"June" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"July" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"August" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"September" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"October" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"November" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		},
	"December" : {
			"no_of_workers" : 0,
			"Auditor" : 0,
			"Cashier" : 0,
			"Child Care Worker" : 0,
			"Chief Executive" : 0
		}
};

var curr_month = new Date().getMonth() + 1; 

$(function(){
	
	$.getJSON('./data/workers.json', function(data){

		var no_of_workers=0, auditor=0, cashier=0, ccw=0, ce=0;

		workers["total_workers"] = data.workers.length;
		 
		for(item in data.workers){
			var month = months[parseInt(data.workers[item].workAssignments[0].actualStartDate.split('-')[1])];
			workers[month]["no_of_workers"]++;
			workers[month][data.workers[item].workAssignments[0].jobTitle]++;
		}

		for(m=1; m<=curr_month; m++){
			var month = months[m];
			workers[month]["no_of_workers"]+=no_of_workers;
			workers[month]["Auditor"]+=auditor;
			workers[month]["Cashier"]+=cashier;
			workers[month]["Chief Executive"]+=ce;
			workers[month]["Child Care Worker"]+=ccw;

			no_of_workers = workers[month]["no_of_workers"];
			auditor = workers[month]["Auditor"];
			cashier = workers[month]["Cashier"];
			ce = workers[month]["Chief Executive"];
			ccw = workers[month]["Child Care Worker"];
		}
		console.log(workers);

		var data_prev = {}, data_curr = {};
		
		// $('#prevMonth').find("h4").html("Total Workers: "+workers[months[curr_month-1]]["no_of_workers"]);
		// $('#prevMonth').find("#childCare").html(workers[months[curr_month-1]]["Child Care Worker"]);
		// $('#prevMonth').find("#chiefExecutive").html(workers[months[curr_month-1]]["Chief Executive"]);
		// $('#prevMonth').find("#auditor").html(workers[months[curr_month-1]]["Auditor"]);
		// $('#prevMonth').find("#cashier").html(workers[months[curr_month-1]]["Cashier"]);

		// $('#nextMonth').find("h4").html("Total Workers: "+workers[months[curr_month]]["no_of_workers"]);
		// $('#nextMonth').find("#childCare").html(workers[months[curr_month]]["Child Care Worker"]);
		// $('#nextMonth').find("#chiefExecutive").html(workers[months[curr_month]]["Chief Executive"]);
		// $('#nextMonth').find("#auditor").html(workers[months[curr_month]]["Auditor"]);
		// $('#nextMonth').find("#cashier").html(workers[months[curr_month]]["Cashier"]);
	});
});