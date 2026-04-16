"use client"

export const Explorebtn = () => {
  return (
    <div>
        <button
        className="mt-5 "
        id="explore-btn"
        onClick={()=>{console.log("hello bijay")}}
        
        >
            <a href="#explore">
                Explore Events
            </a>

        </button>
    </div>
  )
}
