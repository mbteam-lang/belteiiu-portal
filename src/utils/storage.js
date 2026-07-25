import { useState } from 'react';

const ImageWithFallback = ({
    src,
    alt = "",
    fallback = "https://cdn.creativefabrica.com/2021/06/28/Image-photo-icon-Graphics-13989898-1-1-580x386.jpg",
    className = "",
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = (e) => {
        if (!hasError) {
            setImgSrc(fallback);
            setHasError(true);
            // Prevent infinite loop
            e.target.onerror = null;
        }
    };

    return (
        <img src={imgSrc} alt={alt} className={className} onError={handleError} {...props} />
    );
};

export default ImageWithFallback;