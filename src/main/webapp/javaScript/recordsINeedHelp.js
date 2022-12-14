let siteContent = ``
let res
let webSocket
let roomName

$(document).ready(function(){
	axios.get('http://localhost:8080/java018_03/RecordsINeedHelp').then(res => {
		console.log(res);
		orders = res.data
		let content =``
		for(let i = 0; i < orders.length; i++){
      		content =``
			content += `
            <h2 class="accordion-header" id="heading${i}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                <div class="orderId">需求編號 #${orders[i].oId}</div>
                <div class="orderDate">成立時間 ${orders[i].oTime}</div>
                <div class="orderStatus">需求狀態 ${orders[i].oOrderStatus}</div>
                <div class="orderRating">幫手評價 </div><div class="stars" id="eachOrderRating${i}"></div>
            </button>
            </h2>
            <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <form class="px-4">
                        <div class="row d-flex">
                            <div class="col-2 col-lg-3">
                                <p class="py-1 m-0">服務類別</p>
                            </div>
                            <div class="col-10 col-lg-9">
                                <p class="py-1 m-0">${orders[i].oOrderType}</p>
                            </div>
                            <hr>
                        </div>
                        <div class="row d-flex">
                            <div class="col-2 col-lg-3">
                                <p class="py-1 m-0">跑腿費</p>
                            </div>
                            <div class="col-10 col-lg-9">
                                <p class="py-1 m-0">${orders[i].oFee}</p>
                            </div>
                            <hr>
                        </div>
                        <div class="row d-flex">
                            <div class="col-2 col-lg-3">
                                <p class="py-1 m-0">預估價格</p>
                            </div>
                            <div class="col-10 col-lg-9">
                                <p class="py-1 m-0">${orders[i].oPrice}</p>
                            </div>
                            <hr>
                        </div>
                        <div class="row d-flex">
                            <div class="col-2 col-lg-3">
                                <p class="py-1 m-0">截止時間</p>
                            </div>
                            <div class="col-10 col-lg-9">
                                <p class="py-1 m-0">${orders[i].oFee}</p>
                            </div>
                            <hr>
                        </div>
                        <div class="row d-flex">
                            <div class="col-2 col-lg-3">
                                <p class="py-1 m-0">品項</p>
                            </div>
                            <div class="col-10 col-lg-9">
                            `
                            for(j = 0; j < orders[i].items.length; j++){
                              if(j != 0){
                                content += `<hr>`
                              }
                              content += `
                              	<div class="itemsDetail">
	                                <p class="py-0 m-0">
	                                	<div class="itemsDetailTitle">品名</div>
	                                	<div class="itemsDetailContent">${orders[i].items[j].oBrand}</div>
	                                </p>
	                                <p class="py-0 m-0">
		                                <div class="itemsDetailTitle">細項</div>
	                                	<div class="itemsDetailContent">${orders[i].items[j].oDetail}</div>	
	                                </p>
	                                <p class="py-0 m-0">
	                                	<div class="itemsDetailTitle">數量</div>
	                                	<div class="itemsDetailContent">${orders[i].items[j].oQuantity}</div>	
	                                </p>
                                </div>
                              `
                            }
                            content += `
                            </div>
                            <hr>
                        </div>
                        <div class="row d-flex">
                            <div class="col-2 col-lg-3">
                                <p class="py-1 m-0">起點</p>
                            </div>
                            <div class="col-10 col-lg-9">
                                <p class="py-1 m-0">${orders[i].oShippingAddress}</p>
                            </div>
                            <hr>
                        </div>
                        <div class="row d-flex">
                            <div class="col-2 col-lg-3">
                                <p class="py-1 m-0">終點</p>
                            </div>
                            <div class="col-10 col-lg-9">
                                <p class="py-1 m-0">${orders[i].oDestinationAddress}</p>
                            </div>
                            <hr>
                        </div>
                        <div class="row d-flex">
                            <div class="col-2 col-lg-3">
                                <p class="py-1 m-0">備註</p>
                            </div>
                            <div class="col-10 col-lg-9">
                                <p class="py-1 m-0">${orders[i].oComment}</p>
                            </div>
                            <hr>
                        </div>
                        <div class="row d-flex">`
                        if (orders[i].oRanking == 0 && orders[i].oOrderStatus === "已完成") {
			                content += `
				                <!-- Button trigger modal -->
				                <div class="INHbtn">
                                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#rateModal${i}">給予評價</button>
                                </div>
				                <!-- Modal -->
				                <div class="modal fade" id="rateModal${i}" tabindex="-1" aria-labelledby="rateModalLabel${i}" aria-hidden="true">
				                    <div class="modal-dialog">
				                        <div class="modal-content">
				                            <div class="modal-header">
				                                <h5 class="modal-title" id="rateModalLabel${i}">給予評價</h5>
				                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				                            </div>
				                        <div class="modal-body">
				                            <div class="form-check form-check-inline">
				                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="1">
				                                <label class="form-check-label" for="inlineRadio1">1</label>
				                            </div>
				                            <div class="form-check form-check-inline">
				                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="2">
				                                <label class="form-check-label" for="inlineRadio2">2</label>
				                            </div>
				                            <div class="form-check form-check-inline">
				                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="3">
				                                <label class="form-check-label" for="inlineRadio3">3</label>
				                            </div>
				                            <div class="form-check form-check-inline">
				                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="4">
				                                <label class="form-check-label" for="inlineRadio3">4</label>
				                            </div>
				                            <div class="form-check form-check-inline">
				                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="5">
				                                <label class="form-check-label" for="inlineRadio3">5</label>
				                            </div>
				                        </div>
				                            <div class="modal-footer">
				                                <button id=rateBtn${orders[i].oId} onclick="rateOrder(${orders[i].oId},${i})" class="btn btn-success refresh-butto">確定</button>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				            `
					}
					if (orders[i].oOrderStatus === "未完成") {
                		content+= `
		                <!-- Button trigger modal -->
		                <div class="INHbtn">
		                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">取消</button>
		                </div>		                		                
		                
		                <!-- Modal -->
		                <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel${i}" aria-hidden="true">
		                    <div class="modal-dialog">
		                        <div class="modal-content">
		                            <div class="modal-header">
		                                <h5 class="modal-title" id="exampleModalLabel${i}">取消訂單</h5>
		                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		                            </div>
		                        <div class="modal-body">確定要取消嗎?</div>
		                            <div class="modal-footer">
		                                <button id=cancelBtn${orders[i].oId} onclick="cancelOrder(${orders[i].oId})" class="btn btn-warning refresh-butto">確定</button>
		                            </div>
		                        </div>
		                    </div>
		                </div>`
                    }
                    if (orders[i].oOrderStatus === "進行中") {
                        content += `
		                <!-- 聊天室 Button   -->
                        <div class="chatBtn mt-1">
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#chatModal${i}" onclick="setRoom(${orders[i].oId})">聊天室</button>
		                </div> 
                        <!-- 動態新增聊天室頁面   -->
                        <div class="modal fade" id="chatModal${i}" tabindex="-1" aria-labelledby="chatModalLabel${i}" aria-hidden="true">
		                    <div class="modal-dialog">
		                        <div class="modal-content">
		                            <div class="modal-header">
		                                <h5 class="modal-title" id="chatModalLabel${i}"></h5>
                                        <div class="modal-body">
                                        <div class="chatBoard" id="msg_board${orders[i].oId}"></div><br>
                                        <input  id="input_msg${orders[i].oId}" size="43" maxlength="40">                                      
                                        <input type="button" value="傳送" onclick="sendData(${orders[i].oId})" />
                                        <button class="btn btn-secondary mt-2" onclick="closeWs()" >退出聊天室</button>
                                        </div>
		                            </div>		                       
		                    </div>
		                </div>
	                	`
	            	}
                content+= `
                		</div>
                    </form>
                </div>
            </div>
			`
      $('#INHArea').append(content)
      orderRating(orders[i].oRanking, i)
    }
	})
})

