//1) 1,2,3,4

//2)ref

//3)index 0: [1,2,3]=>true
//index 1:[1,2,3]=>false

//4)

function hasDuplicate(arr){
const setArr=new Set(arr);
return setArr.size!=arr.length;
}

//5)

function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }