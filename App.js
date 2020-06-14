// =================== Chapter 1 --- Question 1 ===================  

// alert("WELCOME visitor to my website");

// =================== Chapter 1 --- Question 2 ===================  

// alert("Error ! Please enter a valid password");

// =================== Chapter 1 --- Question 3 ===================  

// alert("Welcome to JS Land ... \n Happy Coding!");

// =================== Chapter 1 --- Question 4 ===================  

// alert("Welcome to JS Land ...");
// alert("Happy Coding!");

// =================== Chapter 1 --- Question 5 ===================  

// console.log("Hello... I can run JS through my web browser's console");

// =================== Chapter 2 --- Question 1 ===================  

// var username ;

// =================== Chapter 2 --- Question 2 ===================  

// var myName ;
// myName = "Talha Mushtaq";

// =================== Chapter 2 --- Question 3 ===================  

// var message ; 
// message = "Hello World";
// alert(message);

// =================== Chapter 2 --- Question 4 ===================  

// var studentName = "Talha Mushtaq";
// var studentAge = "15 years old";
// var studentDegree = "Cerrtified Mobile Applicaiton Development";
// alert(studentName);
// alert(studentAge);
// alert(studentDegree);

// =================== Chapter 2 --- Question 5 ===================  

// var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(pizza);

// =================== Chapter 2 --- Question 6 ===================  

// var email = "talhamushtaq565@gmail.com";
// alert("My email address is "+ email);

// =================== Chapter 2 --- Question 7 ===================  

// var book = "A smarter way to learn JavaScript";
// alert(book);

// =================== Chapter 2 --- Question 8 ===================  

// var script = "Yah ! I can write HTML content through Javascript<br/>";
// document.write(script);

// =================== Chapter 2 --- Question 9 ===================  

// var logo = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(logo);
// document.write( logo+"<br/>");

// =================== Chapter 3 --- Question 1 ===================  

// var age;
// age =20;
// alert(age);

// =================== Chapter 3 --- Question 2 ===================  

// var time = 10;
// alert("You havae visited this site "+time+" times");

// =================== Chapter 3 --- Question 3 ===================  

// var birthYear = 1999;
// document.write( "My Birth year is "+birthYear+"<br/>");

 
// =================== Chapter 3 --- Question 4 ===================  

// var visitorName = "Talha Mushtaq";
// var visitorProductTitle = "Face Mask";
// var visitorProductQty = 20;
// var data = visitorName +" Ordered "+ visitorProductQty+" "+visitorProductTitle+" on XYZ Clothing Store";
// document.write( data+"<br/>");

// =================== Chapter 4 --- Question 1 ===================

// var id , name , age ;

// =================== Chapter 4 --- Question 2 ===================  

// var id , name , fatherName, age , gender ;

// =================== Chapter 4 --- Question 3 ===================  

// var   rules = 
// "<h2>Rules for naming JS variables</h2>" 
// +  "<p>1. Variables names can only contain ______ , ______ , ______ and ______ . <br/> For example <b> $my_1stVariable </b> </p>"
// +  "<p>2. Variables must begin with a ______, ______ or _____.  <br/> For example <b> $name, _name </b>  or <b> name </b> </p>"
// +  "<p>3. Variable names are case _________</p>"
// +  "<p>4. Variable names should not be JS _________</p>"

// document.write(rules+"<br/>") ;

// =================== Chapter 5 --- Question 1 ===================  

// var a=5,b=3;
// document.write("Sum of 5 and 3 is "+ (a+b)+"<br/>");

// =================== Chapter 5 --- Question 2 ===================  

// var cal= " <br> Sum of 5 and 3 is "+(a+b);
// cal+= " <br/> sub of 5 and 3 is "+ (a-b);
// cal+= " <br/> mul of 5 and 3 is "+ (a*b);
// cal+= " <br/> div of 5 and 3 is "+ (a/b).toFixed(2);
// cal+= " <br/> mod of 5 and 3 is "+ (a%b);

// document.write(cal+<br/>);


// =================== Chapter 5 --- Question 3 ===================  

// var val , message ;
// message = "Value after variable declare is : ??? <br/>"; 
// val = 5;
// message += "Initial value : "+val+"<br/>";
// val++;
// message += "Value after increament is : "+val+"<br/>";
// val=val+7;
// message += "Value after increament is : "+val+"<br/>";
// val--;
// message += "Value after decrement is : "+val+"<br/>";
// val = val%3;
// message += "The remainder is : "+val+"<br/>";

