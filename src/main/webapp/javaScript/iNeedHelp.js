window.addEventListener('load', doFirst)
let i = 0;
let input1 = document.getElementById("searchInputFrom");
let input2 = document.getElementById("searchInputTo");

function doFirst() {
  // 先跟 HTML 畫面產生關聯
  loadButton = document.getElementById('loadButton')
  paymentButton = document.getElementById('orderButton')
  sendAddressButton = document.getElementById('sendAddressButton')
  result = document.getElementById('result')
  initMeetingTime()
  infoBtn = document.getElementById(`insertInfo`)

  // 再建事件聆聽功能
  loadButton.addEventListener('click', function () {
    createItems()
  })
  paymentButton.addEventListener('click', function () {
    paymentPage()
  })
  sendAddressButton.addEventListener('click', function () {
    calcRoute()
  })
  infoBtn.addEventListener('click', function () {
    insertInfo()
  })
}
function createItems() {
  // accordion item
  let accordion = document.createElement('div')
  accordion.setAttribute('class', 'accordion')
  accordion.setAttribute('id', 'accordionExample')

  let accordionItem = document.createElement('div')
  accordionItem.setAttribute('class', 'accordion-item')

  let accordionHeader = document.createElement('h2')
  accordionHeader.setAttribute('class', 'accordion-header')
  accordionHeader.setAttribute('id', 'headingOne')
  accordionHeader.setAttribute('data-bs-toggle', 'tooltip')
  accordionHeader.setAttribute('title', '')

  let accordionButton = document.createElement('button')
  accordionButton.setAttribute('class', 'accordion-button')
  accordionButton.setAttribute('type', 'button')
  accordionButton.setAttribute('data-bs-toggle', 'collapse')
  accordionButton.setAttribute('data-bs-target', `#panelsStayOpen-collapse${i}`)
  accordionButton.setAttribute('aria-expanded', 'true')
  accordionButton.setAttribute('aria-controls', `panelsStayOpen-collapse${i}`)
  accordionButton.innerText = `購買產品`

  let accordionCollapse = document.createElement('div')
  accordionCollapse.setAttribute('id', `panelsStayOpen-collapse${i}`)
  accordionCollapse.setAttribute('class', 'accordion-collapse collapse show')
  accordionCollapse.setAttribute('aria-labelledby', 'headingOne')
  accordionCollapse.setAttribute('data-bs-parent', '#accordionExample')

  let accordionBody = document.createElement('div')
  accordionBody.setAttribute('class', 'accordion-body ')

  accordionHeader.appendChild(accordionButton)
  accordionItem.appendChild(accordionHeader)

  accordionCollapse.appendChild(accordionBody)
  accordionItem.appendChild(accordionCollapse)

  accordion.appendChild(accordionItem)
  result.appendChild(accordion)

  //item
  let item = document.createElement('div')
  item.setAttribute('class', 'item')
  accordionBody.appendChild(item)

  // brand
  let brandDiv = document.createElement('div')
  brandDiv.setAttribute('class', 'col-12 brandDiv input-group mb-1')

  let brandSpan = document.createElement('span')
  brandSpan.setAttribute('class', 'brandSpan input-group-text')
  brandSpan.innerText = '產品名稱'

  let brandInput = document.createElement('input')
  brandInput.setAttribute('id', `brand${i}`)
  brandInput.setAttribute('class', 'brandInput form-control')
  brandInput.setAttribute('type', 'text')
  brandInput.setAttribute('required', '')

  brandInput.addEventListener('change', function () {
    accordionButton.innerText = brandInput.value
  })

  brandDiv.appendChild(brandSpan)
  brandDiv.appendChild(brandInput)
  item.appendChild(brandDiv)

  //detail
  let detailDiv = document.createElement('div')
  detailDiv.setAttribute('class', 'detailDiv input-group mb-1')

  let detailSpan = document.createElement('span')
  detailSpan.setAttribute('class', 'detailSpan input-group-text')
  detailSpan.innerText = '產品細項'

  let detailInput = document.createElement('input')
  detailInput.setAttribute('id', `detail${i}`)
  detailInput.setAttribute('class', 'detailInput form-control')
  detailInput.setAttribute('type', 'text')
  detailInput.setAttribute('placeholder', 'ex:大小、尺寸、容量、口味')
  detailInput.setAttribute('required', '')

  detailInput.addEventListener('change', function () {
    accordionHeader.title = '產品細項: ' + detailInput.value + '\n'
  })

  detailDiv.appendChild(detailSpan)
  detailDiv.appendChild(detailInput)
  item.appendChild(detailDiv)

  //quantity
  let quantityDiv = document.createElement('div')
  quantityDiv.setAttribute('class', 'quantityDiv input-group mb-1')

  let quantitySpan = document.createElement('span')
  quantitySpan.setAttribute('class', 'quantitySpan input-group-text')
  quantitySpan.innerText = '產品數量'

  let quantityInput = document.createElement('input')
  quantityInput.setAttribute('id', `quantity${i}`)
  quantityInput.setAttribute('class', 'quantityInput form-control')
  quantityInput.setAttribute('type', 'number')
  quantityInput.setAttribute('min', '1')
  quantityInput.setAttribute('step', '1')
  quantityInput.setAttribute('required', '')

  quantityInput.addEventListener('change', function () {
    accordionHeader.title += '產品數量: ' + quantityInput.value + '\n'
  })

  quantityDiv.appendChild(quantitySpan)
  quantityDiv.appendChild(quantityInput)
  item.appendChild(quantityDiv)

  //上傳圖片
  // let imgDiv = document.createElement('div')
  // imgDiv.setAttribute('class', 'imgDiv input-group mb-1')

  // let imgSpan = document.createElement('sapn')
  // imgSpan.setAttribute('class', 'imgSpan input-group-text')
  // imgSpan.innerText = '上傳圖片'

  // let time = new Date().getTime();
  // let imgInput = document.createElement('input');
  // imgInput.setAttribute('id', `productImg${i}`)
  // imgInput.setAttribute('class', 'imgInput form-control')
  // imgInput.setAttribute('type', 'file')

  // let newImgDiv = document.createElement('div')
  // newImgDiv.setAttribute('id', `newImg${time}`)

  // let newImg = document.createElement('img')
  // newImg.setAttribute('id', `newImg${i}`)
  // newImgDiv.setAttribute('class', 'newImg')

  // imgDiv.appendChild(imgSpan)
  // imgDiv.appendChild(newImg)
  // imgDiv.appendChild(newImgDiv)
  // imgDiv.appendChild(imgInput)
  // item.appendChild(imgDiv)
  // initUploadPicButton(time);

  //deleteButton
  let deleteDiv = document.createElement('div')
  deleteDiv.setAttribute('class', 'deleteDiv')

  let deleteButton = document.createElement('button')
  deleteButton.setAttribute('id', 'deleteButton')
  deleteButton.setAttribute('class', 'btn btn-secondary')
  deleteButton.setAttribute('type', 'button')
  deleteButton.innerText = '刪除'
  deleteButton.addEventListener('click', deleteItem)

  deleteDiv.appendChild(deleteButton)
  item.appendChild(deleteDiv)
  i++;
}
// function initUploadPicButton(time) {
//   let compressRatio = 0.8, // 圖片壓縮比例
//     imgNewWidth = 30, // 圖片新寬度
//     img = new Image(),
//     canvas = document.createElement("canvas"),
//     context = canvas.getContext("2d"),
//     file, fileReader, dataUrl;

