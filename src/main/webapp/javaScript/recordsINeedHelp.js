$(document).ready(function(){
	axios.get('/RecordsINeedHelp').then(res => {
		console.log(res);
		let orders = res.data
		let content =``
		for(let i = 0; i < orders.length; i++){
			content += `
				
			
			`
		}
		$('#INHArea').append(content)
	})
})

/*
$(document).ready(() => {
  let xhr = new XMLHttpRequest();
xhr.open("GET", "/RecordsINeedHelp")
xhr.send("1");
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      getRecordsINeedHelpDetail(xhr.responseText);
    }
  }
})	

function getRecordsINeedHelpDetail(data){
  let obj = JSON.parse(data);
	let result = "";
	for(n = 0; n < obj.length; n++){	
		result += "<h2 class='accordion-header' id='heading" + n + "'>";
    result += "<button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + n +"' aria-expanded='false' aria-controls='collapse" + n +"'>"
    result += "<div class='orderId'><strong>編號 " + obj.oId + "'</strong></div>"
    result += "<div class='orderDate'>" + obj.oTime + "</strong></div>"
    result += "<div class='orderStatus'><strong>" + obj.oStatus + "</strong></div>"
    result += "</button>"
    result += "</h2>"                                
    result += "<div id='collapse" + n + "' class='accordion-collapse collapse' aria-labelledby='heading" + n + "' data-bs-parent='#accordionExample'>"                                
    result += "<div class='accordion-body'>"
    result += "<form class='px-4'>"
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>服務類別</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>代買</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>跑腿費</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>" + obj.oFee + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>預估價格</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>" + obj.oPrice + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>截止時間</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>" + obj.oDeadLine + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    for (m = 0; m < orderDetail.length; m++){
      result += "<div class='row d-flex'>"
      result += "<div class='col-2 col-lg-3'>"
      result += "<p class='py-1 m-0'>品項</p>"
      result += "</div>"
      result += "<div class='col-10 col-lg-9'>"
      result += "<p class='py-1 m-0'>" + obj.OBrand + "</p>"
      result += "<p class='py-1 m-0'>" + obj.ODetail + "</p>"
      result += "<p class='py-1 m-0'>" + obj.OQuantity + "</p>"
      result += "</div>"
      result += "<hr>"
      result += "</div>"
    } 
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>起點</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>" + obj.oStart + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>終點</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>" + obj.oEnd + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>備註</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>" + obj.oNote + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "</form>"
    result += "</div>"
    result += "</div>"
	}
	let INHArea = document.getElementById("INHArea")
	INHArea.innerHTML = result;  
}
*/