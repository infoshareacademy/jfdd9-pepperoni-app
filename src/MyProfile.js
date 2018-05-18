import React from 'react'
import StarsRating from "./StarsRating";
import { withGangsters } from "./contexts/Gangsters";
import { withUser} from "./User";

class MyProfilePage extends React.Component {








}


export default withUser(withGangsters(ProfilePage))
