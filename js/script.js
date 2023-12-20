const { createApp } = Vue

createApp({
  data() {
    return {
      email: []
     
    }
  },

  created(){
    for(let i=0; i<10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((email_generata) => {
            console.log(email_generata.data.response);
            this.email.push(email_generata.data.response);
            console.log(this.email);
        }
        )
    }
  },

  methods: {

  }



}).mount('#app')