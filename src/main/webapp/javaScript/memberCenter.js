let content
let originalcontent
let originBirthday
let input1 = document.getElementById("newAddress");
$(document).ready(() => {
	getMemberDetail()
	$('#c19').click(() => {
		content = null
		$('#c19').attr('src', originalcontent)
		$('#c27').attr('src', originalcontent)
		$('#c28').attr('src', originalcontent)
		$('#c29').attr('src', originalcontent)
		$('#member_picture').attr('src', originalcontent)
	})
	$('#c20').click(() => {
		if ($('#file')) {
			$('#file').click()
		}
	})
	// 修改生日
	let birthdayUpdateConfirm = $('#birthdayUpdateConfirm')
	let birthdayUpdateCancel = $('#birthdayUpdateCancel')
	let burthdayUpdate = $('#birthdayUpdate')
	let newBirthday = $('#newBirthday')
	let errorBirthday = document.createElement('div')
	errorBirthday.setAttribute('id', 'errorBirthday')
	errorBirthday.setAttribute('style', 'color:red;')
	errorBirthday.setAttribute('class', 'ms-3 pt-1')
	$('#birthdayUpdate').click(function () {
		$('#c6').css('display', 'none')
		newBirthday.css('display', 'block')
		this.style.display = 'none'
		birthdayUpdateConfirm.css('display', 'block')
		birthdayUpdateCancel.css('display', 'block')
	})

	// 確認修改生日
	birthdayUpdateConfirm.click(function () {
		// $('#c6').text(newBirthday.text())
		let obj = { "mId": $('#c2').text(), "mBirthday": String(newBirthday.val()) };
		let json = JSON.stringify(obj);
		let config = {
			headers: {
				'content-type': 'application/json'
			}
		}
		axios.put('memberBirthday', json, config)
			.then((res) => {
				if (res.data.BirthdayError != null) {
					errorBirthday.innerText = res.data.BirthdayError
					$('#birthdayrow').append(errorBirthday)
				} else if (res.data.success != null) {
					$('#c6').css('display', 'block').text(String(newBirthday.val()))
					newBirthday.css('display', 'none')
					originBirthday = String(newBirthday.val())
					burthdayUpdate.css('display', 'block')
					birthdayUpdateConfirm.css('display', 'none')
					birthdayUpdateCancel.css('display', 'none')
					if (errorBirthday != null) {
						$("#errorBirthday").remove()
					}
					alert(res.data.success)
				}
			})
			.catch((error) => { console.error(error) })
	})

	// 取消修改生日
	birthdayUpdateCancel.click(function () {
		$('#c6').css('display', 'block').text(originBirthday)
		newBirthday.css('display', 'none')
		burthdayUpdate.css('display', 'block')
		birthdayUpdateConfirm.css('display', 'none')
		birthdayUpdateCancel.css('display', 'none')
		document.getElementById('birthdayrow').removeChild(document.getElementById('errorBirthday'))
	})

	// 設為常用地址
	let saveAddress
	$('#setCommonAddress').click(function () {
		saveAddress = $('#c8 option:selected').text()
		let obj = { "mId": $('#c2').text(), "mAddress": saveAddress };
		let json = JSON.stringify(obj);
		let config = {
			headers: {
				'content-type': 'application/json'
			}
		}
		axios.put('memberAddress', json, config)
			.then((res) => {
				if (res.data.success) {
					$('#c7').text(saveAddress)
					alert(res.data.success)
				}
			})
			.catch((error) => { console.error(error) })
	})

	// 刪除地址 
	$('#dropAddress').click(function () {
		saveAddress = $('#c8 option:selected').text()
		let aId = $('#c8 option:selected').val()
		let commonAddress = $('#c7').text()
		let obj = {
			params: { "mId": $('#c2').text(), "aId": `${aId}`, "saveAddress": saveAddress, "commonAddress": commonAddress }
		};
		axios.delete('address', obj)
			.then((res) => {
				if (commonAddress == saveAddress) {
					$('#c7').text('')
				}
				$('#c8 option:selected').remove()
				if ($('#c8 option:selected').text() == null || $('#c8 option:selected').text() == '') {
					$('#c8').css('display', 'none')
					$('#setCommonAddress').css('display', 'none')
					$('#dropAddress').css('display', 'none')
				}
			})
			.catch((error) => { console.error(error) })



	})


	let errorAddress = document.createElement('div')
	errorAddress.setAttribute('id', 'errorAddress')
	errorAddress.setAttribute('style', 'color:red;')
	errorAddress.setAttribute('class', 'ms-3 pt-1')
	// 新增地址確認
	$('#newAddressConfirm').click(function () {
		let obj = { "mId": $('#c2').text(), "mAddress": $('#newAddress').val() };
		let json = JSON.stringify(obj);
		let config = {
			headers: {
				'content-type': 'application/json'
			}
		}
		console.log(json);
		axios.post('address', json, config)
			.then((res) => {
				if (res.data.success != null) {
					// $('#newAddress').css('display', 'none')
					// $('#newAddressConfirm').css('display', 'none')
					// $('#newAddressCancel').css('display', 'none')

					// let newAddress = `<option>`
					// newAddress += $('#newAddress').val()
					// newAddress += `</option>`
					// $('#newAddress').val(``)
					// $('#saveAddress').append(newAddress)


					// $('#saveAddress').css('display', 'block')
					// $('#setCommonAddress').css('display', 'block')
					// $('#dropAddress').css('display', 'block')
					// if (errorAddress != null) {
					// 	$('#errorAddress').remove();
					// }
					// getMemberDetail()
					window.location.reload()
					alert(res.data.success)
				} else {
					errorAddress.innerText = res.data.fail
					$('#addressRow').append(errorAddress)

				}
			})
			.catch((error) => { console.error(error) })





	})

	// 修改家用電話
	let phoneUpdate = $('#phoneUpdate')
	let phoneUpdateConfirm = $('#phoneUpdateConfirm')
	let phoneUpdateCancel = $('#phoneUpdateCancel')
	let newPhone = $('#newPhone')
	let phone = $('#c10')
	let errorphone = document.createElement('div')
	errorphone.setAttribute('id', 'errorphone')
	errorphone.setAttribute('style', 'color:red;')
	errorphone.setAttribute('class', 'ms-3 pt-1')
	$('#phoneUpdate').click(function () {
		phone.css('display', 'none')
		newPhone.css('display', 'block')
		phoneUpdate.css('display', 'none')
		phoneUpdateConfirm.css('display', 'block')
		phoneUpdateCancel.css('display', 'block')
	})

	// 確認修改家用電話
	phoneUpdateConfirm.click(function () {
		let obj = { "mId": $('#c2').text(), "mPhone": newPhone.val() };
		let json = JSON.stringify(obj);
		let config = {
			headers: {
				'content-type': 'application/json'
			}
		}
		console.log(json);
		axios.put('memberPhone', json, config)
			.then((res) => {
				console.log(res.data)
				if (res.data.fail != null) {
					errorphone.innerText = res.data.fail
					$('#phoneRow').append(errorphone)
				} else if (res.data.success != null) {
					phone.css('display', 'block').text(newPhone.val())
					newPhone.css('display', 'none').val(``)
					phoneUpdate.css('display', 'block')
					phoneUpdateConfirm.css('display', 'none')
					phoneUpdateCancel.css('display', 'none')
					errorphone.remove();
					alert(res.data.success)
				}
			})
			.catch((error) => { console.error(error) })
	})

	// 取消修改家用電話
	phoneUpdateCancel.click(function () {
		phone.css('display', 'block')
		newPhone.css('display', 'none').val(``)
		phoneUpdate.css('display', 'block')
		phoneUpdateConfirm.css('display', 'none')
		phoneUpdateCancel.css('display', 'none')
		errorphone.remove();
	})

	// 修改行動電話
	let cellPhoneUpdate = $('#c12')
	let cellPhoneUpdateConfirm = $('#c13')
	let cellPhoneUpdateCancel = $('#c26')
	let newCellPhone = $('#newCellPhone')
	let cellPhone = $('#c9')
	let errorCellphone = document.createElement('div')
	errorCellphone.setAttribute('id', 'errorCellphone')
	errorCellphone.setAttribute('style', 'color:red;')
	errorCellphone.setAttribute('class', 'ms-3 pt-1')
	$('#c12').click(function () {
		cellPhone.css('display', 'none')
		newCellPhone.css('display', 'block')
		cellPhoneUpdate.css('display', 'none')
		cellPhoneUpdateConfirm.css('display', 'block')
		cellPhoneUpdateCancel.css('display', 'block')
	})

	// 確認修改行動電話
	cellPhoneUpdateConfirm.click(function () {
		let obj = { "mId": $('#c2').text(), "mCellphone": newCellPhone.val() };
		let json = JSON.stringify(obj);
		let config = {
			headers: {
				'content-type': 'application/json'
			}
		}
		console.log(json);
		axios.put('memberCellphone', json, config)
			.then((res) => {
				console.log(res.data)
				if (res.data.fail != null) {
					errorCellphone.innerText = res.data.fail
					$('#cellphoneRow').append(errorCellphone)
				} else if (res.data.success != null) {
					cellPhone.css('display', 'block').text(newCellPhone.val())
					newCellPhone.css('display', 'none').val(``)
					cellPhoneUpdate.css('display', 'block')
					cellPhoneUpdateConfirm.css('display', 'none')
					cellPhoneUpdateCancel.css('display', 'none')
					errorCellphone.remove()
					alert(res.data.success)
				}
			})
			.catch((error) => { console.error(error) })

	})

	// 取消修改行動電話
	cellPhoneUpdateCancel.click(function () {
		cellPhone.css('display', 'block')
		newCellPhone.css('display', 'none').val(``)
		cellPhoneUpdate.css('display', 'block')
		cellPhoneUpdateConfirm.css('display', 'none')
		cellPhoneUpdateCancel.css('display', 'none')
		errorCellphone.remove();
	})

	// 修改收款帳戶
	let bankUpdate = $('#c23')
	let bankConfirm = $('#c24')
	let bankCancel = $('#c25')
	let newbank = $('#c22')
	let bank = $('#c11')
	let errorBank = document.createElement('div')
	errorBank.setAttribute('id', 'errorBank')
	errorBank.setAttribute('style', 'color:red;')
	errorBank.setAttribute('class', 'ms-3 pt-1')
	$('#c23').click(function () {
		bank.css('display', 'none')
		newbank.css('display', 'block')
		bankUpdate.css('display', 'none')
		bankConfirm.css('display', 'block')
		bankCancel.css('display', 'block')
	})

	// 確認修改收款帳戶
	bankConfirm.click(function () {
		let obj = { "mId": $('#c2').text(), "mBank": newbank.val() };
		let json = JSON.stringify(obj);
		let config = {
			headers: {
				'content-type': 'application/json'
			}
		}
		console.log(json);
		axios.put('memberBank', json, config)
			.then((res) => {
				console.log(res.data)
				if (res.data.fail != null) {
					errorBank.innerText = res.data.fail
					$('#bankRow').append(errorBank)
				} else if (res.data.success != null) {
					bank.css('display', 'block').text(`************${newbank.val().substr(-4, 4)}`)
					newbank.css('display', 'none').val(``)
					bankUpdate.css('display', 'block')
					bankConfirm.css('display', 'none')
					bankCancel.css('display', 'none')
					errorBank.remove();
					alert(res.data.success)
				}
			})
			.catch((error) => { console.error(error) })

	})

	// 取消修改收款帳戶
	bankCancel.click(function () {
		bank.css('display', 'block')
		newbank.css('display', 'none').val(``)
		bankUpdate.css('display', 'block')
		bankConfirm.css('display', 'none')
		bankCancel.css('display', 'none')
		errorBank.remove();
	})
})

