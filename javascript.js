const bars = document.getElementsByClassName("bar");
const barsDisplay = document.getElementsByClassName("bar-display-value")
console.log(barsDisplay)
let date = new Date();
let day = date.getDay(); //sun=0, sat=6
let data_array = [];

const getDate = (date) => {
    let current_date_index = date-1;
    if(current_date_index < 0){
        current_date_index = 6;
    }

    return current_date_index;
}

const assignData = (array) => {
    
    for (dataIndex in array){
        bars[dataIndex].style.height=(`${(array[dataIndex].amount)*2.5}px`);
    }
    console.log(getDate(day));
    bars[getDate(day)].style.backgroundColor = ("rgb(118, 181, 188)")
}

const assignHoverInteraction = (array) =>{
    for(let i=0; i<bars.length; i++){
        let currentBar = document.getElementById(i)
        
        currentBar.addEventListener("mouseover",(event)=>{
            event.target.style.opacity = ("80%");
            (barsDisplay[(event.target.id)]).style.display = ("block");
            (barsDisplay[(event.target.id)]).innerHTML = (`$${array[event.target.id].amount}`)
        })
    
        currentBar.addEventListener("mouseout",(event)=>{
            event.target.style.opacity = ("100%");
            (barsDisplay[(event.target.id)]).style.display = ("none");
        })
    }    
}


fetch("data.json")
.then(response =>{
    return response.json();
}).then(data =>{
    data_array = data;
    console.log(data_array);
    assignData(data_array);
    assignHoverInteraction(data_array);
})





