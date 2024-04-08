const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      mails: []
    }
  },
  methods: {
    randomMail(n) {
        for(let i = 0; i < n; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.mails.push(res.data.response)
            })
        }
    },
  },
  created() {
    this.randomMail(10)
  }
}).mount('#app')