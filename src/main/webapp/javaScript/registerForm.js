//驗證碼
// let code;
// function createCode() {
//     code = "";
//     let codeLength = 6; //驗證碼的長度
//     let checkCode = document.getElementById("checkCode");
//     let codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//         'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
//     for (let i = 0; i < codeLength; i++) {
//         let charNum = Math.floor(Math.random() * 52);
//         code += codeChars[charNum];
//     }
//     if (checkCode) {
//         checkCode.className = "code";
//         checkCode.innerHTML = code;
//     }
// }
// function validateCode() {
//     let inputCode = document.getElementById("inputCode").value;
//     let textShow = document.getElementById("text_show")
//     if (inputCode.length <= 0) {
//         textShow.innerHTML = "請輸入驗證碼";
//         textShow.style.color = "red";
//     } else if (inputCode.toUpperCase() != code.toUpperCase()) {
//         textShow.innerHTML = "您輸入的驗證碼有誤";
//         textShow.style.color = "red";
//         createCode();
//     } else {
//         textShow.innerHTML = "驗證碼正確";
//         textShow.style.color = "green";
//     }
// }
// function checkCode() {
//     let btn = document.getElementById("Button1");
//     btn.onclick = function () {
//         validateCode();
//     }
// 
function doFirst() {
    // checkCode();
    // createCode();
    // document.getElementById("checkCode").onclick = function () { createCode() }
    // linkbt.onclick = function () { createCode() }
    // inputCode.onclick = function () { validateCode(); }
    registerBtn = document.getElementById('register')
    registerBtn.addEventListener('click', function () {

        let FirstName = document.getElementById('firstName').value
        let mLastName = document.getElementById('lastName').value
        let mPassword = document.querySelector('#password').value
        let mCheckPassword = document.querySelector('#checkpassword').value
        let mEmail = document.querySelector('#email').value
        let mBirth = document.querySelector('#birthday').value
        let mCellphone = document.querySelector('#mobile').value
        let inputZip = document.querySelector('#inputZip').value
        let inputAddress = document.querySelector('#inputAddress').value
        let Address = document.querySelector('#roadAddress').value
        let mAddress = `${inputZip}${inputAddress}${Address}`
        let body = {
            mFirstName: `${FirstName}`,
            mLastName: `${mLastName}`,
            mPassword: `${mPassword}`,
            mCheckPassword: `${mCheckPassword}`,
            mEmail: `${mEmail}`,
            mAddress: `${mAddress}`,
            mBirth: `${mBirth}`,
            mCellphone: `${mCellphone}`,
        }
        register(body)


    })
}
window.addEventListener('load', doFirst)

