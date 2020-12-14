<template>
<div class="container mt-5">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address - prueba@gmail.com</label>
    <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password - micontraseña</label>
    <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
  
  <pre>
      {{$data}}
  </pre>
  
  
  </div>
  <button type="submit" @click.prevent="loginUser()" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<script>
import swal from 'sweetalert';

export default {
    name: 'TheLogin',
    data(){
        return{
            login:{
                email: '',
                password:''
            }
        }
    },
    methods:{
        async loginUser(){
          try{
              //let response = await this.$http.post('/api/usuario/login', this.login);
              let response = await this.$http.post('/api/auth/signin', this.login);
              console.log(response.data)
              //let token = response.data.tokenReturn;
              let token = response.data.accessToken;
              let user = response.data.user;

              localStorage.setItem('jwt', token);
              localStorage.setItem('user', JSON.stringify(user))
              if (token){
                swal("Éxito!!", "Login correcto!", "success");
                this.$router.push('/home');
              }else{
                console.log(err.response)
              }
          }catch(error){
            swal("Oops!", "Algo salió mal!", "error");

          }
        }
    }
}
</script>