function getMemberDetail() {
	axios.get('member')
		.then((res) => {
			setMemberDetail(res.data)
		})
		.catch((error) => { console.error(error) })
}

function createAddressOption(addressBeans) {
	let addressOption = "";
	addressBeans.forEach(addressBean => {
		addressOption += `<option value='${addressBean.aId}'>${addressBean.address}</option>\n`
	});
	$('#c8').html(addressOption)
}

function setMemberDetail(resJson) {
	$('#c1').text(resJson.mLastName + resJson.mFirstName)
	$('#c2').text(resJson.mId)
	$('#c17').text(resJson.mId)
	$('#c5').text(resJson.mEmail)
	$('#c6').text(resJson.mBirth)
	originBirthday = resJson.mBirth
	$('#c7').text(resJson.mAddress)
	createAddressOption(resJson.addressBeans)
	$('#c9').text(resJson.mCellphone)
	$('#c10').text(resJson.mPhone)
	$('#c11').text(`***********${resJson.mBank.substr(-4, 4)}`)
}

function readFile(event) {

	let files = event.target.files;
	let reader = new FileReader();
	reader.onload = function () {
		content = reader.result;
		$('#member_picture').attr('src', content);
	}
	reader.readAsDataURL(files[0]);
	event.target.value = null;
}

function updatePicture() {
	let obj = { "mId": $('#c2').text(), "mPicture": content };
	let json = JSON.stringify(obj);
	let config = {
		headers: {
			'content-type': 'application/json'
		}
	}
	if (content == null) {
		return;
	}
	axios.put('memberPicture', json, config)
		.then((res) => { getMemeberPicture($('#c2').text()) })
		.catch((error) => { console.error(error) })
}

function getMemeberPicture() {
	axios.get('memberPicture')
		.then((res) => {
			originalcontent = `data:${res.data.mineType};base64, ${res.data.base64}`
			$('#c19').attr('src', originalcontent)
			$('#c27').attr('src', originalcontent)
			$('#c29').attr('src', originalcontent)
			$('#c28').attr('src', originalcontent)
			$('#member_picture').attr('src', originalcontent)
		})
		.catch()
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

//create a DirectionsService object to use the route method and get a result for our request
let directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
let directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);

let autocomplete1 = new google.maps.places.Autocomplete(input1);
	autocomplete1.bindTo('bounds', map);