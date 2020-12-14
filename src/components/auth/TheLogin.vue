<template>

<div class="container mt-5">
<form>
	<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://previews.123rf.com/images/kostiuchenko/kostiuchenko1612/kostiuchenko161200363/68485798-metal-n%C3%BAmero-64-sesenta-y-cuatro-aislado-en-fondo-blanco.jpg" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input v-model="login.email" type="email" name="" class="form-control input_user" value="" placeholder="nombre de usuario (email)">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input v-model="login.password" type="password" name="" class="form-control input_pass" value="" placeholder="contraseña">
						</div>
						<div class="form-group">
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button @click.prevent="loginUser()" type="submit" name="button" class="btn login_btn">Login</button>
				   </div>
					</form>
				</div>	
			</div>
		</div>
	</div>

    

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

<style scoped>
	/* Coded with love by Mutiullah Samim */
		body,
		html {
			margin: 0;
			padding: 0;
			height: 100%;
			background: #60a3bc !important;
		}
		.user_card {
			height: 400px;
			width: 350px;
			margin-top: auto;
			margin-bottom: auto;
			background: #10a724;
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 10px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 5px;

		}
		.brand_logo_container {
			position: absolute;
			height: 170px;
			width: 170px;
			top: -75px;
			border-radius: 50%;
			background: #60a3bc;
			padding: 10px;
			text-align: center;
		}
		.brand_logo {
			height: 150px;
			width: 150px;
			border-radius: 50%;
			border: 2px solid white;
		}
		.form_container {
			margin-top: 100px;
		}
		.login_btn {
			width: 100%;
			background: #60a3bc !important;
			color: white !important;
		}
		.login_btn:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.login_container {
			padding: 0 2rem;
		}
		.input-group-text {
			background: #60a3bc !important;
			color: white !important;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
		.input_user,
		.input_pass:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
			background-color: #60a3bc !important;
		}
</style>