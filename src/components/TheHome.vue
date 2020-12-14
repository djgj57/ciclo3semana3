<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="logOut">Salir</button>
    </form>
  </div>
</nav>

<div>
 <div class="card col-sm-6 w-50">
  <h5 class="card-header">{{user.name}}</h5>
  <div class="card-body">
    <h5 class="card-title">Correo:</h5>
    <p class="card-text">{{user.email}}</p>
  </div>
</div>
</div>

</div>
</template>

<script>
export default {
    data(){
        return{
            user:{

            }
        }
    },
    methods:{
        getUserDetails(){
            let user = localStorage.getItem('user');
            let token = localStorage.getItem('jwt');

            if(token){
                this.user = JSON.parse(user);               
            }
        },
        logOut(){
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            this.$router.push('/');
        }
    },
    created(){
        this.getUserDetails();
    }
}
</script>

