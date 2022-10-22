// date and time using moment js
function displayTime (){
    var date = moment();
 $("#currentDay").text(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
 }
 
 // set interval to update every second
 var displayTimeInterval = setInterval(displayTime, 1000);
 
 // Time function to showcase past, present, future color blocks
 function time (){
     var currentTime = moment().hours();
     $(".description").each(function(){
         var blockHour = parseInt($(this).parent().attr("id"))
         if (blockHour< currentTime){
             $(this).addClass("past")
         } else if (blockHour === currentTime){
             $(this).removeClass("past")
             $(this).addClass("present")
         } else {
             $(this).removeClass("past")
             $(this).removeClass("present")
             $(this).addClass("future")}
     })
 }
 // calling the time function 
 time();
 
 var interval = setInterval(time, 60000);
 
 // saving the input when the save button is clicked (doesnt go away when the page is refreshed)
 $(".saveBtn").on("click", function(){
     var hour = $(this).parent().attr("id");
     var value = $(this).siblings(".description").val()
     localStorage.setItem(hour, value);
 })
 
 // saving it in the local storage 
 $(document).ready(function(){
     $("#09 .description").val(localStorage.getItem("9"))
     $("#10 .description").val(localStorage.getItem("10"))
     $("#11 .description").val(localStorage.getItem("11"))
     $("#12 .description").val(localStorage.getItem("12"))
     $("#13 .description").val(localStorage.getItem("13"))
     $("#14 .description").val(localStorage.getItem("14"))
     $("#15 .description").val(localStorage.getItem("15"))
     $("#16 .description").val(localStorage.getItem("16"))
     $("#17 .description").val(localStorage.getItem("17"))
     $("#18 .description").val(localStorage.getItem("18"))
     $("#19 .description").val(localStorage.getItem("19"))
     $("#20 .description").val(localStorage.getItem("20"))
     $("#21 .description").val(localStorage.getItem("21"))
     $("#22 .description").val(localStorage.getItem("22"))
     $("#23 .description").val(localStorage.getItem("23"))
     $("#24 .description").val(localStorage.getItem("24"))
 });
 
 
 
 
 