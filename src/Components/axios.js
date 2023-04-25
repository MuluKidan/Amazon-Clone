import axios from "axios";

const instance=axios.create({

    baseURL:'http://127.0.0.1:5001/cleaver-clone/us-central1/api' // the API (cloud Function) URL
});

export default instance  