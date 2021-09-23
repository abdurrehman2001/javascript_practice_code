// var a = 2;
// var b = 4;

// var t = a++ - ++b + a + ++a + --a - ++a - --b + ++b - --b + ++b + b
// //      3   -  5  + 3 +  4  +  3  -  4  -  4  +  5  -  4  +  5  + 5 

// alert(t)

// var a 
// a = "hello"
// a = 'kahan ho harami yon'
// alert(a)

// var plyrOne = prompt("Choice your haed or tail")
// var plyrTwo = prompt("Choice your's")
// if (plyrOne === "tail")(
//     alert("tail")
// )
// else{
//     alert("Head")
// }


// var a = ['a.r','afan' ,'afzal','ahmed', 'noman','hermain','arham']
// a.pop()
// a.pop()
// a.push("ahmed","ghulam","fatima")
// a.shift()
// a.unshift("kapadia" , 'bikia')
// var b = a.slice(1)
// a.splice(1,0,"kapadia")
// document.write(a + "<br>")
// var b = a.slice(3,6)
// document.write(b)



// var a , b , c , f ;
// c = "hello"
// f = ["kahan" , 'jahan' , 'mgr']
// document.write(c)
// document.write(f)
// document.write(b)


// var b = 150;
// b += 5
// b = b + 15
// document.write(b)


// var b = '150'
// var v = 6
// var r = b + v
// document.write(r)


// var a = (1 + 2) * 3 
// document.write(a)


// var  a = 'hello'
// var b = 'world'
// var c = '.......!!!'
// alert(a + " " + b + c) 

// var c = ['hello' , 'world', '....!']
// console.log(c)
// console.log(c.join(""))

// alert("2 plus 2 equals " + 2 + 2);

// for(var i = 1 ; i <= 10 ; i++){
//     document.write(i + "<br>")
// }


// for(var i = 1; i <= 10; i = i+2)(
//     document.write(i + "<br>")
// )

// for(var i = 0; i < 5; i++){
//     console.log("Hello World...")
// }

// for(var i = 1; i <= 10; i++){
//     document.write("2" + "x" + i + "=" + 2 * i + "<br>")
// }

// var names = ['abdur rehman','ahmed','kapadia','abdul','sattar']
// for(var i = 0; i < names.length; i++){
//     document.write(names[i] + "<br>")
// }

// var city = ['karachi','islamabad','lahore','punjab','sindh']
// for(var i = 0; i < city.length; i++){
//     if(city[i] === 'sindh'){
//         alert(city[i] + " is beautiful city")
//     }
// }

// var city = ['karachi','islamabad','lahore','punjab','sindh']
// for(var i = 0; i < city.length; i++){
//     // if(city[i] === 'sindh'){
//         alert(city[i] + " is beautiful city")
//     }


// for(var i = 1; i > 0; i++){
//     console.log('hello')
// } ye nh rukta chalta hi rehta hai


// for(var i = 0; i < 10; i++){
//     if(i === 5)
//     break;
// 5 times print
// console.log('hello')
// document.write(i + "hello" +"<br>")
// }



// var city = ['karachi','islamabad','lahore','punjab','sindh']
// for(var i = 0; i < city.length; i++){
//     if(city[i] === 'lahore'){
//         alert(city[i] + " is beautiful city")
//         break;
//     }
// }


// for (var i = 0; i < 5; i++){
//     for(var j = 0; j < 2; j++){
//         document.write(j + "a.r" + "<br>")
//     }
// }


// var names = ['Iqra','Nimra','Yusra','Afsheen']
// var fatherNames = ['Ahmed','Kapadia']

// for(var i = 0; i < names.length; i++){
//     for(var j = 0; j < fatherNames.length; j++){
//         document.write(names[i] + ' ' + fatherNames[j] + "<br>")
//     }
// }


// for(var i = 0; i < 10; i++){
//     for(var j = 0; j < i; j++){
//         document.write('*')
//     }
//     document.write("<br>")
// }


// var word = 'abdurrehman'
// for(var i = 0; i < word.length; --i){
//     document.write(word[i])
// }

