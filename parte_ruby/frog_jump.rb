def frog_jump(x, y ,*d)
=begin
x = posicion inicial 
d = distancia por salto 
y = distancia para cruzar el camino  
=end 	
	$i_jump = 0 
	$len_jump = d.length
	while $i_jump < $len_jump
		puts "jump"
		y = y - (x + d[$i_jump])
		$i_jump += 1 
		if y <= 0 
			puts "la rana cruzó"
		else
			puts "faltan ", y , "para cruzar"	
		end 	
	end
end 	

frog_jump(3, 100, 30, 20, 50)
