

$("#container").append(`<div class="input-group mb-3">
<input type="text" class="form-control inp" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2">
<button class="btn btn-outline-secondary" id="button-addon2">Add</button>
</div>`)
$("#container").append(`<ul></ul>`)
$("#v")


// let inputVal = $(".inp").value;
let lists = [];



let renderList = () => {
    $("ul").html("")
    for (let index = 0; index < lists.length; index++) {
        $("ul").append(`<li>${lists[index]} 
        <button class="bi bi-trash-fill"></button>
        <button class="bi bi-arrow-repeat"></button>
        </li>`)
    }
}
renderList()


const add = () =>{
    let inputVal = $(".inp").val();
    lists.push(inputVal)
    
    renderList()
}

$(".btn").click(add)



