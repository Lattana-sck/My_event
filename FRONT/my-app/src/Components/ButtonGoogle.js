import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// or
// import { GoogleLogin } from 'react-google-login';


// const responseGoogle = (response) => {
    function responseGoogle(response){
        console.log(response);
        
        
        return(
            // ReactDOM.render(
            <div>
                <GoogleLogin
                clientId="947829777729-bh660r0kra1rlasd0mss6ioedum0u9ea.apps.googleusercontent.com"
                buttonText="Connecte toi avec Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />,
                {/* document.getElementById('googleButton') */}
                </div>
                );




  }


export default responseGoogle;