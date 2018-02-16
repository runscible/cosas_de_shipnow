def find_coincidences(word, *possible_anagrams)
	$counter_coincidence = 0 
	$i_word = 0 
	$len_word = word.chars.length
	$list_coincidences = []
	while $i_word < $len_word
		if possible_anagrams[$i_array].include? word.chars[$i_word] 
			$counter_coincidence += 1 
		end 		 	
		$i_word += 1
		if $counter_coincidence == $len_word
			$list_coincidences.push(possible_anagrams[$i_array])
		end	
	end
	$list_coincidences.each do 
		puts "coincidece found in ", $list_coincidences
	end 	
end 	

def anagram(*possible_anagrams)
	$len_array = possible_anagrams.length
	$i_array = 0 
	while $i_array < $len_array
			find_coincidences(*possible_anagrams)			
		$i_array += 1 
	end 

end 	
#nota: por alguna razón me estaría arrojando un error cuando una palabra no coincide con el 
#anagrama , intenté añadir un catch pero no estaoy seguro si funciona como en java por ejemplo 
#ya que los errores escapan igual 
anagram("hola",  "hola", "laho", "ernesto","hloa", "laho", "cuba", "laho")