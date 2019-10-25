(function (){
   var k=document.getElementById('in');
   var s=document.getElementById('heading');
   var input=document.getElementById('register1');
   var input1=document.getElementById('login1');
   var s1=document.getElementById('heading1');
   var lo=document.getElementById('out');
   var reg=document.getElementById('register');
   var log=document.getElementById('login');
   var deletes=document.getElementById('delete');
   var logshows=document.getElementById('logshow');
   lo.addEventListener('click',satyam);
   k.addEventListener('click',shivam);
   window.addEventListener('DOMContentLoaded', shivam);
   function shivam(){
      var head=document.createElement('p');
      head.textContent="Sign in your Account";
      s.appendChild(head);
      input1.style.display="none";
      k.removeEventListener("click", shivam);
      lo.addEventListener('click',satyam1);  
      var btn=document.createElement('button');
      btn.addEventListener('click',local);
      btn.textContent="Register";
      reg.appendChild(btn);
      btn.classList.add("registerbtn");
   }
   function satyam1(){
      s.style.display="none";
      s1.style.display="inherit";
      reg.style.display="none";
      log.style.display="inherit";
      input1.style.display="inherit";
      input.style.display="none";
   }
   function satyam(){
      var head=document.createElement('p');
      head.textContent="Login into your account";
      s.style.display="none";
      reg.style.display="none";
      s1.append(head);
      var but=document.createElement('button');
      but.classList.add("loginbtn");
      but.textContent="Login";
      but.addEventListener('click',logged);
      log.appendChild(but);
      input1.style.display="inherit";
      input.style.display="none";
      lo.removeEventListener("click",satyam);
      k.addEventListener('click', shivam1);
   }
   function shivam1(){
      s.style.display="inherit";
      s1.style.display="none";
      reg.style.display="inherit";
      log.style.display="none";
      input.style.display="inherit";
      input1.style.display="none";
   } 
   function local(){
      var a=document.getElementById('name')
      var b=document.getElementById('password');
      localStorage.setItem('name1', a.value);
      localStorage.setItem('password1',b.value);
      a.value='';
      b.value='';
   }
   function logged(){
      var c=localStorage.getItem('name1');
      var d=localStorage.getItem('password1');
      var e=document.getElementById('name2');
      console.log(c);
      console.log(d);
      var f=document.getElementById('password2');
      g=e.value;
      h=f.value;
      if(c==g && d==h){
         let stateObj = {
            foo: "bar",
         };
         history.pushState(stateObj,"","loggedin");
         deletes.style.display="none";
         var log4=document.createElement('p');
         log4.textContent="Thanks "+ c +"For logged in ";
         logshows.appendChild(log4);
      }
      console.log(g);
      console.log(h);
      e.value='';
      f.value='';
}
})();