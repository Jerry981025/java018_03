//訂單列表
$(document).ready(function () {
    fetch('list').then(res => res.json()).then(res => {
        let orderList = ``
        orderList += `
        <div class="col-10">
            <table class="table table-bordered table-striped" style="text-align: center; line-height:50px">
                <thead>
                    <tr>
                        <th scope="col">訂單明細</th>
                        <th scope="col">訂單編號</th>
                        <th scope="col">提貨地址</th>
                        <th scope="col">運送地址</th>
                        <th scope="col">成立時間</th>
                        <th scope="col">總計</th>
                        <th scope="col">訂單狀態</th>
                        <th scope="col">評分</th>
                        <th scope="col">運送人員</th>
                        <th scope="col">取消訂單</th>
                    </tr>
                </thead>
                <tbody>`
        x = 0
        for (let i = 0; i < res.length; i++) {
            let oId = res[i].oId
            orderList += `
            <tr>
                <th scope="row" style="text-align: center;">
                    <button onclick="orderItem(${x})" class="btn btn-info">查詢</button>
                </th>
                <td>${res[i].oId}</td>
                <td>${res[i].oShippingAddress}</td>
                <td>${res[i].oDestinationAddress}</td>
                <td>${res[i].oTime}</td>
                <td>${res[i].oPrice + res[i].oFee}</td>
                <td>${res[i].oOrderStatus}</td>
                <td>`
            if (res[x].oRanking == 0) {
                orderList += `
                    <!-- Button trigger modal -->
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#rateModal${i}">給予評價</button>
                <!-- Modal -->
                <div class="modal fade" id="rateModal${i}" tabindex="-1" aria-labelledby="rateModalLabel${i}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="rateModalLabel${i}">給予評價</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div class="modal-body">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="1">
                                <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="2">
                                <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="3">
                                <label class="form-check-label" for="inlineRadio3">3</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="4">
                                <label class="form-check-label" for="inlineRadio3">4</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="5">
                                <label class="form-check-label" for="inlineRadio3">5</label>
                            </div>
                        </div>
                            <div class="modal-footer">
                                <button id=rateBtn${oId} onclick="rateOrder(${oId},${i})" class="btn btn-success refresh-butto">確定</button>
                            </div>
                        </div>
                    </div>
                </div>
                    `
            } else {
                orderList += `
                    ${res[i].oRanking}</td>`
            }
            orderList += `
                <td>${res[i].hId}</td>
                <td>`
            if (res[x].oOrderStatus === "未完成") {
                orderList += `
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">取消</button>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel${i}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel${i}">取消訂單</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div class="modal-body">確定要取消嗎?</div>
                            <div class="modal-footer">
                                <button id=cancelBtn${oId} onclick="cancelOrder(${oId})" class="btn btn-warning refresh-butto">確定</button>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
            orderList += `
                </td>
            </tr>`
            x++
        }
        orderList += ` 
                </tbody>
            </table> 
        </div>`
        $('#feedback').append(orderList)
    })
})
//訂單明細
function orderItem(x) {
    fetch('list').then(res => res.json()).then(res => {
        while (document.querySelector('#result').hasChildNodes()) {
            result.removeChild(result.firstChild)
        }
        orderDetail = ``
        orderDetail += `
        <div class="col-6">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">產品名稱</th>
                        <th scope="col">產品明細</th>
                        <th scope="col">購買數量</th>
                    </tr>
                </thead>
                <tbody>`
        for (let i = 0; i < res[x].items.length; i++) {
            orderDetail += `
                        <tr>
                            <th scope="row">${res[x].items[i].oBrand}</th>
                            <td>${res[x].items[i].oDetail} </td>
                            <td>${res[x].items[i].oQuantity} </td>
                        </tr>
                    `
        }
        orderDetail += `
                </tbody>
            </table> 
        </div>`
        $('#result').append(orderDetail)
    })
}
function cancelOrder(oId) {
    // console.log(oId);
    let body = oId
    fetch('cancelOrder',
        { method: 'PUT', headers: { 'content-type': 'application/json' }, body }).then((response) => response.text()).then(res => {
            window.location.reload();
        }).catch((error) => {
            console.log(`Error`);
        })
}
function rateOrder(oId,i) {
    let oRanking = document.querySelector(`#inlineRadio${i}:checked`).value
    console.log(oRanking);
    console.log(oId);
    let body = {
        oId: oId,
        oRanking: oRanking
    }
    fetch('rateOrder',
        { method: 'PUT', headers: { 'content-type': 'application/json' }, body:JSON.stringify(body) }).then((response) => response.text()).then(res => {
            window.location.reload();
        }).catch((error) => {
            console.log(`Error`);
        })
}