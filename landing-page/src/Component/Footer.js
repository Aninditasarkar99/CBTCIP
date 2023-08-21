import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='uptop'>
                <div className='midsec'>
                <div className='lefton'>
                    <span>ABOUT KFC  </span> 
                    <span>CONTACT US  </span> 
                    <span>TERMS & CONDITIONS  </span>
                </div>
                <div className='righton'>
                    <div className='phone'><i class="fa fa-tablet" aria-hidden="true"></i>DOWNLOAD MOBILE APP</div>
                    <div>
                    <img src="google_play.png"></img>
                    <img src="app_store.png"></img>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='downline'>
                <div className='lefton'>
                <img src="fb.png"></img>
                    <img src="instalogo.png"></img>
                    <img src="972132.png"></img>
                </div>
                <div className='midtext'>
                    <h3>© COPYRIGHT 2023 KFC. ALL RIGHTS RESERVED.</h3>
                </div>
                <div className='rightext'>
                   <p>powerd by:<span className='lowtext'>SingleInterface</span></p>
                </div>

            </div>
            <span className='e'>____----</span> <span className='e'>____----</span> <span className='e'>____----</span>
            </div>
        </div>
    );
}

export default Footer;