// var user = prompt("Enter Any Word");
// var word = "" ;
// for(var i = user.length - 1; i >= 0; i--){
//         word += user[i]
//         console.log(user,word)
// }
// if(user === word){
//     document.write(user + " is paligran word")
// }



// var word = prompt("Enter name")
// var check = "";
// for (var i = word.length - 1; i >= 0; i--){
//     check += word[i]
// }
// console.log(word,check)


// var names = 'abdur rehman';
// names = names.toUpperCase()
// document.write(names + "<br>")


// var names = 'ABDUR REHMAN';
// names = names.toLowerCase()
// document.write(names + "<br>")


// var names = 'abdur rehman';
// names = names[0].toUpperCase() + names.slice(1)
// document.write(names)

// var user = prompt("name")
// user = user[0].toUpperCase() + user.slice(1)
// document.write(user)

// var val1 = prompt("Enter your First Number")
// var sign = prompt("Enter your Operator")
// var val2 = prompt("Enter your Second Number")
// console.log(val1 + sign + val2)
// if(sign === "+"){
//     alert((+val1) + (+val2))
// }
// else if(sign === "-"){
//     alert(val1 - val2)
// }
// else if(sign === "*"){
//     alert(val1 * val2)
// }
// else if(sign === "/"){
//     alert(val1 / val2)
// }
// else if(sign === "%"){
//     alert(val1 / val2 * 100 + "%")
// }
// else(
//     alert("Enter Your Correct Number")
// )

// var equ = prompt("Enter Your Equation")
// var num = equ.length

// for(var i = 0; i < num; i++){
//     if(equ.slice(i , i + 1) === "+" || equ.slice(i , i + 1) === "-" || equ.slice(i , i + 1) === "*" || equ.slice(i , i + 1) === "/")
//     alert("sign has found")
// }

// for (var i = 1; i <= 100; i = i + 10){
//     for(var j = i; j < i + 10; j++){
//         document.write( "." + j + " ")
//     }
//     document.write("<br>")
// }



// var city = prompt("Enter Your City Name")
// city = city.toLowerCase()
// var arr = ["karachi" , "punjab", "lahore" , "islamabad"]
// for(var i = 0; i < arr.length; i++){
//     if (arr[i] === city){
//         alert("City has found")
//     }
//     else{
//         alert("City has not found")
//     }
// }





// var city = prompt("Enter Your City Name")
// var firstChar = city.slice(0,1)
// firstChar = firstChar.toUpperCase()
// var otherChar = city.slice(1)
// otherChar = otherChar.toLowerCase()
// var city = firstChar + otherChar
// console.log(city)
// var arr = ["karachi" , "punjab", "lahore" , "islamabad"]
// for(var i = 0; i < arr.length; i++){
//     if (arr[i] === city){
//         alert("City has found")
//     }
//     else{
//         alert("City has not found")
//     }
// }


// var user = prompt("Enter Any Name")
// var uLength = user.length
// for(var i = 0; i < uLength; i++){
//     if(user.slice(i, i + 2) === "  "){
//         alert("Double Space Are Found")
//     }
// }

// var text = "abdur rehman is a good boy he do all work from his class and very one like his nature"
// for(var i = 0; i < text.length; i++){
//     if(text.slice(i , i + 8) === "good boy"){
//         // text = text.slice(0 , i) + "Super boy"
//         text = text.slice(0, i) + "Super Boy" + text.slice(i + 8);
//         console.log(text)
//     }
// }



// var text = "abdur rehman is a good boy he do all work from his class and very one like his nature"
// for(var i = 0; i < text.length; i++){
//     if(text.slice(i,i + 12) ==="abdur rehman"){
//         // text = text.slice(0 , i) + "ABDUR REHMAN" + text.slice(i , 12);
//         text = text.slice(0 , i) + "ABDUR REHMAN" + text.slice(i + 12)

//         console.log(text) 
//         // text = text.slice(0, i) + "ABDUR REHMAN" + text.slice(i + 12);
//     }
// }


