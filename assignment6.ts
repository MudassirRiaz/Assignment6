// List of loop programming exercises
// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop//
// var n:number=10
// for(var i:number=0;i<=n;i++){
//     console.log(i)
// }
// 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop//
// var n:number=10
// var i:number=n;
// while( i>=0){
//     console.log(i)
//     i--
// }
// 3. Write a ts program to print all alphabets from a to z. - using while loop
// var n:string[]=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
// "p","q","r","s","t","u","v","w","x","y","z"]
// var i:number=1
// while( i<=26){
//     console.log(n[i])
//     i++
// }
// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop
// var n:number=100;
// var i:number=0;
// while( i<=n){
//     if(i%2==0){
//     console.log(i)}
//     i++
// }
// 5. Write a ts program to print all odd number between 1 to 100.
// var n:number=100;
// var i:number=0;
// while( i<=n){
//     if(i%2==1){
//     console.log(i)}
//     i++
// }
// 6. Write a ts program to find sum of all natural numbers between 1 to n.
// var n:number=10
// var x:number=0
// for(var i:number=0;i<=n;i++){
//     x+=i
// }
// console.log(x)
// 7. Write a ts program to find sum of all even numbers between 1 to n.
// var n:number=10
// var x:number=0
// for(var i:number=0;i<=n;i++){
//     if(i%2==0)
//     x+=i
// }
// console.log(x)
// 8. Write a ts program to find sum of all odd numbers between 1 to n.
// var n:number=10
// var x:number=0
// for(var i:number=0;i<=n;i++){
//     if(i%2==1)
//     x+=i
// }
// console.log(x)
// 9. Write a ts program to print multiplication table of any number.
// var n:number=10
// var x:number=0
// for(var i:number=0;i<=n;i++){
//     x= n*i
//     console.log(`${n} * ${i} = ${x}`)
// }
// 10. Write a ts program to count number of digits in a number.
// var x:number[]=[123456]
// var l:number=x.toString().length
// console.log(l)
// 11. Write a ts program to find first and last digit of a number.
// var x:number=97367
// var z:number=x
// while (x >= 10)
// var y:number=Math.floor(x/=10)
//     y=y%10
//     console.log("First digit of a number",y)
// var z=z%10
// console.log("last digit of a number",z)
// 12. Write a ts program to find sum of first and last digit of a number.
// var x:number=97367
// var z:number=x
// while (x >= 10)
// var y:number=Math.floor(x/=10)
//     y=y%10
//     z=z%10
//     var a= y+z
// console.log("sum of first and last digit",a)
// 13. Write a ts program to swap first and last digits of a number.
// var num:number= 4567689
// var n:string=num.toString()
// var temp:string = "";
// var answer:string = "";
// for(let i = 0 ; i < n.length; i++) {
//     if (i == 0) temp = n[i];
//     else if (i == n.length - 1) {
//         answer = answer + temp;
//         answer = n[i] + answer;
//     }
//     else answer = answer + n[i];
// }
// console.log(answer);

// 14. Write a ts program to calculate sum of digits of a number.
// var num:number= 780
// var sum:number=0
// var rem:number=0
// while(num>0){
//         rem=  num%10
//         sum+=rem
//         num= num/=10
//     }
//     sum=Math.floor(sum)
// console.log(sum)
// 15. Write a ts program to calculate product of digits of a number.
// var num:number= 780
// var sum:number=1
// var rem:number=1
// while(num>0){
//         rem=  num%10
//         sum+=rem
//         num= num/=10
//     }
//     sum=Math.floor(sum)
// console.log(sum)
// 16. Write a ts program to enter a number and print its reverse. 
    // var num=2345
    // var rev=0
    // var lastdgit;
    // while(num!=0){
    //     lastdgit= num%10;
    //     rev=rev*10+lastdgit;
    //     num=Math.floor(num/10)
    // }
    //     console.log("reverse of Number", rev)
        
// 17. Write a ts program to check whether a number is palindrome or not.
        // var num=16461
        // var rev=0
        // var rem=0
        // var temp=num
        // while(num!=0){
        //         rem= num%10;
        //         rev=rev*10 +rem;
        //         num=Math.floor(num/10)
        //         // console.log(rev)
        // }
    
        // if(temp==rev){
        //     console.log("Number is palandrom")
        // }
        // else{
        //     console.log("Number is not palandrom")
        // }
