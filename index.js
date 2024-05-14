import { menuArray } from './data.js'


const removeBtnClass = 'remove-btn'
const myOrders = []

 
feed.addEventListener('click', function(e) {
    if (menuArray[e.target.dataset.plusBtn] != null) {
        myOrders.push(menuArray[e.target.dataset.plusBtn])
        render()
    }
})
     

order.addEventListener('click', function(e) {
    if (menuArray[e.target.dataset.plusBtn] != null) {
        myOrders.splice(e.target.dataset.plusBtn, 1)
        render()
    }
})
     
     
function getFeedHtml() {
    
    let feedHtml = ""
    
    menuArray.forEach(function(menu) {
         feedHtml += `    
     
<div class="menu-items">
    <div class="menu-inner">
        <h2 class="emoji">${menu.emoji}</h2>
        <div>
            <h3 class="menu-name">${menu.name}</h3>
            <p class="ingredients">${menu.ingredients}</p>
            <p class="price">€${menu.price}</p>
        </div>   
            <i class="fa-solid fa-circle-plus" data-plus-btn=${menu.id}></i>       
        </div>     
    </div>
</div>   
`          
    })
    return feedHtml
}

   
function getOrderHtml() {

    if (myOrders.length == 0) return ''
     
    let orderHtml = ``
    let totalPrice = 0
    
    orderHtml += `<h3 class="your-order">Your order</h3>`

    myOrders.forEach(function(order, index) {
        
    totalPrice = totalPrice + order.price
    
       orderHtml += `   
                <div class="order-items">     
                    <h3 class="order-item">${order.name}</h3>
                    <button class="remove" id="remove-btn" data-plus-btn=${index} >remove</button>
                    <span class="align-right">
                        <p class="price">€${order.price}</p>
                    </span>    
                </div>`
    })
    
    orderHtml += `<div class="total-price">  
                    <h3 class="order-item">Total price:</h3>
                    <span class="align-right">
                    <p class="price">€${totalPrice}</p>
                    </span>
                </div>
                    
                <button class="purchase-btn" id="purchase-btn">Complete order</button>`
    
    return orderHtml    
}


function render(){
    document.getElementById('feed').innerHTML = getFeedHtml() 
    document.getElementById('order').innerHTML = getOrderHtml()
  
    
    const purchaseBtn = document.getElementById('purchase-btn')
    const modal = document.getElementById('modal')
    const modalCloseBtn = document.getElementById('modal-close-btn')
    
   if (document.getElementById('purchase-btn')) {
        purchaseBtn.addEventListener('click', function() {
            modal.style.display = 'inline'  
    })  
    }
    modalCloseBtn.addEventListener('click', function(){
        modal.style.display = 'none'
    }) 
}


render()

const payBtn = document.getElementById('pay-btn')
const payForm = document.getElementById('pay-form')

payForm.addEventListener('submit', function(e){
    e.preventDefault()
    modal.style.display = 'none'
})


payBtn.addEventListener('click', function() {
    
    const myOrders = []
    const inputNameEl = document.getElementById('name');
    const nameValue = inputNameEl.value;  
      
    const inputNumberEl = document.getElementById('cardNumber');
    const numberValue = inputNumberEl.value;
        
    const inputCvvEl = document.getElementById('cvvNumber');
    const cvvValue = inputCvvEl.value;
    
    
    if (nameValue !== '' && numberValue !== '' && cvvValue !== '' ) {
        let orderHtml = document.getElementById('order').innerHTML = `
        <div class="order-complete-details">
            <p>Thanks ${nameValue}! Your order is on its way!</p>
        </div>`
    } else {
        alert('Please fill in the required fields!')  
    }
}) 





  


 

