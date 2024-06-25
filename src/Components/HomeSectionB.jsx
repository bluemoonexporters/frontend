import img from "../utils/img/world-map.png"

const Component = () => {
    return(
        <>
            <div className="container">
                <h3 className="text-center text-primary mt-5">WHERE DO WE DELIVER ?</h3>
                <img className="my-5 w-100" src={img} alt="world map" />
            </div>
        </>
    )
}

export default Component