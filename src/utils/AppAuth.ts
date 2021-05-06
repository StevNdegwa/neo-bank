

class AppAuth {
    static login(user:any){
        localStorage.setItem("USER", JSON.stringify(user));
    }

    static logout(){
        localStorage.removeItem("USER");
    }

    static loggedInUser(){
        let user = localStorage.getItem("USER");

        if(!user){
            throw new Error("User not logged in");
        }
        
        return JSON.parse(user); 
    }
}

export default AppAuth;