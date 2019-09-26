let vowels = ['a','i','e','o','u'];
let characters;
let counter = 0;
let result = [];
let occurrences = [];


function returnvowels(names){


     for(let i = 0;i<names.length; i++)
       {
        if( names.indexOf(names[i],i+1) != -1)
          {
           counter++;
          }
         for(let j = 0; j<vowels.length; j++)
           {
            if(names[i] === vowels[j])
             {
                characters = result.find(item => item == names[i]);
            if(characters === undefined)
              {
                result.push(names[i]);
              }
          
            }
         }
     }

occurrences.push(counter);

return ([].concat(result.join(""),occurrences));
}

console.log (returnvowels("dahdah"));