function takevalue(event){
    event.preventDefault();
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("fathername").value);
    console.log(document.getElementById("mothername").value);
    console.log(document.getElementById("mobile").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("password").value);
    console.log(document.getElementById("dob").value);
    
    var name=document.getElementById("name").value;
    var fathername=document.getElementById("fathername").value;
    var mothername=document.getElementById("mothername").value;
    var mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var dob=document.getElementById("dob").value;
       document.write("Your Name is : "+name+"<br>");
       document.write("Your Father Name is : "+fathername+"<br>");
       document.write("Your Mother Name is : "+mothername+"<br>");
       document.write("Your Mobile Number is : "+mobile+"<br>");
       document.write("Your Email address is : "+email+"<br>");
       document.write("Your Password is : "+password+"<br>");
       document.write("Your Date Of Birth is : "+dob+"<br>");
        
     /*  console.log(name);
       console.log(fathername);
       console.log(mothername);
       console.log(mobile);
       console.log(email);
       console.log(password);
       console.log(dob);*/
    }
  