// 18. Write a ts program to find frequency of each digit in a given integer.
// var num=566778
// var index;
// var jindex;
// var count;
// var rng;
// for(index=0; index<10;index++){
//     console.log("The Frequency of Number", index,"=")
//     count=0;
// for(jindex=num;jindex>0;jindex=Math.floor(jindex/10)){
//     rng=jindex%10
//     if(rng==index)
//     count++
//     // console.log(count)
// }  
//     console.log(count)
// }
// 19. Write a ts program to enter a number and print it in words.
    // var n= 67878
    // var nts=n.toString()
    // console.log(nts)
    // for(var index=0;index<nts.length;index++){
    //         switch(nts[index]){
    //             case "0":
    //                 console.log("Zero")
    //                 break;
    //             case "1":
    //                 console.log("One")
    //                 break;
    //             case "2":
    //                 console.log("Two")
    //                 break;
    //             case "3":
    //                 console.log("Three")
    //                 break;
    //             case "4":
    //                 console.log("Four")
    //                 break;
    //             case "5":
    //                 console.log("Five")
    //                 break;
    //             case "6":
    //                 console.log("Six")
    //                 break;
    //             case "7":
    //                 console.log("Seven")
    //                 break;
    //             case "8":
    //                 console.log("Eight")
    //                 break;
    //             case "9":
    //                 console.log("Nine")
    //                 break;
    //     }
    // }
// 20. Write a ts program to print all ASCII character with their values.
// for(var index = 0; index <=255; index++)
// {
//     var chr = String.fromCharCode(index)
//     console.log(chr + "\t" + index) 
//     }

// 21. Write a ts program to find power of a number using for loop.
// var num=5
// var pwr=6
// var temp=1
// for(var index=1;index<pwr;index++){
//     temp*=num
// }
// console.log(temp)
// 22. Write a ts program to find all factors of a number.
// program to find the factors of an integer

// take input
// var num= 12

// console.log(`The factors of ${num} is:`);
// for(let i = 1; i <= num; i++) {
//     if(num % i == 0) {
//         console.log(i);
//     }
// }
// 23. Write a ts program to calculate factorial of a number.
    // var num=34
    // if(num<0){
    //     console.log("Factorial of negative Number is not exist")
    // }
    // else if(num==0) {
    //     console.log("Factorial of 0 is 1")
    // }
    // else
    // {
    //     var fact=1
    //     for(var i=1;i<num;i++){
    //     fact*=i
        
    //     }
    //     Math.floor(fact)
    //     console.log("The factorial of ",num,"=",fact)
    // }
// 24. Write a ts program to find HCF (GCD) of two numbers.
// var number1 = 34
// var number2 = 32
// let hcf;
// for (let i = 1; i <= number1 && i <= number2; i++) {
//     if( number1 % i == 0 && number2 % i == 0) {
//         hcf = i;
//     }
// }
// console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

// 25. Write a ts program to find LCM of two numbers.
// const num1 = 345
// const num2 = 2
// let min = (num1 > num2) ? num1 : num2;
// while (true) {
//     if (min % num1 == 0 && min % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`);
//         break;
//     }
//     min++;
// }
// 26. Write a ts program to check whether a number is Prime number or not.
        
//         var number = 45
//         let isPrime = true;
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }
// else {
//     console.log("The number is not a prime number.");
// }

// 27. Write a ts program to print all Prime numbers between 1 to n.
// var lowerNumber = 1
// var higherNumber= 45
// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }
// 28. Write a ts program to find sum of all prime numbers between 1 to n.
// var lowerNumber = 1
// var higherNumber= 45
// var sum=0
// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             sum+=i
//             break;
//         }
//     }
//     if (i > 1 && flag == 0) {
//         // console.log(sum);
//     }
    
// }console.log(sum);
// 29. Write a ts program to find all prime factors of a number.
// 30. Write a ts program to check whether a number is Armstrong number or not.
// 31. Write a ts program to print all Armstrong numbers between 1 to n.
// 32. Write a ts program to check whether a number is Perfect number or not.
// 33. Write a ts program to print all Perfect numbers between 1 to n.
// 34. Write a ts program to check whether a number is Strong number or not.
// 35. Write a ts program to print all Strong numbers between 1 to n.
// 36. Write a ts program to print Fibonacci series up to n terms.
// 37. Write a ts program to find one's complement of a binary number.
// 38. Write a ts program to find two's complement of a binary number.
// 39. Write a ts program to convert Binary to Octal number system.
// 40. Write a ts program to convert Binary to Decimal number system.
// 41. Write a ts program to convert Binary to Hexadecimal number system.
// 42. Write a ts program to convert Octal to Binary number system.
// 43. Write a ts program to convert Octal to Decimal number system.
// 44. Write a ts program to convert Octal to Hexadecimal number system.
// 45. Write a ts program to convert Decimal to Binary number system.
    // var bin = 0;
    // var rem, i = 1
    //  var step = 1;
    //  var x=10
    // while (x != 0) {
    //     rem =Math.floor( x % 2);
    //     console.log(
    //         `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${Math.floor(x/2)}`
    //     );
    //     x = x / 2;
    //     bin = bin + rem * i;
    //     i = i * 10;
    // }
    // console.log(`Binary: ${bin}`);

// 46. Write a ts program to convert Decimal to Octal number system.
// 47. Write a ts program to convert Decimal to Hexadecimal number system.
// 48. Write a ts program to convert Hexadecimal to Binary number system.
// 49. Write a ts program to convert Hexadecimal to Octal number system.
// 50. Write a ts program to convert Hexadecimal to Decimal number system.
// 51. Write a ts program to print Pascal triangle upto n rows.