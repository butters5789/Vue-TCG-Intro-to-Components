const { createApp } = Vue;
let vueApp;

vueApp = createApp({
  data() {
    return {
      friends: [
        {
          id: 'brad',
          name: 'Brad Butterfield',
          phone: '123-456-7890',
          email: 'brad.butterfield@aol.com',
        },
        {
          id: 'ben',
          name: 'Joe Shmoe',
          phone: '234-567-8901',
          email: 'joe.shmoe@aol.com',
        },
        {
          id: 'jane',
          name: 'Jane Rain',
          phone: '345-678-9012',
          email: 'jane.rain@aol.com',
        },
      ],
      showDetails: {},
    };
  },
  methods: {
    toggleDetails(id) {
      if (this.showDetails[id] === null) {
        this.showDetails[id] = false;
      }

      this.showDetails[id] = !this.showDetails[id];
    },
  },
});

vueApp.mount('#app');
