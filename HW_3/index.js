// #1
function calcDifference(arr) {
    return arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);
}
// console.log(calcDifference([1, 2, 3, -4]));


// #2
function getWords(str, number) {
    let words = str.match(/[^\s!?.,]+/gu).filter(word => !["&", "-"].includes(word));
    return words.filter(word => word.length > number);
}
// console.log(getWords("Мар'янці подарували Kidphone-a42, на якому вона зможе дивитись свій улюблений мультик - Tom&Jerry.", 7));


// #3
function checkStringEnding(str1, str2) {
    return str1.endsWith(str2);
}
// console.log(checkStringEnding("abc", "bc")); 
// console.log(checkStringEnding("abc", "d")); 


// #4
function getArrayOfAverages(arr) {
    let averages = [];
    for (let i = 0; i < arr.length - 1; i++) {
      averages.push((arr[i] + arr[i + 1]) / 2);
    }
    return averages;
}
// console.log(getArrayOfAverages([2, -2, 2, -2, 2]));
// console.log(getArrayOfAverages([1, 3, 5, 1, -10])); 


// #5
function countVowels(string) {
    return (string.match(/[aeiouаоуеіиы]/gi) || []).length;
}
// console.log(countVowels("Celebration"));
// console.log(countVowels("Palm"));


// #5.2 
function removeABC(string) {
    let string_without_abc = string.replace(/[abc]/gi, '');
    return string_without_abc !== string ? string_without_abc : null;
}
// console.log(removeABC("This might be a bit hard")); 
// console.log(removeABC("hello world!")); 


// #6
function getUniqueElements(arr1, arr2) {
    let merged_array = arr1.concat(arr2);
    let unique_elements = [];
    merged_array.forEach(element => {
        if (!unique_elements.includes(element)) {
            unique_elements.push(element);
        }
    });
    return unique_elements.sort((a, b) => a - b);
}
// console.log(getUniqueElements([1, 2, 3], [100, 2, 1, 1, 10]));


// #7
function getInvertedObject(obj) {
    let inverted_object = {};
    Object.entries(obj).forEach(([key, value]) => {
        inverted_object[value] = key;
    });
    return inverted_object;
}
// console.log(getInvertedObject({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));


// #8
function calculateDifference(items, insurance) {
    let items_total_price = Object.values(items).reduce((sum, value) => sum + value, 0);
    return ((Object.keys(items).length === 0) || (items_total_price <= insurance)) 
            ? "Invalid data entered. Please try again." : items_total_price - insurance;
}
// console.log(calculateDifference({ "baseball bat": 20 }, 5)); 
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); 
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); 


// #9
function doesBrickFit(a,b,c,w,h) {
    return ( w>=a && (h>=b || h>=c) || w>=b && (h>=a || h>=c) || w>=c && (h>=a || h>=b) ); 
}
// console.log(doesBrickFit(1, 1, 1, 1, 1));
// console.log(doesBrickFit(1, 2, 1, 1, 1));
// console.log(doesBrickFit(1, 2, 2, 1, 1));
// console.log(doesBrickFit(1, 6, 8, 3, 5));
// console.log(doesBrickFit(1, 4, 8, 3, 5));


// #10
function getFilename(str){
    return str.substring(str.lastIndexOf("\\") + 1, str.lastIndexOf(".")); 
}
// console.log(getFilename('c:\\WebServers\\home\\testsite\\www\\myfile.txt')); 


// #11
function checkCyclicShift(str1, str2) {
    return str1.length === str2.length && (str2 + str2).includes(str1); 
}
// console.log(checkCyclicShift("sigma", "gmasi"));
// console.log(checkCyclicShift("sigma", "gmassi"));
// console.log(checkCyclicShift("sigma","gmusi"));
// console.log(checkCyclicShift("",""));


// #12
function getTwoArrays(arr_a) {
    if (arr_a.length % 2 !== 0) {
        return 'Please enter an even number of elements.';
    }
    let arr_b = [];
    let arr_c = [];
    let ordered_arr = arr_a.sort((a, b) => a - b); 
    ordered_arr.forEach((element, index) => {(index % 2 === 0) 
        ? arr_b.push(element) : arr_c.push(element)});
    return {arr_b, arr_c};
}
// console.log(getTwoArrays([4, 1, 2, 8, 3, 9]));