function orderRating(rating, i){
	fullStar = `<div class="starImg"><img src="data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMkQyM0Q7IiBkPSJNNTEwLjg1OSwxOTYuNTU4Yy0yLjczNy04LjQyNi0xMC4wMjEtMTQuNTY4LTE4Ljc5MS0xNS44NDJsLTE0OC42OTUtMjEuNjA0bC02Ni41LTEzNC43NTMNCgljLTMuOTItNy45NDUtMTIuMDEyLTEyLjk3Ni0yMC44NzMtMTIuOTc2Yy04Ljg2MSwwLTE2Ljk1Myw1LjAzMS0yMC44NzMsMTIuOTc2TDE2OC42MzEsMTU5LjExbC0xNDguNywyMS42MDQNCgljLTguNzY4LDEuMjc0LTE2LjA1NSw3LjQxNi0xOC43OTEsMTUuODQyYy0yLjczOSw4LjQyNi0wLjQ1NSwxNy42NzgsNS44OTEsMjMuODYyTDExNC42MywzMjUuMjkxTDg5LjIyLDQ3My40MDUNCgljLTEuNDk3LDguNzMyLDIuMDkyLDE3LjU1OCw5LjI2LDIyLjc2NmM3LjE2OSw1LjIwNiwxNi42NjksNS44OTUsMjQuNTE0LDEuNzcyTDI1Niw0MjguMDIxbDEzMy4wMDcsNjkuOTIyDQoJYzMuNDA1LDEuNzkxLDcuMTI0LDIuNjc0LDEwLjgyOCwyLjY3NGMwLjAzMywwLDAuMDY3LDAsMC4wOTksMGMxMi44MjctMC4wMzYsMjMuMjEtMTAuNDQ0LDIzLjIxLTIzLjI3Nw0KCWMwLTEuNzg4LTAuMjAyLTMuNTI5LTAuNTgyLTUuMjAybC0yNS4xOTMtMTQ2Ljg0Nkw1MDQuOTcsMjIwLjQyQzUxMS4zMTQsMjE0LjIzNiw1MTMuNTk4LDIwNC45ODYsNTEwLjg1OSwxOTYuNTU4eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VFQkYwMDsiIGQ9Ik0yMzUuMTI3LDI0LjM2MWwtNjYuNDk2LDEzNC43NTFsLTE0OC43LDIxLjYwNGMtOC43NjgsMS4yNzQtMTYuMDU1LDcuNDE2LTE4Ljc5MSwxNS44NDINCgljLTIuNzM5LDguNDI2LTAuNDU1LDE3LjY3OCw1Ljg5MSwyMy44NjJMMTE0LjYzLDMyNS4yOTNMODkuMjIsNDczLjQwNWMtMS40OTcsOC43MzMsMi4wOTIsMTcuNTU4LDkuMjYsMjIuNzY2DQoJYzcuMTY5LDUuMjA2LDE2LjY2OSw1Ljg5NSwyNC41MTQsMS43NzJMMjU2LDQyOC4wMjFWMTEuMzg1QzI0Ny4xMzksMTEuMzg1LDIzOS4wNDcsMTYuNDE0LDIzNS4xMjcsMjQuMzYxeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="></div>`
	halfStar = `<div class="starImg"><img src="data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojQzREOUZEOyIgZD0iTTUxMC44NjEsMTk2LjU1M2MtMi43MzctOC40MjYtMTAuMDIxLTE0LjU2OC0xOC43OTEtMTUuODQybC0xNDguNjk1LTIxLjYwNGwtNjYuNS0xMzQuNzUzDQoJYy0wLjA3My0wLjE0Ny0wLjE2MS0wLjI4Ni0wLjIzNi0wLjQzYy0wLjE2OS0wLjMyNi0wLjM0My0wLjY0Ny0wLjUyNi0wLjk2MmMtMC4xNTUtMC4yNjUtMC4zMTMtMC41MjYtMC40OC0wLjc4NQ0KCWMtMC4xNzgtMC4yODEtMC4zNjItMC41NTctMC41NTEtMC44MjljLTAuMTg5LTAuMjcyLTAuMzgzLTAuNTM4LTAuNTgzLTAuODAxYy0wLjE4OC0wLjI0NS0wLjM3OS0wLjQ4Ni0wLjU3Ni0wLjcyMw0KCWMtMC4yMTktMC4yNjItMC40MzktMC41MjEtMC42Ny0wLjc3NmMtMC4yMDMtMC4yMjctMC40MTMtMC40NDUtMC42MjQtMC42NjNjLTAuMjMzLTAuMjM5LTAuNDczLTAuNDc2LTAuNzE4LTAuNzA2DQoJYy0wLjIzMS0wLjIxNi0wLjQ2Ny0wLjQyNS0wLjcwNC0wLjYzMmMtMC4yNDEtMC4yMDgtMC40ODYtMC40MTMtMC43MzYtMC42MTFjLTAuMjYyLTAuMjA4LTAuNTMxLTAuNDEtMC44MDEtMC42MDUNCgljLTAuMjQyLTAuMTc1LTAuNDg5LTAuMzQ5LTAuNzM3LTAuNTE3Yy0wLjI5Mi0wLjE5Ni0wLjU5LTAuMzgyLTAuODg5LTAuNTYzYy0wLjI0Ny0wLjE0OS0wLjQ5NS0wLjI5NS0wLjc0OC0wLjQzNg0KCWMtMC4zMS0wLjE3Mi0wLjYyMi0wLjMzNS0wLjk0LTAuNDkzYy0wLjI2NS0wLjEzLTAuNTM0LTAuMjU5LTAuODA0LTAuMzgyYy0wLjMxLTAuMTQtMC42MjQtMC4yNzItMC45NC0wLjM5Nw0KCWMtMC4yOTktMC4xMTktMC42MDQtMC4yMzMtMC45MDktMC4zNGMtMC4yOTUtMC4xMDQtMC41OTQtMC4yMDItMC44OTQtMC4yOTVjLTAuMzQzLTAuMTA0LTAuNjg3LTAuMi0xLjAzNy0wLjI5DQoJYy0wLjE2My0wLjA0LTAuMzE4LTAuMDk2LTAuNDgzLTAuMTMzYy0wLjEyMS0wLjAyOC0wLjI0Mi0wLjA0Mi0wLjM2My0wLjA2OGMtMC4zNjYtMC4wNzktMC43MzYtMC4xNDctMS4xMDMtMC4yMDgNCgljLTAuMjgyLTAuMDQ3LTAuNTYzLTAuMDk1LTAuODQ5LTAuMTNjLTAuMzU4LTAuMDQ3LTAuNzEyLTAuMDc5LTEuMDY5LTAuMTA5Yy0wLjMwMy0wLjAyNS0wLjYwNy0wLjA1LTAuOTExLTAuMDY0DQoJYy0wLjMzMi0wLjAxNC0wLjY2My0wLjAxNi0wLjk5My0wLjAxNmMwLDAsMCwwLTAuMDAyLDBjLTAuMzMyLDAtMC42NjMsMC4wMDItMC45OTUsMC4wMTZjLTAuMzA0LDAuMDE0LTAuNjA3LDAuMDM3LTAuOTA4LDAuMDY0DQoJYy0wLjM1OCwwLjAyOS0wLjcxOCwwLjA2Mi0xLjA3NywwLjEwOWMtMC4yNzksMC4wMzYtMC41NTQsMC4wODItMC44MzIsMC4xMjdjLTAuMzc2LDAuMDY0LTAuNzUzLDAuMTMyLTEuMTMsMC4yMTQNCgljLTAuMTE2LDAuMDI1LTAuMjMxLDAuMDM3LTAuMzQ4LDAuMDY1Yy0wLjE1NSwwLjAzNi0wLjMwMywwLjA4OC0wLjQ1OCwwLjEyOWMtMC4zNjYsMC4wOTMtMC43MjgsMC4xOTQtMS4wODUsMC4zMDMNCgljLTAuMjg0LDAuMDg3LTAuNTYzLDAuMTgtMC44NDMsMC4yNzZjLTAuMzI2LDAuMTEzLTAuNjQ5LDAuMjM0LTAuOTY3LDAuMzYyYy0wLjI5NSwwLjExOS0wLjU5LDAuMjQyLTAuODgxLDAuMzc0DQoJYy0wLjI5MiwwLjEzLTAuNTc5LDAuMjY4LTAuODY0LDAuNDFjLTAuMjk2LDAuMTQ5LTAuNTkxLDAuMzAxLTAuODgsMC40NjFjLTAuMjc1LDAuMTUyLTAuNTQ1LDAuMzEtMC44MSwwLjQ3Mg0KCWMtMC4yNzksMC4xNjktMC41NTcsMC4zNDQtMC44MywwLjUyNmMtMC4yNjgsMC4xNzgtMC41MzEsMC4zNjUtMC43OTEsMC41NTRjLTAuMjUzLDAuMTg1LTAuNTAzLDAuMzcyLTAuNzQ4LDAuNTY2DQoJYy0wLjI2NywwLjIxMS0wLjUyNiwwLjQyOC0wLjc4MiwwLjY1Yy0wLjIyMywwLjE5NC0wLjQ0NSwwLjM5MS0wLjY2NCwwLjU5NGMtMC4yNTYsMC4yNDEtMC41MDYsMC40ODctMC43NTEsMC43MzkNCgljLTAuMjAzLDAuMjA2LTAuNDAyLDAuNDE3LTAuNTk3LDAuNjMzYy0wLjIzNiwwLjI2MS0wLjQ2NCwwLjUyOC0wLjY4NywwLjc5OGMtMC4xOTEsMC4yMzEtMC4zNzksMC40NjYtMC41NiwwLjcwNQ0KCWMtMC4yMDMsMC4yNjctMC40LDAuNTM4LTAuNTk0LDAuODEzYy0wLjE4NiwwLjI3LTAuMzY5LDAuNTQ1LTAuNTQ2LDAuODI0Yy0wLjE2NCwwLjI1OS0wLjMyNCwwLjUyLTAuNDgsMC43ODUNCgljLTAuMTg1LDAuMzE4LTAuMzYsMC42NDEtMC41MzEsMC45N2MtMC4wNzYsMC4xNDMtMC4xNiwwLjI3OS0wLjIzMywwLjQyNGwtNjYuNDk2LDEzNC43NTFsLTE0OC43LDIxLjYwNA0KCWMtOC43NjksMS4yNzQtMTYuMDU1LDcuNDE2LTE4Ljc5MSwxNS44NDJjLTIuNzM5LDguNDI2LTAuNDU1LDE3LjY3OCw1Ljg5MSwyMy44NjJsMTA3LjYwMSwxMDQuODczTDg5LjIyMSw0NzMuMzk1DQoJYy0xLjQ5Nyw4LjczMiwyLjA5MiwxNy41NTksOS4yNiwyMi43NjZjNC4wNTUsMi45NDcsOC44NTgsNC40NDYsMTMuNjg1LDQuNDQ2YzMuNzA0LDAsNy40MjItMC44ODMsMTAuODI4LTIuNjc0bDEzMy4wMDctNjkuOTIyDQoJbDEzMy4wMDUsNjkuOTIyYzMuNDA1LDEuNzkxLDcuMTI0LDIuNjc0LDEwLjgyOCwyLjY3NGM0LjgyNiwwLDkuNjMtMS40OTksMTMuNjg1LTQuNDQ2YzcuMTY4LTUuMjA4LDEwLjc1Ny0xNC4wMzMsOS4yNi0yMi43NjYNCglsLTI1LjQwOS0xNDguMTEyTDUwNC45NzIsMjIwLjQxQzUxMS4zMTUsMjE0LjIzMSw1MTMuNiwyMDQuOTgxLDUxMC44NjEsMTk2LjU1M3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFRUJGMDA7IiBkPSJNMjU2LDExLjM5NWMtMC4zMzIsMC0wLjY2MywwLjAwMi0wLjk5NSwwLjAxNmMtMC4zMDQsMC4wMTQtMC42MDcsMC4wMzctMC45MDgsMC4wNjINCgljLTAuMzU4LDAuMDI5LTAuNzE4LDAuMDYyLTEuMDc3LDAuMTA5Yy0wLjI3OSwwLjAzNi0wLjU1NCwwLjA4Mi0wLjgzMiwwLjEyN2MtMC4zNzYsMC4wNjQtMC43NTMsMC4xMzItMS4xMywwLjIxNA0KCWMtMC4xMTYsMC4wMjUtMC4yMzEsMC4wMzctMC4zNDgsMC4wNjVjLTAuMTU1LDAuMDM2LTAuMzAzLDAuMDg4LTAuNDU4LDAuMTI3Yy0wLjM2NiwwLjA5My0wLjcyOCwwLjE5NC0xLjA4NSwwLjMwMw0KCWMtMC4yODQsMC4wODctMC41NjMsMC4xOC0wLjg0MywwLjI3NmMtMC4zMjYsMC4xMTMtMC42NDksMC4yMzQtMC45NjcsMC4zNjJjLTAuMjk1LDAuMTE5LTAuNTksMC4yNDItMC44ODEsMC4zNzQNCgljLTAuMjkyLDAuMTMyLTAuNTc5LDAuMjY4LTAuODY0LDAuNDFjLTAuMjk2LDAuMTQ5LTAuNTkxLDAuMzAxLTAuODgsMC40NjFjLTAuMjc1LDAuMTUyLTAuNTQ1LDAuMzEtMC44MSwwLjQ3Mg0KCWMtMC4yNzksMC4xNjktMC41NTcsMC4zNDQtMC44MywwLjUyNmMtMC4yNjgsMC4xNzgtMC41MzEsMC4zNjUtMC43OTEsMC41NTRjLTAuMjUzLDAuMTg1LTAuNTAzLDAuMzcyLTAuNzQ4LDAuNTY2DQoJYy0wLjI2NywwLjIxMS0wLjUyNiwwLjQyOC0wLjc4MiwwLjY1Yy0wLjIyMywwLjE5NC0wLjQ0NSwwLjM5My0wLjY2NCwwLjU5NGMtMC4yNTYsMC4yNDEtMC41MDYsMC40ODctMC43NTEsMC43MzkNCgljLTAuMjAzLDAuMjA2LTAuNDAyLDAuNDE3LTAuNTk3LDAuNjMzYy0wLjIzNiwwLjI2MS0wLjQ2NCwwLjUyOC0wLjY4NywwLjc5OGMtMC4xOTEsMC4yMzEtMC4zNzksMC40NjYtMC41NiwwLjcwNQ0KCWMtMC4yMDMsMC4yNjctMC40LDAuNTM4LTAuNTk0LDAuODEzYy0wLjE4NiwwLjI3LTAuMzY5LDAuNTQ1LTAuNTQ2LDAuODI0Yy0wLjE2NCwwLjI1OS0wLjMyNCwwLjUyLTAuNDgsMC43ODUNCgljLTAuMTg1LDAuMzE4LTAuMzYsMC42NDEtMC41MzEsMC45N2MtMC4wNzYsMC4xNDMtMC4xNjEsMC4yNzktMC4yMzMsMC40MjVsLTY2LjQ5NiwxMzQuNzUxbC0xNDguNywyMS42MDQNCgljLTguNzY5LDEuMjc0LTE2LjA1NSw3LjQxNi0xOC43OTEsMTUuODQyYy0yLjczOSw4LjQyNi0wLjQ1NSwxNy42NzgsNS44OTEsMjMuODYybDEwNy42MDEsMTA0Ljg3M0w4OS4yMjMsNDczLjM5OA0KCWMtMS40OTcsOC43MzIsMi4wOTIsMTcuNTU5LDkuMjYsMjIuNzY2YzQuMDU1LDIuOTQ3LDguODU4LDQuNDQ2LDEzLjY4NSw0LjQ0NmMzLjcwNCwwLDcuNDIyLTAuODgzLDEwLjgyOC0yLjY3NGwxMzMuMDA3LTY5LjkyMg0KCVYxMS4zOTVDMjU2LjAwMSwxMS4zOTUsMjU2LjAwMSwxMS4zOTUsMjU2LDExLjM5NXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"></div>`
	nullStar = `<div class="starImg"><img src="data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNDNEQ5RkQ7IiBkPSJNNTEwLjg1OSwxOTYuNTU4Yy0yLjczNy04LjQyNi0xMC4wMjEtMTQuNTY4LTE4Ljc5MS0xNS44NDJsLTE0OC42OTUtMjEuNjA0bC02Ni41LTEzNC43NTMNCgljLTMuOTItNy45NDUtMTIuMDEyLTEyLjk3Ni0yMC44NzMtMTIuOTc2Yy04Ljg2MSwwLTE2Ljk1Myw1LjAzMS0yMC44NzMsMTIuOTc2TDE2OC42MzEsMTU5LjExbC0xNDguNywyMS42MDQNCgljLTguNzY5LDEuMjc0LTE2LjA1NSw3LjQxNi0xOC43OTEsMTUuODQyYy0yLjczOSw4LjQyOC0wLjQ1NSwxNy42NzgsNS44OTEsMjMuODYybDEwNy42MDEsMTA0Ljg3M0w4OS4yMiw0NzMuNDA1DQoJYy0xLjQ5Nyw4LjczMiwyLjA5MiwxNy41NTgsOS4yNiwyMi43NjZjNC4wNTUsMi45NDcsOC44NTgsNC40NDYsMTMuNjg1LDQuNDQ2YzMuNzA0LDAsNy40MjItMC44ODMsMTAuODI4LTIuNjc0TDI1Niw0MjguMDIxDQoJbDEzMy4wMDUsNjkuOTIyYzMuNDI2LDEuODAyLDcuMTU4LDIuNjcyLDEwLjg5NSwyLjY3NGMxMi44NDEtMC4wMTksMjMuMjQ0LTEwLjQzMywyMy4yNDQtMjMuMjc3YzAtMS43ODgtMC4yMDMtMy41MjktMC41ODUtNS4yMDMNCglsLTI1LjE5LTE0Ni44NDRMNTA0Ljk3LDIyMC40MThDNTExLjMxNCwyMTQuMjM2LDUxMy41OTgsMjA0Ljk4Niw1MTAuODU5LDE5Ni41NTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQTdDN0ZDOyIgZD0iTTIzNS4xMjcsMjQuMzYxbC02Ni40OTYsMTM0Ljc1MWwtMTQ4LjcsMjEuNjA0Yy04Ljc2OSwxLjI3NC0xNi4wNTUsNy40MTYtMTguNzkxLDE1Ljg0Mg0KCWMtMi43MzksOC40MjgtMC40NTUsMTcuNjc4LDUuODkxLDIzLjg2MmwxMDcuNjAxLDEwNC44NzNMODkuMjIsNDczLjQwNWMtMS40OTcsOC43MzIsMi4wOTIsMTcuNTU4LDkuMjYsMjIuNzY2DQoJYzQuMDU1LDIuOTQ3LDguODU4LDQuNDQ2LDEzLjY4NSw0LjQ0NmMzLjcwNCwwLDcuNDIyLTAuODgzLDEwLjgyOC0yLjY3NEwyNTYsNDI4LjAyMVYxMS4zODUNCglDMjQ3LjEzOSwxMS4zODUsMjM5LjA0NywxNi40MTQsMjM1LjEyNywyNC4zNjF6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="></div>`
	for (let k = 1; k <= 5; k++) {
		let stars = rating - k;
		if (stars >= 0) {
			$("#eachOrderRating" + i).append(fullStar)
		} else if (stars < 0 && stars > -1) {
			$("#eachOrderRating" + i).append(halfStar)
		} else {
			$("#eachOrderRating" + i).append(nullStar)
		}
	}
}
function cancelOrder(oId) {
    // console.log(oId);
    let body = oId
    fetch('cancelOrder',
        { method: 'PUT', headers: { 'content-type': 'application/json' }, body }).then((response) => response.text()).then(res => {
            window.location.reload();
        }).catch((error) => {
            console.log(`Error`);
        })
}
function rateOrder(oId,i) {
    let oRanking = document.querySelector(`#inlineRadio${i}:checked`).value
    console.log(oRanking);
    console.log(oId);
    let body = {
        oId: oId,
        oRanking: oRanking
    }
    fetch('rateOrder',
        { method: 'PUT', headers: { 'content-type': 'application/json' }, body:JSON.stringify(body) }).then((response) => response.text()).then(res => {
            window.location.reload();
        }).catch((error) => {
            console.log(`Error`);
        })
}