//   // 上傳檔案
//   // $(`#upload_img${time}`).change(function () {
//   //   file = this.files[0];
//   //   // 圖片才處理
//   //   if (file && file.type.indexOf("image") == 0) {
//   //     fileReader = new FileReader();
//   //     fileReader.onload = getFileInfo;
//   //     fileReader.readAsDataURL(file);
//   //   }
//   // });

//   // function getFileInfo(evt) {
//   //   dataUrl = evt.target.result,

//   //     // 取得圖片
//   //     img.src = dataUrl;
//   // }

//   // 圖片載入後
//   // img.onload = function () {
//   //   let width = this.width, // 圖片原始寬度
//   //     height = this.height, // 圖片原始高度
//   //     imgNewHeight = imgNewWidth * height / width, // 圖片新高度
//   //     html = "",
//   //     newImg;

//   //   // 顯示預覽圖片
//   //   // html += "<img src='" + dataUrl + "'/>";
//   //   // html += "<p>這裡是原始圖片尺寸 " + width + "x" + height + "</p>";
//   //   // html += "<p>檔案大小約 " + Math.round(file.size / 1000) + "k</p>";
//   //   // $("#oldImg").html(html);

//   //   // 使用 canvas 調整圖片寬高
//   //   canvas.width = imgNewWidth;
//   //   canvas.height = imgNewHeight;
//   //   context.clearRect(0, 0, imgNewWidth, imgNewHeight);

