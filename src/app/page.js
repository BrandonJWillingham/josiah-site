import { ImageCard } from "./components.js/utils";
import Link from "next/link";



export default function Home() {

  return (
    <>
      <div  className="no-scrollbar" style={{flexWrap: "nowrap",overflowX: "auto",overflowY:"hidden", width:"100%",gap: "30px", display:"flex", flexWrap: "nowrap", WebkitOverflowScrolling: "touch"}} >
        <ImageCard imgSrc={"/image1.jpg"} brand={"ONS"} alt={"campaign shot for ONS"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.30),400px)"} height={"clamp(400px,calc(400px + (100vw - 780px) * 0.17),513px)"} />
        <ImageCard imgSrc={"/MoonJuice.jpg"} brand={"Moon Juice"} alt={"Campaign for Moon Juice"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.30),400px)"}  height={"clamp(400px,calc(400px + (100vw - 780px) * 0.17),513px)"} />
        <ImageCard imgSrc={"/hollisterEccom.jpg"} brand={"Hollister"} alt={"Eccom work For hollister"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.30),400px)"}  height={"clamp(400px,calc(400px + (100vw - 780px) * 0.17),513px)"}  />
        <ImageCard imgSrc={"/Uspa.jpg"} brand={"Us Polo Assn"} alt={" Valenties day campaign shot for US Polo Assn"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.30),400px)"}  height={"clamp(400px,calc(400px + (100vw - 780px) * 0.17),513px)"}  />
        <ImageCard imgSrc={"/DavidB.jpg"} brand={"David Beckham"} a lt={"Editorial Shot for David Beckham"} width={"clamp(200px,calc(200px + (100vw - 780px) * 0.30),400px)"}  height={"clamp(400px,calc(400px + (100vw - 780px) * 0.17),513px)"}  />
        <ImageCard imgSrc={"/ReasonClothing.jpg"} brand={"Reason Clothing"} alt={"Eccom Campaign for Reason Clothing"}width={"clamp(200px,calc(200px + (100vw - 780px) * 0.30),400px)"}  height={"clamp(400px,calc(400px + (100vw - 780px) * 0.17),513px)"}  />
      </div>
      <div style={{display:"flex",justifyContent:"center",margin:"clamp(0px,0px + 13.8vw , 200px" }}>
          <a href="https://www.crawfordmodels.com/w/ny/models/menl/2785-josiah_willingham">
            <h2 style={{fontSize:"clamp(1rem, .4rem + 2vw ,5rem)"}} >
              Book
            </h2>
          </a>  
      </div>
        


      <div style={{display:"flex",justifyContent:"center"}}>
        <video
          src="SageandCrowe.mp4"
          controls
          preload="metadata"
          style={{ width:"clamp(300px, 125px + 50vw, 800px)",alignSelf:"center", height: "auto", borderRadius: 12 }}
        />
      </div>

      <div style={{display:"flex",justifyContent:"center"}}>
        <p style={{width:"clamp(400px, 400px + 27.8vw, 860px)",padding:"40px",fontSize:"clamp(1rem, .4rem + 1vw ,3rem)"}}>
          Church-trained from age 8. Focus in R&B, Soul, and gospel—locked pocket with a warm tone.<br/> Get the full story on my <Link href="/bass">music page</Link>
        </p>
      </div>
    </>
  );  
}
