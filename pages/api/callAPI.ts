import axios from "axios"
import baseURL from "../../src/api"

export default async (method='', url='', data={}, headers={}) => {
    let response= null
    // let token =  typeof window !== 'undefined' && localStorage.getItem("token")? localStorage.getItem("token") : ``
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1LCJpYXQiOjE2Nzg2NzMzMjYsImV4cCI6MTY3ODY3NjkyNn0.cPoNb0b0x-dyvKkkHXNg4bu2NH7KJCQWGd0cTswCkbo'

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