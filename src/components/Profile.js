import React, { useState } from "react";
import DisplayRepo from "./DisplayRepo";
import DisplayTable from "./DisplayRepo";
import "../css/profile.css"
import GitHubIcon from '@material-ui/icons/GitHub';

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [state, setstate] = useState(false)  
  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();
    setstate(true) 
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);
    console.log(profileJson)   

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <div  >
        
        <div className="search">
            <input
              className="prompt"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
         

          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}
          >
            <GitHubIcon />
            Search
          </button>
          </div>
          
          {state?<DisplayRepo data={data} repositories={repositories}  />:null}
          </div>
        
    </>
  );
};
export default Profile;
