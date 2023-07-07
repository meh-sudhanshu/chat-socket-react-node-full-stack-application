

const users = []


export const getUserByEmail = (email)=>{
    for(var i=0;i<users.length;i++){
        const currentUser = users[i]
        if(currentUser.email === email){
            return currentUser
        }
    }
    return null
}

export const saveUser = (user)=>{
    users.push(user)
}


