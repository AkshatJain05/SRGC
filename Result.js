function sumbit(){
    let rollNo= Number( document.querySelector('#rollNo').value)
    document.querySelector('#resultBox').style.display='flex';
    document.querySelector('#box1').style.display='none';
    document.querySelector('#heading1').style.marginBottom='20px';
  
   
    if(!(rollNo>=1001 && rollNo<=1007)) {
        console.log(alert('Roll No is no valid'));
        document.querySelector('#resultBox').style.display='none';
        document.querySelector('#box1').style.display='flex';
        document.querySelector('#heading1').style.marginBottom='150px';
      }

    let result = datas.filter((data)=>{
    return data.rollNo==rollNo }
    )

      document.querySelector('#name').innerHTML = `Name = ${result[0].name}`;
      document.querySelector('#rollNoStd').innerHTML=`Roll No. = ${rollNo}`
  
         /*DSTL*/ let s1 = result[0].dstl ; document.querySelector('#dstl').innerHTML = s1;
         /*COA*/let s2 = result[0].coa ; document.querySelector('#coa').innerHTML = s2;
         /*DS*/let s3 = result[0].ds ; document.querySelector('#ds').innerHTML = s3;
         /*CS*/ let s4 = result[0].cs ; document.querySelector('#cs').innerHTML = s4;
         /*DE*/ let s5 = result[0].de ; document.querySelector('#de').innerHTML = s5;
         /*TC*/ let s6 = result[0].tc ; document.querySelector('#tc').innerHTML = s6;
           
              const score = s1 + s2 + s3 + s4 + s5 + s6;
              document.querySelector('#score').innerHTML = score;
  
              if (s1 >= 16 && s2 >= 16 && s3 >= 16 && s4 >= 16 && s5 >= 16 && s6 >= 16) {
                  document.querySelector("#statusP").innerText = 'Status = Pass';
              }
              else {
                  document.querySelector("#statusP").innerText = 'Status = Fail'
                  document.querySelector('#statusP').style.color='pink';
              }
             
          }
   document.querySelector("#print").addEventListener('click',()=>{
     window.print();
   })
