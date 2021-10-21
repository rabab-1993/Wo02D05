

$("#container").append(`<div class="input-group mb-3">
<input type="text" class="form-control inp" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2">
<button class="btn btn-outline-secondary" id="button-addon2">Add</button>
</div>`)
$("#container").append(`<ul></ul>`)



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

$("#container").append(`<h2>You have ${lists.length} todos left</h2>`)
$("#container").append(`<button class="bi bi-trash-fill">clear list</button>
<button class="bi bi-trash-fill">clear completed</button`)

const add = () =>{
    let inputVal = $(".inp").val();
    lists.push(inputVal)
    
    renderList()
}

$(".btn").click(add)

// delete 
let del = (event) => {
    let tar = $(event.wich);
    remove(); 
    console.log(tar); 
}
$(".bi-trash-fill").click(del)

// 