// #13
function getNewString (str) {
    let words = str.split(' ');
    let changed_words = words.map((word, index) => {
        if (index === 0 && !word.startsWith('http://') && !word.startsWith('https://') && !word.includes('@')) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        if (word.startsWith('http://') || word.startsWith('https://')) {
            return '[посилання заборонено]';
        }
        if (word.includes('@')) {
            return '[контакти заборонені]';
        }
        if (/^\d+$/.test(word) && word.length > 3) {
            return '';
        }
        return word.toLowerCase();
    });
    let new_str = changed_words.join(' ');
    if (new_str.length > str.length) setInterval(() => alert('Чи потрібна Вам допомога?'), 5000);
    return new_str;
}
// console.log(getNewString('http://name.com Name Surname name@smthng.com 12345 12345k 42'));
// console.log(getNewString('Name http://name.com name@smthng.com 5675i4545 Something here'));


// #14
function checkParenthesesBalance(text) {
    let stack = [];
    for (let char of text) {
        if (char === '(') stack.push(char);
        else if (char === ')' && stack.pop() !== '(') return false;
    }
 
    if (stack.length === 0) {
        document.body.innerHTML = text;
        document.addEventListener('selectstart', (event) => {event.preventDefault();});
        document.addEventListener("contextmenu", (event) => {event.preventDefault();});
        document.addEventListener("keydown", (event) => {
            if(event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
                event.preventDefault();
            }
        });
    }
    return stack.length === 0;
}
// console.log(checkParenthesesBalance('(5+10-(-7)+6)')); 
// console.log(checkParenthesesBalance('(5+10-(-7)+6))(')); 


// #15
function passwordGenerator () {
    let required_characters = "_";
    let characters = "";
    let characters_length = getRandomNumber(3, 18); 

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function getRandomUppercaseLatter() {
        return String.fromCharCode(getRandomNumber(65, 91));
    }

    function getRandomSymbolWithoutNumbers() {
        let range = Math.random() < 0.5 ? [33, 48] : [58, 127];
        return String.fromCharCode(getRandomNumber(range[0], range[1]));
    }

    function getRandomSymbol() {
        return String.fromCharCode(getRandomNumber(33, 127));
    }

    for (var i = 0; i < 2; i++) {
        required_characters += getRandomUppercaseLatter();
    }
    
    let numbers_in_characters = characters.match(/\d/g); 
    for (var i = 0; i < characters_length; i++) { 
        characters += (!isNaN(characters.slice(-1)) || (numbers_in_characters && numbers_in_characters.length > 5)) 
                    ? getRandomSymbolWithoutNumbers() : getRandomSymbol();
    }

    let password = [...characters];
    for (let char of required_characters) {
        let randomIndex = Math.floor(Math.random() * ++password.length)
        password.splice(randomIndex, 0, char);
    }
    password = password.join(''); 
    return password;
}
// console.log(passwordGenerator());


// #16
function sortArray(arr) {
    let ordered_array = arr.sort((a, b) => a - b);
    let even_indexes = ordered_array.filter((_, index) => index % 2 === 0);
    let odd_indexes = ordered_array.filter((_, index) => index % 2 !== 0).sort((a, b) => b - a);
    return [...even_indexes, ...odd_indexes];
}
// console.log(sortArray([1, 5, 3, 4, 2, 2]));


// #17
function sortByFrequency(str) {
    let char_frequency = {}; 
    str.replace(/\s+/g, '').toLowerCase().split('').forEach(function(char) {
        char_frequency[char] = char_frequency[char] + 1 || 1;
    });
    return Object.entries(char_frequency)
        .sort((a, b) => b[1] - a[1])
        .reduce((sorted_string, [char, count]) => sorted_string + char.repeat(count), '');
}
// console.log(sortByFrequency("a banana"));
// console.log(sortByFrequency("They love cats and dogs and birds")); 


