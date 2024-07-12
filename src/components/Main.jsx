export default function Main({ data }) {
    return (
        <div className="img-container">
            <img src={data.hdurl} alt={data.title || bg-img} className="bg-image"/>
        </div>
    )
}