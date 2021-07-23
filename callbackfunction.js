

    function doubleValues (array){
        let newArray = [];
        array.forEach(function(value){
            return newArray.push(value *2)
        })
        return newArray;
    }


    function onlyEvenValues (array){
        let newArray = [];
        array.forEach(function(value){
            if (value %2 === 0){
                return newArray.push(value);
            }
        })
        return newArray;
    }


        function showFirstAndLast(array){
            let newArray=[];
            array.forEach(function(value){
            newArray.push(value[0] + value[value.length-1]);
            })
            return newArray;
        }



       function addKeyAndValue(array, val1, val2){
           let newArray = [];
           array.forEach(function(object){
            for(let key in object){
            newArray.push(`${key}: ${object[key]}, ${val1}: ${val2}`);
           }
        })
            return newArray;
    }
       
   
    // function vowelCount(str) {
    //     let splitArr = str.split("");
    //     let obj = {};
    //     const vowels = "aeiou";
      
    //     splitArr.forEach(function(letter) {
    //       let lowerCasedLetter = letter.toLowerCase()
    //       if (vowels.indexOf(lowerCasedLetter) !== -1) {
    //         if (obj[lowerCasedLetter]) {
    //           obj[lowerCasedLetter]++;
    //         } else {
    //           obj[lowerCasedLetter] = 1;
    //         }
    //       }
    //     });
    //     return obj;
    //   }

// ^^^^^ DONT UNDERSTAND THIS PART:
// if (obj[lowerCasedLetter]) {
//     //           obj[lowerCasedLetter]++;
//     //         } else {
//     //           obj[lowerCasedLetter] = 1; 


        function doubleValuesWithMap(array){
            const doubleValues = array.map(function(vals){
                return vals * 2;
            })
            return doubleValues;
        }

        function valTimesIndex (array,i){
            const solution = array.map(function(vals,idx){
                return vals * idx;
            })
            return solution;
        }

        function extractKey(array,key){
            return array.map(function(arr){
                return arr[key];
            });
        }

        function extractFullName(array){
            return array.map(function(arr){
                return arr.first + " " + arr.last;
            })
        }

        function myMap (array, callback){
            const mappedArray = [];
            for (let i =0; i < array.length; i++){
                const value = callback(array[i], i, arr);
                mappedArray.push(value);
            }
            return mappedArray;
        }

        function filterByValue (array, key){
            return array.filter(function(value){
                return value[key];
            })
        }
    

        function find(array,value){
            return array.filter(function(num){
                return num === value;
            }) [0];
        }
    //   not sure how to return undefined : SOLVED. add [0]; at the end

        function findInObj(array,key, searchValue){
            return array.filter(function(value){
                return value[key] === searchValue;
            })[0];
        }

        // not sure how to remove second line: SOLVED. add SearchValue

        // const isItAVowel = function(char){
        //     return 'aeiou'.indexOf(char) !== -1;
        // }

        // function removeVowels(array){
        //         return array.filter(function(num){
        //         return isItAVowel(num);
        //     })
        // }

        // ^^^^NOT SURE HOW TO SOLVE^^^^

        // SOLUTION BELOW:

        // function removeVowels(str) {
        //     const vowels = "aeiou";
        //     return str
        //       .toLowerCase()
        //       .split("")
        //       .filter(function(val) {
        //         return vowels.indexOf(val) === -1;
        //       })
        //       .join("");
        //   }


        function removeVowels(string){
            const vowels = 'aeiou';
            return string
            .toLowerCase()
            .split("")
            .filter(function(value){
                vowels.indexOf(value) === -1;
            })
            .join("");
        }



        function doubleOddNumbers (array1){
            return array1.filter(function(num){
                return num %2 ===1;
                })
            .map(function(value){
                return value *2;
            })
        }


        

        // const words = [
        //     'hello',
        //     'annoying',
        //     'leftovers',
        //     'bali',
        //     'hppppp'
        // ];


        // const isVowel = function(char){
        //     return 'aeiou'.indexOf(char) !== -1;
        // }

        // const containsVowel = function(word){
        //     for(let char of word){
        //         if(isVowel(char)) return true;
        //     }
        //     return false;
        // }


        // const containsVowels = words.filter(containsVowel);
        // const noVowels = words.filter(function(word){
        //     return !containsVowel(word);
        // })


       

       