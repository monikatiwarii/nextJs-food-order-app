import axios from "axios"
import baseURL from "../../src/api"

export default async (method='', url='', data={}, headers={}) => {
    let response= null
    // let token =  typeof window !== 'undefined' && localStorage.getItem("token")? localStorage.getItem("token") : ``

    // console.log('token-------------------------',token)
     let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1LCJpYXQiOjE2Nzg4NzE4ODUsImV4cCI6MTY3ODk1ODI4NX0./cWNlJg8Bhz6QYRoF0u1bXTN0m_Hv-VI58An7U_Bzclw'

    url= `${baseURL}/api/${url}`
    
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