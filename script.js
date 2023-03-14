function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
  }
  function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
   
    }
    function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
    }
    function buttons(tagname,attrname,attrvalue,content){
        var but=document.createElement(tagname)
        but.setAttribute(attrname,attrvalue);
        but.innerHTML=content;
        return but;
    }
    var FirstName=labels("label","for","FName","FirstName");
    var br=linebreak("br");
    var input=inputs("input","type","FName","name","FName","id","FName");
    var br1=linebreak("br");
    var MiddleName=labels("label","for","MName","MiddleName");
    var br2=linebreak("br");
    var input1=inputs("input","type","MName","name","MName","id","MName");
    var br3=linebreak("br");
    var LastName=labels("label","for","LName","LastName");
    var br4=linebreak("br");
    var input2=inputs("input","type","LName","name","LName","id","LName");
    var br5=linebreak("br");
    var email=labels("label","for","email","Email");
    var br6=linebreak("br");
    var input3=inputs("input","type","email","name","email","id","email");
    var br7=linebreak("br");
    var pass=labels("label","for","password","Password");
    var br8=linebreak("br");
    var input4=inputs("input","type","password","name","passowrd","id","password");
    var br9=linebreak("br");
    var br10=linebreak("br");
    var but=buttons("button","type","button","submit")
    document.body.append(FirstName,br,input,br1,MiddleName,br2,input1,br3,LastName,
        br4,input2,br5,email,br6,input3,br7,pass,br8,input4,br9,br10,but);