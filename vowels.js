<html>
	<head>
		<title>
			get a number of vowels in a string in JavaScript
		</title>
	</head>
<body>
	<h1>
		vowel in a string
	</h1>
<script>
function getVowels(string) {
	var Vowels = 'aAeEiIoOuU';
	var vowelsCount = 0;
	for(var i = 0; i < string.length ; i++) {
		if (Vowels.indexOf(string[i]) !== -1) {
			vowelsCount += 1;
		}
	}
return vowelsCount;
}
document.write("The Number of vowels in -"+" Computer Science "+ getVowels("Computer Science "));
</script>
</body>
</html>
