const deleteBtn = document.querySelectorAll('.del')
const invItem = document.querySelectorAll('.invItem')
const changeQuantity = document.querySelectorAll('.changeQuantity')

Array.from(deleteBtn).forEach((el) =>{
    el.addEventListener('click', deleteItem)
})

Array.from(changeQuantity).forEach((el) => {
    el.addEventListener("click", setQuantity)
})

async function deleteItem(){
    const invItem = this.parentNode.dataset.id
    try{
        const response = await fetch('invItems/deleteInvItem', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'itemIdFromJSFile': invItem
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function setQuantity(){
    const invItem = this.parentNode.parentNode.dataset.id
    console.log(invItem);
    const quantity = parseInt(this.previousElementSibling.value)
    console.log(`quantity: ${quantity} typeof: ${typeof(quantity)}`)
    try{
        if(quantity >= 0){
        console.log(`quantity is ${quantity}`)
        const response = await fetch('invItems/setQuantity', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'itemIdFromJSFile': invItem,
                'quantity': quantity
            })
        })
        const data = await response.json()
        console.log(data)
    }
        console.log("this is what's logging to console")
        location.reload()
    }catch(err){
        console.log(err)
    }
}