import React from 'react';
import './Fixtures.css';
import { API_URL } from '../ImageUploader/config.js';

class Fixtures extends React.Component {

    componentDidMount(){
        fetch(`${API_URL}/fixtures`)
            .then( res => {
                console.log(res.data);
                this.setState({ vehicleData: res.data });
            })
            .catch( err => console.log(err));
    }

    /*componentDidMount() {
        fetch(`${API_URL}/wake-up`)
            .then(res => {
                if (res.ok) {
                    return this.setState({ loading: false })
                }
                const msg = 'Something is went wrong with Heroku'
                this.toast(msg, 'custom', 2000, toastColor)
            })
    }*/

    render(){
        return(
            <div>Fixtures page</div>


        )
    }
}

export default Fixtures;