//even and odd

function oddEven(a: number) {
    let math = a % 2 ;
    if(math === 0){
    console.log("it is even");
    }
    else{console.log("it is odd")};
    
    return math;
  }
  
  console.log(oddEven(3))


//conversion

  function poundsToKilograms(pound: number): number{


return pound / 0.45359237 ; 

  }

  console.log("100 pounds to kilograms are ",poundsToKilograms(100));


  //conversion
  function farenheittoCelcious(faren:number): number {

    return (5/9 * (faren-32));
  }

  console.log("100 farenheits equal to " ,farenheittoCelcious(100))




  // fizz buzz game 

  function fizzingbuzzing(num:number){

    
    if(num % 3 === 0 && num % 5 === 0){
        console.log(num , " fizzzz buzzzz bonanzaa !!!!!!!!!!!");
    } else if ( num % 3 === 0){

        console.log(num , " its fizzzz" );
    }
    else{

        console.log(" ow snap just a ordinary number !!! " , num );
    }
  }

  console.log(fizzingbuzzing(2));

  