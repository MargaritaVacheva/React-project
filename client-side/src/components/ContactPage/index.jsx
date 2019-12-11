import React, { useState } from 'react';

const ContactPage = () => {
    const [isIframeLoaded, setIsIframeLoaded ] = useState(false);

    const handleLoad = () => {
        setIsIframeLoaded(true);
    }

    return (
        <div className="contact-map">
            <h4>Contact us! We are here:</h4>
            { !isIframeLoaded ? 
            <div>Loading...</div> : ''}
            <iframe id="map" title="contact-map" onLoad={handleLoad} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54454.27247199246!2d-147.43825899252107!3d64.7537432025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x51324d4f91f3e801%3A0x2840219de72fedd1!2sSanta%20Claus%20House!5e0!3m2!1sbg!2sbg!4v1575370329717!5m2!1sbg!2sbg" width="700" height="450" frameBorder="0" style={{border: '1px solid gray'}} allowFullScreen=""></iframe> 
        </div>
    );
}

export default ContactPage;