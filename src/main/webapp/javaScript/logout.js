$("#header").load(`${getContextPath()}/nav`);
$("#footer").load(`${getContextPath()}/footer`);


$(document).ready(() => {
	getMemeberPicture();
})

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

function getContextPath() {
	return window.location.pathname.substring(0, window.location.pathname.indexOf('/', 2));
}