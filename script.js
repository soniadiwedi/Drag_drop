 const sortableList=document.querySelector(".sortable-list")
  const items=document.querySelectorAll(".item")
  items.forEach(el=>{
    el.addEventListener("dragstart",()=>{
      setTimeout(()=>el.classList.add("dragging"),0)
    })
     el.addEventListener("dragend",()=>el.classList.remove("dragging"))
  })


 
  const initSortableList=(e)=>{
    e.preventDefault()
    const draggingItem=sortableList.querySelector(".dragging")
    let siblings=[...sortableList.querySelectorAll(".item:not(.dragging)")]

    let nextSibling=siblings.find(sibling=>{
      return e.clientY<=sibling.offsetTop+sibling.offsetHeight/2
    })
   
     sortableList.insertBefore(draggingItem,nextSibling)
  }

   sortableList.addEventListener('dragover',initSortableList)
   sortableList.addEventListener('dragenter',e=>e.preventDefault())