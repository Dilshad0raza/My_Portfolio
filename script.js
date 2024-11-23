let body=document.body;
let br=document.getElementsByClassName('br');
let dk=document.getElementsByClassName('dk');
let Nav=document.getElementsByClassName('a');
let nav=document.getElementById('Navbar');
let hide=document.getElementsByClassName("hide")[0];
let btn=document.getElementsByClassName('view')[0];
let data=document.getElementById('dat');
let title=document.getElementsByClassName('title');
let hp=document.getElementsByClassName('he')[0];
let hideicon=document.getElementsByClassName('hide-icon');
let show=document.getElementsByClassName('show');
let th=document.getElementsByTagName('th');
let td=document.getElementsByTagName('td');
let selectRow=null;
let form=document.getElementById('from');
let val=document.getElementsByClassName('inp');
let checkbox=document.getElementById('check');
let sdata=document.getElementById('showdata');


checkbox.addEventListener('click', ()=>{
    if(checkbox.checked){
        val[2].style.display='none';
        val[2].required=false;
    }
    else{
        val[2].style.display='block';
        val[2].required=true;
    }
})





let mode=true;
br[0].addEventListener('click', ()=>{
    if(mode==true){
        mode=false;
        body.style.backgroundColor='white';
    for(let i=0; i<Nav.length;i++){
        Nav[i].style.color='black';

    }
    for(let i=0;i<th.length;i++){
        th[i].style.border='1px solid black'
    }
    for(let i=0;i<td.length;i++){
        td[i].style.border ='1px solid black'
    }
    for(let i=0;i<show.length;i++){
        show[i].style.color='black';
    }
    for(let i=0;i<title.length;i++){
        title[i].style.color='black';
    }
    nav.style.color='black'
    data.style.color='black';
    br[0].innerHTML='<i class="fa-solid fa-sun"></i>';
    br[0].style.color='white';
    
    }
    else{
        mode=true;
        body.style.backgroundColor='rgb(24, 24, 24)'
    for(let i=0; i<Nav.length;i++){
        Nav[i].style.color='white';

    }
    for(let i=0;i<show.length;i++){
        show[i].style.color='white';
    }
    for(let i=0;i<title.length;i++){
        title[i].style.color='white';
    }
    for(let i=0;i<th.length;i++){
        th[i].style.border='1px solid white'
    }
    for(let i=0;i<td.length;i++){
        td[i].style.border='1px solid white'
    }
    nav.style.color='white'
    data.style.color='white'
    br[0].innerHTML='<i class="fa-solid fa-moon"></i>';
    br[0].style.color='black';
    
    }

})




btn.addEventListener('click', ()=>{
    if(hide.style.display==='none'){
        hide.style.display='block';
        btn.innerHTML='Hide'
    }
    else{
        hide.style.display='none';
        btn.innerHTML='View More'
    }
    
})

hideicon[0].addEventListener('click', ()=>{
    if(hp.style.display==='none'){
        hp.style.display='block';
    }
    else{
        hp.style.display='none';
    }
})
hideicon[1].addEventListener('click', ()=>{
    if(hp.style.display==='none'){
        hp.style.display='block';
    }
    else{
        hp.style.display='none';
    }
})
form.addEventListener('click', collectdata);


function collectdata(e){
    // e.preventDefault();
    
        const formdata=readdata();
        console.log(formdata["Name"]+" , "+ formdata['Contact']+" , "+formdata['WhatsApp']);
        if(formdata['Name']==='dilshad' && formdata['Contact']=="123"){
            sdata.style.display='block';
             alert("Welcome to show details:");
        }
        
        else{
            if(selectRow==null){
                selectRow='notnull';
                InsertRecord(formdata);
                console.log('instered')
                
            }
            resetData();
            console.log('data reseted')
    
            alert("We will contact soon Thanks.")
        }
        
    }


function readdata(){
    let formdata={};
    formdata["Name"]=val[0].value;
    formdata['Contact']=val[1].value;
    if(checkbox.checked){
        formdata['WhatsApp']=val[1].value;
    }
    else{
        formdata['WhatsApp']=val[2].value;
    }
    
    return formdata;
}

function InsertRecord(formdata){
  console.log('this is error');
  let table=document.getElementById('tbody');
    console.log("there is second error: "+table);

  let newrow=table.insertRow(table.length);
  const cell1=newrow.insertCell(0);
  cell1.innerHTML=formdata.Name;
  const cell2=newrow.insertCell(1);
  cell2.innerHTML=formdata.Contact;
  const cell3=newrow.insertCell(2);
  cell3.innerHTML=formdata.WhatsApp;
}

function resetData(){
    for(let i=0;i<val.length;i++){
       val[i].value="";
    }
    selectRow=null;
 }
 