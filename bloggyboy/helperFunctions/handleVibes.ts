import React from "react" 
export default function handleVibes( vibes:number[] | number){
  
    return(
        function handleClick(){
            navigator.vibrate(vibes)
        }
    )
}
