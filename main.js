// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
const addBtn = document.querySelector("body")
addBtn.insertAdjacentHTML("beforebegin",'<input type="text" class="input"><button class="btn-add">Add</button>')
const addBtnHide = document.getElementById("list").insertAdjacentHTML("beforebegin",`<button class="btn-hide">Hide</button>`) 
const addBtnRemove = document.querySelector("body").insertAdjacentHTML("afterbegin",'<button class="btn-remove">Remove</button>')
// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
const inputEl = document.querySelector(".input")
const btnAdd = document.querySelector(".btn-add")
const ul =document.getElementById("list")
const btnRemove = document.querySelector(".btn-remove")
const btnHide = document.querySelector(".btn-hide")

btnAdd.addEventListener("click",function(){
    let value = inputEl.value
    if(!value){
        alert("Không để trống nội dung")
    return
    }else{
    ul.insertAdjacentHTML("beforeend",`<li>${value}</li>`)
    inputEl.value = "" 
    }
})
// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

btnRemove.addEventListener("click", function(){
    let liLast = document.querySelector("#list li:last-child")
    
    if(liLast){
        ul.removeChild(liLast)
    }
})
// Thêm 1 nút Hide trên đầu của danh sách ul

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
btnHide.addEventListener("click", function(){
    ul.classList.toggle("hide")

    if(ul.classList.contains("hide")){
        btnHide.innerText= "Show"
    } else {
        btnHide.innerText = "Hide"
    }
})