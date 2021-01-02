window.onload=function(){


    var btn=document.getElementById("btnadd1");
    btn.onclick=handleadd;
    var btn1=document.getElementById("btnadd2");
    btn1.onclick=handleadd1;
    var btn1=document.getElementById("btnadd3");
    btn1.onclick=handleadd2;
    var btn2=document.getElementById("type");
    btn2.onclick=handleadd3;
    };
    
    function handleadd(){
       
        var val=document.getElementById("i1").value;
        var list=document.getElementById("list");
        var li=document.createElement('li');
        var lab=document.createElement('label');
        lab.textContent='Medicine Name|';
        var ne=document.createElement("button");
        ne.onclick=handledel;
        ne.textContent='delete';
        var txt=document.createTextNode(val);
        li.appendChild(lab);

        li.appendChild(txt);
        li.appendChild(ne);
        list.appendChild(li);

        lab.classList.add('label');
        ne.classList.add('input');
    }
    
    function handledel(event){
        var tag=event.target;
        var li=tag.parentNode;
        li.parentNode.removeChild(li);
    
    }
    
    function handleadd1(){
       
        var val=document.getElementById("i2").value;
        var list=document.getElementById("list");
        var li=document.createElement('li');
        var lab=document.createElement('label');
        lab.textContent='Company Name|';
        var ne=document.createElement("button");
        ne.onclick=handledel;
        ne.textContent='delete';
        var txt=document.createTextNode(val);
        li.appendChild(lab);

        li.appendChild(txt);
        li.appendChild(ne);
        list.appendChild(li);

        lab.classList.add('label');
        ne.classList.add('input');
    }

    function handleadd2(){
       
        var val=document.getElementById("i3").value;
        var list=document.getElementById("list");
        var li=document.createElement('li');
        var lab=document.createElement('label');
        lab.textContent='Quantity|';
        var ne=document.createElement("button");
        ne.onclick=handledel;
        ne.textContent='delete';
        var txt=document.createTextNode(val);
        li.appendChild(lab);

        li.appendChild(txt);
        li.appendChild(ne);
        list.appendChild(li);

        lab.classList.add('label');
        ne.classList.add('input');
    };
    
    function handleadd3(){
        var val=document.getElementById("type").value;
        var list=document.getElementById("list");
        var li=document.createElement('li');
        var lab=document.createElement('label');
        lab.textContent='Type|';
        var txt=document.createTextNode(val);
        var ne=document.createElement("button");
        ne.textContent='delete';
        ne.onclick=handledel;
    
        li.appendChild(lab);
        li.appendChild(txt);
        li.appendChild(ne);
        list.appendChild(li);
    
        lab.classList.add('label');
        ne.classList.add('input');
    };

        $(document).ready(function() {
          $("#st1").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1").css("color", "yellow");

          });
          $("#st2").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1, #st2").css("color", "yellow");

          });
          $("#st3").click(function() {
              $(".fa-star").css("color", "black")
              $("#st1, #st2, #st3").css("color", "yellow");

          });
          $("#st4").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1, #st2, #st3, #st4").css("color", "yellow");

          });
          $("#st5").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1, #st2, #st3, #st4, #st5").css("color", "yellow");

          });
        });
