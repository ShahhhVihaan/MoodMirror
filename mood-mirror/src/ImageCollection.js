import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

function ImageCollection() {
    const camInstance = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = camInstance.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [camInstance]);
    return (
        <div className="container">
            <Webcam height={window.innerHeight} width={window.innerWidth} ref={camInstance} />
        </div>
    )
}

export default ImageCollection;