function register(body) {
    console.log(body);
    fetch('http://localhost:8080/java018_03/registerForm',
        { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })
        .then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (data) {
            console.log(data);
            console.log(data.addressError);
            let birthdayRow = document.getElementById('birthdayRow')
            let addressRow = document.getElementById('addressRow')
            let lastNameRow = document.getElementById('lastNameRow')
            let firstNameRow = document.getElementById('firstNameRow')
            let emailRow = document.getElementById('emailRow')
            let passwordRow = document.getElementById('passwordRow')
            let CheckPasswordRow = document.getElementById('CheckPasswordRow')
            let mobileRow = document.getElementById('mobileRow')
            let address1234 = document.getElementById('AddressErrorShow')
            let firstNameGo = document.getElementById('firstNameErrorShow')
            let lastNameGo = document.getElementById('LastNameErrorShow')
            let emailGo = document.getElementById('EmailErrorShow')
            let passwordGo = document.getElementById('PasswordErrorShow')
            let checkPasswordGo = document.getElementById('CheckPasswordErrorShow')
            let doublePasswordGo = document.getElementById('CheckPasswordDoubleErrorShow')
            let cellPhoneGo = document.getElementById('cellPhoneErrorShow')
            let birthdayGo = document.getElementById('birthdayErrorShow')



            //生日
            if (data.birthdayError != null) {
                let errorBirthday = document.createElement('div')
                errorBirthday.setAttribute('id', 'birthdayErrorShow')
                errorBirthday.setAttribute('style', 'color:red;')
                errorBirthday.innerText = data.birthdayError
                if (birthdayGo == null) {
                    birthdayRow.appendChild(errorBirthday)
                }
            } else if (data.birthdayError == null && birthdayGo != null) {
                birthdayRow.removeChild(birthdayGo)
            }

            //地址
            if (data.addressError != null) {
                let errorAddress = document.createElement('div')    // <div></div>
                errorAddress.setAttribute('id', 'AddressErrorShow') // <div id="AddressErrorShow"></div>
                errorAddress.setAttribute('style', 'color:red;')    // <div id="AddressErrorShow" style="color:red;"></div>
                errorAddress.innerText = data.addressError          // <div id="AddressErrorShow" style="color:red;">data.addressError</div>
                if (address1234 == null) {
                    addressRow.appendChild(errorAddress)
                }
            } else if (data.addressError == null && address1234 != null) {
                addressRow.removeChild(address1234)
            }

            //名字
            if (data.firstNameError != null) {
                let errorfirstName = document.createElement('div')
                errorfirstName.setAttribute('id', 'firstNameErrorShow')
                errorfirstName.setAttribute('style', 'color:red;')
                errorfirstName.innerText = data.firstNameError
                if (firstNameGo == null) {
                    firstNameRow.appendChild(errorfirstName)
                }
            } else if (data.firstNameError == null && firstNameGo != null) {
                firstNameRow.removeChild(firstNameGo)
            }

            //姓氏
            if (data.lastNameError != null) {
                let errorLastName = document.createElement('div')
                errorLastName.setAttribute('id', 'LastNameErrorShow')
                errorLastName.setAttribute('style', 'color:red;')
                errorLastName.innerText = data.lastNameError
                if (lastNameGo == null) {
                    lastNameRow.appendChild(errorLastName)
                }
            } else if (data.lastNameError == null && lastNameGo != null) {
                lastNameRow.removeChild(lastNameGo)
            }

            //信箱
            if (data.emailError != null) {
                if (emailGo != null) {
                    emailGo.innerText = data.emailError;
                } else {
                    let errorEmail = document.createElement('div')
                    errorEmail.setAttribute('id', 'EmailErrorShow')
                    errorEmail.setAttribute('style', 'color:red;')
                    errorEmail.innerText = data.emailError;
                    emailRow.appendChild(errorEmail);
                }
            } else if (data.emailError == null && emailGo != null) {
                emailRow.removeChild(emailGo)
            }

            //密碼
            if (data.passwordError != null) {
                let errorPassword = document.createElement('div')
                errorPassword.setAttribute('id', 'PasswordErrorShow')
                errorPassword.setAttribute('style', 'color:red;')
                errorPassword.innerText = data.passwordError
                if (passwordGo == null) {
                    passwordRow.appendChild(errorPassword)
                }
            } else if (data.passwordError == null && passwordGo != null) {
                passwordRow.removeChild(passwordGo)
            }

            //確認密碼
            if (data.CheckPasswordError != null) {
                let errorCheckPassword = document.createElement('div')
                errorCheckPassword.setAttribute('id', 'CheckPasswordErrorShow')
                errorCheckPassword.setAttribute('style', 'color:red;')
                errorCheckPassword.innerText = data.CheckPasswordError
                if (checkPasswordGo == null) {
                    CheckPasswordRow.appendChild(errorCheckPassword)
                }
            } else if (data.CheckPasswordError == null && checkPasswordGo != null) {
                CheckPasswordRow.removeChild(checkPasswordGo)
            }

            //密碼確認密碼不一致
            if (data.passwordNotSameError != null) {
                let errorCheckPasswordNotMatch = document.createElement('div')
                errorCheckPasswordNotMatch.setAttribute('id', 'CheckPasswordDoubleErrorShow')
                errorCheckPasswordNotMatch.setAttribute('style', 'color:red;')
                errorCheckPasswordNotMatch.innerText = data.passwordNotSameError
                if (doublePasswordGo = null) {
                    CheckPasswordRow.appendChild(errorCheckPasswordNotMatch)
                }
            } else if (data.passwordNotSameError == null && doublePasswordGo != null) {
                CheckPasswordRow.removeChild(doublePasswordGo)
            }

            //手機號碼
            if (data.cellPhoneError != null) {
                let errorcellPhone = document.createElement('div')
                errorcellPhone.setAttribute('id', 'cellPhoneErrorShow')
                errorcellPhone.setAttribute('style', 'color:red;')
                errorcellPhone.innerText = data.cellPhoneError
                if (cellPhoneGo == null) {
                    mobileRow.appendChild(errorcellPhone)
                }
            } else if (data.cellPhoneError == null && cellPhoneGo != null) {
                mobileRow.removeChild(cellPhoneGo)
            }

            // 註冊完送出並轉跳頁面
            errMsg.textContent = '';
            let { successful, message } = data;
            if (successful) {
                location.replace('../index.html');
                alert("註冊成功");
            } else {
                errMsg.textContent = message;
            }

            //欄位格式及密碼強度檢查
            //===================================================================

            //密碼強度檢查(6位數以上，並且至少包含 大寫字母、小寫字母、數字、符號 各一)
            let pswdStrenghCheck = document.getElementById('password').value
            if (!(/^(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(pswdStrenghCheck))) {
                alert("密碼至少6位數，需包含大小寫字母、數字、符號各一");
                return false;
            }

            //信箱格式檢查
            let emailFormCheck = document.getElementById('email').value
            if (!(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(emailFormCheck))) {
                alert("信箱格式有誤，請重新填寫");
                return false;
            }

            //手機號碼格式檢查
            let mobileFormCheck = document.getElementById('mobile').value
            if (!(/^09\d{2}-?\d{3}-?\d{3}$/.test(mobileFormCheck))) {
                alert("手機號碼有誤，請重新填寫");
                return false;
            }











        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        })

}