// var text = "abdur rehman is a good boy he do all work from his class and very one like his nature"
// console.log(text)
// text = text.replace("good boy" , "GOOD BOY")
// console.log(text)


// var text = "abdur rehman is a good boy he do all work from his class and every one like his nature"
// console.log(text)
// var indexNum = text.indexOf("like his nature")
// var firstText = text.slice(0 , indexNum)
// var replacingText = "like this boy his so cute"
// var thirdText = text.slice(indexNum + 15)
// console.log(firstText + replacingText + thirdText)


// var a = "kapadia"
// var b = a.slice(1,6)
// console.log(b)
// console.log(a.charAt(4))


// var para = "abdur rehman is a bad boy"
// var para1 = para.replace("abdur rehman" , "ABDUR REHMAN")
// var para2 = para1.replace('bad boy' , "GOOD BOY")
// console.log(para2)


// var a = "hello it me hello it me hello it me"
// console.log(a)
// var b = a.replace(/it/g , "It's")
// console.log(b)


// var head = prompt("Choice head or Tail plyer One")
// var tail = prompt("Choice head or tail plyer Two")

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     alert(head + "win")
// }
// else(
//     alert(tail + "won")
// )
// console.log(floor)


// var a = prompt("Enter any name \n Name change to palindrome")
// var b = a.split()
// var c = b.reverse()
// console.log(b)


// var user = prompt("Enter Any Word");
// var word = "" ;
// for(var i = user.length - 1; i >= 0; i--){
//         word += user[i]
//         console.log(user,word)
//     }
// // if(user === word){
// //     document.write(user + " is paligran word")
// // }







// var b = prompt("name")
// var v = b.split()
// console.log(v)
// var n = v.join()
// console.log(n)
// n.reverse()
// console.log(q)
// var v = prompt("nam")
// var t = v.split().concat().join()
// console.log(t)



// var user = prompt("Enter Any Name..??")
// var check = user.split("")
// console.log(check)
// var d =check.reverse()
// console.log(d)
// var c = d.join(" ")
// console.log(c)


// var user = prompt("Enter Any Name and \nCheck Out")
// var a = user.split("")
// console.log(a)
// var s = a.reverse()
// console.log(s)
// var d = s.join(".")
// console.log(d)


// var user = prompt("Enter Any word")
// console.log(user)
// var check = user.split("").reverse().join("")
// console.log(check)
// chpter #  31 for practice

// var date = new Date()
// console.log(date)
// var str = date.toString()
// console.log(str)
// var strSlice = str.slice(0,10)
// console.log(strSlice)


// var monthName = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
// var date = new Date()
// var day = date.getDay()
// // console.log(day)
// var dys = day[monthName]
// console.log(dys)

// var date = new Date()
// console.log(date)
// var b = date.getDate()
// console.log(b)
// var d = date.getFullYear()
// console.log(d)
// var f = date.getHours()
// console.log(f)
// var q = date.getUTCFullYear()
// console.log(q)
// var w = date.getSeconds()
// console.log(w)
// var e = date.getHours()
// console.log(e)
// var r = date.getMinutes()
// console.log(r)


// var dob = new Date("mar 17, 2001")
// var dobmili = dob.getTime()
// var time = new Date()
// var tody = time.getTime()
// var diff = tody - dobmili
// var yer = diff/(1000*60*60*24*30*12)
// var roundYer = Math.floor(yer)
// var cel = Math.ceil(yer)
// console.log(yer)
// console.log(roundYer)
// console.log(cel)

// var a = new Date()
// console.log(a)
// var b = a.setDate(15)
// console.log(a)
// var v = a.setFullYear(2030)
// console.log(a)



// chpter # 35 

// copy and paste chp # 31 to 34 last question 14

//  var a = new Date();
// var name = prompt("Enter your name");
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var units = prompt("Enter number of units");
// var charges = 16;
// var netAmount = units*charges;
// var latePay = 350;
// var grossAmount = netAmount + latePay;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: <b>"  +  name + "</b><br>Month: <b>" + month[a.getMonth()] + "</b><br>Number of units: <b>" + units + "</b><br>Units per charge: <b>" + charges + "</b>");
// document.write("<br><br>Net amount payable (within Due Date): <b>" + netAmount + "</b><br>Late payment surcharge: <b>" + latePay + "</b><br>Gross Amount payable (after Due Date): <b>" + grossAmount + "</b>")

