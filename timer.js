import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function stringGen(){
    input = document.getElementById("num");
    var result = '';
    var input_length =  parseInt(input.value);
    chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < input_length; i++){
      result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
    document.getElementById("result").innerHTML = result;
    return result;
};

function sendmail(orderid,vno,stime,sdate,sname){
    var temparam= {
        from_name: "SQUAD",
        to_name: sname,
        reg_no: vno,
        message: orderid,
        stime: stime,
        sdate: sdate,
    };
    emailjs.send('service_3no95eb','template_218qlbf',temparam).then(function (res) {
        console.log("Success", res.status);
    });
}

function book(){
    var orderid = stringGen();
    alert("Booking Succesfull");
    alert("You have to reach there within 10 min, check your mail for more details");
    var countDownDate = new Date().getTime() + 602000;
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
    sendmail(orderid,document.getElementById('regn').value,document.getElementById('stime').value,document.getElementById('sdate').value,document.getElementById('sname').value);
}