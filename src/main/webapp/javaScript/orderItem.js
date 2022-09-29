$(document).ready(function() {
	$('#loadButton').click(function() {


		fetch('http://localhost:8080/java018_03/order/searchAll')
			.then(res => res.json())
			.then(res => {
				console.log(res);

				let orderList = ``
				for (let i = 0; i < res.length; i++) {
					orderList += `
                      <table class="table">
                          <tbody>
                              <tr>
                                  <td>訂單編號:  ${res[i].oId}</td>
                              </tr>
                              <tr>
                                  <td>總金額:  ${res[i].oPrice + res[i].oFee}</td>
                              </tr>
                              <tr>
                                  <td>訂單類型: ${res[i].oOrderType}</td>
                              </tr>
                              <tr>
                                  <td>店家地址: ${res[i].oShippingAddress}</td>
                              </tr>
                              <tr>
                                  <td>目的地: ${res[i].oDestinationAddress}</td>
                              </tr>
                              <tr>
                                  <td>截止時間: ${res[i].oDeadLine}</td>
                              </tr>
                              <tr>
                                  <td>
                                    評分: ${res[i].oRanking}
                                    
                                    <button type="button" class="btn btn-primary"  onclick="itemsDetail(${res[i].oId})" data-bs-toggle="modal" data-bs-target="#exampleModal${res[i].oId}">
                                        我要接單
                                    </button>

                                    <div class="modal fade" id="exampleModal${res[i].oId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									  <div class="modal-dialog">
									    <div class="modal-content">
									      <div class="modal-header">
									        <h5 class="modal-title" id="exampleModalLabel">訂單${res[i].oId} : </h5>
									        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									      </div>
									      <div class="modal-body">
									        
									      </div>
									      <div class="modal-footer">
									        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									        <button type="button" class="btn btn-primary">Save changes</button>
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
})


function itemsDetail(items) {
	console.log(items);
}


let myLatLng = { lat: 25.042563029213984, lng: 121.52015437660762 };
let mapOptions = {
	center: myLatLng,
	zoom: 16,
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

