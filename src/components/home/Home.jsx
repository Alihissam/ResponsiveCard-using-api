import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        fetch("https://randomuser.me/api?nat=us&results=30&page=1").then((result) => {
            result.json().then((res) => {
                setData(res.results);
            })
        })
    }, [])


    return (
        <div className='container'>
            <h3 className='title'>Fetch Api project </h3>
            <div className="row">
                {data.map((item) => (
                    <div className="col-md-3 animated fadeIn" key={item.id}>
                        <div className="card">
                            <div className="card-body">
                                <div className="Avatar">
                                    <img src={item.picture.large} className='top-image' alt="" />
                                </div>
                                <h4 className="card-title">
                                    {item.name.first}
                                    <br />
                                    {item.name.last}
                                </h4>
                                <p className="card-text">
                                    {item.location.city}
                                    <br />
                                    {item.location.country}
                                </p>
                                <span className="card-phone">
                                    {item.phone}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
