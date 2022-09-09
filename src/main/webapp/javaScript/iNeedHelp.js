let i = 0;
function doFirst(){
    // 先跟 HTML 畫面產生關聯
    loadButton = document.getElementById('loadButton')   
    result = document.getElementById('result')
    initMeetingTime()

    // 再建事件聆聽功能
    loadButton.addEventListener('click',function(){
        createItems()
    })
}
function createItems(){
    i++;
    // accordion item
    let accordion = document.createElement('div')
    accordion.setAttribute('class','accordion')
    accordion.setAttribute('id','accordionExample')

    let accordionItem = document.createElement('div')
    accordionItem.setAttribute('class','accordion-item')

    let accordionHeader = document.createElement('h2')
    accordionHeader.setAttribute('class','accordion-header')
    accordionHeader.setAttribute('id','headingOne')
    accordionHeader.setAttribute('data-bs-toggle','tooltip')
    accordionHeader.setAttribute('title','')

    let accordionButton = document.createElement('button')
    accordionButton.setAttribute('class','accordion-button')
    accordionButton.setAttribute('type','button')
    accordionButton.setAttribute('data-bs-toggle','collapse')
    accordionButton.setAttribute('data-bs-target',`#panelsStayOpen-collapse${i}`)
    accordionButton.setAttribute('aria-expanded','true')
    accordionButton.setAttribute('aria-controls',`panelsStayOpen-collapse${i}`)
    accordionButton.innerText = `購買產品${i}`
    

    let accordionCollapse = document.createElement('div')
    accordionCollapse.setAttribute('id',`panelsStayOpen-collapse${i}`)
    accordionCollapse.setAttribute('class','accordion-collapse collapse show')
    accordionCollapse.setAttribute('aria-labelledby','headingOne')
    accordionCollapse.setAttribute('data-bs-parent','#accordionExample')

    let accordionBody = document.createElement('div')
    accordionBody.setAttribute('class','accordion-body ')

    accordionHeader.appendChild(accordionButton)
    accordionItem.appendChild(accordionHeader)
    
    accordionCollapse.appendChild(accordionBody)
    accordionItem.appendChild(accordionCollapse)

    accordion.appendChild(accordionItem)
    result.appendChild(accordion)
    

    //item
    let item = document.createElement('div')
    item.setAttribute('class','item')
    accordionBody.appendChild(item)

    // brand
    let brandDiv = document.createElement('div')
    brandDiv.setAttribute('class','col-12 brandDiv input-group mb-1')

    let brandSpan = document.createElement('span')
    brandSpan.setAttribute('class','brandSpan input-group-text')
    brandSpan.innerText = '產品名稱'

    let brandInput = document.createElement('input')
    brandInput.setAttribute('id',`brand${i}`)
    brandInput.setAttribute('class','brandInput form-control')
    brandInput.setAttribute('type','text')


    brandInput.addEventListener('change', function() {
        accordionButton.innerText = brandInput.value
    })

    brandDiv.appendChild(brandSpan)
    brandDiv.appendChild(brandInput)
    item.appendChild(brandDiv)

    //detail
    let detailDiv = document.createElement('div')
    detailDiv.setAttribute('class','detailDiv input-group mb-1')

    let detailSpan = document.createElement('span')
    detailSpan.setAttribute('class','detailSpan input-group-text')
    detailSpan.innerText = '產品細項'

    let detailInput = document.createElement('input')
    detailInput.setAttribute('id',`detail${i}`)
    detailInput.setAttribute('class','detailInput form-control')
    detailInput.setAttribute('type','text')
    detailInput.setAttribute('placeholder','ex：大小、尺寸、容量、口味')

    detailInput.addEventListener('change', function() {
        accordionHeader.title = '產品細項: ' + detailInput.value + '\n'
    })

    detailDiv.appendChild(detailSpan)
    detailDiv.appendChild(detailInput)
    item.appendChild(detailDiv)

    //quantity
    let quantityDiv = document.createElement('div')
    quantityDiv.setAttribute('class','quantityDiv input-group mb-1 col-6')

    let quantitySpan = document.createElement('span')
    quantitySpan.setAttribute('class','quantitySpan input-group-text')
    quantitySpan.innerText = '產品數量'

    let quantityInput = document.createElement('input')
    quantityInput.setAttribute('id',`quantity${i}`)
    quantityInput.setAttribute('class','quantityInput form-control')
    quantityInput.setAttribute('type','number')
    quantityInput.setAttribute('min','0')

    quantityInput.addEventListener('change', function() {
        accordionHeader.title += '產品數量: '+ quantityInput.value + '\n'
    })

    quantityDiv.appendChild(quantitySpan)
    quantityDiv.appendChild(quantityInput)
    item.appendChild(quantityDiv)
    
    //上傳圖片
    let imgDiv = document.createElement('div')
    imgDiv.setAttribute('class','imgDiv input-group mb-1')
    
    let imgLabel = document.createElement('label')
    imgLabel.setAttribute('class','imgLabel input-group-text')
    imgLabel.innerText = '上傳圖片'
    
    let time = new Date().getTime();
    let imgInput = document.createElement('input');
    imgInput.setAttribute('id',`upload_img${time}`)
    imgInput.setAttribute('class','form-control')
    imgInput.setAttribute('type','file')
    
    let newImgDiv = document.createElement('div')
    newImgDiv.setAttribute('id',`newImg${time}`)
    
    let newImg = document.createElement('img')
    newImg.setAttribute('id',`newImg${i}`)
    newImgDiv.setAttribute('class','newImg')
    
    imgDiv.appendChild(imgLabel)
    imgDiv.appendChild(newImg)
    imgDiv.appendChild(newImgDiv)
    imgDiv.appendChild(imgInput)
    item.appendChild(imgDiv)
    initUploadPicButton(time);
    
    //deleteButton
    let deleteDiv = document.createElement('div')
    deleteDiv.setAttribute('class','deleteDiv')
    
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('id','deleteButton')
    deleteButton.setAttribute('class','btn btn-secondary')
    deleteButton.setAttribute('type','button')
    deleteButton.innerText = '刪除'
    deleteButton.addEventListener('click',deleteItem)
    
    deleteDiv.appendChild(deleteButton)
    item.appendChild(deleteDiv)
}
function initUploadPicButton(time) {
    let compressRatio = 0.8, // 圖片壓縮比例
    imgNewWidth = 30, // 圖片新寬度
    img = new Image(),
    canvas = document.createElement("canvas"),
    context = canvas.getContext("2d"),
    file, fileReader, dataUrl;

// 上傳檔案
$(`#upload_img${time}`).change(function () {
    file = this.files[0];
    // 圖片才處理
    if (file && file.type.indexOf("image") == 0) {
        fileReader = new FileReader();
        fileReader.onload = getFileInfo;
        fileReader.readAsDataURL(file);
    }
});

function getFileInfo(evt) {
    dataUrl = evt.target.result,

        // 取得圖片
        img.src = dataUrl;
}

// 圖片載入後
img.onload = function () {
    let width = this.width, // 圖片原始寬度
        height = this.height, // 圖片原始高度
        imgNewHeight = imgNewWidth * height / width, // 圖片新高度
        html = "",
        newImg;

    // 顯示預覽圖片
    // html += "<img src='" + dataUrl + "'/>";
    // html += "<p>這裡是原始圖片尺寸 " + width + "x" + height + "</p>";
    // html += "<p>檔案大小約 " + Math.round(file.size / 1000) + "k</p>";
    // $("#oldImg").html(html);

    // 使用 canvas 調整圖片寬高
    canvas.width = imgNewWidth;
    canvas.height = imgNewHeight;
    context.clearRect(0, 0, imgNewWidth, imgNewHeight);

    // 調整圖片尺寸
    context.drawImage(img, 0, 0, imgNewWidth, imgNewHeight);

    // 顯示新圖片
    newImg = canvas.toDataURL("image/jpeg", compressRatio);
    html = "";
    html += "<img src='" + newImg + "'/>";
    // html += "<p>這裡是新圖片尺寸 " + imgNewWidth + "x" + imgNewHeight + "</p>";
    // html += "<p>檔案大小約 " + Math.round(0.75 * newImg.length / 1000) + "k</p>"; // 出處 https://stackoverflow.com/questions/18557497/how-to-get-html5-canvas-todataurl-file-size-in-javascript
    $(`#newImg${time}`).html(html);

    // canvas 轉換為 blob 格式、上傳
    canvas.toBlob(function (blob) {
        // 輸入上傳程式碼
    }, "image/jpeg", compressRatio);
    console.log(newImg.value);
};
}
function deleteItem(){
    result.removeChild(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
}
function initMeetingTime() {
    const meetingTime = document.getElementById('meeting-time')
    const date = new Date(+new Date() + 8 * 3600 * 1000).toISOString()
    const formatTime = date.substring(0, date.lastIndexOf(':'))
    meetingTime.value = formatTime
    meetingTime.min = formatTime
}
window.addEventListener('load',doFirst)