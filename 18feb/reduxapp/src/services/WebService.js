class WebService
{
    getRequest = (url)=>{
        return fetch(url)
    }

    postRequest = (url,data)=>{
        return fetch(url,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    }
}

export default new WebService()