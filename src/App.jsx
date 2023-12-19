import React from 'react'
import Card from './components/Card'

function App() {
  let data = [
    {
      plan:"free",
      dolloar:"$0",
      user:"Single User",
      storage:"50GB Storage",
      publicprojects:"Unlimited Public Projects",
      access:"Coumnity access",
      privateprojects:"text-muted",
      projectIcon:"fas fa-times",
      support:"text-muted",
      suupportIcon:"fas fa-times",
      subdomain:"text-muted",
      subdomainIcon:"fas fa-times",
      reports:"text-muted ",
      reportsIcon:"fas fa-times"
    },
    {
      plan:"Plus",
      dolloar:"$9",
      user:"5 Users",
      storage:"50GB Storage",
      publicprojects:"Unlimited Public Projects",
      access:"Coumnity access",
      privateprojects:"",
      projectIcon:"fas fa-check",
      support:"",
      suupportIcon:"fas fa-check",
      subdomain:"",
      subdomainIcon:"fas fa-check",
      reports:"text-muted",
      reportsIcon:"fas fa-times"
    },
    {
      plan:"Pro",
      dolloar:"$49",
      user:"Unlimited Users",
      storage:"50GB Storage",
      publicprojects:"Unlimited Public Projects",
      access:"Coumnity access",
      privateprojects:"",
      projectIcon:"fas fa-check",
      support:"",
      suupportIcon:"fas fa-check",
      subdomain:"",
      subdomainIcon:"fas fa-check",
      reports:"",
      reportsIcon:"fas fa-check"
    }
  ]
  return <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
     { data.map((e,i)=>{
     return <Card cardData={e} key={i}/>
    })}
      {/* <!-- Plus Tier --> */}
     
      {/* <!-- Pro Tier --> */}
    
    </div>
  </div>
</section>
  </>
}

export default App