// document.write(message="<br/>");

// =================== Chapter 5 --- Question 4 ===================  

// var ticket = 600;
// total_tickets = 5;
// totalPrice = ticket * total_tickets;
// document.write("Total cost to buy "+total_tickets + " tickets to a movi is "+totalPrice+" PKR<br/>");

// =================== Chapter 5 --- Question 5 ===================  

// var table="<table>";
// table+= "<h3>Table of 4</h3>";
// for(var i=1;i<=10;i++)
// {
//     table+="<tr><td>" + 4 + " * " + i + " = " + 4*i +"</td><t/tr>";
// }
// table+= "</table>";
// document.write(table+"<br/>");

// =================== Chapter 5 --- Question 6 ===================  

// var celsius = 25 ;
// var fahrenheit = (celsius * 9.0) / 5.0 + 32;
// document.write( celsius + " C is "+fahrenheit+" F <br/>");
// fahrenheit =70;
// var celsius = (fahrenheit - 32) * 5 /9 ; 
//  document.write(fahrenheit+ " F is "+(celsius).toFixed(2)+" C <br/>");

// =================== Chapter 5 --- Question 7 ===================  

// var shoppingCart = "<h3>Shopping Cart</h3>";
// var p1=100,p2=150 , q1 = 2 , q2 =3 , sc = 100,total=2750;
// var shoppingCart  =
//     "<p>Price of item 1 is "+p1+"</p>"
//     +"<p>Quantity of item 1 is "+q1+"</P>"
//     +"<p>Price of item 2 is "+p2+"</p>"
//     +"<p>Quantity of item 2 is "+q2+"</P>"
//     +"<p>Shipping Charges "+sc+"</p><br/><rb/>"
//     +"Total cost of your order is "+total;
//     document.write(shoppingCart+"<br/>");

// =================== Chapter 5 --- Question 8 ===================  

// var totalmarks =100,marks=90;
// document.write(
//                 "<h3>Marks Sheet</h3>"+
//                 "Total marks :"+totalmarks+
//                 "<br/>Marks obtaines :"+marks+
//                 "<br/>Percemtage "+ marks/totalmarks * 100 +" %<br/>"
//               );

// =================== Chapter 5 --- Question 9 ===================  

// var currency = ( 10 * 104.80 ) + ( 25 * 28 ) ;
// document.write("Total Currency in PKR :"+ currency+"<br/>");

// =================== Chapter 5 --- Question 10 ===================  

// var arithmetic = ( (1 + 5) * 10 ) /2 ;
// document.write("arithmetic operation = "+ arithmetic+"<br/>");

// =================== Chapter 5 --- Question 11 ===================  

// var cy =  2020 , by = 1999;
// document.write(
//                 "Current year is :"+ cy +
//                 "<br/>Birth year is : "+ by +
//                 "<br/> Your age is : "+ (cy-by) +"<br/>"
//              );

// =================== Chapter 5 --- Question 12 ===================  

// var r=25;
// var circumference = 2 * 3.14 * r;
// var area = 3.14 * r*r;
// document.write(
//                 "<h3>The Grometrizer</h3>"+
//                 "The Circumferane is : "+circumference +
//                 "<br/>The area is : "+area
//               );
 
// =================== Chapter 5 --- Question 13 ===================  

// var snack = "Chocolate Chip";
// var age = 15;
// var max = 65;
// var amount = 3;
// var total = (max - age) * 365 * amount ;
// document.write(
//                 "<h3>The Lifetime Supply Calculator</h3>"+
//                 "Faviourt Snack : "+snack +
//                 "<br/>Current age is : "+age +
//                 "<br/>Estimated maximum age : "+max + 
//                 "<br/>Amount of snack per day : "+amount + 
//                 "<br/>You will need "+total+" "+snack+" to last year until the ripe old age of "+max
//              );


// =================== Chapter 6-9 --- Question 1 ===================  

// var a = 10 , message ;

// message = "Result";
// message += "<br/>The value of a is : "+a;
// message+= "<br/>---------------------------"

// message += "<br/><br/>The value of ++a is : "+(a++);
// message += "<br/>Now the value of a is : "+ (a++);

// message += "<br/><br/>The value of ++a is : "+(a++);
// message += "<br/>Now the value of a is : "+ (a++);

// message += "<br/><br/>The value of --a is : "+(a--);
// message += "<br/>Now the value of a is : "+ (a--);

