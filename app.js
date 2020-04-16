function fetchData(argument) {
	var bill={cust_name:'',mob_no:'',item:'',weight:'',address:'',rate:''};

	bill.rate=document.getElementById('rate').value;
	bill.cust_name=document.getElementById('cust_name').value;
	bill.mob_no=document.getElementById('mobile_no').value;
	bill.item=document.getElementById('item').value;
	bill.weight=document.getElementById('weight').value;
	bill.address=document.getElementById('Address').value;
	if (bill.rate !="") {
		if ( bill.cust_name !="") {
			if ( bill.mob_no !="") {
				if ( bill.weight !="") {
					ShowBill(bill)
				}
				else{
					alert("Enter Weight")
				}	
			}
			else{
				alert("Enter Mobile No")
			}
		}
		else{
			alert("Enter customer name ")
		}
	}else{
		alert("Enter Rate")
	}
	
}
function ShowBill(bill) {

	var total= bill.rate*bill.weight;
	console.log(bill.cust_name);
	console.log(bill.mob_no);
	console.log(bill.item);
	console.log(bill.weight);
	console.log(bill.address);
	var date=new Date();
	var div=document.createElement('div');
	 var article=document.getElementById('show');

	article.appendChild(div);
	div.innerHTML="\
				<div>\
				 <h3 style='background-color:red;border:1px solid'>Qadri Chicken & Mutton Shop  &nbsp;&nbsp;&nbsp;Sajid momin-9890119211</h3>\
				<p><date style='color:red';>"+date.toDateString()+"</date></p>\
					<p>\
						<span>Customer Name:</span>\
						<span><strong>"+bill.cust_name+"</strong></span>\
					</p>\
					<p>\
						<span>Mobile Number : </span>\
						<span>"+bill.mob_no+"</span>\
					</p>\
					<p>\
						<span> "+bill.item+" :</span>\
						<span>"+bill.weight+"Kg </span>\
					</p>\
					<p>\
					<span>Address :</span>\
						<span>"+bill.address+"</span>\
					</p>\
					<hr/>\
					<p>\
						<span>Amount : </span>\
						<span><strong>"+total+"Rs</strong></span>\
					</p>\
					<msg style='color:red'>Thank You ..Visit Again !</msg><br/>\
				</div>";
				article.style.display="block";
				document.getElementById('Generate').style.display="none";
				document.getElementById('Reset').style.display="none";


}
function clock() {
	var date=new Date();
	var hrs=date.getHours();
	var min=date.getMinutes();
	var sec=date.getSeconds();
	document.getElementById('date').innerHTML= hrs+":"+min+":"+sec;
}
setInterval(clock,1000);

        function print() { 
          const event = new Date();
            var divContents = document.getElementById("show").innerHTML; 
            var a = window.open('', '', 'height=500, width=500'); 
            a.document.write('<html>'); 
            a.document.write('<body ><br>'+ event.toLocaleDateString()); 
            a.document.write(divContents); 
            a.document.write('</body></html>'); 
            a.document.close(); 
            a.print(); 
        } 

function reset() {
    	    	
	var bill={cust_name:'',mob_no:'',item:'',weight:'',address:'',rate:''};
	bill.rate=document.getElementById('rate').innerValue=" ";
	bill.cust_name=document.getElementById('cust_name').innerValue=" ";
	bill.mob_no=document.getElementById('mobile_no').innerValue=" ";
	bill.weight=document.getElementById('weight').innerValue=" ";
	bill.address=document.getElementById('Address').innerValue=" ";

}        