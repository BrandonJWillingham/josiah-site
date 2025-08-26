import Image from "next/image"


export default function bassPage (){

    return(
        <>
        <div className="bassBioContainer" style={{display:"flex",justifyContent:"",width:"100%", marginBottom:"clamp(2rem,3rem + 1vw, 5rem)"}}>
            <div className="bassBioImg" style={{position:"relative", width: "clamp(250px, calc(-64.364px + 40.303vw), 516px)",height: "clamp(300px, 45vw, 465px)"}}>
                <Image  style={{borderRadius:"12px"}}src={"/kidbass.png"} fill alt="10 year old josiah in the Church band"/>
            </div>
            <p className="bassBio" >
                I started young—my dad was the lead musician at our church—so he put me in piano lessons at five. At eight, he handed me my first bass, a classic Ibanez GSR200. That&rsquo;s where I found my gospel foundation: James Hall, Hezekiah Walker, Fred Hammond, Kirk Franklin, T.D. Jakes, Chicago Mass Choir, and more.<br/><br/>
                As I grew, R&B and soul pulled me in—Michael Jackson, Prince, The Gap Band, Alicia Keys, and especially Anderson .Paak—shaping a style built on a deep pocket, colorful harmony, and song-first instincts. Today I gig across New York and serve as the house bassist at Liberty Pentecostal, bringing tight groove and tasteful melody to every stage and session.
            </p>
        </div>

        <div>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <video
                src="SageandCrowe.mp4"
                controls
                playsInline     // REQUIRED on iOS to avoid full-screen
                muted  
                preload="metadata"
                style={{ width:"clamp(270px, calc(-50px + 95vw ), 950px)",alignSelf:"center", height: "auto" , borderRadius: 12 }}
                />
                <h2 style={{width:"fit-content",alignSelf:"center",padding:"clamp(2rem,3rem + 1vw, 5rem)",fontSize:"clamp(.1rem, .4rem + 1vw ,1.5rem)"}}>
                    Sage And The Crowe at Baby&rsquo;s Alright
                </h2>
                 <video
                src="Dajah.mp4"
                controls
                playsInline     // REQUIRED on iOS to avoid full-screen
                muted 
                preload="metadata"
                style={{ width:"clamp(270px, calc(-50px + 95vw ), 950px)",alignSelf:"center", height: "auto" , borderRadius: 12 }}
                />
                <h2 style={{width:"fit-content",alignSelf:"center",padding:"clamp(2rem,3rem + 1vw, 5rem)",fontSize:"clamp(.1rem, .4rem + 1vw ,1.5rem)"}}>
                    Dajah Dorne at Soho House
                </h2>     
            </div> 
        </div>
 
        <div className="reelsCont no-scrollbar">
            <video
                className="reel"
                src="SaxLick.mp4"
                controls
                playsInline     // REQUIRED on iOS to avoid full-screen
                muted 
                preload="metadata"
            />
            <video
                className="reel"
                src="WinnersCircle.mp4"
                controls
                playsInline     // REQUIRED on iOS to avoid full-screen
                muted 
                preload="metadata"
            />
            <video
                className="reel"
                src="wonderfulWorld.mp4"
                controls
                playsInline     // REQUIRED on iOS to avoid full-screen
                muted 
                preload="metadata"
            />
            <video
                className="reel"
                src="overflow.mp4"
                controls
                playsInline     // REQUIRED on iOS to avoid full-screen
                muted 
                preload="metadata"
            />
            <video
                className="reel"
                src="throughTheWire.mp4"
                controls
                playsInline     // REQUIRED on iOS to avoid full-screen
                muted 
                preload="metadata"
            />
        </div>

        <div className="hide-on-mobile"style={{marginTop:"clamp(1rem,3rem,10rem)"}}>
            <div style={{display:"flex",justifyContent:"space-around", padding:"30px"}}>
                <h3>
                    4 x 10 Ampeg Cab
                </h3>
                <h3>
                    2 x 10 Galenkruger Cabinet
                </h3>
                <h3>
                    Sondary Compressor pedal
                </h3>
            </div>

            <div style={{display:"flex", justifyContent:"space-around", padding:"30px"}}>
                <h3>
                    Mark Bass Head
                </h3>
                <h3>
                    10in Cylinder Mark bass unit
                </h3>
            </div>
        </div>
        <div className="mobile-flex" style={{ justifyContent:"center",flexDirection:"column",width:"100%",alignContent:"center",marginTop:"30px"}} >
            <h3 style={{width:"fit-content", alignSelf:"center",marginBottom:"10px"}}>
                4 x 10 Ampeg Cab
            </h3>
            <h3 style={{width:"fit-content", alignSelf:"center",marginBottom:"10px"}}>
                2 x 10 Galenkruger Cabinet
            </h3>
            <h3 style={{width:"fit-content", alignSelf:"center",marginBottom:"10px"}}>
                Sondary Compressor pedal
            </h3>
            <h3 style={{width:"fit-content", alignSelf:"center",marginBottom:"10px"}}>
                Mark Bass Head
            </h3>
            <h3 style={{width:"fit-content", alignSelf:"center",marginBottom:"10px"}}>
                10in Cylinder Mark bass unit
            </h3>
        </div>
        </>

    )
}