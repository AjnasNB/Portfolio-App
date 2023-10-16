import React, { useEffect } from 'react';

const AdSenseAd = () => {
    useEffect(() => {
        // Load the AdSense ad
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9147060575259672"
                data-ad-slot="5115374156"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
};

export default AdSenseAd;
