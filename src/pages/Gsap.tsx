import { useGSAP } from "@gsap/react"
import gasp from "gsap"



const  Gasp = () => {
    
    useGSAP(() =>{
        gasp.to('#blue-box', {
            x:250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
        });
    },[])
    return (
        <div >
           <p id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" ></p>
        </div>
    )
}
export default Gasp