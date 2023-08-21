import React from 'react';
import './landing.css';
const Index = () => {
    return (
        <div className='topload'> 
            <img src="Banner-2.png"></img>
            <nav className="navbar">
                <div className='rightbtn'>
                    <button className='orderbtn'>START MY ORDER</button>
                    <img src="fb.png"></img>
                    <img src="instalogo.png"></img>
                    <img src="972132.png"></img>
                </div>
             
            </nav>
            <div className='midimage'>
                <div className='left'>
                    <h3>KFC</h3>
                    <hr></hr>
                    <p>Locate the nearest restaurant(s)</p>
                    <span className='search'>SEARCH NEARBY</span> <span className='advanced'>ADVANCED SEARCH</span>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control" type="search" placeholder="Search nearby restuarent bt locality" aria-label="Search"></input>
                    <button class="btn" type="submit"><i class="fa fa-search" aria-hidden="true"></i>Search</button>
                    </form>
                    
                    
                </div>
                <div className='right'>
                    <img src="KFC2.jpg"></img>
                    
                    
                </div>
                
            </div>
            <span className='e'>____----</span> <span className='e'>____----</span> <span className='e'>____----</span>
        </div>
    );
}

export default Index;