// var a = new Date ()
// var user = prompt("Enter Your Name")
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var units = prompt("Enter Your Units")
// var charges = 16;
// var netAmount = units * charges
// var latePay = 350;
// var grossAmount = netAmount + latePay
// document.write("Your Name is " + user + "<br>" + month + "<b>" + month[a.getMonth()] + "</b>" + "<br>" + "Number Of Units " + "<b>" + units + "<br>" + "<b> Units pe chages" + "<b>"+ charges + "<br>" )
// document.write("<br>" + "<br>" + "Net Amount Payable " + ("With In Due Date") + netAmount + "<br>" + "Late Amount Chages " )                                                                                


// function fullName(fname,lname){
//     document.write(fname.toUpperCase() + " " +lname.toUpperCase())
// }
// fullName("ahmed","abdul Sattar Allah rakha")


// function add(a,a,v){
//     alert(a+a-v)
// }
// add(5,2,2)


// function calc(num1,opr,num2){
//     if(opr === "+")
//     return num1 + num2
//     else if
// }


// function cal(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     }
//     else if(opr === "*"){
//         return num1 * num2
//     }
//     else if(opr === "/"){
//         return num1 / num2
//     }
//     else if(opr === "%"){
//         return num1 / num2 * 100
//     }
//     else{
//         return "Your Operator Is Not Correct"
//     }
// }

// var res = cal(2 , "+" , 4)
// var res1 = cal(5 , "-" , 2)
// var res2 = cal(2 , "*" , 7)
// var res3 = cal(15 , "/" , 3)
// var res4 = cal(340 , "%" , 800)

// document.write(res + "<br>")
// document.write(res1 + "<br>")
// document.write(res2 + "<br>")
// document.write(res3 + "<br>")
// document.write(res4 + "<br>")






// console.log(res)
// console.log(res1)
// console.log(res2)
// console.log(res3)
// console.log(res4)



// var day = +prompt("Enter Weeks Days In Programming");

// switch (day) {
//     case 0:
//         document.write("Today Is Sunday")
//         break;
//     case 1:
//         document.write("Today Is Monday")
//         break;
//     case 2:
//         document.write("Today Is Tuesday")
//         break;
//     case 3:
//         document.write("Today Is Wednesday")
//         break;
//     case 4:
//         document.write("Today Is Thursday")
//         break;
//     case 5:
//         document.write("Today Is Friday")
//         break;
//     case 6:
//         document.write("Today Is Saturday")
//         break;
//     default:
//         document.write("Enter A Correct Week Days Number In programming")
// }




// var age = +prompt("Umar dal kitni hai");
// switch (true) {
//     case (age >= 15 && age <= 20):
//         document.write("Tum bare ho gye ho")
//         break;
//     case (age >= 21 && age <= 30):
//         document.write("Shadi kr le")
//         break;
//     case (age >= 0 && age <= 14):
//         document.write("Chota ho")
//         break;
//     default:
//         document.write("Abey Ghabiz sai age dal")
// }

// var dat = "";
// switch (dat) {
//     case ("a", "e", "i", "o" ,"u"):
// }

// function foo(){
//     alert("Bare Harami Ho Tum Sare")
// }

// function yaya(oye){
//     alert(oye)
// }

// function yelo(){
//     alert("Ye To Buttone Hai Bhaii")
// }

// function naam(){
//     var fnm = document.getElementById("fname")
//     alert(fnm.value.toUpperCase())
//     fnm.value = ""
// }

// Calculator Funtions

// function getNumbr(num){
//     var reslt = document.getElementById("res")
//     reslt.value += num
// }
// function clrBtn(){
//     var relt = document.getElementById('res')
//     relt.value = ""
// }
// function result(){
//     var rslt = document.getElementById("res")
//     rslt.value = eval(rslt.value)
// }
// calculator funtion done


