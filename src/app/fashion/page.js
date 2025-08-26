"use client";
import { ImageCard } from "../components.js/utils";
import Image from "next/image";
export default function fashionPage(){


    return(
        <>
        <div className="stagger">
            <div className="row">
            <ImageCard imgSrc={"/image1.jpg"} brand={"ONS"} alt={"campaign shot for ONS"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
            <ImageCard imgSrc={"/MoonJuice.jpg"} brand={"Moon Juice"} al    t={"Campaign for Moon Juice"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,375px)"} />
            <ImageCard imgSrc={"/DavidB.jpg"} brand={"David Beckham"} a lt={"Editorial Shot for David Beckham"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,375px)"} />
            </div >
            <div className="row">
            <ImageCard imgSrc={"/Uspa.JPG"} brand={"Us Polo Assn"} alt={" Valenties day campaign shot for US Polo Assn"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
            <ImageCard imgSrc={"/hollisterEccom.jpg"} brand={"Hollister"} alt={"Eccom work For hollister"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
            <ImageCard imgSrc={"/ReasonClothing.jpg"} brand={"Reason Clothing"} alt={"Eccom Campaign for Reason Clothing"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
            </div>
            <div className="row">
            <ImageCard imgSrc={"/Orange.jpg"} brand={"Orange Culture"} alt={"Walking for Orange Culture at African Diaspora runway Show"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
            <ImageCard imgSrc={"/Hanes.jpg"} brand={"Hanes"} alt={"Hanes summer catalogue"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
            <ImageCard imgSrc={"/sprayground.jpg"} brand={"Sprayground"} alt={"Sprayground Campaign "} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
            </div>  
        
        </div>
        <div className="mobile marquee" style={{ gap:"clamp(4px, 2.5vw, 24px)"}}>
            <div className="no-scrollbar track" style={{ display:"flex",gap:"clamp(4px, 2.5vw, 24px)",marginBottom:"clamp(4px, 2.5vw, 24px)"}}>
                <div className="content">
                    <ImageCard imgSrc={"/image1.jpg"} brand={"ONS"} alt={"campaign shot for ONS"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
                    <ImageCard imgSrc={"/MoonJuice.jpg"} brand={"Moon Juice"} al    t={"Campaign for Moon Juice"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,375px)"} />
                    <ImageCard imgSrc={"/DavidB.jpg"} brand={"David Beckham"} a lt={"Editorial Shot for David Beckham"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,375px)"} />
                    <ImageCard imgSrc={"/Orange.jpg"} brand={"Orange Culture"} alt={"Walking for Orange Culture at African Diaspora runway Show"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
                    <ImageCard imgSrc={"/Hanes.jpg"} brand={"Hanes"} alt={"Hanes summer catalogue"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
                    <ImageCard imgSrc={"/TrippleFat.jpg"} brand={"Tripple F.A.T Goose"} alt={"Eccom Campaign for Tripple Fat Goose"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />            
                    <ImageCard imgSrc={"/Mugzy.jpg"} brand={"Mugzy McFly"} alt={"Holiday social media campaign with Mugzy McFly"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />            
                </div>
           </div>
           <div className="trackRvs">
                <div  className="no-scrollbar content" style={{display:"flex", gap:"clamp(4px, 2.5vw, 24px)"}}>
                <ImageCard imgSrc={"/sprayground.jpg"} brand={"Sprayground"} alt={"Sprayground Campaign "} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} /> 
                <ImageCard imgSrc={"/Uspa.JPG"} brand={"Us Polo Assn"} alt={" Valenties day campaign shot for US Polo Assn"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
                <ImageCard imgSrc={"/hollisterEccom.jpg"} brand={"Hollister"} alt={"Eccom work For hollister"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
                <ImageCard imgSrc={"/ReasonClothing.jpg"} brand={"Reason Clothing"} alt={"Eccom Campaign for Reason Clothing"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />
                <ImageCard imgSrc={"/indi.jpg"} brand={"indi + Ashe"} alt={"Eccom Campaign for Indi + Ashe"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />            
                <ImageCard imgSrc={"/SurfSide.jpg"} brand={"Surf side supply"} alt={"Social Media Campagin for Surfside Supply"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />            
                <ImageCard imgSrc={"/tailory.jpg"} brand={"Tailory"} alt={"Runway for dog pound ft tailory"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.2273),300px)"} height={"clamp(100px,125px + 15vw,350px)"} />            
                </div>
           </div>
       
        </div>
        <div className="brandList hide" style={{justifyContent:"space-around",paddingTop:"50px",paddingBottom:"50px"}}>
            <h2 style={{}}>
                32 degrees <br/>
                AG Jeans<br/>
                Blank Jeans NYC<br/>
                Bloomingdales Live<br/>
                Bobs Store<br/>
                Buffalo Jeans<br/>
                Calvin Klein<br/>
                Chynna Mamawal<br/>
                Cult Of Individuality<br/>
                David Beckham<br/>
                Ed Hardy<br/>
                Free Country<br/>
                Hanes<br/>
                Hollister<br/>
            </h2>

            <h2>
                Hvman<br/>
                Indi + Ashe<br/>
                Jachs NY<br/>
                Kiss Cosmetics<br/>
                Krewe<br/>
                La Roche Possey<br/>
                Luis de Javier<br/>
                Macy’s<br/>
                Mauricio Alpizar<br/>
                Moon Juice<br/>
                Mugzy McFly<br/>
                Mr Lambo<br/>
                O.N.S<br/>
                Orange Culture<br/>
            </h2>

            <h2>
                R3bel<br/>
                Rare Beauty<br/>
                Reason Clothing<br/>
                Romero Hunte<br/>
                Sol de Janiro<br/>
                Speedo<br/>
                Sprayground<br/>
                Taibu<br/>
                Tailory<br/>
                Target<br/>
                Triple F.A.T. Goose<br/>
                Tom Ford <br/>
                US Polo Assn<br/>
                and more...<br/>
            </h2>
        </div>

        <div className="marquee mobile" style={{marginTop:"30px"}}>
            <div className="brand-track">
             <h2 style={{display:"inline-block",whiteSpace:"nowrap"}}>
                32 degrees •
                AG Jeans •
                Blank Jeans NYC •
                Bloomingdales Live •
                Bobs Store •
                Buffalo Jeans •
                Calvin Klein •
                Chynna Mamawal •
                Cult Of Individuality •
                David Beckham •
                Ed Hardy •
                Free Country •
                Hanes •
                Hollister •
                Hvman •
                Indi + Ashe •
                Jachs NY •
                Kiss Cosmetics •
                Krewe •
                La Roche Possey •
                Luis de Javier •
                Macy’s •
                Mauricio Alpizar •
                Moon Juice •
                Mugzy McFly •
                Mr Lambo •
                O.N.S •
                Orange Culture •
                R3bel •
                Rare Beauty • 
                Reason Clothing •
                Romero Hunte •
                Sol de Janiro •
                Speedo •
                Sprayground •
                Taibu •
                Tailory •
                Target •
                Triple F.A.T. Goose •
                Tom Ford •
                US Polo Assn •
                and more...
            </h2>
            </div>
        </div>

        <div style={{maxWidth:"100%", display:"flex", justifyContent:"center",marginTop:"clamp(20px, 0px + 2.2vw,50px)",paddingBottom:"50px"}}>
            <p style={{display:"flex",maxWidth:"700px",fontSize:" 1.7rem"}}>
                Scouted in 2016 by Daniel Peddle (The Secret Gallery NYC). I built my book freelancing small gigs. Made way to booking high end clients for runway, e-comm, editorial, and campaigns. Now represented by Storm LA, Crawford Models, and Most Wanted (Germany). <br/> <br/>Available for runway, lookbooks, e-comm, and lifestyle campaigns.
            </p>
        </div>

            <div style={{display:"flex",justifyContent:"space-between", width:"100%",height: "clamp(420px, 45vw, 610px)",}}>
                <div style={{position:"relative", width:"28%",display:"flex",aspectRatio:"407px/610px", flexShrink:"0"}}>
                    <Image src={"/digi1.jpeg"}  sizes="407px" fill  style={{objectFit:"cover"}}alt={"digis"} priority={false}/>
                </div>  
                <div style={{position:"relative",width:"28%",display:"flex",aspectRatio:"407px/610px", flexShrink:"0"}}>
                    <Image src={"/digi2.jpeg"}  sizes="407px" fill  style={{objectFit:"cover"}}alt={"digis"} priority={false}/>
                </div>  
                <div style={{position:"relative",width:"28%",display:"flex",aspectRatio:"407px/610px", flexShrink:"0"}}>
                    <Image src={"/digi3.jpeg"}  sizes="407px" fill  style={{objectFit:"cover"}}alt={"digis"} priority={false}/>
                </div>  
            </div>
                  
    

        <div className="hide" style={{marginTop:"20px"}}>
            <div style={{display:"flex",justifyContent:"space-around", padding:"30px"}}>
                <h3>
                    Height: 6' 3" in - 191 cm
                </h3>
                <h3>
                    Chest: 34" in - 86 cm
                </h3>
                <h3>
                    Waist: 33" in - 84 cm
                </h3>
            </div>

            <div style={{display:"flex", justifyContent:"space-around", padding:"30px"}}>
                <h3>
                    Shoes: 11.5 US - 45 EU
                </h3>
                <h3>
                    Inseam: 34" 1/2 in - 87 cm
                </h3>
            </div>
        </div>
          <div className="mobile-flex" style={{ justifyContent:"center",flexDirection:"column",width:"100%",alignContent:"center",marginTop:"20px"}}>
                <h3 style={{width:"fit-content", alignSelf:"center",marginBottom:"10px"}}>
                    Height: 6' 3" in - 191 cm
                </h3>
                <h3 style={{width:"fit-content", alignSelf:"center",marginBottom:"10px"}}>
                    Chest: 34" in - 86 cm
                </h3>
                <h3 style={{width:"fit-content", alignSelf:"center",marginBottom:"10px"}}>
                    Waist: 33" in - 84 cm
                </h3>
                <h3 style={{width:"fit-content", alignSelf:"center",marginBottom:"10px"}}>
                    Inseam: 34" 1/2 in - 87 cm
                </h3>
                <h3 style={{width:"fit-content", alignSelf:"center",marginBottom:"10px"}}>
                    Shoes: 11.5 US - 45 EU
                </h3>
            </div>
        </>
    )
}