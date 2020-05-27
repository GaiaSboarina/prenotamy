<template>
  <div class="h-screen flex flex-col items-center text-center">
    <div class="flex flex-col mt-10">
      <p>Email</p>
      <input
        type="email"
        v-on:keydown="btnStatus()"
        v-on:keyup="btnStatus()"
        v-model="email"
        placeholder="Inserisci email"
        for="emailInput"
        class="h-10 bg-teal-200 text-gray-800"
        required
      />
    </div>
    <div class="flex flex-col mt-3">
      <p>Password</p>
      <input
        type="password"
        v-on:keydown="btnStatus()"
        v-on:keyup="btnStatus()"
        v-model="password"
        placeholder="Inserisci password"
        for="passwordInput"
        class="mb-2 h-10 bg-teal-200 text-gray-800"
      />
    </div>
    <button
      :disabled="isDisabled"
      class="pl-10 pr-10 bg-teal-700 border-none rounded rounded-1-none mt-3 bg-blue-300"
      @click="handleClick()"
    >Accedi</button>
	<loading v-if="spin"></loading>
    <p class="mt-5">Hai dimenticato la password?</p>
    <input type="email" placeholder="Inserisci email" class="h-5 bg-teal-200 text-gray-800" />
    <button
      class="pl-10 pr-10 bg-teal-700 border-none rounded rounded-1-none mt-3 bg-blue-300"
    >Recupera</button>
  </div>
</template>

<script>
	import axios from 'axios';
	import VueRouter from 'vue-router';
	import { routes } from '@/utils/routes';
	import { login, getToken, isLoggedIn, getProfile, isUserEnabled  } from "../utils/auth";

	export default {
		data: () => ({
			isDisabled: true,
			loading: false,
			spin: false,
			email: '',
			password: '',
		}),
		
    	methods: {
			btnStatus() {
				if((this.email != "") && (this.password != "")) {
					console.log(this.isDisabled)
					this.isDisabled = false
				} else {
					this.isDisabled = true
				}
			},

      		handleclick() {
				this.spin = !this.spin;
				getToken()
				login();
				this.spin = !this.spin;
        		// axios
				// .post("/api/formLogin", {
				// 	email: this.email,
				// 	password: this.password
				// })
				// .then(res => {
				// 	(this.email = ""),
				// 	(this.password = "")
				// })
				// .catch(err => {
				// 	console.log(err.response.data.error);
				// })

				this.$route.push("/dashboard")
			}
		},
		components: { },
			watch: {
        		$route: {
          			handler() {
          			}
        		}
     		 }
  	};
</script>
<style></style>
