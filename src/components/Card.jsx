import React from "react";

const Card= ({title,completed,id}) => {
 
        return(
        <>
       <div className="bg-green-300 p-2 rounded-2xl m-4 inline-block text-center grid grid-cols-2 transition-transform transform-gpu  ease-out  max-w-sm min-w-sm box-border duration-1000 hover:scale-110">
       <div >
        <img src={`https://robohash.org/de ${id}`} alt="photo" />
        </div>
        <div className=" flex m-auto break-words">
            <h2 className="text-purple text-xs font-medium uppercase"><span className="text-xs font-bold block ">Title</span> {title}</h2>
            {/* <p> Completed{completed}</p> */}
        </div>
        </div> 

        </>
    )
}

export default Card