// var usr = prompt("Enter any alphabet")
// var b = usr.charCodeAt()
// alert(b)

// function foo(ho){
//     ho.style.backgroundColor = "red"
//     ho.style.border = "5px solid purple"
//     ho.style.borderRadius = '50px'
//     ho.style.outline = 'none'

// }





// function fnm(){
//     document.getElementById('fnam')
//     console.log(fnam.value)
//     fnam.value = ""
// }
// function Snm(){
//     document.getElementById('Snam')
//     console.log(Snam.value)
//     Snam.value = ""
// }
// function num1(){
//     document.getElementById('numb')
//     console.log(numb.value)
//     numb.value = ""
// }
// function mail(){
//     document.getElementById('maila')
//     console.log(maila.value)
//     maila.value = "" 
// }

// function clr(){
//     document.getElementById('fnam')
//     fnam.value = ""
// }



// function def(){
//     document.getElementById('input1')
//     input1.value = "khan"
// }

// def()



// function readMore(){
//     var fullText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam dolore nihil temporibus sit, nobis sapiente, rerum minima cumque eos quos aliquid doloribus laudantium tenetur totam? Aliquam molestias pariatur odit libero maiores quo cupiditate rem incidunt reiciendis accusantium totam sunt, quae, reprehenderit, et iusto ex minima voluptatibus! Optio harum doloremque enim id sapiente cumque repellat vero, velit nostrum esse, tempora, voluptatum aspernatur nam mollitia repellendus itaque. Qui perferendis ipsum molestias a. Praesentium laudantium neque eveniet odit incidunt aspernatur inventore voluptatibus magni blanditiis cupiditate corporis amet hic necessitatibus nostrum soluta illo illum quaerat consectetur, distinctio ut reiciendis unde fugiat. Beatae, mollitia!"
//     var pri = document.getElementById('pera')
//     pri.innerText = fullText
// }

// function gaib() {
//     document.getElementById("car")
//     car.className = "hidden"
// }
// function zoomIn() {
//     document.getElementById('car')
//     car.className = 'zoomin'
// }
// function zoomOut() {
//     document.getElementById('car')
//     car.className = 'zoomout'
// }



// function changeImg(pic, src) {
//     var picture = document.getElementById("pic")
//     picture.src = src
// }

// var mainBox = document.getElementById("box")
// var txtColorChange = mainBox.getElementsByTagName('p')
// // txtColorChange[5].style.color = 'purple'
// // txtColorChange[5].style.fontSize = '25px'
// // txtColorChange[5].style.fontFamily = 'monospace'

// for (var i = 0; i < txtColorChange.length; i++) {
//     txtColorChange[i].style.color = "LightSeaGreen"
//     txtColorChange[i].style.fontFamily = 'monospace'
//     txtColorChange[i].style.fontSize = '25px'
//     txtColorChange[i].style.fontWeight = 'bold'
// }





// var no = 1;

// function bara(){
//     var b = document.getElementById('bike')
//     b.style.width = '50%'
// }


// var input = document.getElementById('name')
// input.value = "abdur rehman"




// function addStyle(){
//     var pera = document.getElementById('pera')
//     pera.className += 'chn abc'
// }


// setInterval(function(){
//     console.log("bagoo")
// },1000)

// function timer(){
//     console.log("yeyyy")

// }
// setInterval(timer,2000)


// setTimeout(function(){
//     console.log('bhai bhai')
// },3000)

// var number = 0;

// setInterval(function(){
//     number++
//     console.log(number)
// },1000)

// setTimeout(function(){
//     clearInterval(setInterval)
// },5000)



// var count = 0;
// var interval ;

// function timer(){
//     count++
//     console.log(count)
// }

// interval = setInterval(timer,1000)

// setTimeout(function(){
//     clearInterval(interval)
// },6000)


// Stop Watch Start




