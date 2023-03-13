import axios from "axios"
import baseURL from "../../src/api"

export default async (method='', url='', data={}, headers={}) => {
    let response= null
    // let token =  typeof window !== 'undefined' && localStorage.getItem("token")? localStorage.getItem("token") : ``
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1LCJpYXQiOjE2Nzg2ODE4MTcsImV4cCI6MTY3ODY4NTQxN30.YBDboFJ9sxUHnXm0UCCdCkjix3XlmRgYWs_KQapLR7o'

    url= `${baseURL}/api/${url}`
    console.log('url :: :: :: :: ', url);
    console.log('token :: :: :: :: ', token);
    
    headers= {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
    data= JSON.stringify(data)
    try{
        await axios({method, url, headers, data}).then((respData)=>{
            response = respData
        }).catch((e)=> {
          if(e.response.status === 401){
          }
          response = null
        })
      } catch (e) {
        console.log(e)
      }
    return response
}