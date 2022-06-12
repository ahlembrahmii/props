import './App.css';
import Profile from './Profile/Profile.js';
import Mypic from './Profile/Ahlem.jpg';

function App(){
  const fullname ="Hi..! I'm ahlem"
  const bio ="I am the best developer"
  const profission ="I can make you a very nice website"

  const handleName = () => {
    alert ('the fullname is ${fullname}') ;

  }

return(
<div>
  <Profile fullname={fullname} bio={bio} profission={profission}>
  <img style={{width:200,height:200,position:'center', top:30, left:50 }} src={Mypic} alt='Ahlem'/>

    </Profile>

</div>
);
}

export default App;
