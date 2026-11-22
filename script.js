var students={
"AGM001":{name:"Ama Mensah",cls:"Form 2 Science - Watson House",results:[["English","B2"],["Maths","A1"],["Science","B3"],["Social Studies","A1"]]},
"AGM002":{name:"Kwame Boateng",cls:"Form 1 Business - Enchill House",results:[["English","B3"],["Maths","B2"],["Accounting","A1"],["Economics","B2"]]},
"AGM003":{name:"Efua Asante",cls:"Form 3 Arts - Lucille Alleyne House",results:[["English","A1"],["Literature","B2"],["Government","A1"],["Geography","B3"]]}
};
function login(){
var id=document.getElementById("sid").value.trim().toUpperCase();
var pw=document.getElementById("spass").value.trim().toUpperCase();
var box=document.getElementById("res");
var err=document.getElementById("err");
if(!students[id]||pw!==id){err.textContent="Wrong ID or Password. Try AGM001";box.style.display="none";return;}
err.textContent="";
var s=students[id];
var rows="";
for(var i=0;i<s.results.length;i++){rows+="<tr><td>"+s.results[i][0]+"</td><td><b>"+s.results[i][1]+"</b></td></tr>";}
box.innerHTML="<h3>Welcome, "+s.name+"</h3><p>"+s.cls+" • ID: "+id+"</p><table><tr><th>Subject</th><th>Grade</th></tr>"+rows+"</table><p style='margin-top:10px;color:green'><b>Promotion: Promoted</b></p>";
box.style.display="block";
}
