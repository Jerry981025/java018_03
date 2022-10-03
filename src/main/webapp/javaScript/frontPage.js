function doFirst() {

    loginBtn = document.getElementById('clickLogin')
    loginBtn.addEventListener('click', function () {

        //抓取表單信箱及密碼輸入的值
        let mEmail = document.querySelector('#loginEmail').value
        let mPassword = document.querySelector('#loginPassword').value

        let body = {
            mEmail: `${mEmail}`,
            mPassword: `${mPassword}`,
        }
        login(body)

    })
}

window.addEventListener('load', doFirst)

function login(body) {
    console.log(body)
    fetch('http://localhost:8080/java018_03/login',
        { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })
        .then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (data) {
            // document.querySelector('#xxx').src = 'data:image/*;base64, ' + data.mPicture;
            console.log(data)
            errMsg.textContent = '';
            let { successful, message } = body;
            if (successful) {
                let { mEmail, mPassword, } = body;
                sessionStorage.setItem('mEmail', mEmail);
                sessionStorage.setItem('mPassword', mPassword);
                location = '/index.html';
            } else {
                errMsg.textContent = message;
            }






        })
        .catch((error) => {
            console.log(`Error: ${error}`);

        })
}