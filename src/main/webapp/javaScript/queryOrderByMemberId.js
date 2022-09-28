//訂單列表
$(document).ready(function () {
    fetch('http://localhost:8080/java018_03/order/list').then(res => res.json()).then(res => {
        let orderList = ``
        orderList += `
        <div class="container">
            <table class="table table-bordered table-striped">
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
                        </tr>
                        </thead>
                        <tbody>`
        x = 0
        for (let i = 0; i < res.length; i++) {
            orderList += `
            <tr>
            <th scope="row" style="text-align: center;">
            <button onclick="orderItem(${x})" class="btn btn-info">查詢</button></th>
            <td>${res[i].oId}</td>
            <td>${res[i].oShippingAddress}</td>
            <td>${res[i].oDestinationAddress}</td>
            <td>${res[i].oTime}</td>
            <td>${res[i].oPrice + res[i].oFee}</td>
            <td>${res[i].oOrderStatus}</td>
            <td>${res[i].oRanking}</td>
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
    fetch('http://localhost:8080/java018_03/order/list').then(res => res.json()).then(res => {
        while (document.querySelector('#result').hasChildNodes()) {
            result.removeChild(result.firstChild)
        }
        orderDetail = ``
        orderDetail += `
        <div class="col-8">
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