// message += "<br/><br/>The value of --a is : "+(a--);
// message += "<br/>Now the value of a is : "+ (a--);
// document.write( message+"<br/>");

// =================== Chapter 6-9 --- Question 2 ===================  

// var message;
// var a=x=2,b=y=1;
// var result = --a - --b + ++b + b-- ;
// document.write( 
//                 "a is : "+x+
//                 "<br/>b is : "+y+
//                 "<br/> result is : "+ result
// );

// =================== Chapter 6-9 --- Question 3 ===================  

// var user = prompt("Enter a name ");
// alert("WELCOME "+user);

// =================== Chapter 6-9 --- Question 4 ===================  


// =================== Chapter 6-9 --- Question 5 ===================  

// var  n = prompt("Enter a value you want to make a table");
  
// if(n ==="")
// {
//    t=5;
// }
// var t= +(n); // convert string to int
// var table="<table>";
//    table+= "<h3>Table of 4</h3>";
//    for(var i=1;i<=10;i++)
//    {
//        table+="<tr><td>" + t + " * " + i + " = " + t*i +"</td><t/tr>";
//    }
//    table+= "</table>";
//    document.write(table+"<br/>");


// =================== Chapter 6-9 --- Question 6 ===================  

// var sn1="Math",sn2="English",sn3="Urdu";
// var vn1= + prompt("Enter marks of Math") , // convert string to int
// vn2= + prompt("Enter marks of English") , // convert string to int
// vn3= + prompt("Enter marks of Urdu") ;   // convert string to int
// var totalMarksEach= 100;
// var table2 = 
//   "<table> "+
//    "<tr>"+
//          "<th>Subject</th>"+
//          "<th>Total Markd</th>"+
//          "<th>Obtained Marks</th>"+
//          "<th>Percentege</th>"+
//    "</tr>"+

//    "<tr>"+
//          "<td>"+sn1+"</td>"+
//          "<td>"+totalMarksEach+"</td>"+
//          "<td>"+vn1+"</td>"+
//          "<td>"+(vn1/100 *100)+" %</td>"+
//    "</tr>"+

//    "<tr>"+
//          "<td>"+sn2+"</td>"+
//          "<td>"+totalMarksEach+"</td>"+
//          "<td>"+vn2+"</td>"+
//          "<td>"+(vn2/100 *100)+" %</td>"+
//    "</tr>"+

//    "<tr>"+
//          "<td>"+sn3+"</td>"+
//          "<td>"+totalMarksEach+"</td>"+
//          "<td>"+vn3+"</td>"+
//          "<td>"+(vn3/100 *100)+" %</td>"+
//    "</tr>"+

//    "<tr>"+
//          "<td></td>"+
//          "<td>"+(totalMarksEach*3)+"</td>"+
//          "<td>"+ ( vn1+vn2+vn3 ) +"</td>"+
//          "<td>"+ ( ( (vn1+vn2+vn3) / 300)  * 100 )+" %</td>"+
//    "</tr>"+

//   "</table> <br/>";
//   document.write(table2+"<br/>");


// =================== Chapter 9-11 --- Question 1 ===================  

// var city = prompt("Enter a name of city");
// (city === "Karachi")  && alert("Welcome to city of lights"); // other way of writing if statement

// =================== Chapter 9-11 --- Question 2 ===================  

    // var gender = prompt("Enter a gender");
    //   (gender === "mail")
    //   ?
    //     alert("Good Morning Sir")
    //   :
    //     alert("Good Morning Ma’am");

// =================== Chapter 9-11 --- Question 3 ===================  

    // var signal = prompt("Enter a color of road traffic signal");
    //        if(signal === "red" || signal === "Red")
    //        {
    //                   alert("Must Stop");
    //        }
    //       else  if(signal === "yellow" || signal === "Yellow")
    //       {
    //             alert("Ready to move");
    //       }
    //       else if(signal === "green" || signal === "Green")
    //       {
    //                    alert("Move now");
    //       }

// =================== Chapter 9-11 --- Question 4 ===================  

    //  var fuel =  parseFloat(prompt("Enter remaing fuel of car"));
     
    //  (fuel === 0.25) && alert("Please refill the fuel in your car");

