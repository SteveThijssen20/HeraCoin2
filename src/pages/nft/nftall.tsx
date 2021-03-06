
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { useHistory } from "react-router-dom";
import './NFTALL.css';
import { allnft } from "./storing";
export let realid= 0;
export function setingid(toset:Number){
    realid = Number(toset);
}
export function NFTALL() {
   
    const allimage = new Array;
    let history = useHistory();
    async function creating() {
        for (let i = 0; i < Number(allnft.length); i++) {
            var newelement = document.createElement("img") as HTMLImageElement
            newelement.src = "/assets/NFT/" + allnft[i] + ".png"
            newelement.className = "nftallimageframe"
            allimage.push('<div class="nftallcontainer" >' + newelement.outerHTML + '<p class="nftalldate">30/11/2021</p></div>')
         
        }

    }
    creating()

    async function creatingimages() {
        for (let i = 0; i < Number(allnft.length); i++) {
            (document.getElementById('collectedall') as HTMLDivElement).innerHTML = (document.getElementById('collectedall') as HTMLDivElement).innerHTML + allimage[i]

        }  

    }
 
setTimeout(function(){          
        if (realid === 0){
            creatingimages();
            realid = 1
        }        
    }, 200);
    return (
        <div className="page NFT">
            <div className="notimagecontainer">
                <div className="title">Collected NFTS</div>
                <div id="collectedall" className="collectedall">
                </div>
  </div>
  <div onClick={() =>{history.push('stories')} } className="footer-button">Stories</div>
  <div onClick={() =>{history.push('home')} } className="footer-button">Donate</div>                
        </div>
    );

}