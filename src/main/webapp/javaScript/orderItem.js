
let allOrders;

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

				geocoder.geocode({ 'address': address }, function (results, status) {
					// 經度
					var latitude = results[0].geometry.location.lat();
					// 緯度
					var longitude = results[0].geometry.location.lng();

					// 變數地址後的經緯度
					var latlng = new google.maps.LatLng(latitude, longitude);
					// 建立marker
					var marker = new google.maps.Marker({
						position: latlng,
						id: `${id}`,
						address: `${address}`,
						comment: `${comment}`,
						deadLine: `${deadLine}`,
						fee: `${fee}元`,
						price: `${price}`,
						time: `${time}`,
						ranking: `${ranking}`,
						map: map,
						content: `<h2>${address}</h2>`,
						orderType: `${orderType}`,
						draggable: false
					});
					// 建立marker視窗
					if (marker.content) {
						const detailWindow = new google.maps.InfoWindow({
							content: marker.id
						});
						google.maps.event.addListener(map, 'click', function () {
							detailWindow.close();
							$('#result').empty()
						});

						// 加入點擊事件
						marker.addListener("click", () => {
							detailWindow.open(map, marker);

						})
					}
				});
				//------------------------------------------
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
                                  <td>截止時間: ${res[i].oDeadLine}</td>
                              </tr>
                              <tr>
                                  <td>
                                    評分: ${res[i].oRanking}
                                    
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
											            <td width="80%">${res[i].memberBean.mPhone}</td>
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
									        <button type="button" class="btn btn-primary" onclick="returnOrderItems(${id})">確認接單</button>
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
// })


//function itemsDetail(items) {
//	console.log(items);
//}


let myLatLng = { lat: 25.042563029213984, lng: 121.52015437660762 };
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

//create map

let map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

