$(document).ready(() => {
  // 星等顯示
  let rating = $('#rating').text()
  let starRating = $('#starRating')
  let offcanvasStarRating = $('#offcanvasStarRating')
  let fullStar = `<img src="../images/svg/stars/star-svgrepo-com-full.svg">`
  let halfStar = `<img src="../images/svg/stars/star-svgrepo-com-half.svg">`
  let nullStar = `<img src="../images/svg/stars/star-svgrepo-com-null.svg">`
  for (let i = 1; i <= 5; i++) {
    let stars = rating - i;
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

  // 修改生日
  let birthdayUpdateConfirm = $('#birthdayUpdateConfirm')
  let birthdayUpdateCancel = $('#birthdayUpdateCancel')
  let burthdayUpdate = $('#birthdayUpdate')
  let newBirthday = $('#newBirthday')
  let originBirthday = $('#birthday').text()
  
  $('#birthdayUpdate').click(function () {
    $('#birthday').css('display','none')
    newBirthday.css('display','block')

    this.style.display = 'none'
    birthdayUpdateConfirm.css('display','block')
    birthdayUpdateCancel.css('display','block')
  })

  // 確認修改生日
  birthdayUpdateConfirm.click(function(){
    // $('#birthday').text(newBirthday.text())
    $('#birthday').css('display','block').text(newBirthday.val())
    newBirthday.css('display','none')
    originBirthday = newBirthday.val()

    burthdayUpdate.css('display','block')
    birthdayUpdateConfirm.css('display','none')
    birthdayUpdateCancel.css('display','none')
  })

  // 取消修改生日
  birthdayUpdateCancel.click(function(){
    $('#birthday').css('display','block').text(originBirthday)
    newBirthday.css('display','none')

    burthdayUpdate.css('display','block')
    birthdayUpdateConfirm.css('display','none')
    birthdayUpdateCancel.css('display','none')
  })

  // 設為常用地址
  let saveAddress = ''
  $('#setCommonAddress').click(function(){
    saveAddress = $('#saveAddress option:selected').text()
    $('#commonAddress').text(saveAddress)
  })

  // 刪除地址
  $('#dropAddress').click(function(){
    if($('#commonAddress').text() == $('#saveAddress option:selected').text()){
      $('#commonAddress').text('')
    }
    $('#saveAddress option:selected').remove()
    if($('#saveAddress option:selected').text() == null || $('#saveAddress option:selected').text() == ''){
      $('#saveAddress').css('display','none')
      $('#setCommonAddress').css('display','none')
      $('#dropAddress').css('display','none')
    } 
  })

  // 新增地址
  $('#addAdress').click(function(){
    $('#newAddress').css('display','block')
    $('#newAddressConfirm').css('display','block')
    $('#newAddressCancel').css('display','block')
  })

  // 新增地址確認
  $('#newAddressConfirm').click(function(){
    $('#newAddress').css('display','none')
    $('#newAddressConfirm').css('display','none')
    $('#newAddressCancel').css('display','none')

    let newAddress = `<option>`
    newAddress += $('#newAddress').val()
    newAddress += `</option>`
    $('#newAddress').val(``)
    $('#saveAddress').append(newAddress)

    
    $('#saveAddress').css('display','block')
    $('#setCommonAddress').css('display','block')
    $('#dropAddress').css('display','block')
    
  })

  // 新增地址取消
  $('#newAddressCancel').click(function(){
    $('#newAddress').css('display','none').val(``)
    $('#newAddressConfirm').css('display','none')
    $('#newAddressCancel').css('display','none')
  })

  // 修改家用電話
  let phoneUpdate = $('#phoneUpdate')
  let phoneUpdateConfirm = $('#phoneUpdateConfirm')
  let phoneUpdateCancel = $('#phoneUpdateCancel')
  let newPhone = $('#newPhone')
  let phone = $('#phone')
  $('#phoneUpdate').click(function(){
    phone.css('display','none')
    newPhone.css('display','block')
    phoneUpdate.css('display','none')
    phoneUpdateConfirm.css('display','block')
    phoneUpdateCancel.css('display','block')
  })

  // 確認修改家用電話
  phoneUpdateConfirm.click(function(){
    phone.css('display','block').text(newPhone.val())
    newPhone.css('display','none').val(``)
    phoneUpdate.css('display','block')
    phoneUpdateConfirm.css('display','none')
    phoneUpdateCancel.css('display','none')
  })

  // 取消修改家用電話
  phoneUpdateCancel.click(function(){
    phone.css('display','block')
    newPhone.css('display','none').val(``)
    phoneUpdate.css('display','block')
    phoneUpdateConfirm.css('display','none')
    phoneUpdateCancel.css('display','none')
  })

  // 設為常用信用卡
  $('#setCommonVisa').click(function(){
    $('#commonVisa').text($('#saveVisa').val())
  })

  // 刪除信用卡
  $('#dropVisa').click( () => {
    $('#saveVisa').remove($('#saveVisa').val())


    if($('#commonVisa').text() == $('#saveVisa option:selected').text()){
      $('#commonVisa').text('')
    }
    $('#saveVisa option:selected').remove()
    if($('#saveVisa option:selected').text() == null || $('#saveVisa option:selected').text() == ''){
      $('#saveVisa').css('display','none')
      $('#setCommonVisa').css('display','none')
      $('#dropVisa').css('display','none')
    } 
  })
})