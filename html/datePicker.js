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

			/*
	
				toma el json que devuelve el api y lo convierte al formato de una lista con la que pueda trabajar el 
				datepicker
			*/

			//asigna los valores del json a una lista con json chiquitos 
			for(var i = 0 ; i < local_data.length; i++){
				var date_holydays = {'month': '', 'day':[], 'year': '' };
				
					date_holydays.month = i ; 
					date_holydays.month = parseInt(date_holydays.month) + 1; 
					if(date_holydays.month < 10){
						date_holydays.month = '0'+date_holydays.month; 
					}
				
				 
				date_holydays.year += date.getFullYear();
				for (firstKey in local_data[i]){
					if(firstKey < 10 ){
						firstKey = '0'+firstKey; 
					}
					date_holydays.day.push(firstKey);  

				}
				//desarma los json chiquitos y los guarda en una lista con formato especifico de fecha 
				for(var a = 0 ; a < date_holydays.day.length; a++){
					
					console.log(date_holydays.month);  
					list_days.push(date_holydays.day[a]+"-"+date_holydays.month+"-"+date_holydays.year); 	
				}
				
			} 
			console.log(list_days); 
				//funcion que toma los datos procesados por el api y los asigna como parametro al datepicker 
			function DisableSpecificDates(date) {
			    var string = jQuery.datepicker.formatDate('dd-mm-yy', date);
			    return [list_days.indexOf(string) == -1, 'holi'];
			  }
				
			
			$("#date_picker").datepicker({
				dayNamesMin:["Lun", "Mar", "Miérc", "Jue","Vier", "Sáb", "Dom" ], 
				monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
				"Octubre", "Noviembre", "Diciembre"] , 
				maxDate: "+1m ", 
				minDate: "-1y ", 
				beforeShowDay: DisableSpecificDates	
			});


			$(document).on('click', '.ui-datepicker-next', function () {
			  $(".ui-datepicker-title>span").hide().show(300);
			  $(".ui-datepicker-calendar").hide('slide', { direction: 'right' }, 300).show('slide', { direction: 'left' }, 300)
			}); 

			$(document).on('click', '.ui-datepicker-prev', function () {
			  $(".ui-datepicker-title>span").hide().show(300);
			  $(".ui-datepicker-calendar").hide('slide', { direction: 'left' }, 300).show('slide', { direction: 'right' }, 300)
			 }); 
		}
	});  
}); 


