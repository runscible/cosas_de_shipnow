$(document).ready(function(){
	var date = new Date(); 
	$.ajax({
		url: "http://nolaborables.com.ar/api/v2/feriados/"+date.getFullYear()+"?formato=mensual",
		method: "GET", 
		dataType: "application/json", 
		success: function(data){
			var local_data = data.toJSON(); 
			console.log(local_data); 
		}, 
		//nota: por alguna razón el api de nolaborables solo funciona en el parámetro 'error'
		//del ajax de jquery , no parece tener efectos colaterales 
		error: function(data_error){
			console.log("ERROR");
			var list_days = []; 
			var local_data = JSON.parse(data_error.responseText); 
			for(var i = 0 ; i < local_data.length; i++){
				var date_holydays = {'month': '', 'day':[], 'year': '' };
				date_holydays.month += i; 
				date_holydays.year += date.getFullYear();
				for (firstKey in local_data[i]){
					date_holydays.day.push(firstKey);  

				}
				list_days.push(date_holydays); 
			} 


			
			function getHolidays(list_days){
				for (var i = 0; i < list_days.length; i++) {
				    return list_days[i].day; 
				}
			}	
			var test = "15-2-2018"; 
			$("#date_picker").datepicker({
				dayNamesMin:["Lun", "Mar", "Miérc", "Jue","Vier", "Sáb", "Dom" ], 
				monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
				"Octubre", "Noviembre", "Diciembre"] , 
				maxDate: "+1m ", 
				minDate: "-1y ", 
				beforeShowDay: function(date){
					var month = date.getMonth()+1; 
					var year = date.getFullYear(); 
					var day = date.getDay(); 
					if(month === 2 && year === 2018 && day === 15){
						return [false]; 
					}else{
						return [true]; 
					}
				}
			});
		}
	});  
}); 


