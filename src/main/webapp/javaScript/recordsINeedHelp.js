$(document).ready(() => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      getRecordsINeedHelpDetail(xhr.responseText);
    }
  }
  xhr.open("GET", "../RecordsINeedHelp")
  xhr.send();
})

function getRecordsINeedHelpDetail(data){
  let obj = JSON.parse(data);
	let result = "";
	for(n = 0; n < obj.allMembers.length; n++){	
		var member = obj.allMembers[n];
		result += "<h2 class='accordion-header' id='heading" + n + "'>";
    result += "<button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + n +"' aria-expanded='false' aria-controls='collapse" + n +"'>"
    result += "<div class='orderId'><strong>編號 " + obj.OId + "'</strong></div>"
    result += "<div class='orderDate'>" + obj.OTime + "</strong></div>"
    result += "<div class='orderStatus'><strong>" + obj.OStatus + "</strong></div>"
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
    result += "<p class='py-1 m-0'>" + obj.OFee + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>預估價格</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>" + obj.OPrice + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>截止時間</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>" + obj.ODeadLine + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    for (m = 0; m < orderlist.length; m++){
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
    result += "<p class='py-1 m-0'>" + obj.OStart + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>終點</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>" + obj.OEnd + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "<div class='row d-flex'>"
    result += "<div class='col-2 col-lg-3'>"
    result += "<p class='py-1 m-0'>備註</p>"
    result += "</div>"
    result += "<div class='col-10 col-lg-9'>"
    result += "<p class='py-1 m-0'>" + obj.ONote + "</p>"
    result += "</div>"
    result += "<hr>"
    result += "</div>"
    result += "</form>"
    result += "</div>"
    result += "</div>"
	}
	INHArea.innerHTML = result;  
}