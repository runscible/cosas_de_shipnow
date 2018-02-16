$(document).ready(function(){
	console.log(':D');
	 	
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
		//del ajax de jquery 
		error: function(data_error){
			console.log("ERROR");
			var local_data = JSON.parse(data_error.responseText); 
			for(var i = 0 ; i < local_data.length; i++){
				var date_holydays = {'month': '', 'day':[] };
				date_holydays.day.push(i); 
				console.log("///////");  
				for (firstKey in local_data[i]){
					date_holydays.month += firstKey;  
				}
				console.log(date_holydays); 
			} 
			
			
			$("#date_picker").datepicker({
				dayNamesMin:["Lun", "Mar", "Miérc", "Jue","Vier", "Sáb", "Dom" ], 
				monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
				"Octubre", "Noviembre", "Diciembre"] , 
				maxDate: "+1m ", 
				minDate: "-1y ",

			});
		}
	});  
}); 


/*
{
  "1": {
    "motivo": "Año Nuevo",
    "tipo": "inamovible",
    "id": "año-nuevo"
  }
}
*/