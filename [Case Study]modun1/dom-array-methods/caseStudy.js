let chitieu = [];
let tienchi = [];
function them(){
  let a = document.getElementById("themviec").value;
  let b = document.getElementById("themtien").value;
  chitieu.push(a);
  tienchi.push(b);
  hienthichitieu();
  hienthitienchi();
  document.getElementById("themviec").value ='';
  document.getElementById("themtien").value='';
}

function tinhtong() {
  let total = 0 ;
  for(let i =0; i < tienchi.length; i++){
    total += Number(tienchi[i]);
  }
document.getElementById("displaytong").innerHTML=` Tổng số bằng : ${total}`;  
}

// document.write(total);
function hienthichitieu(){
  let tbview =document.getElementById("tableview");
  tbview.innerHTML="";
  chitieu.forEach(function(value,index){
    tbview.innerHTML += 
    `<tr class="trview">
    <td>${value}</td>
  </tr>`
  })
}
function hienthitienchi(){
  let tbview =document.getElementById("tableview2");
  tbview.innerHTML="";
  tienchi.forEach(function(value,index){
    tbview.innerHTML += 
    `<tr class="trview">
    <td class ="money">${formatCurrency(value)}</td>
  </tr>`
  })
}
hienthichitieu();
hienthitienchi();
function resetValue(){
  chitieu = [];
  tienchi = [];
  document.getElementById("displaytong").innerHTML='';
  hienthichitieu();
  hienthitienchi();  
}
resetValue();
function formatCurrency(number){
  return number.toLocaleString('vi', {
      style: 'currency',
      currency: 'vnd',
    });
}
