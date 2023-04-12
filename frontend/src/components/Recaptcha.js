import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = ({setRecaptcha}) => {

    const handleCaptcha = (value) => {
        setRecaptcha(value ? true : false); 
    }
    return <div>
        <ReCAPTCHA render="explicit" onChange={handleCaptcha} theme='dark' sitekey="6LfeS0UeAAAAABwKxS0T2o131ciVjOts8dmunk8Z"
        />
    </div>;
};

export default Recaptcha;