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
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"February" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"March" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"April" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"May" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"June" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"July" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"August" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"September" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"October" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"November" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		},
	"December" : {
			"no_of_workers" : 0,
			"Retail Sales Person" : 0,
			"Cashier" : 0,
			"Registered Nurse" : 0,
			"Office Clerk" : 0
		}
};

var workers_pay = {};
var payroll = 0;

var curr_month = new Date().getMonth() + 1; 

$(function(){
	
	$.getJSON('./data/workers.json', function(data){

		var no_of_workers=0, retail=0, cashier=0, nurses=0, clerk=0;

		workers["total_workers"] = data.workers.length;

		workers["by_location"] = {};

		var location;
		 
		for(item in data.workers){
			var month_number = parseInt(data.workers[item].workAssignments[0].actualStartDate.split('-')[1]);
			var month = months[month_number];
			workers[month]["no_of_workers"]++;
			workers[month][data.workers[item].workAssignments[0].jobTitle]++

			location = data.workers[item].person.birthPlace.countrySubdivisionLevel1.shortName;
			if(workers["by_location"][location])
				workers["by_location"][location]++;
			else
				workers["by_location"][location] = 1; 

			workers_pay[data.workers[item].associateOID] = {
				"joined_month" : month_number,
				"pay": data.workers[item].workAssignments[0].baseRemuneration.monthlyRateAmount.amountValue,
				"occupation" : data.workers[item].workAssignments[0].jobTitle
			};
			if(month_number<curr_month)
				payroll += data.workers[item].workAssignments[0].baseRemuneration.monthlyRateAmount.amountValue;
		}

		for(m=1; m<=curr_month; m++){
			var month = months[m];
			workers[month]["no_of_workers"]+=no_of_workers;
			workers[month]["Retail Sales Person"]+=retail;
			workers[month]["Cashier"]+=cashier;
			workers[month]["Registered Nurse"]+=nurses;
			workers[month]["Office Clerk"]+=clerk;

			no_of_workers = workers[month]["no_of_workers"];
			retail = workers[month]["Retail Sales Person"];
			cashier = workers[month]["Cashier"];
			nurses = workers[month]["Registered Nurse"];
			clerk = workers[month]["Office Clerk"];
		}
		console.log(workers);
		console.log(workers_pay);
		
		
		// $('#prevMonth').find("h4").html("Total Workers: "+workers[months[curr_month-1]]["no_of_workers"]);
		// $('#prevMonth').find("#childCare").html(workers[months[curr_month-1]]["Child Care Worker"]);
		// $('#prevMonth').find("#chiefExecutive").html(workers[months[curr_month-1]]["Chief Executive"]);
		// $('#prevMonth').find("#retail").html(workers[months[curr_month-1]]["retail"]);
		// $('#prevMonth').find("#cashier").html(workers[months[curr_month-1]]["Cashier"]);

		// $('#nextMonth').find("h4").html("Total Workers: "+workers[months[curr_month]]["no_of_workers"]);
		// $('#nextMonth').find("#childCare").html(workers[months[curr_month]]["Child Care Worker"]);
		// $('#nextMonth').find("#chiefExecutive").html(workers[months[curr_month]]["Chief Executive"]);
		// $('#nextMonth').find("#retail").html(workers[months[curr_month]]["retail"]);
		// $('#nextMonth').find("#cashier").html(workers[months[curr_month]]["Cashier"]);
	});
});