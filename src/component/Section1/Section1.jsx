import Navbar from "./Navbar"
import Content1 from "./Content1"
import Card from "./Card"


const Section1 = (data) => { 
    return (
        <>
            <div className="h-screen w-full">
                <Navbar />
                <Content1 user={data.user} />
            </div>
        </>
    )
}

export default Section1