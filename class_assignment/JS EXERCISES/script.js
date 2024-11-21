let count = 0;
document.getElementById("clickBtn").addEventListener(`click`, () =>{

    count++;
    alert(`You clicked the button ${count} times`);
}
);
//color
document.getElementById('text').addEventListener('click', ()=> {
    document.getElementById('text').style.color = 'magenta';
  });

  //toggler
  document.getElementById('toggleBtn').addEventListener('click' , () =>{
    const div = document.getElementById('toggleDiv');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
});

//form validating
document.getElementById('myForm').addEventListener('submit' , function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
     
    const errors =[];
    if (!name) {
        errors.push("Name cannot be empty");
    }
        if (!email.includes('@')){
            errors.push("email must contain '@'.")
        }
        document.getElementById('errorMessage').innerHTML = errors.join(' ');
    }
);

//list item
document.getElementById('addBtn').addEventListener('click', () =>{
    const input= document.getElementById('input');
    const newItem = input.value;
    if(newItem){
        const li = document.createElement('li');
        li.textContent = newItem;

        document.getElementById('itemList').appendChild(li);
        input.value = '';
    }
});

//timer
let timeleft = 10;
const timeDisplay = document.getElementById('timer');
const countdown = setInterval(() =>{
    timeleft--;
    timeDisplay.textContent = timeleft;
    if(timeleft <=0){
        clearInterval(countdown);
        alert("Time is uppp");
    }
}, 1000);

