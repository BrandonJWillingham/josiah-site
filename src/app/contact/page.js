import { ContactForm } from "../components.js/utils"


export default function contact(){

    return(
        <>
            <div className="mobileCenter" style={{marginLeft:"clamp(5px, calc(-361.364px + 46.9697vw), 315px)", marginBottom:"30px"}}>
                <p style={{marginBottom:"10px"}}>
                    New York
                </p>
                <a style={{paddingLeft:"clamp(5px, calc(-361.364px + 46.9697vw), 215px)"}} href="mailto:Edgar@crawfordmodels.com?subject=Inquiry%20from%20Josiah's%20site">
                    Edgar@crawfordmodels.com
                </a>
            </div>
            
            <div className="mobileCenter" style={{marginLeft:"clamp(5px, calc(-361.364px + 46.9697vw), 315px)", marginBottom:"30px"}}>
                <p style={{marginBottom:"10px"}}>
                    Los Angeles
                </p>
                <a style={{paddingLeft:"clamp(5px, calc(-361.364px + 46.9697vw), 215px)"}} href="mailto:oly@stormmanagement-la.com?subject=Inquiry%20from%20Josiah's%20site">
                    Oly@stormmanagement-la.com
                </a>
            </div>

            <div className="mobileCenter" style={{marginLeft:"clamp(5px, calc(-361.364px + 46.9697vw), 315px)",marginBottom:"50px"}}>
                <p style={{marginBottom:"30px"}}>
                    Live/Session bass
                </p>
                <div>
                    <ContactForm/>
                </div>
            </div>
        </>
    )
}