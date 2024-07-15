document.getElementById("sbm").addEventListener("click",function(event){
    event.preventDefault();

    let city=document.getElementById("inp-city").value;
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=217d9466fcece181f108ef7574f237b4`;

    fetch(api).then((res)=>res.json()).then((data)=>{
        document.getElementById("res").innerHTML=data.weather[0].main;


        let icon=document.getElementById("icon");

        let url= "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

        icon.src=url;
    });

});