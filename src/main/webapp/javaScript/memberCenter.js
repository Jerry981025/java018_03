let content
let originalcontent
let originBirthday
let input1 = document.getElementById("newAddress");
$(document).ready(() => {
	getMemberDetail()
	rankingStar()
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

function getMemeberPicture(Id) {
	axios.get(
		'memberPicture',
		{
			params: { mId: Id }
		})
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


function getMemberDetail() {
	axios.get('member')
		.then((res) => {
			setMemberDetail(res.data)
		})
		.catch((error) => { console.error(error) })
}

function rankingStar(mRank) {
	// 星等顯示

	$('#c3').text(resJson.mRank)
	$('#c18').text(resJson.mRank)
	let starRating = $('#c4');
	let offcanvasStarRating = $('#offcanvasStarRating');

	let fullStar = `<img src="data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMkQyM0Q7IiBkPSJNNTEwLjg1OSwxOTYuNTU4Yy0yLjczNy04LjQyNi0xMC4wMjEtMTQuNTY4LTE4Ljc5MS0xNS44NDJsLTE0OC42OTUtMjEuNjA0bC02Ni41LTEzNC43NTMNCgljLTMuOTItNy45NDUtMTIuMDEyLTEyLjk3Ni0yMC44NzMtMTIuOTc2Yy04Ljg2MSwwLTE2Ljk1Myw1LjAzMS0yMC44NzMsMTIuOTc2TDE2OC42MzEsMTU5LjExbC0xNDguNywyMS42MDQNCgljLTguNzY4LDEuMjc0LTE2LjA1NSw3LjQxNi0xOC43OTEsMTUuODQyYy0yLjczOSw4LjQyNi0wLjQ1NSwxNy42NzgsNS44OTEsMjMuODYyTDExNC42MywzMjUuMjkxTDg5LjIyLDQ3My40MDUNCgljLTEuNDk3LDguNzMyLDIuMDkyLDE3LjU1OCw5LjI2LDIyLjc2NmM3LjE2OSw1LjIwNiwxNi42NjksNS44OTUsMjQuNTE0LDEuNzcyTDI1Niw0MjguMDIxbDEzMy4wMDcsNjkuOTIyDQoJYzMuNDA1LDEuNzkxLDcuMTI0LDIuNjc0LDEwLjgyOCwyLjY3NGMwLjAzMywwLDAuMDY3LDAsMC4wOTksMGMxMi44MjctMC4wMzYsMjMuMjEtMTAuNDQ0LDIzLjIxLTIzLjI3Nw0KCWMwLTEuNzg4LTAuMjAyLTMuNTI5LTAuNTgyLTUuMjAybC0yNS4xOTMtMTQ2Ljg0Nkw1MDQuOTcsMjIwLjQyQzUxMS4zMTQsMjE0LjIzNiw1MTMuNTk4LDIwNC45ODYsNTEwLjg1OSwxOTYuNTU4eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VFQkYwMDsiIGQ9Ik0yMzUuMTI3LDI0LjM2MWwtNjYuNDk2LDEzNC43NTFsLTE0OC43LDIxLjYwNGMtOC43NjgsMS4yNzQtMTYuMDU1LDcuNDE2LTE4Ljc5MSwxNS44NDINCgljLTIuNzM5LDguNDI2LTAuNDU1LDE3LjY3OCw1Ljg5MSwyMy44NjJMMTE0LjYzLDMyNS4yOTNMODkuMjIsNDczLjQwNWMtMS40OTcsOC43MzMsMi4wOTIsMTcuNTU4LDkuMjYsMjIuNzY2DQoJYzcuMTY5LDUuMjA2LDE2LjY2OSw1Ljg5NSwyNC41MTQsMS43NzJMMjU2LDQyOC4wMjFWMTEuMzg1QzI0Ny4xMzksMTEuMzg1LDIzOS4wNDcsMTYuNDE0LDIzNS4xMjcsMjQuMzYxeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=">`
	let halfStar = `<img src="data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojQzREOUZEOyIgZD0iTTUxMC44NjEsMTk2LjU1M2MtMi43MzctOC40MjYtMTAuMDIxLTE0LjU2OC0xOC43OTEtMTUuODQybC0xNDguNjk1LTIxLjYwNGwtNjYuNS0xMzQuNzUzDQoJYy0wLjA3My0wLjE0Ny0wLjE2MS0wLjI4Ni0wLjIzNi0wLjQzYy0wLjE2OS0wLjMyNi0wLjM0My0wLjY0Ny0wLjUyNi0wLjk2MmMtMC4xNTUtMC4yNjUtMC4zMTMtMC41MjYtMC40OC0wLjc4NQ0KCWMtMC4xNzgtMC4yODEtMC4zNjItMC41NTctMC41NTEtMC44MjljLTAuMTg5LTAuMjcyLTAuMzgzLTAuNTM4LTAuNTgzLTAuODAxYy0wLjE4OC0wLjI0NS0wLjM3OS0wLjQ4Ni0wLjU3Ni0wLjcyMw0KCWMtMC4yMTktMC4yNjItMC40MzktMC41MjEtMC42Ny0wLjc3NmMtMC4yMDMtMC4yMjctMC40MTMtMC40NDUtMC42MjQtMC42NjNjLTAuMjMzLTAuMjM5LTAuNDczLTAuNDc2LTAuNzE4LTAuNzA2DQoJYy0wLjIzMS0wLjIxNi0wLjQ2Ny0wLjQyNS0wLjcwNC0wLjYzMmMtMC4yNDEtMC4yMDgtMC40ODYtMC40MTMtMC43MzYtMC42MTFjLTAuMjYyLTAuMjA4LTAuNTMxLTAuNDEtMC44MDEtMC42MDUNCgljLTAuMjQyLTAuMTc1LTAuNDg5LTAuMzQ5LTAuNzM3LTAuNTE3Yy0wLjI5Mi0wLjE5Ni0wLjU5LTAuMzgyLTAuODg5LTAuNTYzYy0wLjI0Ny0wLjE0OS0wLjQ5NS0wLjI5NS0wLjc0OC0wLjQzNg0KCWMtMC4zMS0wLjE3Mi0wLjYyMi0wLjMzNS0wLjk0LTAuNDkzYy0wLjI2NS0wLjEzLTAuNTM0LTAuMjU5LTAuODA0LTAuMzgyYy0wLjMxLTAuMTQtMC42MjQtMC4yNzItMC45NC0wLjM5Nw0KCWMtMC4yOTktMC4xMTktMC42MDQtMC4yMzMtMC45MDktMC4zNGMtMC4yOTUtMC4xMDQtMC41OTQtMC4yMDItMC44OTQtMC4yOTVjLTAuMzQzLTAuMTA0LTAuNjg3LTAuMi0xLjAzNy0wLjI5DQoJYy0wLjE2My0wLjA0LTAuMzE4LTAuMDk2LTAuNDgzLTAuMTMzYy0wLjEyMS0wLjAyOC0wLjI0Mi0wLjA0Mi0wLjM2My0wLjA2OGMtMC4zNjYtMC4wNzktMC43MzYtMC4xNDctMS4xMDMtMC4yMDgNCgljLTAuMjgyLTAuMDQ3LTAuNTYzLTAuMDk1LTAuODQ5LTAuMTNjLTAuMzU4LTAuMDQ3LTAuNzEyLTAuMDc5LTEuMDY5LTAuMTA5Yy0wLjMwMy0wLjAyNS0wLjYwNy0wLjA1LTAuOTExLTAuMDY0DQoJYy0wLjMzMi0wLjAxNC0wLjY2My0wLjAxNi0wLjk5My0wLjAxNmMwLDAsMCwwLTAuMDAyLDBjLTAuMzMyLDAtMC42NjMsMC4wMDItMC45OTUsMC4wMTZjLTAuMzA0LDAuMDE0LTAuNjA3LDAuMDM3LTAuOTA4LDAuMDY0DQoJYy0wLjM1OCwwLjAyOS0wLjcxOCwwLjA2Mi0xLjA3NywwLjEwOWMtMC4yNzksMC4wMzYtMC41NTQsMC4wODItMC44MzIsMC4xMjdjLTAuMzc2LDAuMDY0LTAuNzUzLDAuMTMyLTEuMTMsMC4yMTQNCgljLTAuMTE2LDAuMDI1LTAuMjMxLDAuMDM3LTAuMzQ4LDAuMDY1Yy0wLjE1NSwwLjAzNi0wLjMwMywwLjA4OC0wLjQ1OCwwLjEyOWMtMC4zNjYsMC4wOTMtMC43MjgsMC4xOTQtMS4wODUsMC4zMDMNCgljLTAuMjg0LDAuMDg3LTAuNTYzLDAuMTgtMC44NDMsMC4yNzZjLTAuMzI2LDAuMTEzLTAuNjQ5LDAuMjM0LTAuOTY3LDAuMzYyYy0wLjI5NSwwLjExOS0wLjU5LDAuMjQyLTAuODgxLDAuMzc0DQoJYy0wLjI5MiwwLjEzLTAuNTc5LDAuMjY4LTAuODY0LDAuNDFjLTAuMjk2LDAuMTQ5LTAuNTkxLDAuMzAxLTAuODgsMC40NjFjLTAuMjc1LDAuMTUyLTAuNTQ1LDAuMzEtMC44MSwwLjQ3Mg0KCWMtMC4yNzksMC4xNjktMC41NTcsMC4zNDQtMC44MywwLjUyNmMtMC4yNjgsMC4xNzgtMC41MzEsMC4zNjUtMC43OTEsMC41NTRjLTAuMjUzLDAuMTg1LTAuNTAzLDAuMzcyLTAuNzQ4LDAuNTY2DQoJYy0wLjI2NywwLjIxMS0wLjUyNiwwLjQyOC0wLjc4MiwwLjY1Yy0wLjIyMywwLjE5NC0wLjQ0NSwwLjM5MS0wLjY2NCwwLjU5NGMtMC4yNTYsMC4yNDEtMC41MDYsMC40ODctMC43NTEsMC43MzkNCgljLTAuMjAzLDAuMjA2LTAuNDAyLDAuNDE3LTAuNTk3LDAuNjMzYy0wLjIzNiwwLjI2MS0wLjQ2NCwwLjUyOC0wLjY4NywwLjc5OGMtMC4xOTEsMC4yMzEtMC4zNzksMC40NjYtMC41NiwwLjcwNQ0KCWMtMC4yMDMsMC4yNjctMC40LDAuNTM4LTAuNTk0LDAuODEzYy0wLjE4NiwwLjI3LTAuMzY5LDAuNTQ1LTAuNTQ2LDAuODI0Yy0wLjE2NCwwLjI1OS0wLjMyNCwwLjUyLTAuNDgsMC43ODUNCgljLTAuMTg1LDAuMzE4LTAuMzYsMC42NDEtMC41MzEsMC45N2MtMC4wNzYsMC4xNDMtMC4xNiwwLjI3OS0wLjIzMywwLjQyNGwtNjYuNDk2LDEzNC43NTFsLTE0OC43LDIxLjYwNA0KCWMtOC43NjksMS4yNzQtMTYuMDU1LDcuNDE2LTE4Ljc5MSwxNS44NDJjLTIuNzM5LDguNDI2LTAuNDU1LDE3LjY3OCw1Ljg5MSwyMy44NjJsMTA3LjYwMSwxMDQuODczTDg5LjIyMSw0NzMuMzk1DQoJYy0xLjQ5Nyw4LjczMiwyLjA5MiwxNy41NTksOS4yNiwyMi43NjZjNC4wNTUsMi45NDcsOC44NTgsNC40NDYsMTMuNjg1LDQuNDQ2YzMuNzA0LDAsNy40MjItMC44ODMsMTAuODI4LTIuNjc0bDEzMy4wMDctNjkuOTIyDQoJbDEzMy4wMDUsNjkuOTIyYzMuNDA1LDEuNzkxLDcuMTI0LDIuNjc0LDEwLjgyOCwyLjY3NGM0LjgyNiwwLDkuNjMtMS40OTksMTMuNjg1LTQuNDQ2YzcuMTY4LTUuMjA4LDEwLjc1Ny0xNC4wMzMsOS4yNi0yMi43NjYNCglsLTI1LjQwOS0xNDguMTEyTDUwNC45NzIsMjIwLjQxQzUxMS4zMTUsMjE0LjIzMSw1MTMuNiwyMDQuOTgxLDUxMC44NjEsMTk2LjU1M3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFRUJGMDA7IiBkPSJNMjU2LDExLjM5NWMtMC4zMzIsMC0wLjY2MywwLjAwMi0wLjk5NSwwLjAxNmMtMC4zMDQsMC4wMTQtMC42MDcsMC4wMzctMC45MDgsMC4wNjINCgljLTAuMzU4LDAuMDI5LTAuNzE4LDAuMDYyLTEuMDc3LDAuMTA5Yy0wLjI3OSwwLjAzNi0wLjU1NCwwLjA4Mi0wLjgzMiwwLjEyN2MtMC4zNzYsMC4wNjQtMC43NTMsMC4xMzItMS4xMywwLjIxNA0KCWMtMC4xMTYsMC4wMjUtMC4yMzEsMC4wMzctMC4zNDgsMC4wNjVjLTAuMTU1LDAuMDM2LTAuMzAzLDAuMDg4LTAuNDU4LDAuMTI3Yy0wLjM2NiwwLjA5My0wLjcyOCwwLjE5NC0xLjA4NSwwLjMwMw0KCWMtMC4yODQsMC4wODctMC41NjMsMC4xOC0wLjg0MywwLjI3NmMtMC4zMjYsMC4xMTMtMC42NDksMC4yMzQtMC45NjcsMC4zNjJjLTAuMjk1LDAuMTE5LTAuNTksMC4yNDItMC44ODEsMC4zNzQNCgljLTAuMjkyLDAuMTMyLTAuNTc5LDAuMjY4LTAuODY0LDAuNDFjLTAuMjk2LDAuMTQ5LTAuNTkxLDAuMzAxLTAuODgsMC40NjFjLTAuMjc1LDAuMTUyLTAuNTQ1LDAuMzEtMC44MSwwLjQ3Mg0KCWMtMC4yNzksMC4xNjktMC41NTcsMC4zNDQtMC44MywwLjUyNmMtMC4yNjgsMC4xNzgtMC41MzEsMC4zNjUtMC43OTEsMC41NTRjLTAuMjUzLDAuMTg1LTAuNTAzLDAuMzcyLTAuNzQ4LDAuNTY2DQoJYy0wLjI2NywwLjIxMS0wLjUyNiwwLjQyOC0wLjc4MiwwLjY1Yy0wLjIyMywwLjE5NC0wLjQ0NSwwLjM5My0wLjY2NCwwLjU5NGMtMC4yNTYsMC4yNDEtMC41MDYsMC40ODctMC43NTEsMC43MzkNCgljLTAuMjAzLDAuMjA2LTAuNDAyLDAuNDE3LTAuNTk3LDAuNjMzYy0wLjIzNiwwLjI2MS0wLjQ2NCwwLjUyOC0wLjY4NywwLjc5OGMtMC4xOTEsMC4yMzEtMC4zNzksMC40NjYtMC41NiwwLjcwNQ0KCWMtMC4yMDMsMC4yNjctMC40LDAuNTM4LTAuNTk0LDAuODEzYy0wLjE4NiwwLjI3LTAuMzY5LDAuNTQ1LTAuNTQ2LDAuODI0Yy0wLjE2NCwwLjI1OS0wLjMyNCwwLjUyLTAuNDgsMC43ODUNCgljLTAuMTg1LDAuMzE4LTAuMzYsMC42NDEtMC41MzEsMC45N2MtMC4wNzYsMC4xNDMtMC4xNjEsMC4yNzktMC4yMzMsMC40MjVsLTY2LjQ5NiwxMzQuNzUxbC0xNDguNywyMS42MDQNCgljLTguNzY5LDEuMjc0LTE2LjA1NSw3LjQxNi0xOC43OTEsMTUuODQyYy0yLjczOSw4LjQyNi0wLjQ1NSwxNy42NzgsNS44OTEsMjMuODYybDEwNy42MDEsMTA0Ljg3M0w4OS4yMjMsNDczLjM5OA0KCWMtMS40OTcsOC43MzIsMi4wOTIsMTcuNTU5LDkuMjYsMjIuNzY2YzQuMDU1LDIuOTQ3LDguODU4LDQuNDQ2LDEzLjY4NSw0LjQ0NmMzLjcwNCwwLDcuNDIyLTAuODgzLDEwLjgyOC0yLjY3NGwxMzMuMDA3LTY5LjkyMg0KCVYxMS4zOTVDMjU2LjAwMSwxMS4zOTUsMjU2LjAwMSwxMS4zOTUsMjU2LDExLjM5NXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K">`
	let nullStar = `<img src="data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNDNEQ5RkQ7IiBkPSJNNTEwLjg1OSwxOTYuNTU4Yy0yLjczNy04LjQyNi0xMC4wMjEtMTQuNTY4LTE4Ljc5MS0xNS44NDJsLTE0OC42OTUtMjEuNjA0bC02Ni41LTEzNC43NTMNCgljLTMuOTItNy45NDUtMTIuMDEyLTEyLjk3Ni0yMC44NzMtMTIuOTc2Yy04Ljg2MSwwLTE2Ljk1Myw1LjAzMS0yMC44NzMsMTIuOTc2TDE2OC42MzEsMTU5LjExbC0xNDguNywyMS42MDQNCgljLTguNzY5LDEuMjc0LTE2LjA1NSw3LjQxNi0xOC43OTEsMTUuODQyYy0yLjczOSw4LjQyOC0wLjQ1NSwxNy42NzgsNS44OTEsMjMuODYybDEwNy42MDEsMTA0Ljg3M0w4OS4yMiw0NzMuNDA1DQoJYy0xLjQ5Nyw4LjczMiwyLjA5MiwxNy41NTgsOS4yNiwyMi43NjZjNC4wNTUsMi45NDcsOC44NTgsNC40NDYsMTMuNjg1LDQuNDQ2YzMuNzA0LDAsNy40MjItMC44ODMsMTAuODI4LTIuNjc0TDI1Niw0MjguMDIxDQoJbDEzMy4wMDUsNjkuOTIyYzMuNDI2LDEuODAyLDcuMTU4LDIuNjcyLDEwLjg5NSwyLjY3NGMxMi44NDEtMC4wMTksMjMuMjQ0LTEwLjQzMywyMy4yNDQtMjMuMjc3YzAtMS43ODgtMC4yMDMtMy41MjktMC41ODUtNS4yMDMNCglsLTI1LjE5LTE0Ni44NDRMNTA0Ljk3LDIyMC40MThDNTExLjMxNCwyMTQuMjM2LDUxMy41OTgsMjA0Ljk4Niw1MTAuODU5LDE5Ni41NTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQTdDN0ZDOyIgZD0iTTIzNS4xMjcsMjQuMzYxbC02Ni40OTYsMTM0Ljc1MWwtMTQ4LjcsMjEuNjA0Yy04Ljc2OSwxLjI3NC0xNi4wNTUsNy40MTYtMTguNzkxLDE1Ljg0Mg0KCWMtMi43MzksOC40MjgtMC40NTUsMTcuNjc4LDUuODkxLDIzLjg2MmwxMDcuNjAxLDEwNC44NzNMODkuMjIsNDczLjQwNWMtMS40OTcsOC43MzIsMi4wOTIsMTcuNTU4LDkuMjYsMjIuNzY2DQoJYzQuMDU1LDIuOTQ3LDguODU4LDQuNDQ2LDEzLjY4NSw0LjQ0NmMzLjcwNCwwLDcuNDIyLTAuODgzLDEwLjgyOC0yLjY3NEwyNTYsNDI4LjAyMVYxMS4zODUNCglDMjQ3LjEzOSwxMS4zODUsMjM5LjA0NywxNi40MTQsMjM1LjEyNywyNC4zNjF6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==">`
	for (let i = 1; i <= 5; i++) {
		let stars = mRank - i;
		if (stars >= 0) {
			starRating.append(fullStar)
			offcanvasStarRating.append(fullStar)
		} else if (stars < 0 && stars > -1) {
			starRating.append(halfStar)
			offcanvasStarRating.append(halfStar)
		} else {
			starRating.append(nullStar)
			offcanvasStarRating.append(nullStar)
		}
	}
}

function createAddressOption(addressBeans) {
	let addressOption = "";
	addressBeans.forEach(addressBean => {
		addressOption += `<option value='${addressBean.aId}'>${addressBean.address}</option>\n`
	});
	$('#c8').html(addressOption)
}

function setMemberDetail(resJson) {
	console.log(resJson);
	$('#c1').text(resJson.mFirstName + resJson.mLastName)
	$('#c14').text(resJson.mFirstName + resJson.mLastName)
	$('#c15').text(resJson.mFirstName + resJson.mLastName)
	$('#c2').text(resJson.mId)
	getMemeberPicture(resJson.mId)
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