// =================== Chapter 9-11 --- Question 5 ===================  

    // var a = 4;
    //  (++a === 5) && alert("given condition for variable a is true");
    
    // var b = 82;
    //  (b++ === 83) && alert("given condition for variable b is true");
    
    // var c = 12;
    //  (c++ === 13) && alert("condition 1 is true");
    
    //  (c === 13) && alert("condition 2 is true");
    
    //  (++c < 14) && alert("condition 3 is true");
    
    // (c === 14) && alert("condition 4 is true");
    
    // var materialCost = 20000;
    // var laborCost = 2000;
    // var totalCost = materialCost + laborCost;

    //  (totalCost === laborCost + materialCost) && alert("The cost equals");
    
    // ("car" < "cat") && alert("car is smaller than cat");   

// =================== Chapter 9-11 --- Question 6 ===================  

//      var totalmark = + prompt("Enter total marks");
//      var obtained = + prompt("Enter marks you obtained");

//       var percentage = obtained/totalmark * 100;
//       var message = 
//       "<h3>Marks Sheet</h3>" +
//       "<br/>Total Marks : "+totalmark+
//        "<br/>Marks Obtained : "+obtained+
//        "<br/>Percentage : "+percentage + "  %";
//        var grade,remarks;
//       if(percentage >= 80)
//       {
//           remarks = "Excellent";
//         grade  = "A-one";
//       }
//       else if(percentage >= 70)
//        {
//         remarks = "Good";
//           grade   = "A";
//        }
//        else if(percentage >= 60)
//        {
//         remarks = "You need to improve";
//         grade  = "B";
//        }
//        else
//        {
//         remarks = "Sorry";
//         grade = "Fail";
//        }
//        message += "<br/> Grade : "+ grade+
//        "<br/> Remarks : "+ remarks;
// document.write(message+"<br/>");

// =================== Chapter 9-11 --- Question 7 ===================  

//      var secret = 7;
//       var n = + prompt("Enter a number ranging from 1 to 10");
//    if(n === secret)
//    {
//        alert("Bingo! Correct answer");
//    }
//    else if(secret++ === n)
//    {
//        alert("Close enough to the correct answer");
//    }

// =================== Chapter 9-11 --- Question 8 ===================  

//     var n =  + prompt("Enter a number to caheck it is divied by 3 or not");
//      (n % 3 == 0) &&    
//              alert("The number is divisible by 3");

// =================== Chapter 9-11 --- Question 9 ===================  

//      var n = + prompt("Enter a number to caheck it is even or odd");
//      (n % 2 == 0) ?
//              alert("The number is even")
//             :
//             alert("The number is odd");     

// =================== Chapter 9-11 --- Question 10 ===================  

    // var temp = +prompt("Enter temprature");
    //   if(temp > 40)
    //   {
    //       alert("It is too hot outside");
    //   }
    //   else if(temp > 30)
    //    {
    //     alert("The Weather today is Normal");
    //    }
    //    else if(temp > 20)
    //    {
    //      alert("Today’s Weather is cool");
    //    }
    //    else if(temp > 10)
    //    {
    //      alert("OMG! Today’s weather is so Cool");
    //    }

// =================== Chapter 9-11 --- Question 11 ===================  

    // var a = + prompt("Enter number 1");
    // var b = + prompt("Enter number 2");
    // var c = + prompt("Enter choice (+,-,*, / & %)");

    //    if(c === "+")
    //    {
    //     alert("Sum of numbers"+(a+b));
    //    }
    //    else if(c === "-")
    //    {
    //      alert("Subtract of numbers"+(a-b));
    //    }
    //    else if(c === "*")
    //    {
    //      alert("Multiplicationd of numbers"+(a*b));
    //    }
    //    else if(c === "/")
    //    {
    //      alert("Division of numbers"+(a/b));
    //    }
    //    else if(c === "%")
    //    {
    //      alert("Mode of numbers"+(a%b));
    //    }
  
// =================== Chapter 12-13 --- Question 1 ===================  

   // var ch = prompt("Please enter a character");
    //  if( (ch === 'A'|| ch > 'A') && (ch === 'Z'|| ch < 'Z') )
    //     {
    //          alert("You enter uppercase letter character and ASCII code of "+ch+" is "+ch.charCodeAt(0));
    //     }

    //     else if( (ch === 'a'|| ch > 'a') && (ch === 'z'|| ch < 'z') )
    //     {
    //          alert("You enter lowercase letter character and ASCII code of "+ch+" is "+ch.charCodeAt(0));
    //     }

    //     else if( (ch === '0'|| ch > '0') && (ch === '9'|| ch < '9') )
    //     {
    //          alert("You enter numbr and ASCII code of "+ch+" is "+ch.charCodeAt(0));
    //     }

