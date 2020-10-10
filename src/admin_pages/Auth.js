
const Auth = {
    isAuthenticated: false,
    
    authenticate() {
        //if firebase says true
      this.isAuthenticated = true;
      window.location.href = "/Admin_Home";
    },

    signout() {
      this.isAuthenticated = false;
    },
    getAuth() {
        return this.isAuthenticated;
      }
  };

  export default Auth;