// var milliSeconds = 0;
// var seconds = 0;
// var minute = 0;
// var interval ;
// var min_heading = document.getElementById("min")
// var sec_heading = document.getElementById("sec")
// var msec_heading = document.getElementById("msec")
// function timer(){
//     milliSeconds++
//     msec_heading.innerHTML = milliSeconds 
//     if(milliSeconds >= 100){
//         seconds++
//         sec_heading.innerHTML = seconds
//         milliSeconds = 0
//     }
//     else if(seconds >= 60){
//         minute++
//         min_heading.innerHTML = minute
//         seconds = 0
//     }
// }
// function start(){
//     interval = setInterval(timer , 10)
// }
// function stop(){
//     clearInterval(interval)
// }
// function reset(){
//     minute = 0
//     seconds = 0
//     milliSeconds = 0
//     min_heading.innerHTML = minute
//     sec_heading.innerHTML = seconds
//     msec_heading.innerHTML = milliSeconds
//     stop()
// }


// /* Stop Watch Complete...... 



// console.log(document.childNodes[1].childNodes[2])
// document.body
// document.all


// function Addtocart(){
//     var img = document.getElementById("card-img")
//     var name = document.getElementById("name")
//     var priczz = document.getElementById("priczz")
//     var cart_img = document.getElementById("car-img")
//     var brnd_name = document.getElementById("brnd-nme")
//     var price = document.getElementById("price")

//      cart_img.src = img.src
//      brnd_name.innerHTML = name.innerHTML
//      price.innerHTML = priczz.innerHTML
// }



// var p = document.createElement("h1");
// var text = document.createTextNode("Abdur Rehman");
// p.appendChild(text)
// var main = document.getElementById("main")
// main.appendChild(p)
// console.log(p)



// function sendMsg(){
//     var input = document.getElementById("box");
//     var p = document.createElement("p")
//     var text = document.createTextNode(input.value)
//     p.appendChild(text)
//     var msg = document.getElementById("msg")
//     msg.appendChild(p)
//     input.value = ""
// }



// var students = {
//     s1 : "ali",
//     s2 : "abdullah",
//     s3 : "basit",
//     s4 : "rehan", 
// }

// console.log(students)

// var subject = {
//     sub1 : "english",
//     sub2 : "math",
//     sub3 : "urdu",
//     sub4 : "science",
//     sub5 : "s.s.t",
//     sub6 : "islamiat"
// }

// console.log(subject)

// subject.mustAttempt = ["Accounting" , 'Business Math']

// console.log(subject)


// var names = ['abdur rehman' , 'umair' , 'anus' , 'taha']

// console.log(names)

// var myQuestions = [
//     {
//         question_1 : "What's Your Name ?",
//         answer1 : {
//             a : "abdur rehman",
//             b : "abdulah",
//             c : "rehan",
//             d : "sattar",
//             e : "razzak"
//         },
//         correctAnswerIs : "a"
//     },
//     {
//         question_2 : "What's Your Sur Name ?",
//         answer2 : {
//             a : "Khan",
//             b : "Suleman",
//             c : "mani",
//             d : "moti wala"
//         },
//         correctAnswerIs : "d"
//     }
// ]



// function Subj(sub1,sub2){
//     this.math = sub1
//     this.islamiat = sub2
// }

// Subj.prototype.fullSubj = function() {
//     return this.sub1 + " " + this.sub2;
// }
// var one = new Subj("math" , "urdu")
// var two = new Subj("math" , "sst")
// console.log(one) 
// console.log(two) 






// var students = {
//     s1 : "ali",
//     s2 : "abdullah",
//     s3 : "basit",
//     s4 : "rehan", 
// }

// // console.log("s5" in students)

// for (var key in students){
//     console.log(key , students[key])
// }

// console.log(students.hasOwnProperty("s3"))




