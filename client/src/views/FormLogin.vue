<template>
      <div class="h-screen flex flex-col items-center text-center">
      <div class="flex flex-col mt-10">
            <p>Email</p>
            <input type="email" v-model="email" placeholder="Inserisci email" class="h-10 bg-teal-200 text-gray-800">
        </div>
        <div class="flex flex-col mt-3">
            <p>Password</p>
            <input type="password" v-model="password" placeholder="Inserisci password" class="mb-2 h-10 bg-teal-200 text-gray-800">
        </div>
        <span v-for='section in sections'>
        <a v-if='section.type == "button"' v-bind:href='section.url' @click="handleclick()" class="pl-10 pr-10 bg-teal-700 border-none rounded rounded-1-none mt-3 bg-blue-300"> {{ section.label }}  </a>
        <loading v-if="spin"></loading>
        </span>
        <p class="mt-5">Hai dimenticato la password?</p>
        <input type="email" placeholder="Inserisci email" class="h-5 bg-teal-200 text-gray-800">
        <button class="pl-10 pr-10 bg-teal-700 border-none rounded rounded-1-none mt-3 bg-blue-300">Recupera</button>
        </div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			loading: false,
            spin: false,
            email: '',
            password: '',
                sections: [
      {
        type: 'button',
        label: 'Accedi',
        url: 'Main'
      }
    ],
		};
	},
	methods: {
		handleclick() {
			if (!this.email) {
	this.errors.push('Email richiesta');
	}
	
	if (!this.password) {
	this.errors.push('Password richiesta');
	}
            this.spin = !this.spin,
            	axios
        		.post("/api/formLogin", {
			  	email: this.email,
			  	password: this.password	
        })
        .then(res => {
            (this.email = ""),
            (this.password = "")
        })
        .catch(err => {
          console.log(err.response.data.error);
        })
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
