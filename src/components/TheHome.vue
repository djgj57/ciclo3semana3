<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-danger" type="button" @click="logOut">Salir</button>
        </form>
      </div>
    </nav>

    <div class = "container col-sm-4">
      <div class="card bg-dark w-600px">
        <img class="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title text-white">username: {{ user.name }}</h5>
            <p class="card-text text-white">email: {{ user.email }}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Grupo 64 / Ciclo 3 / Mision TIC 2022</small>
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

