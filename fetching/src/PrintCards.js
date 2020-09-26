import React from 'react';
import UserSummary from './userSummary'


const PrintCards = ({users, counter}) => {
   console.log("hara" ,users)
    return (
        <div className= {"fund-list section"}>
          {
                users.map(user => {
                    console.log ("Here",user)
                return (
                    
                   <UserSummary users={user} />
                );
            })
            
            }
        </div>
    )
}

export default PrintCards;