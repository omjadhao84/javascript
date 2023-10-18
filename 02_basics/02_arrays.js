const marvel_heros=["thor","IronMan","SpiderMan"]
const dc_heros=["superman","flash","batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3,2]);
const result=marvel_heros.concat(dc_heros);
//console.log(result);
const all_heros=[...marvel_heros,...dc_heros]//it is known as spread
//console.log(all_heros);

const another_array=[1,2,3,[5,6,4],66,67,[54,55],[6,7,8]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);/*[
    1,  2,  3,  5, 6, 4,
   66, 67, 54, 55, 6, 7,
    8]
 */


    //data scraping
    console.log(Array.isArray("Om"));

 console.log(Array.from("omjadhao"));//it converts element in array
console.log(Array.from({name:"Omjadhao"}));//it returns empty array because we have to mention on the basis of what we want ot make array like on the basis of key or values 
let score1 = 100;
let score2=333;
let score3=55;
console.log(Array.of(score1,score2,score3));//converts into array

