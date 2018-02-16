def anagram(word, *possible_anagrams)
	$counter_coincidence = 0 
	$i_word = 0 
	$len_word = word.chars.length
	$len_array = possible_anagrams.length
	$i_array = 0 
	
	while $i_array < $len_array
		#puts possible_anagrams[$i_array] 
		while $i_word < $len_word
			if	possible_anagrams[$i_array].include? word.chars[$i_word] 
				$counter_coincidence += 1 
				puts $counter_coincidence
			end 		 	
			$i_word += 1
			if $counter_coincidence == $len_word
				puts "anagram found in " , possible_anagrams[$i_array] 
				$counter_coincidence = 0
			else 
				puts "can not found anagram"	
			end	
		end	
		 	
		$i_array += 1 
	end 
	puts $i_word
	puts $counter_coincidence	
end 	
anagram("hola", "laho", "hola", "ernesto")