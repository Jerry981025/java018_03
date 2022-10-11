var geocoder = new google.maps.Geocoder();
// 啟動執行
$(document).ready(function () {
	lefterList(null)
	// -----------------------------------
	if (document.querySelector('input[name="orderType"]')) {
		document.querySelectorAll('input[name="orderType"]').forEach((elem) => {
			elem.addEventListener("change", function (event) {

				if (event.target.value == '所有種類') {
					var choice = null;
				} else {
					var choice = event.target.value;
				}
				findAllOrders(choice)
				lefterList(choice)
			});
		});
	}
	const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
	// -----------------------------------

})
// 拉出全部orders-未完成 資料
function findAllOrders(choice) {
	fetch('status?status=未完成')
		.then(res => res.json())
		.then(res => {
			let map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
			for (let i = 0; i < res.length; i++) {
				findLatLng(res[i].oShippingAddress, res[i].oOrderType, map, choice, res[i].oId);

			}
		})
}
// 轉經緯度之後放MARKER到地圖上
function findLatLng(address, orderType, map, choice, oId) {
	if (choice == orderType || choice == null) {
		geocoder.geocode({ 'address': address }, function (results, status) {
			// 經度
			var latitude = results[0].geometry.location.lat();
			// 緯度
			var longitude = results[0].geometry.location.lng();
			// 變數地址後的經緯度
			var latlng = new google.maps.LatLng(latitude, longitude);

			var marker = new google.maps.Marker({
				position: latlng,
				address: `${address}`,
				id: `${oId}`,
				map: map,
				content: `<h2>${address}</h2>`,
				draggable: false
			});
			if (marker.content) {
				const detailWindow = new google.maps.InfoWindow({
					content: marker.content
				});
				// 加入map點擊事件
				google.maps.event.addListener(map, 'click', function () {
					detailWindow.close();
					$('#result').empty();
					lefterList(choice)
				});
				// 加入marker點擊事件
				marker.addListener("click", () => {
					detailWindow.open(map, marker);
					markerLefterList(oId)
				})
			}
		});
	}
}
// 左側資訊欄位
function lefterList(choice) {
	$(document).ready(function () {

		fetch('status?status=未完成')
			.then(res => res.json())
			.then(res => {
				allOrders = res
				let orderList = ``
				$('#result').empty();
				for (let i = 0; i < res.length; i++) {
					// 所有資料庫資訊 
					if (choice == res[i].oOrderType || choice == null) {
						console.log(res[i].memberBean);


						//------------------------------------------
						var geocoder = new google.maps.Geocoder();
						const id = res[i].oId
						// console.log(address);
						orderList += `
						  <table class="table">
							  <tbody>
								  <tr>
									  <td>訂單編號: ${res[i].oId}</td>
								  </tr>
								  <tr>
									  <td>小費金額: ${res[i].oFee}</td>
								  </tr>
								  <tr>
									  <td>訂單類型: ${res[i].oOrderType}</td>
								  </tr>
								  <tr>
									  <td>店家地址: ${res[i].oShippingAddress}</td>
								  </tr>
								  
								  <tr>
									  <td>
										評分: ${res[i].oDeadLine}
										
										<button type="button" class="btn btn-primary" style="float:right;" onclick="itemsDetail(${res[i].oId})" data-bs-toggle="modal" data-bs-target="#exampleModal${res[i].oId}">
											我要接單
										</button>
	
										<div class="modal fade" id="exampleModal${res[i].oId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										  <div class="modal-dialog">
											<div class="modal-content">
											  <div class="modal-header">
												<h5 class="modal-title" id="exampleModalLabel" style="font-weight:600; font-size: 22px">訂單編號${res[i].oId} : </h5>
												<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											  </div>
											  <div class="modal-body">
												<table width = "100%" class = "detailTab">
													<thead>
														<tr>
															<th colspan="2" width="100%">The table header</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td width="20%">顧客姓名</td>
															<td width="80%">${res[i].memberBean.mLastName + res[i].memberBean.mFirstName}</td>
														</tr>
														<tr>
															<td width="20%">電話</td>
															<td width="80%">${res[i].memberBean.mCellphone}</td>
														</tr>
														<tr>
															<td width="20%">訂單細項</td>
															<td width="80%">${res[i].items[0].oBrand} (${res[i].items[0].oDetail}) * ${res[i].items[0].oQuantity}</td>
														</tr>`

						for (let j = 1; j < res[i].items.length; j++) {
							orderList += `
																		<tr>
																			<td width="20%"></td>
																			<td width="80%">${res[i].items[j].oBrand} (${res[i].items[j].oDetail}) * ${res[i].items[j].oQuantity}</td>
																		</tr>`
						}
						orderList += `
														<tr>
															<td width="20%">店家地址</td>
															<td width="80%">${res[i].oShippingAddress}</td>
														</tr>
														<tr>
															<td width="20%">目的地</td>
															<td width="80%">${res[i].oDestinationAddress}</td>
														</tr>
														<tr>
															<td width="20%">下單時間</td>
															<td width="80%">${res[i].oTime}</td>
														</tr>
														<tr>
															<td width="20%">截止時間</td>
															<td width="80%">${res[i].oDeadLine}</td>
														</tr>
														<tr>
															<td width="20%">金額+小費</td>
															<td width="80%">${res[i].oPrice} + ${res[i].oFee} = ${res[i].oPrice + res[i].oFee}</td>
														</tr>
														
														
													</tbody>
												</table>
											  </div>
											  <div class="modal-footer">
												<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
												<button type="button" class="btn btn-primary" onclick="returnOrderItems(${id})"><a href="ICHrecords" style="color: aliceblue; text-decoration:none;">確認接單</a></button>
											  </div>
											</div>
										  </div>
										</div>
									  </td>
									  
								  </tr>
								  <hr>
							  </tbody>
						  </table>
						  `
					}
				}

				$('#result').append(orderList)
			})
	})
}
// radio按鍵的方法
function queryLefterList() {

	$(document).ready(function abc() {

		fetch('status?status=未完成')
			.then(res => res.json())
			.then(res => {
				allOrders = res
				let orderList = ``

				for (let i = 0; i < res.length; i++) {
					// 所有資料庫資訊 
					//------------------------------------------
					var geocoder = new google.maps.Geocoder();
					const id = res[i].oId
					const address = res[i].oDestinationAddress;
					const comment = res[i].oComment;
					const deadLine = res[i].oDeadLine;
					const fee = res[i].oFee;
					const price = res[i].oPrice;
					const time = res[i].oTime;
					const ranking = res[i].oRanking;
					const orderType = res[i].oOrderType;
					console.log(address);
					orderList += `
						  <table class="table">
							  <tbody>
								  <tr>
									  <td>訂單編號: ${res[i].oId}</td>
								  </tr>
								  <tr>
									  <td>小費金額: ${res[i].oFee}</td>
								  </tr>
								  <tr>
									  <td>訂單類型: ${res[i].oOrderType}</td>
								  </tr>
								  <tr>
									  <td>店家地址: ${res[i].oShippingAddress}</td>
								  </tr>
								  
								  <tr>
									  <td>
										評分: ${res[i].oDeadLine}
										
										<button type="button" class="btn btn-primary" style="float:right;" onclick="itemsDetail(${res[i].oId})" data-bs-toggle="modal" data-bs-target="#exampleModal${res[i].oId}">
											我要接單
										</button>
	
										<div class="modal fade" id="exampleModal${res[i].oId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										  <div class="modal-dialog">
											<div class="modal-content">
											  <div class="modal-header">
												<h5 class="modal-title" id="exampleModalLabel" style="font-weight:600; font-size: 22px">訂單編號${res[i].oId} : </h5>
												<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											  </div>
											  <div class="modal-body">
												<table width = "100%" class = "detailTab">
													<thead>
														<tr>
															<th colspan="2" width="100%">The table header</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td width="20%">顧客姓名</td>
															<td width="80%">${res[i].memberBean.mLastName + res[i].memberBean.mFirstName}</td>
														</tr>
														<tr>
															<td width="20%">電話</td>
															<td width="80%">${res[i].memberBean.mCellphone}</td>
														</tr>
														<tr>
															<td width="20%">訂單細項</td>
															<td width="80%">${res[i].items[0].oBrand} (${res[i].items[0].oDetail}) * ${res[i].items[0].oQuantity}</td>
														</tr>`

					for (let j = 1; j < res[i].items.length; j++) {
						orderList += `
																		<tr>
																			<td width="20%"></td>
																			<td width="80%">${res[i].items[j].oBrand} (${res[i].items[j].oDetail}) * ${res[i].items[j].oQuantity}</td>
																		</tr>`
					}
					orderList += `
														<tr>
															<td width="20%">店家地址</td>
															<td width="80%">${res[i].oShippingAddress}</td>
														</tr>
														<tr>
															<td width="20%">目的地</td>
															<td width="80%">${res[i].oDestinationAddress}</td>
														</tr>
														<tr>
															<td width="20%">下單時間</td>
															<td width="80%">${res[i].oTime}</td>
														</tr>
														<tr>
															<td width="20%">截止時間</td>
															<td width="80%">${res[i].oDeadLine}</td>
														</tr>
														<tr>
															<td width="20%">金額+小費</td>
															<td width="80%">${res[i].oPrice} + ${res[i].oFee} = ${res[i].oPrice + res[i].oFee}</td>
														</tr>
														
														
													</tbody>
												</table>
											  </div>
											  <div class="modal-footer">
												<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
												<button type="button" class="btn btn-primary" onclick="returnOrderItems(${id})"><a href="ICHrecords" style="color: aliceblue; text-decoration:none;">確認接單</a></button>
											  </div>
											</div>
										  </div>
										</div>
									  </td>
									  
								  </tr>
								  <hr>
							  </tbody>
						  </table>
						  `
				}
				$('#result').append(orderList)
			})
	})


}
// 按marker查詢的方法
function markerLefterList(oId) {

	$(document).ready(function () {

		fetch('status?status=未完成')
			.then(res => res.json())
			.then(res => {
				allOrders = res
				let orderList = ``
				$('#result').empty();
				for (let i = 0; i < res.length; i++) {
					// 所有資料庫資訊 
					if (oId == res[i].oId) {


						//------------------------------------------
						var geocoder = new google.maps.Geocoder();
						const id = res[i].oId
						const address = res[i].oDestinationAddress;
						// console.log(address);
						orderList += `
							  <table class="table">
								  <tbody>
									  <tr>
										  <td>訂單編號: ${res[i].oId}</td>
									  </tr>
									  <tr>
										  <td>小費金額: ${res[i].oFee}</td>
									  </tr>
									  <tr>
										  <td>訂單類型: ${res[i].oOrderType}</td>
									  </tr>
									  <tr>
										  <td>店家地址: ${res[i].oShippingAddress}</td>
									  </tr>
									  
									  <tr>
										  <td>
											評分: ${res[i].oDeadLine}
											
											<button type="button" class="btn btn-primary" style="float:right;" onclick="itemsDetail(${res[i].oId})" data-bs-toggle="modal" data-bs-target="#exampleModal${res[i].oId}">
												我要接單
											</button>
		
											<div class="modal fade" id="exampleModal${res[i].oId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
											  <div class="modal-dialog">
												<div class="modal-content">
												  <div class="modal-header">
													<h5 class="modal-title" id="exampleModalLabel" style="font-weight:600; font-size: 22px">訂單編號${res[i].oId} : </h5>
													<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
												  </div>
												  <div class="modal-body">
													<table width = "100%" class = "detailTab">
														<thead>
															<tr>
																<th colspan="2" width="100%">The table header</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td width="20%">顧客姓名</td>
																<td width="80%">${res[i].memberBean.mLastName + res[i].memberBean.mFirstName}</td>
															</tr>
															<tr>
																<td width="20%">電話</td>
																<td width="80%">${res[i].memberBean.mCellphone}</td>
															</tr>
															<tr>
																<td width="20%">訂單細項</td>
																<td width="80%">${res[i].items[0].oBrand} (${res[i].items[0].oDetail}) * ${res[i].items[0].oQuantity}</td>
															</tr>`

						for (let j = 1; j < res[i].items.length; j++) {
							orderList += `
																			<tr>
																				<td width="20%"></td>
																				<td width="80%">${res[i].items[j].oBrand} (${res[i].items[j].oDetail}) * ${res[i].items[j].oQuantity}</td>
																			</tr>`
						}
						orderList += `
															<tr>
																<td width="20%">店家地址</td>
																<td width="80%">${res[i].oShippingAddress}</td>
															</tr>
															<tr>
																<td width="20%">目的地</td>
																<td width="80%">${res[i].oDestinationAddress}</td>
															</tr>
															<tr>
																<td width="20%">下單時間</td>
																<td width="80%">${res[i].oTime}</td>
															</tr>
															<tr>
																<td width="20%">截止時間</td>
																<td width="80%">${res[i].oDeadLine}</td>
															</tr>
															<tr>
																<td width="20%">金額+小費</td>
																<td width="80%">${res[i].oPrice} + ${res[i].oFee} = ${res[i].oPrice + res[i].oFee}</td>
															</tr>
															
															
														</tbody>
													</table>
												  </div>
												  <div class="modal-footer">
													<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
													<button type="button" class="btn btn-primary" onclick="returnOrderItems(${id})"><a href="ICHrecords" style="color: aliceblue; text-decoration:none;">確認接單</a></button>
												  </div>
												</div>
											  </div>
											</div>
										  </td>
										  
									  </tr>
									  <hr>
								  </tbody>
							  </table>
							  `
					}
				}

				$('#result').append(orderList)
			})
	})
}

function returnOrderItems(id) {
	// $('.mission').hide()
  	// $('.payment').show()
	console.log(id);
	let body = id;
	fetch('updateOrderStatus',
        { method: 'PUT', headers: { 'content-type': 'application/json' }, body }).then((response) => response.text()).then(res => {
            // window.location.reload();
        }).catch((error) => {
            console.log(`Error`);
        })
}

// 中心點
let myLatLng = { lat: 25.042563029213984, lng: 121.52015437660762 };
// 地圖顏色偏好等等
let mapOptions = {
	center: myLatLng,
	zoom: 12,
	mapTypeId: google.maps.MapTypeId.ROADMAP,

	styles: [
		{
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#f5f5f5"
				}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#616161"
				}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#f5f5f5"
				}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#bdbdbd"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#eeeeee"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#757575"
				}
			]
		},
		{
			"featureType": "poi.business",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#e5e5e5"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#9e9e9e"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#757575"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#dadada"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#616161"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#9e9e9e"
				}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#e5e5e5"
				}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#eeeeee"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#c9c9c9"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#9e9e9e"
				}
			]
		}
	]
};