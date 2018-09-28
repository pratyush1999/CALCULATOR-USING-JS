b=0
a=0
p=1
m=0
d=0
s=0
sq=0
pw=0
dec=0
function funcdecimal()
{ dec=1;
  p=0
m=0
d=0
s=0
sq=0
pw=0
 b=b+"."
 document.getElementById('ans').value=b;
}
function funcsqrt()
{ p=0;
m=0
d=0
s=0
sq=1
pw=0
dec=0
b="sq"+b;
document.getElementById("ans").value=b;
}
function funcplus()
 { p=1;
m=0
d=0
s=0
sq=0
pw=0
  dec=0
  b=b+"+"
  document.getElementById("ans").value=b;
 }
function funcsub()
 { p=0;
m=0
d=0
s=1
sq=0
pw=0
  dec=0
  b=b+"-"
  document.getElementById("ans").value=b;
 }
function funcmulti()
 { p=0;
m=1
d=0
s=0
sq=0
pw=0
  dec=0
  b=b+"*"
  document.getElementById("ans").value=b;
 }
function funcdiv()
 { p=0;
m=0
d=1
s=0
sq=0
pw=0
  dec=0
  b=b+"/"
  document.getElementById("ans").value=b;
 }
function funcpoww()
 { p=0;
m=0;
d=0;
s=0;
sq=0;
pw=1;
  dec=0
  b=b+"^";  document.getElementById("ans").value=b;
 }
function funceqls()
 { document.getElementById('ans').value=a;
  b=a;
 }
function funcclear()
{
  document.getElementById('ans').value=0;
  a=0;
  b=0;
  p=1;
}
function func(v)
{
  if(dec==1)
  {a=a + v/10;
   b=b+v;
  document.getElementById("ans").value=b;
  dec=0;
  }
  if(p==1)
{
  a=a + v;
 b=b+v;
  document.getElementById("ans").value=b;
 p=0
 }
  if(s==1)
{a=a - v;
 b=b+v;
 document.getElementById("ans").value=b;
 s=0
 }
if(m==1)
{a=a * v;
 b=b+v;
 document.getElementById("ans").value=b;
 m=0;
 }  
  if(d==1)
{a=a / v;
 b=b+v;
 document.getElementById("ans").value=b;
 d=0;
 }  
  if(pw==1)
{ z=a;
  for(i=0;i<v-1;i++)
    a=a*z;
 b=b+v;
 document.getElementById("ans").value=b;
 pw=0;
 } 
 if(sq==1)
  { x=1;
    while(x*x-v>0.001) 
     x=(x + v/x)/2;
     a=x;
     b=b+v;
  document.getElementById("ans").value=b;
   sq=0;
  }

}
function funcone()
{ func(1);
} 
function functwo()
{ func(2);
} 
function functhree()
{ func(3);
} 
function funcfour()
{ func(4);
} 
function funcfive()
{ func(5);
} 
function funcsix()
{ func(6);
} 
function funcseven()
{ func(7);
} 
function funceight()
{ func(8);
} 
function funcnine()
{ func(9);
} 
function funczero()
{ func(0);
} 