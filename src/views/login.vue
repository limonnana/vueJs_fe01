<template>
    
      
    
    <div class="form-signin">

        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="text" name="username" class="form-control" placeholder="Username" v-model="input.username" />
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name="password" class="form-control" placeholder="Password" v-model="input.password" />
        
        <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="postPost()">Login</button>
        <br/><br/>
       
    </div>
 
</template>

<script>

import axios from 'axios';

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                responseMessage: ""
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                   
                   
                   
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            },

        postPost() {
            axios.post('http://localhost:9000/api/logintest', 
            {
                username: this.input.username, password: this.input.password
            })
            .then(response => {this.responseMessage = response.data; console.log("answer is: " + this.responseMessage)})
            .catch(e => {
            this.errors.push(e)

            })
        }
        }
    }
</script>

<style scoped>
  
.form-signin {
  max-width: 330px;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
   
   
</style>