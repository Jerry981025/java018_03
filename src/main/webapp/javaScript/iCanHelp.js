

function doFirst() {
   
    var cheak =  document.getElementById('cheak')
    cheak.addEventListener('click', function () { 
        cheak123()
      })
	
}
function cheak123() {
    fetch('http://localhost:8080/java018_03/order/test')
		.then(res =>  res.json() )
        .then(res => { console.log(res) })
}
window.addEventListener('load', doFirst)