// =================== Chapter 12-13 --- Question 2 ===================  

    //     var a = prompt("Please first number 0-9");
    //     var b = prompt("Please second number 0-9");
    //       if(a>b)
    //       {
    //           alert("First is greater than second");
    //       }
    //       else if(b>a)
    //       {
    //           alert("Second is greater than First");
    //       }
    //       else 
    //       {
    //           aler("First is equal to Second");
    //       }
    

// =================== Chapter 12-13 --- Question 3 ===================  

   //     var a = prompt("Please first number to check it is +ve or -ve or zero");
    //       if(a>0)
    //       {
    //           alert("Number is positive");
    //       }
    //       else if(a<0)
    //       {
    //           alert("Number is negative");
    //       }
    //       else 
    //       {
    //           aler("Number is zero");
    //       }
  
// =================== Chapter 12-13 --- Question 4 ===================  

   // var ch =  prompt("Please enter a character");
    //    var c = ch.charCodeAt(0);
    //         (c ==="A"|| c ==="a"|| c ==="E"|| c ==="e"|| c ==="I"|| c ==="i"|| c ==="O"|| c ==="o"|| c ==="U"|| c ==="u"|| )
    //          ?
    //            alert("You enter a vowel")
    //          :
    //          alert("You enter non vowel");

// =================== Chapter 12-13 --- Question 5 ===================  

// var correctPass = 12345;
// var pass =  prompt("Please enter a password");
// if(pass == "")
// {
//   alert("Please enter your password");
// }
// else if( + pass === correctPass)   // add + to pass (+pass) to convert the string to interger
// {
//    alert("Correct! The password you entered matches the original password");
// }
// else
// {
//  alert("Incorrect password");
// }

// =================== Chapter 12-13 --- Question 6 ===================  

// var greeting;
// var hour = 13;
//     (hour < 18) 
//      ?
//     greeting = "Good day"
//     :
//     greeting = "Good evening";
// alert(greeting);

// =================== Chapter 12-13 --- Question 7 ===================  

// var time = 1900;
// if(time >= 0000 && time < 1200)
// {
//     alert("Good morning");
// }
// else if (time >= 1200 && time < 1700)
// {
//     alert("Good afternoon");
// }
// else if (time >= 1700 && time < 2100)
// {
//     alert("Good evening");
// }
// else if (time >= 2100 && time < 2359)
// {
//     alert("Good night");
// }

// =================== Chapter 14-16 --- Question 1 ===================  

// var sn1 = [];

// =================== Chapter 14-16 --- Question 2 ===================  

// var sn2 = {};

// =================== Chapter 14-16 --- Question 3 ===================  

// var sn3 = ["1","2","3"];

// =================== Chapter 14-16 --- Question 4 ===================  

// var sn4 = [1,2,3];

// =================== Chapter 14-16 --- Question 5 ===================  

// var sn5 = [true,false];

// =================== Chapter 14-16 --- Question 6 ===================  

// var sn6 = ["1",2,true];

// =================== Chapter 14-16 --- Question 7 ===================  

// var sn7  = ["SC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];  
// var qulification="<h3>Qualification</h3>";

// sn7.forEach(function(value,inedx,array){
//    qulification += ++inedx +" ) "+value+"<br/>"

// });

// document.write(qulification+"<br/>");

// =================== Chapter 14-16 --- Question 8 ===================  

// var studentName = ["Talha","Asad","Hamza"] ,
// studentMarks =[220,290,265] ,
// total = 300 ,message="";

// for(i=0;i<3;i++)
// { 
//  message +="Score of "+studentName[i]+" is : "+studentMarks[i]+" . Perccentage : "+ (studentMarks[i]/total * 100) + " %<br/>"  
// }
// document.write(message+"<br/>");

// =================== Chapter 14-16 --- Question 9 ===================  

// var color = ["red","green","blue"];
// var data ="<h3>Colors</h3>";

// color.forEach(function(value,inedx,array){
//     data += ++inedx +" ) "+value+"<br/>"
//  });
 
//  data +="<br/><br/>After adding a new color at first<br/>";

// color.unshift(addColor);
//  color.forEach(function(value,inedx,array){
//     data += ++inedx +" ) "+value+"<br/>"
//  });
 
//  var pushColor = prompt("Please add a new color at end");

//  data +="<br/><br/>After adding a new color at end<br/>";

//  color.push(pushColor);

//  color.forEach(function(value,inedx,array){
//     data += ++inedx +" ) "+value+"<br/>"
//  });

