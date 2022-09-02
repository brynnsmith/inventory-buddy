const deleteBtn = document.querySelectorAll('.del')
const invItem = document.querySelectorAll('.invItem')
const submitQuantity = document.querySelector('submitQuantity');

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteItem)
})

submitQuantity.addEventListener("click", setQuantity)

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
    const newQuantity = this.parentNode.dataset.id
    
    try{
        const response = await fetch('invItems/setQuantity', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'quantity': newQuantity
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}