{
	const longestPalindrome = str => {
		if (str.length === 1) return str;
		const isPalindrome = str => {
			console.log('callIsPalindrome', str);
			if (str.length === 1) return true;
			let left = 0;
			let right = str.length - 1;
			while (left < right) {
				if (str[left] !== str[right]) return false;
				left++;
				right--;
			}
			return true;
		}
		let maxStr = '';
		for (let i = 0; i < str.length; i++) {
			for (let j = i + 1; j <= str.length; j++) {
				let tmpStr = str.slice(i, j);
				console.log('tmpStr : ', tmpStr);
				let len = tmpStr.length;
				if (len > maxStr.length && isPalindrome(tmpStr)) {
					maxStr = tmpStr;
					console.log('maxStr : ', maxStr);
				}
			}
		}
		return maxStr;
	}
	//console.log('longestPalindrome - 1', longestPalindrome("cbbd")) //bb
	console.log('longestPalindrome - 2', longestPalindrome("racecar")) //racecar
	//console.log('longestPalindrome - 3', longestPalindrome("babad")) //bab
	//console.log('longestPalindrome - 4', longestPalindrome("babab")) //babab
	//console.log('longestPalindrome - 5', longestPalindrome("ababbad")) //abba
	//console.log('longestPalindrome - 6', longestPalindrome("c")) //c
	//console.log('longestPalindrome - 7', longestPalindrome("bb")) //bb
}