// var mobileData = {
//     iphone: {
//         name: "iphone 1",
//         price: "10",
//         color: "black",
//         storage: "12 GB"
//     },
//     iphone1: {
//         name: "iphone 2",
//         price: "20",
//         color: "Golden",
//         storage: "24 GB"
//     },
//     iphone2: {
//         name: "iphone 2",
//         price: "30",
//         color: "pink",
//         storage: "36 GB"
//     },
//     samsung: {
//         name: "samsung",
//         price: "12",
//         color: "orange",
//         storage: "10 GB"
//     },
//     samsung1: {
//         name: "samsung 1",
//         price: "16",
//         color: "yellow",
//         storage: "5 GB"
//     },
//     samsung2: {
//         name: "samsung 2",
//         price: "14",
//         color: "red",
//         storage: "1 GB"
//     },
//     Oppo: {
//         name: "oppo",
//         price: "15",
//         color: "brown",
//         storage: "41 GB"
//     },
//     Oppo1: {
//         name: "oppo1",
//         price: "13",
//         color: "green",
//         storage: "31 GB"
//     },
// }


//     var one = prompt("mobile")
//     console.log(mobileData,one)



// var user = prompt("Enter Your Mobile")
// var user1 = prompt("Enter Your Mobile model")

// console.log(mobileData[user])

// function serch(){
//     var serch = document.getElementById("serch")
//     var main = document.getElementById("main")
//     main.appendChild(serch)
//     serch.value = main.innerText
//     // serch.innerHTML = mobileData.name
// }



// var data = {
//     iphone1: {
//         name: "iphone 2",
//         price: "20",
//         color: "Golden",
//         storage: "24 GB"
//     },
//     samsung: {
//         name: "samsung",
//         price: "12",
//         color: "orange",
//         storage: "10 GB"
//     },
//     samsung1: {
//         name: "samsung 1",
//         price: "16",
//         color: "yellow",
//         storage: "5 GB"
//     },
//     Oppo: {
//         name: "oppo",
//         price: "15",
//         color: "brown",
//         storage: "41 GB"
//     },
//     Oppo1: {
//         name: "oppo1",
//         price: "13",
//         color: "green",
//         storage: "31 GB"
//     },
// }
// // console.log(data)/
// for (var key in data){
//     console.log(data[key])
// }



// let txt = "We are \"Vikings\"";
// alert(txt);

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// alert(fruits.sort())  // alphabetically


// var a = Math.max(500 ,120)
// alert(a)

// var a = Math.sqrt(9)
// alert(a)

// let press = () =>{
//     // let locate = window.location.href
//     // console.log(locate)
//     // document.write(locate)
//     // window.location.replace("https://www.google.com/")
//     var a = `<h1>Hello World</h1>`
//     window.open('https://google.com','aaa',"top=200,left=600,width=500,height=400,border=50")

// }



// var a = ['khan' , 'mejabin']
// var b = ['rahul' , 'oppo']
// // var merge = a.concat(b)
// console.log(b)

// var p = {
//     name : 'shabana',
//     cls : 9
// }
// var o = {name : "oye",cls : 10,...p}
// console.log(o)


// let a = {
//     name : 'gulab',
// }
// let b ={
//     ...a,
//     cls : 2
// }
// console.log(b)

// var age = 10
// var check = age < 9 ? 'ye bara hai' : 'ye to hai hi nai'
// console.log(check)
// if (age => 20){
//     alert("ok")
// }
// else{
//     alert("not ok")
// }
// console.log()

// var obj = {
//     name : 'luqman',
//     cls : 1,
//     no : 03156141561,
//     adress : 'gali 4 aur yahin pe bas'
// }
// var {name , cls , no , adress} = obj
// console.log (no,adress)



// var a = prompt("enter something");
// var c = a === '' ? 'kuch likho' : a === a.toUpperCase() ? a : "nhi bhai"  
// console.log(c)

// var promose = new Promise(function (resolve, reject) {
//     var zinger = prompt("Khilaya Ke Nahi Khilaya.......?");
//     zinger === "" ? reject("Kuch to btaoo") : zinger === "khilaya" ? resolve("bht acha hai") : reject ("topi pehnai");

// })
// promose.then(function (responce) {
//     console.log(`responce ====> ${responce}`)
// })
//     .catch(function (erroe) {
//         console.log(`error =====> ${erroe}`)
//     })

// Function Expression ES = 5 ka feature hai

// let foo = function () {
//     alert("Hello World")
// }
// foo()

// array destructuring