$('input[name="orderType"]').change(function () {
	$('#result').empty()
	// console.log(allOrders)
	let orderList = ``

	for (let i = 0; i < allOrders.length; i++) {

		if (allOrders[i].oOrderType == $("input:checked").val()) {
			// console.log(allOrders[i].oOrderType);
			// 所有資料庫資訊 
			//------------------------------------------
			var geocoder = new google.maps.Geocoder();
			const id = allOrders[i].oId
			const address = allOrders[i].oDestinationAddress;
			const comment = allOrders[i].oComment;
			const deadLine = allOrders[i].oDeadLine;
			const fee = allOrders[i].oFee;
			const price = allOrders[i].oPrice;
			const time = allOrders[i].oTime;
			const ranking = allOrders[i].oRanking;
			const orderType = allOrders[i].oOrderType;
			// console.log(address);

			geocoder.geocode({ 'address': address }, function (results, status) {
				// 經度
				var latitude = results[0].geometry.location.lat();
				// 緯度
				var longitude = results[0].geometry.location.lng();

				// 變數地址後的經緯度
				var latlng = new google.maps.LatLng(latitude, longitude);
				// 建立marker
				var marker = new google.maps.Marker({
					position: latlng,
					id: `${id}`,
					address: `${address}`,
					comment: `${comment}`,
					deadLine: `${deadLine}`,
					fee: `${fee}元`,
					price: `${price}`,
					time: `${time}`,
					ranking: `${ranking}`,
					map: map,
					content: `<h2>${address}</h2>`,
					orderType: `${orderType}`,
					draggable: false
				});
				// 建立marker視窗
				if (marker.content) {
					const detailWindow = new google.maps.InfoWindow({
						content: marker.id
					});
					google.maps.event.addListener(map, 'click', function () {
						detailWindow.close();
						$('#result').empty()
					});

					// 加入點擊事件
					marker.addListener("click", () => {
						detailWindow.open(map, marker);

					})
				}
			});
			//------------------------------------------
			orderList += `
				  <table class="table">
					  <tbody>
						  <tr>
							  <td>訂單編號: ${allOrders[i].oId}</td>
						  </tr>
						  <tr>
							  <td>小費金額: ${allOrders[i].oFee}</td>
						  </tr>
						  <tr>
							  <td>訂單類型: ${allOrders[i].oOrderType}</td>
						  </tr>
						  <tr>
							  <td>店家地址: ${allOrders[i].oShippingAddress}</td>
						  </tr>
						  
						  <tr>
							  <td>截止時間: ${allOrders[i].oDeadLine}</td>
						  </tr>
						  <tr>
							  <td>
								評分: ${allOrders[i].oRanking}

								<button type="button" class="btn btn-primary"  onclick="itemsDetail(${allOrders[i].oId})" data-bs-toggle="modal" data-bs-target="#exampleModal${allOrders[i].oId}">
									我要接單
								</button>

								<div class="modal fade" id="exampleModal${allOrders[i].oId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								  <div class="modal-dialog">
									<div class="modal-content">
									  <div class="modal-header">
										<h5 class="modal-title" id="exampleModalLabel" style="font-weight:600; font-size: 22px">訂單編號${allOrders[i].oId} : </h5>
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
													<td width="80%">${allOrders[i].memberBean.mLastName + allOrders[i].memberBean.mFirstName}</td>
												</tr>
												<tr>
													<td width="20%">電話</td>
													<td width="80%">${allOrders[i].memberBean.mPhone}</td>
												</tr>
												<tr>
													<td width="20%">訂單細項</td>
													<td width="80%">${allOrders[i].items[0].oBrand} (${allOrders[i].items[0].oDetail}) * ${allOrders[i].items[0].oQuantity}</td>
												</tr>`

												for (let j = 1; j < allOrders[i].items.length; j++) {
													orderList += `
																<tr>
																	<td width="20%"></td>
																	<td width="80%">${allOrders[i].items[j].oBrand} (${allOrders[i].items[j].oDetail}) * ${allOrders[i].items[j].oQuantity}</td>
																</tr>`
												}
												orderList += `
												<tr>
													<td width="20%">店家地址</td>
													<td width="80%">${allOrders[i].oShippingAddress}</td>
												</tr>
												<tr>
													<td width="20%">目的地</td>
													<td width="80%">${allOrders[i].oDestinationAddress}</td>
												</tr>
												<tr>
													<td width="20%">下單時間</td>
													<td width="80%">${allOrders[i].oTime}</td>
												</tr>
												<tr>
													<td width="20%">截止時間</td>
													<td width="80%">${allOrders[i].oDeadLine}</td>
												</tr>
												<tr>
													<td width="20%">金額+小費</td>
													<td width="80%">${allOrders[i].oPrice} + ${allOrders[i].oFee} = ${allOrders[i].oPrice + allOrders[i].oFee}</td>
												</tr>
												
												
											</tbody>
										</table>
									  </div>
									  <div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
										<button type="button" class="btn btn-primary" onclick="returnOrderItems(${id})">確認接單</button>
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
		// 
		else if ($("input:checked").val() === "所有種類") {
			//------------------------------------------
			var geocoder = new google.maps.Geocoder();
			const id = allOrders[i].oId
			const address = allOrders[i].oDestinationAddress;
			const comment = allOrders[i].oComment;
			const deadLine = allOrders[i].oDeadLine;
			const fee = allOrders[i].oFee;
			const price = allOrders[i].oPrice;
			const time = allOrders[i].oTime;
			const ranking = allOrders[i].oRanking;
			const orderType = allOrders[i].oOrderType;
			// console.log(address);

			geocoder.geocode({ 'address': address }, function (results, status) {
				// 經度
				var latitude = results[0].geometry.location.lat();
				// 緯度
				var longitude = results[0].geometry.location.lng();

				// 變數地址後的經緯度
				var latlng = new google.maps.LatLng(latitude, longitude);
				// 建立marker
				var marker = new google.maps.Marker({
					position: latlng,
					id: `${id}`,
					address: `${address}`,
					comment: `${comment}`,
					deadLine: `${deadLine}`,
					fee: `${fee}元`,
					price: `${price}`,
					time: `${time}`,
					ranking: `${ranking}`,
					map: map,
					content: `<h2>${address}</h2>`,
					orderType: `${orderType}`,
					draggable: false
				});
				// 建立marker視窗
				if (marker.content) {
					const detailWindow = new google.maps.InfoWindow({
						content: marker.id
					});
					google.maps.event.addListener(map, 'click', function () {
						detailWindow.close();
						$('#result').empty()
					});

					// 加入點擊事件
					marker.addListener("click", () => {
						detailWindow.open(map, marker);

					})
				}
			});
			//------------------------------------------

			orderList += `
					 <table class="table">
					  <tbody>
					   <tr>
						<td>訂單編號: ${allOrders[i].oId}</td>
					   </tr>
					   <tr>
						<td>小費金額: ${allOrders[i].oFee}</td>
					   </tr>
					   <tr>
						<td>訂單類型: ${allOrders[i].oOrderType}</td>
					   </tr>
					   <tr>
						<td>店家地址: ${allOrders[i].oShippingAddress}</td>
					   </tr>
					   
					   <tr>
						<td>截止時間: ${allOrders[i].oDeadLine}</td>
					   </tr>
					   <tr>
						<td>
					   評分: ${allOrders[i].oRanking}
			   
					   <button type="button" class="btn btn-primary" style="float:right;" onclick="itemsDetail(${allOrders[i].oId})" data-bs-toggle="modal" data-bs-target="#exampleModal${allOrders[i].oId}">
						我要接單
					   </button>
			   
					   <div class="modal fade" id="exampleModal${allOrders[i].oId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						 <div class="modal-dialog">
						<div class="modal-content">
						  <div class="modal-header">
						 <h5 class="modal-title" id="exampleModalLabel" style="font-weight:600; font-size: 22px">訂單編號${allOrders[i].oId} : </h5>
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
							<td width="80%">${allOrders[i].memberBean.mLastName + allOrders[i].memberBean.mFirstName}</td>
						   </tr>
						   <tr>
							<td width="20%">電話</td>
							<td width="80%">${allOrders[i].memberBean.mPhone}</td>
						   </tr>
						   <tr>
							<td width="20%">訂單細項</td>
							<td width="80%">${allOrders[i].items[0].oBrand} (${allOrders[i].items[0].oDetail}) * ${allOrders[i].items[0].oQuantity}</td>
						   </tr>`

			for (let j = 1; j < allOrders[i].items.length; j++) {
				orderList += `
							   <tr>
								<td width="20%"></td>
								<td width="80%">${allOrders[i].items[j].oBrand} (${allOrders[i].items[j].oDetail}) * ${allOrders[i].items[j].oQuantity}</td>
							   </tr>`
			}
			orderList += `
						   <tr>
							<td width="20%">店家地址</td>
							<td width="80%">${allOrders[i].oShippingAddress}</td>
						   </tr>
						   <tr>
							<td width="20%">目的地</td>
							<td width="80%">${allOrders[i].oDestinationAddress}</td>
						   </tr>
						   <tr>
							<td width="20%">下單時間</td>
							<td width="80%">${allOrders[i].oTime}</td>
						   </tr>
						   <tr>
							<td width="20%">截止時間</td>
							<td width="80%">${allOrders[i].oDeadLine}</td>
						   </tr>
						   <tr>
							<td width="20%">金額+小費</td>
							<td width="80%">${allOrders[i].oPrice} + ${allOrders[i].oFee} = ${allOrders[i].oPrice + allOrders[i].oFee}</td>
						   </tr>
						   
						   
						  </tbody>
						 </table>
						  </div>
						  <div class="modal-footer">
						 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
						 <button type="button" class="btn btn-primary" onclick="returnOrderItems(${id})">確認接單</button>
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

		// 
	}
	map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
	$('#result').append(orderList)
})

function returnOrderItems(id) {
	console.log(id);
	let body = id;
	fetch('updateOrderStatus',
        { method: 'PUT', headers: { 'content-type': 'application/json' }, body }).then((response) => response.text()).then(res => {
            // window.location.reload();
        }).catch((error) => {
            console.log(`Error`);
        })
}

// 所有訂單

// fetch('status?status=未完成')
//     .then((res) => {
//         console.log(res); 
//     })
//     .catch((error) => {
//         console.log(`Error: ${error}`);
//     })