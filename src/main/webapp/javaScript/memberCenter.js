$(document).ready(() => {
  getMemberDetail()
  rankingStar()
})




function getMemberDetail(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
      resJson = JSON.parse(this.responseText)
      $('#c1').text(resJson.mFirstName+resJson.mLastName)
      $('#c14').text(resJson.mFirstName+resJson.mLastName)
      $('#c15').text(resJson.mFirstName+resJson.mLastName)
      $('#c2').text(resJson.mId)
      $('#c17').text(resJson.mId)
      $('#c3').text(resJson.mRank)
      $('#c18').text(resJson.mRank)
      $('#c5').text(resJson.mEmail)
      $('#c6').text(resJson.mBirth)
      $('#c7').text(resJson.mAddress)
      createAddressOption(resJson.addressBeans)
      $('#c9').text(resJson.mCellphone)
      $('#c10').text(resJson.mPhone)
      $('#c11').text(`****-****-****-${resJson.mBank.substr(-4,4)}`)
      $('#c12').text(`****-****-****-${resJson.vPref.substr(-4,4)}`)
      createVisaOption(resJson.visaBeans)
    }
  };
  request.open("POST","../MemberCenterServlet",true);
  request.setRequestHeader("content-type", "application/json")
  let obj = {"action":"get"};
  let json = JSON.stringify(obj);
  request.send(json);
}

function rankingStar(){
  // 星等顯示
  let rating = $('#c3').text()
  let starRating = $('#c4')
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
}

function createAddressOption(addressBeans){
  let addressOption = "";
  addressBeans.forEach(addressBean => {
    addressOption += `<option value='${addressBean.aId}'>${addressBean.aAddress}</option>\n`
  });
  $('#c8').html(addressOption)
}
function createVisaOption(visaBeans){
  let visaOption = "";
  visaBeans.forEach(visaBean => {
    visaOption += `<option value='${visaBean.aId}'>****-****-****-${visaBean.vAccount.substr(-4,4)}</option>\n`
  });
  $('#c13').html(visaOption)
}
