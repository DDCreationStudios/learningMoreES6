/*jshint esversion: 6*/
module.exports= function script(){

  console.error("working"),

window.onload= function(){


  //generators

  genWrapper(function* generator(){
    var tweets=yield $.getJSON("tweets.json");
    console.warn(tweets);
    var friends=yield $.getJSON("fb-friends.json");
    console.warn(friends);
    var ytVideos=yield $.getJSON("yt-videos.json");
    console.warn(ytVideos);
  });
  function genWrapper(generator){
    var mygen=generator();//call generator and store it as iterator
    function handle(yielded){
      yielded.value.then(function(data){
        return handle(mygen.next(data));
      });
    }//yielded
    return handle(mygen.next());
  }//wrapper


  //example
  function* gen(){
    var x=yield "pear";//yield pauses the function. JS reads from right to left
    var y=yield "apple";
    var z=yield "banana";
    return x+y+z;
  }
  var myGen=gen();//declaring an iterator
  console.log(myGen.next());//play the function
  console.log(myGen.next(10));//play the function again to start the rest of the function till the next pause. set x to 10
  console.log(myGen.next(5));//play the function again to start the rest of the function till the next pause
  console.log(myGen.next(3));//play the function again to start the rest of the function till the next pause







/*
  //Sets
  var people=["daniel", "lukas", "dave", "daniel", "dave", "jenny"];
  var refinedPeople=new Set (people);
  console.log(refinedPeople);
  people=[...refinedPeople];
  console.error(people);


  var names=new Set();
  names.add("daniel").add("dave").add("jenny").add("daniel");//eliminating duplicates
  //names.clear();
  console.log(names.delete("jenny"));
  console.warn(names.has("jenny"));
  console.warn(names.size);
  console.log(names);
*/
/*
  //arrow functions
  var Person={
    name:"Daniel",
    code(x){
      window.setInterval(()=>{
        if(x>0){
          console.warn(this.name+" coded an app");
          x--;
        }
      }, 20);//binding this lexical, ie to the ninja object
    }
  };
  Person.code(100);

  var greeting = name => {
    console.log(`${name} says hello`);
  };
  greeting("Daniel");
  */
/*
  //new string methods
  var test="My name is Daniel";
  console.warn(test.includes("Daniel"));
  var str ="working more ";
  var youSay="goodbye";
  if(youSay.startsWith("goodbye")){
    var isay="hello";
  }
  console.error(`you say ${youSay}, I say ${isay}`);
  console.log(str.endsWith("working ",str.length-5));
  console.log(str.startsWith("more", 8));
  console.log(str.repeat(2));
*/
/*
  //object literal improvements
  var name="Daniel";
  var job="Programmer";

  var person={
    name,job,
    code(x){
      console.log(`you coded an app ${x} times!`);
    }//adding methods without the function keyword
  };
  console.log(person.code(200));
*/
/*
  //template strings -> they do not ignore whitespace or line breaks!

  function logPerson(name, age){
    console.log(`My name is ${name} and my age is ${age} and my Postal Code is ${1000+200}`);
  }
  logPerson("Daniel", 23);


  var temp=`hello,
  my name is daniel`;
  //console.log(temp);
*/
/*
  //spread operators
  var nums=[3,5,7];
  function add(a,b,c){
    console.warn(a+b+c);
  }
  add(...nums);

  var nums1=[1,2,3];
  var nums2=[...nums1,4,5,6];
  console.log(nums2);

  var meats=["ham", "salami", "bacon"];
  console.log(...meats);
*/
/*
  //default parameters considered BAD PRACTICE!
  function logNinja(name="Dav",belt="blue",age=21){
    console.error("my name is "+name +", my belt is "+belt+", my age is "+age);
  }
  logNinja("Daniel", "red", 23);
  function log(num=10){
    console.log(num);
  }//
*/
/*
  //let variables
  var items= document.getElementsByTagName("li");
  for(let i=0; i<items.length;i++){
    items[i].onclick = function(){
      console.log(i);//is not finding the variable in global scope but block scope
    };
  }
  var x=10;
  if(x>5){
    let x=5;//create a letical scope
    console.log("inside "+x);
  }

  console.log("outside "+x);
  */

/*
  //constants
  console.info("Console Working");
  const pi=3.142;
  function calcArea(r){
    const pi=10;
    console.warn("The area is: "+pi*r*r);
  }
  console.log(pi);
  calcArea(5);
*/
};
};
