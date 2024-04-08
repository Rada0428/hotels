let section = document.querySelector('.rooms')
let url = "https://hotelbooking.stepprojects.ge/api/Rooms/GetAll"
let header = document.querySelector("h1")

fetch(url)
.then(data => data.json())
.then(response => renderer(response))



function renderer(itemList){
    console.log(itemList);
    
    if(header.innerHTML == "The Biltmore Hotel Tbilisi"){

    itemList.forEach(item =>{

       

      if(item.hotelId == "1")
        section.innerHTML += `
        <div class="card" style="width: 18rem;">
<img src="${item.images[0].source}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${item.name}</h5>
  <h6 class="card-title">Maximum Guests: ${item.maximumGuests}</h6>
  <h6 class="card-title">Price Per Nigh: ${item.pricePerNight}$</h6>
  
  
  
  <a href="#" class="btn btn-primary">Book a room</a>
</div>
</div>
        
        `;
   
    } )
    }
   
    
    if(header.innerHTML == "Courtyard by Marriott Tbilisi"){
    
      itemList.forEach(item =>{
        if(item.hotelId == "2")
          section.innerHTML += `
          <div class="card" style="width: 18rem;">
<img src="${item.images[0].source}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${item.name}</h5>
  <h6 class="card-title">Maximum Guests: ${item.maximumGuests}</h6>
  <h6 class="card-title">Price Per Nigh: ${item.pricePerNight}$</h6>
  
  <a href="#" class="btn btn-primary">Book a room</a>
</div>
</div>
          
          `;
      
      } )
      }
    
      
    
        if(header.innerHTML == "Radisson Blu Iveria Hotel Tbilisi"){
    
          itemList.forEach(item =>{
            if(item.hotelId == "3")
              section.innerHTML += `
              <div class="card" style="width: 18rem;">
<img src="${item.images[0].source}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${item.name}</h5>
  <h6 class="card-title">Maximum Guests: ${item.maximumGuests}</h6>
  <h6 class="card-title">Price Per Nigh: ${item.pricePerNight}$</h6>
  
  <a href="#" class="btn btn-primary">Book a room</a>
</div>
</div>
              
              `;
          
          } )
          }
    
    }
    