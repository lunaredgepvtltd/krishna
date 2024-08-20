const backendDomain = 'http://localhost:8080'
const API = {
    login : {
        url :  `${backendDomain}/api/login`,
        method : 'post'
    },
    register : {
        url : `${backendDomain}/api/register`,
        method : 'post'
    }
}

export default API