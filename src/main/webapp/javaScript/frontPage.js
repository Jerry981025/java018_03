function doFirst() {

    loginBtn = document.getElementById('clickLogin')
    loginBtn.addEventListener('click', function () {

        //抓取表單信箱及密碼輸入的值
        let mEmail = document.querySelector('#loginEmail').value
        let mPassword = document.querySelector('#loginPassword').value

        login({ mEmail, mPassword })

    })
}

window.addEventListener('load', doFirst)

function login(reqBody) {
    console.log(reqBody)
    fetch('login',
        { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(reqBody) })
        .then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (respBody) {
            errMsg.textContent = '';
            let { successful, message } = respBody;
            if (successful) {
                sessionStorage.setItem('mEmail', respBody.mEmail);
                location.replace('iNeedHelp/iNeedHelp.html');
            } else {
                errMsg.textContent = message;
            }
        })
        .catch((error) => {
            console.log(`Error: ${error}`);

        })
}