//   //   // 調整圖片尺寸
//   //   context.drawImage(img, 0, 0, imgNewWidth, imgNewHeight);

//   //   // 顯示新圖片
//   //   newImg = canvas.toDataURL("image/jpeg", compressRatio);
//   //   html = "";
//   //   html += "<img src='" + newImg + "'/>";
//   //   // html += "<p>這裡是新圖片尺寸 " + imgNewWidth + "x" + imgNewHeight + "</p>";
//   //   // html += "<p>檔案大小約 " + Math.round(0.75 * newImg.length / 1000) + "k</p>"; // 出處 https://stackoverflow.com/questions/18557497/how-to-get-html5-canvas-todataurl-file-size-in-javascript
//   //   $(`#newImg${time}`).html(html);

//   //   // canvas 轉換為 blob 格式、上傳
//   //   canvas.toBlob(function (blob) {
//   //     // 輸入上傳程式碼
//   //   }, "image/jpeg", compressRatio);
//   //   console.log(newImg.value);
//   // };
// }
function deleteItem() {
  result.removeChild(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
}
function initMeetingTime() {
  let meetingTime = document.getElementById('meeting-time')
  let date = new Date(+new Date() + 8 * 3600 * 1000 + 60 * 60 *1000).toISOString()
  let formatTime = date.substring(0, date.lastIndexOf(':'))
  meetingTime.value = formatTime
  meetingTime.min = formatTime
}
//選擇付款方式
function paymentPage() {
  // $('.mission').hide()
  // $('.payment').show()
  let oShippingAddress = input1.value
  let oDestinationAddress = input2.value
  let oFee = document.querySelector('#fee').value
  let oPrice = document.querySelector('#price').value
  let oDeadLine = document.querySelector('#meeting-time').value
  oDeadLine = oDeadLine.replace(/T/g, ' ')
  let oOrderType = document.querySelector('#radio:checked').value
  let oComment = document.querySelector('#talk').value
  let items = []
  re = /^\d+$/;
  for (let j = 0; j < i; j++) {
    let brand = document.querySelector(`#brand${j}`).value
    let detail = document.querySelector(`#detail${j}`).value
    let quantity = document.querySelector(`#quantity${j}`).value
    if (brand == "") {
      alert("請輸入產品名稱!!");
      brand.focus();
      return (false);
    } if (detail == "") {
      alert("請輸入產品細項");
      detail.focus();
      return (false);
    } if (!re.test(quantity)) {
      alert("請輸入購買數量");
      quantity.focus();
      return (false);
    }

    items.push({
      oBrand: brand,
      oDetail: detail,
      oQuantity: quantity,
    })
  }
  
  if (oShippingAddress == "") {
    alert("請輸入需求起點");
    oShippingAddress.focus();
    return (false);
  } if (oDestinationAddress == "") {
    alert("請輸入需求終點");
    oDestinationAddress.focus();
    return (false);
  } if (!re.test(oFee)) {
    alert("請輸入跑腿費");
    oFee.focus();
    return false;
  } if (!re.test(oPrice)) {
    alert("請輸入預估價格");
    oPrice.focus();
    return false;
  } if (oComment == "") {
    alert("請輸入留言內容!!");
    oComment.focus();
    return (false);
  } if (items.length == 0) {
    alert("請新增至少一項產品");
    items.focus();
    return (false);
  }
  let body = {
    oShippingAddress: oShippingAddress,
    oDestinationAddress: oDestinationAddress,
    oFee: oFee,
    oPrice: oPrice,
    oDeadLine: oDeadLine,
    oOrderType: oOrderType,
    oComment: oComment,
    item: items
  }
  console.log(body);
  fetch('add',
    { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })
    .then(res => res.text())
    .then(formHtml => {
      console.log(formHtml)
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    })

}
function insertInfo() {
  let searchInputFrom = document.getElementById(`searchInputFrom`)
  searchInputFrom.value = `台灣台北市中正區忠孝東路一段全聯福利中心 中正華山店`
  let searchInputTo = document.getElementById(`searchInputTo`)
  searchInputTo.value = `台灣台北市大安區新生南路一段光華館`
  if (i == 1) {
    let brand0 = document.getElementById(`brand0`)
    brand0.value = `舒潔衛生紙`
    let detail0 = document.getElementById(`detail0`)
    detail0.value = `抽取式`
    let quantity0 = document.getElementById(`quantity0`)
    quantity0.value = `2`
    let talk = document.getElementById(`talk`)
    talk.value = `舒潔衛生紙 120抽10包裝`
    let fee = document.getElementById(`fee`)
    fee.value = `30`
    let price = document.getElementById(`price`)
    price.value = `500`
  } if (i == 2) {
    let brand0 = document.getElementById(`brand0`)
    brand0.value = `舒潔衛生紙`
    let detail0 = document.getElementById(`detail0`)
    detail0.value = `抽取式`
    let quantity0 = document.getElementById(`quantity0`)
    quantity0.value = `2`
    let brand1 = document.getElementById(`brand1`)
    brand1.value = `飛柔洗髮乳`
    let detail1 = document.getElementById(`detail1`)
    detail1.value = `1L`
    let quantity1 = document.getElementById(`quantity1`)
    quantity1.value = `2`
    let talk = document.getElementById(`talk`)
    talk.value = `舒潔衛生紙 10包裝,飛柔洗髮乳 去頭皮屑熱油`
    let fee = document.getElementById(`fee`)
    fee.value = `40`
    let price = document.getElementById(`price`)
    price.value = `800`
  } if (i == 3) {
    let brand0 = document.getElementById(`brand0`)
    brand0.value = `舒潔衛生紙`
    let detail0 = document.getElementById(`detail0`)
    detail0.value = `抽取式`
    let quantity0 = document.getElementById(`quantity0`)
    quantity0.value = `2`
    let brand1 = document.getElementById(`brand1`)
    brand1.value = `飛柔洗髮乳`
    let detail1 = document.getElementById(`detail1`)
    detail1.value = `1L`
    let quantity1 = document.getElementById(`quantity1`)
    quantity1.value = `2`
    let brand2 = document.getElementById(`brand2`)
    brand2.value = `Biore淨嫩沐浴乳`
    let detail2 = document.getElementById(`detail2`)
    detail2.value = `1L`
    let quantity2 = document.getElementById(`quantity2`)
    quantity2.value = `2`
    let talk = document.getElementById(`talk`)
    talk.value = `舒潔衛生紙 10包裝,飛柔洗髮乳 去頭皮屑熱油,Biore淨嫩沐浴乳 木蘭與麝檀香`
    let fee = document.getElementById(`fee`)
    fee.value = `50`
    let price = document.getElementById(`price`)
    price.value = `1100`
  }
}

// GoogleMap part

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


//define calcRoute function
function calcRoute() {
  //create request
  let request = {
    origin: document.getElementById("searchInputFrom").value,
    destination: document.getElementById("searchInputTo").value,
    travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
    unitSystem: google.maps.UnitSystem.METRIC   //距離單位
  }
  //pass the request to the route method
  directionsService.route(request, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {

      //Get distance and time
      const output = document.querySelector('#output');
      output.innerHTML =
        "<div class='alert-info'>起點： " + document.getElementById("searchInputFrom").value +
        ".<br />終點： " + document.getElementById("searchInputTo").value +
        ".<br /> 實際距離 <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text +
        "<br />預估抵達時間 <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + "</div>";
      //display route
      directionsDisplay.setDirections(result);
    } else {
      //delete route from map
      directionsDisplay.setDirections({ routes: [] });
      //center map in 中正區
      map.setCenter(myLatLng);

      //show error message
      output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> 開車無法抵達</div>";
    }
  });

}

//create autocomplete objects for all inputs
// let options = {
//     types: ['(cities)']
// }


let autocomplete1 = new google.maps.places.Autocomplete(input1);
autocomplete1.bindTo('bounds', map);
let autocomplete2 = new google.maps.places.Autocomplete(input2);
autocomplete2.bindTo('bounds', map);