// let arr = ['bha' , 'bhn' , 'sis' , 'kuri']
// let [n1,n2,n3,n4] = arr
// console.log(n1,n2,n4,n3)

// let foo = a => 
// console.log(foo(this))

// function foo(klo) {
// console.log(foo(this))
// }
// foo()

// function foo(a){
//     console.log([a])
// }
// foo()

// let hello = (fd) =>{
//     console.log(this)
// }
// hello()



// prompt("hello")  
// console.log(prompt)


// let a = prompt("Enter A Value....??")
// a ===   1||2||3||4||5||6||7||8||9 ? alert("Alphabet me dalo") : a === a.toUpperCase() ? alert("Behtreen") : alert("Sai dali hai value")
// console.log( )

// var a = confirm("Are you Silly ... ? ?")
// a ? alert("thanks"): alert("Sorry")

// var a = 1;
// while (a <= 10) {
//     document.write(a + " ====> Kal cls hai <br />")
//     a = a + 1
// }

// let a = () =>{

//     var i = 1;
//     // var table = prompt('enter your table')
//     var table = document.getElementById("nmbr").value;
//     // var s    
//     while (i <= 10){
//         document.write(`${table} x ${i} = ${table * i} <br>`)
//         i = i + 1
//     }
// }

// let show = document.getElementById("show");
// let count = 1;
// let click = () => {
// let set = `${get.value} x ${count} = ${get.value * count} <br>`
// set = show.innerHTML
// count = count + 1;
// }
// alert('hello')
// let get_input = document.getElementById("search");
// console.log(get_input.value)



// let srch = document.getElementById("srch")
// let sh = document.getElementById("shows").append()
// let n = 1;

// let btn = () => {
//     // while(n <= 10){
//         // let dos = 
//         // sh.innerHTML=`<ul><li>${srch.value} x ${n} = ${srch.value * n}</i></ul> `
//         // document.write(`${srch.value} x ${n} = ${srch.value * n} <br>`)

//         // sh.innerHTML = dos
//         // n = n + 1 
//     // }
//     // console.log(srch.value)

//     for (var i = 0 ; i <= 10 ; i++){
//         sh = `<ul><li>${srch.value} x ${i} = ${srch.value * i}</li></ul> `
//         // sh.innerHTML
//     }
// }


// var a = 1;
// do{
//     document.write( a + " ===== > abey bhai <br>")
//     a++;
// }while(a <= 11)

// for (a = 1; a <= 10; a++) {
//     document.write(a + " Ye hui na baat<br>")
// }


// for (var i = 1 ; i <= 50 ; i++){
//     if(i % 2 == 0){
//         document.write(i + "<hr>")
//     }
// }

// for (var i = 1; i <= 100; i = i + 10) {
//     for (var k = i; k < i + 10; k++) {
//         document.write("<b><i>" + k + "  </b></i>")
//     }
//     document.write("<br>")
// }



//          Loop Example Start

// document.write("Nested loop example ===>> One")
// document.write("<br>")
// document.write("<br>")

// for (var a = 1; a <= 10; a++) {
//     for (var b = 1; b <= a; b++) {
//         document.write(b + " ")
//     }
//     document.write("<br>")
// }

// document.write("<br>")
// document.write("<br>")
// document.write("Nested loop example ===>> Two")
// document.write("<br>")
// document.write("<br>")

// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write(i + " ")
//     }
//     document.write("<br>")
// }

// document.write("<br>")
// document.write("<br>")
// document.write("Nested loop example ===>> three")
// document.write("<br>")
// document.write("<br>")

// for (var q = 10; q >= 1; q--) {
//     for (var w = 1; w <= q; w++) {
//         document.write(q + " ")
//     }
//     document.write("<br>")
// }


// document.write("<br>")
// document.write("<br>")
// document.write("Nested loop example ===>> Four")
// document.write("<br>")
// document.write("<br>")

// for (var t = 10; t >= 1; t--) {
//     for (var y = t; y >= 1; y--) {
//         document.write(y + " ")
//     }
//     document.write("<br>")
// }

//          Loop Example End