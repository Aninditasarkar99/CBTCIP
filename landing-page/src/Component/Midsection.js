import React from 'react';
import './landing.css';
const Midsection = () => {
    const shops=[
        {
          id:0,
          title:"KFC",

          place:"Subhash Nagar",

          address:" Shop No 27, 2nd Floor Pacific mall Subhash Nagar New Delhi - 110015",

          number:"+918042754444",

          time:"Opens at 11:00 AM",
        },
        {
            id:1,
            title:"KFC",

            place:"Saket",

            address:" Plot No 4, Ahluwalia House, Community Centre Saket New Delhi - 110017",

            number:"+918042754444",

            time:"Opens at 12:00 PM",
          },
          {
            id:2,
            title:"KFC",

            place:"Malviya Nagar",

            address:" No C5, Ground Floor Malviya Nagar New Delhi - 110017",

            number:"+918433989205",

            time:"Opens at 11:00 AM",
          }
    ]
    return (
        <div>
            <h1>KFC RESTUARENTS</h1>
            <div className='kfc'>
            <div className='leftside'>
            {
           
            shops.map((shop)=>(
              <div key={shop.id} className='main'>

                 <div className='top'>
                 <div className='card2'>
                 <i className=" logo fa fa-flag" aria-hidden="true"></i>
                  <h4>{shop.title}</h4>
                  </div>
                  <hr></hr>
                 
                  <div className='card2'>
                  <i class="logo2 fa fa-briefcase" aria-hidden="true"></i>
                  <p>{shop.place}</p>
                  </div>
                  <div className='card2 adds'>
                  <i class="logo2 fa fa-map-marker" aria-hidden="true"></i>
                   <span>{shop.address}</span>

                  </div  >
                  <div className='card2'>
                    <i class="logo2 fa fa-phone" aria-hidden="true"></i>
                    <p>{shop.number}</p>  
                    </div>
                    <div className='card2'>
                    <i class=" logo2 fa fa-clock-o" aria-hidden="true"></i>  
                    <p>{shop.time}</p>
                    </div> 
                 </div>

                 
                <div className='bottom'>
                   
                    
                    <div className='card3'>
                    <i class="logo3 fa fa-map-marker" aria-hidden="true"></i>
                    <p>Navigate</p>
                    </div>
                    <hr></hr>
                    <div className='card3'>
                    <i class=" logo3 fa fa-globe " aria-hidden="true"></i>
                    <p>Website</p>
                    </div>
                   <hr/>
                    <div className='card3'>
                    <i class=" logo3 fa fa-cart-plus" aria-hidden="true"></i>
                    <p>Order</p>
                    </div>   
                </div>
                 
                 
              </div>

            ))
            }

            </div>
            <div className='rightside'>
                    <img src="GoogleMapTA.webp"></img>
            </div>
            </div>
            <div className='linerow'>
                <p>States we are present in :</p>
                <span>Restaurants in Andhra Pradesh / Restaurants in Arunachal Pradesh / Restaurants in Assam / Restaurants in Bihar / Restaurants in Chandigarh / View More...</span>
            </div>
        </div>
    );
}

export default Midsection;