//關閉加清空
function closeWs() {
    webSocket.close();
}

//發送聊天內容
function sendData(oId) {
    console.log(oId)
    let input_msg = document.getElementById(`input_msg${oId}`).value.trim();
    if (webSocket != null) {
        if (input_msg == "") {
            return;
        }
        webSocket.send(input_msg);
        document.getElementById(`input_msg${oId}`).value = "";
    } else {
        alert("您已斷線，請重新進入聊天室...");
    }

    let xhr1 = new XMLHttpRequest();
    xhr1.open("POST", "chats", true);
    let jsonChat = {
        "roomid": oId,
        "message": input_msg
    }
    xhr1.setRequestHeader("Content-Type", "application/json");
    console.log(jsonChat)
    xhr1.send(JSON.stringify(jsonChat));
}

//開始連線+讀取紀錄
function setRoom(oId) {
    roomName = oId;
    let msg_board = document.getElementById(`msg_board${oId}`);

    axios.get('chats',{params:{roomId:oId}})
            .then(res => {
                console.log(res)
                let message="";
                for(let i=0; i<res.data.length; i++){
                    message += `${res.data[i].message}<br>`
                    
                   }
                   msg_board.innerHTML = message;		        		
               })    
               .catch() 	

    //建立WebSocket連線
    if (webSocket == null) {

        let url = "ws://localhost:8080/java018_03/chatCenter/" + roomName;
        webSocket = new WebSocket(url);
    }

    //提示可聊天
    webSocket.onopen = function () {
        alert("已進入聊天室，聊起來");
    };

    //顯示聊天內容
    webSocket.onmessage = function (evt) {
        let msg_board = document.getElementById(`msg_board${oId}`);
        let received_msg = evt.data;
        let old_msg = msg_board.innerHTML;
        msg_board.innerHTML = old_msg + received_msg + "<br>";
        msg_board.scrollTop = msg_board.scrollTop + 40;

    };
    //關閉加清空
    webSocket.onclose = function () {
        alert("已下線");
        webSocket = null;
        document.getElementById(`msg_board${oId}`).innerHTML = "";
    };

}