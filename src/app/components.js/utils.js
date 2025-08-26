"use client"

import Image from "next/image"
import styles from "./ImageCard.module.css";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { useEffect,useRef,useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav(){
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const firstLinkRef = useRef(null);

  useEffect(()=>{setOpen(false)},[pathname])
  
  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      html.style.overflow = "hidden";
      // small delay so element exists before focusing
      setTimeout(() => firstLinkRef.current?.focus(), 0);
    } else {
      html.style.overflow = "";
    }
    const onKey = (e) => (e.key === "Escape" ? setOpen(false) : null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return(<>
  
        <div style={{display:"flex", flexDirection:"row",marginBottom: "50px",marginTop:"20px",justifyContent:"flex-end"}}>
          <div style={{width:"100%"}}>
            <h1 style={{width:"100%"}}>
              <Link href="/" style={{width:"100%",marginLeft:"10px",fontSize:"clamp(1.4rem, -1px + 7.5vw ,4rem)"}}>
                Josiah Willingham
              </Link>
                
            </h1>
          </div>

            <div className="desktopNav" style={{display:"flex", flexDirection:"row",}}>
                <Link href="/fashion" className="hide-on-mobile" style={{alignSelf:"center",height:"fit-content",paddingRight:"clamp(20px, calc(-27.3px + 6.06vw), 60px)",fontSize:"clamp(.1rem, .4rem + 1vw ,1.5rem)"}}>
                    Fashion
                </Link>
                <a href="/bass" className="hide-on-mobile"style={{alignSelf:"center",height:"fit-content",paddingRight:"clamp(20px, calc(-27.3px + 6.06vw), 60px)",fontSize:"clamp(.1rem, .4rem + 1vw ,1.5rem)"}}>
                    Bass
                </a>
                <a href="/contact" className="hide-on-mobile"style={{alignSelf:"center",height:"fit-content",paddingRight:"clamp(20px, calc(-27.3px + 6.06vw), 60px)",fontSize:"clamp(.1rem, .4rem + 1vw ,1.5rem)"}}>
                    Contact
                </a>
                <div className="hide-on-mobile" style={{height:"fit-content",alignSelf:"center",display:"flex"}}>
                    <a className="hide-on-mobile" style={{paddingRight:" clamp(5px, calc(-60px + 8.333vw), 60px)"}}>
                        <SiInstagram style={{alignSelf:"center"}} size={20} className="text-neutral-900" />
                    </a>
                    <a className="hide-on-mobile"  style={{}}>
                        <SiTiktok  href="https://www.tiktok.com/@josiahbwill"size={20} className="text-neutral-900" />
                    </a>
                </div>
            </div>
            
          <button
            className="menuBtn"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger" data-open={open} />
          </button>
        </div>

          <div className="mobileNav" data-open={open} style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <Link href="/fashion" className="tab">
              Fashion
            </Link>
            <Link href="/bass" className="tab">
              Bass
            </Link>
            <Link href="/contact" className="tab">
              Contact
            </Link>
            <div style={{display:"flex",justifyContent:"center",padding:"20px"}}>
              <a href="https://www.instagram.com/josiah.wb/">
                <SiInstagram style={{marginRight:"10px"}} size={20} className="text-neutral-900" />
              </a>
              <p>
                |
              </p>
                <a href="https://www.tiktok.com/@josiahbwill" >
                  < SiTiktok style={{marginLeft:"10px"}} size={20} className="text-neutral-900" />    
                </a>
            </div>
          </div>
    </>)
}

export function ImageCard({
  imgSrc,
  brand,
  alt,
  width,
  height,
  ratio = "407/513",
  className = "",
}) {
  const computedAlt = alt ?? brand;
  return (
    <div
      className={`${styles.card} ${className}`}
      style={{ width:width,aspectRatio:ratio, height:height,display:"flex",flexShrink:"0",position:"relative" }}
      aria-label={brand}
    >
      <Image
        src={imgSrc}
        alt={computedAlt}
        fill
        className={styles.img}
        priority={false}
      
      />
      <div className={styles.overlay} />
      <div className={styles.caption}>
        <span>{brand}</span>
      </div>
    </div>
  );
}


export function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // basic honeypot check (hidden input named `company`)
    if (payload.company) return;

    setStatus({ state: "loading", msg: "Sending…" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus({ state: "sent", msg: "Thanks! I’ll reply soon." });
      e.currentTarget.reset();
    } catch {
      setStatus({ state: "error", msg: "Couldn’t send. Try again?" });
    }
  }

  return (
    <form onSubmit={onSubmit}className={styles.contact}>
      <label>
        <input className={styles.field}  name="name" placeholder="name" type="text" required />
      </label>
      <label>
        <input className={styles.field} name="email" placeholder="email" type="email" required />
      </label>
      <label>
        <textarea className={styles.field} name="message" placeholder="message" rows={5} required />
      </label>

      {/* Honeypot (kept hidden) */}
      <input className={styles.hp} name="company" type="text" tabIndex={-1} autoComplete="off" style={{display:"none"}} />

      <button className={styles.button} disabled={status.state === "loading"}>Send</button>
      {status.msg && <p className={styles.status} aria-live="polite">{status.msg}</p>}

    </form>
  );
}