import React, { Component } from 'react'

class scrap extends Component {
    state = {
        isLoading: true,
        data: []
    }

    componentWillMount = () => {
        console.log("ComponentDidmount Sedang Berjalan")
        fetch("https://mocki.io/v1/d2244488-aee9-4b35-b00b-e038e5606f01") 
        .then(res => {
            if( res.status === 200 )
                return res.json()
            else
                console.log("error");
        }).then( resJson => {
            console.log("Mengatur State.data")
            this.setState({
                data: resJson,
                isLoading: false,
            })
            console.log("Success")
        })
    };

    render() {
        return (
            <div className="d-flex">
                { 
                    
                    (this.state.isLoading == false) ? 
                        this.state.data.map((datasAPI, index) => 
                            <div className="card" key={index}>
                                <a href={datasAPI.link}>
                                    <img src={datasAPI.foto} width="100%" height="190"/>
                                    <h3> {datasAPI.judul} </h3> 
                                    <p> {datasAPI.waktu} </p> 
                                </a>
                            </div>
                        ) 
                    : <div className="LoadingData"> Tunggu Sebentar... </div>
                }
            </div>
        )
    }
}

export default scrap;