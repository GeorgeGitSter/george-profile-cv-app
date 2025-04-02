import React from 'react'
import SilverWolf from './../assets/SilverWolf.jpg'


function MyPicture2() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px'
        }}>
            <img src={SilverWolf} style={{
                borderRadius: '30px',
                width: '800px'
            }}
                alt="SilverWolf" />
        </div>
    )
}

export default MyPicture2