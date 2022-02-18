class WebService
{
    getRequest = (url)=>{
        return fetch(url)
    }
}

export default new WebService()