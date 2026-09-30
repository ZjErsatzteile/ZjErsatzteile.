const menu=document.querySelector(".menu"), nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>{if(nav){nav.style.display=nav.style.display==="flex"?"":"flex";nav.style.flexDirection="column";nav.style.position="absolute";nav.style.top="78px";nav.style.left="0";nav.style.right="0";nav.style.padding="18px 5%";nav.style.background="#03070d";}});
document.querySelector("#form")?.addEventListener("submit",e=>{
 e.preventDefault();
 const f=new FormData(e.currentTarget);
 const msg=[
 "Hallo ZJ Ersatzteile, ich möchte ein Ersatzteil anfragen.",
 "",
 "Automarke: "+(f.get("marke")||"-"),
 "Modell: "+(f.get("modell")||"-"),
 "Baujahr: "+(f.get("baujahr")||"-"),
 "Motorisierung: "+(f.get("motor")||"-"),
 "Ersatzteil: "+(f.get("teil")||"-"),
 "Telefonnummer: "+(f.get("telefon")||"-"),
 "Teilenummer / Angaben: "+(f.get("details")||"-")
 ].join("\n");
 window.open("https://wa.me/436677995349?text="+encodeURIComponent(msg),"_blank","noopener");
});
document.querySelector("#year").textContent=new Date().getFullYear();
