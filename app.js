const { createApp } = Vue;
let vueApp;

vueApp = createApp();

vueApp.component('brad-details', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="showDetails">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  name: 'brad-details',
  data() {
    return {
      friend: {
        id: 'brad',
        name: 'Brad Butterfield',
        phone: '123-456-7890',
        email: 'brad.butterfield@aol.com',
      },
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});

vueApp.component('joe-details', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="showDetails">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  name: 'joe-details',
  data() {
    return {
      friend: {
        id: 'joe',
        name: 'Joe Shmoe',
        phone: '234-567-8901',
        email: 'joe.shmoe@aol.com',
      },
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});

vueApp.component('jane-details', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="showDetails">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  name: 'jane-details',
  data() {
    return {
      friend: {
        id: 'jane',
        name: 'Jane Rain',
        phone: '345-678-9012',
        email: 'jane.rain@aol.com',
      },
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});

vueApp.mount('#app');
