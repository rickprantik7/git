import React from "react";
import Repo from "./Repo"
import "../css/displayReplo.css"
const DisplayRepo = ({ data, repositories }) => {
  const ownedrepo= data.login+" has "+repositories.length +" repositries"
  const namerepo= data.name+" has "+repositories.length +" repositries"

  return (
  
     <div className="repo">
       <div className="repo_image">
     <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
     </div>         
    {data.name?<p>{namerepo} </p>:<p>{ownedrepo} </p>
    

    }    
          
       <div className="repo_repo">
       <p>Repositories</p>
     {repositories.map(repo => (
          <Repo repo ={repo}/>
           
  ))}
  </div>                   
    </div>
   
    );
};

export default DisplayRepo;