// var moreColorNumber = +prompt("Please enter how many colors you want to add in start");
// var moreColorStart =[];
// var j = 1;
// for(i=0;i<moreColorNumber;i++)
// { 
// moreColorStart[i] = prompt( ("Please enter Color "+ j +"" ));
// j++;
// }

// data +="<br/><br/>After adding a more colors at start<br/>";


// for(i=0;i<moreColorNumber;i++)
// {
// color.push(moreColorStart[i]);
// }




// data +="<br/><br/>After remove a color at first<br/>";

// color.shift();
// color.forEach(function(value,inedx,array){
//   data += ++inedx +" ) "+value+"<br/>"
// });


// data +="<br/><br/>After remove a color at end<br/>";

// color.pop();


// color.forEach(function(value,inedx,array){
//     data += ++inedx +" ) "+value+"<br/>"
//  });


// document.write(data+"<br/>") ;

// // =================== Chapter 14-16 --- Question 10 ===================  

// var std = [12,32,24,32,11,4];
// document.write( std.sort() +"<br/>");

// =================== Chapter 14-16 --- Question 11 ===================

// =================== Chapter 14-16 --- Question 12 ===================  

// var arr = ["This "," is "," my "," cat " ];
// document.write( "Array : <br/>"+arr+"String : "+std.join(" ") +"<br/>");

// =================== Chapter 14-16 --- Question 13 ===================  
// =================== Chapter 14-16 --- Question 14 ===================  


// =================== Chapter 17-20 --- Question 1 ===================  

// var mul =[
//     [],
//     [],
//     []
// ];

// =================== Chapter 17-20 --- Question 2 ===================  

// var mul =[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// alert(mul);

// =================== Chapter 17-20 --- Question 3 ===================  

// var count = [1,2,3,4,5,6,7,8,10];
// var c="<h3>Counting</h3>";
// count.forEach(function(value,index,array){
//  c  +=  value+"<br/>"
// }) ;      
// document.write(c);

// =================== Chapter 17-20 --- Question 4 ===================  

// var multipliactionTable  = + prompt("Enter a number you want to maka a table of multipliaction");
// var length = + prompt("Enter length of table"); 
//  var table="<table>";
//  table+= "<h3>Table of "+multipliactionTable+"</h3>";
//  for(var i=1;i<=length;i++)
//  {
//      table+="<tr><td>" + multipliactionTable + " * " + i + " = " + multipliactionTable*i +"</td><t/tr>";
//  }
//  table+= "</table>";
//  document.write(table+"<br/>");

// =================== Chapter 17-20 --- Question 5 ===================  

// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// var f ="";
// fruits.forEach( (value,index,array)=>{
//   f += value+"<br/>";
// });
// fruits.forEach( (value,index,array)=>{
//   f += "Element at index "+index+" is "+value+"<br/>";
// });
// document.write(f+"<br/>");

// =================== Chapter 17-20 --- Question 6 ===================  

// var   Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//  ,Reverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
//  ,Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
//  , Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
//  ,Series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
 
//    document.write ( 
//                     "<h3Counting :</h3>"+Counting
//                     +"<h3>Reverse :</h3>"+Reverse 
//                     + "<h3>Even :</h3>"+Even
//                     + "<h3>Odd :</h3>"+Odd 
//                     + "<h3>Series :</h3>"+Series
//                  );

// =================== Chapter 17-20 --- Question 7 ===================  

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
//   var c = prompt("WELCOME to ABC Bakry. What do want to buy Sir/Mam !");

//    var s = a.indexOf(c);

//    (s == -1) ?
//    alert("We are sorry "+c+" is not available in our Bakery")
//    :
//    alert(c+" is available at index "+s+" in our Bakery");
   
  
// =================== Chapter 17-20 --- Question 8 ===================  

// var a = [24, 53, 78, 91, 12];
// var message = "Array Items : "+a;
// var asc = a.sort();
// message += "<br/> The largest number is "+ asc[ a.length-1] ;
// document.write(message + "<br/>") ; 


// =================== Chapter 17-20 --- Question 9 ===================  

// var a = [24, 53, 78, 91, 12];
// var message = "Array Items : "+a;
// var asc = a.sort();
// message += "<br/> The smallest number is "+ asc[0] ;
// document.write(message+"<br/>") ; 

// =================== Chapter 17-20 --- Question 10 ===================  

// var num ="";
// for(i=1;i<=20;i++)
// {
//      num += 5 * i +" , "
// }
// document.write(num);