import React from 'react'


const style = {
          width: "15rem",

          margin: "2rem 0rem 0rem 15rem"
}


const Account = ( {user} ) => {
          // const { address } = user


          return (
                    <div>
                              <div key={user.id} style={style}>
                                        <h4> {user.username} </h4>

                                        <h4> {user.name} </h4>

                                        <p>{user.email}</p>

                                        <hr />
                              </div>
                    </div>
          )
}

export default Account
