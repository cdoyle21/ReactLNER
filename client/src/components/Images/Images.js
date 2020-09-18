import React from 'react';

export default props =>
    props.images.map((image, i) =>
        <div key={i} className="fadein">
            <div
                onClick={() => props.removeImage(image.public_id)}
                className="delete"
            >
                    <i class="fas fa-times-circle"></i>
            </div>
            <img src={image.secure_url} alt="" />
        </div>
    )