// #18
function getLongestCommonSubstring(str1, str2) {
    let longest_substring = '';
    str1.split(' ').forEach(word1 => {
        str2.split(' ').forEach(word2 => {
            [...word1].forEach((_, i) => {
                [...word1].forEach((_, j) => {
                    let substring = word1.slice(i, j + 1);
                    if (word2.includes(substring) && substring.length > longest_substring.length) {
                        longest_substring = substring;
                    }
                });
            });
        });
    });
    return longest_substring;
}
// console.log(getLongestCommonSubstring('abaktkyuio', 'hiyuiodogaba')); 
// console.log(getLongestCommonSubstring('today the weather is good', 'the weatherr is good today')); 


// #19
function getEncryptedString(string, shift) {
    return string.replace(/[a-zA-Z]/g, (char) => {
        let char_code = char.charCodeAt();
        let char_offset = char.toUpperCase() === char ? 65 : 97;
        return String.fromCharCode(((char_code - char_offset + shift) % 26) + char_offset);
    });
}
// console.log(getEncryptedString('Hello! The bird is flying high.', 3));


// #20
function checkAreAnagrams(str1, str2) {
    let normalize = str => str.replace(/\s/g, '').toLowerCase().split('').sort().join(''); 
    let normalized_str1 = normalize(str1);
    let normalized_str2 = normalize(str2);
    return normalized_str1 === normalized_str2;
}
// console.log(checkAreAnagrams("peach", "cheap"));
// console.log(checkAreAnagrams("potato", "tomato"));


// #21
const University = {
    students: [],
    
    addStudent: function(student) {
        this.students.push(student);
    },
    
    removeStudent: function(studentId) {
        this.students = this.students.filter(student => student.id !== studentId);
    },
    
    getStudentById: function(studentId) {
        return this.students.find(student => student.id === studentId);
    },
    
    getStudentsByCourse: function(course) {
        return this.students.filter(student => student.course === course);
    },
    
    getStudentsByFaculty: function(faculty) {
        return this.students.filter(student => student.faculty === faculty);
    }
};

University.addStudent({ id: 1, name: 'Olena Petrenko', course: 4, faculty: 'Medicine' });
University.addStudent({ id: 2, name: 'Ivan Ivanenko', course: 1, faculty: 'Economy and Business' });
University.addStudent({ id: 3, name: 'Iryna Shevchenko', course: 3, faculty: 'Arts' });
University.addStudent({ id: 4, name: 'Oksana Ostapenko', course: 2, faculty: 'Science and Math' });

// console.log(University.students);
// University.removeStudent(1);
// console.log(University.students); 
// console.log(University.getStudentById(2)); 
// console.log(University.getStudentsByCourse(3)); 
// console.log(University.getStudentsByFaculty('Science and Math'));


// #22
function getTextStatistics(text) {
    if (text.length  === 0) {
        return 'Text cannot be empty. Please write something in the text.';
    }

    let wordsArr = text.toLowerCase().match(/[^\s!?.,]+/gu).filter(word => !["&", "-"].includes(word));
    let textStatistics = {
        words: wordsArr.length,
        sentences: (text.match(/[.!?]+/g) || []).length,
        characters: text.replace(/\s/g, '').length,
        mostFrequentWords: [],
    }

    function getmostFrequentWords(wordsArr) {
        let wordsCount = {};

        wordsArr.forEach(word => {
            wordsCount[word] = (wordsCount[word] || 0) + 1;
        });

        let maxCount = Math.max(...Object.values(wordsCount));
        let mostFrequentWords = Object.keys(wordsCount).filter(word => wordsCount[word] === maxCount);
        return mostFrequentWords;
    }
    textStatistics.mostFrequentWords = getmostFrequentWords(wordsArr);
    return textStatistics;
}
// console.log(getTextStatistics("Привіт, всім! How are you? Всім гарного дня!"));
// console.log(getTextStatistics("Are they going swimming? They usually go swimming on Tuesdays. Maybe you should go too.")); 