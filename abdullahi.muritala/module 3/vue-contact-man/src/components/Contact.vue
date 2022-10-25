<template>
  <div class="card">
    <div class="top-div">
      <div>
        <span>{{ contact.name }}</span>
        <button @click="showDetails()">
          <font-awesome-icon icon="fa-solid fa-arrows-down-to-line" />
        </button>
      </div>
      <div>
        <button>
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
        </button>
        <button class="delBtn" @click="deleteContact(contact.id)">
          <font-awesome-icon icon="fa-solid fa-x" />
        </button>
      </div>
    </div>
    <ul :class="this.showContactDetails ? 'show-details' : 'hide-details'">
      <li>Email: {{ contact.email }}</li>
      <li>Phone: {{ contact.phone }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Contact',
  data() {
    return {
      showContactDetails: false,
    };
  },
  methods: {
    ...mapActions(['deleteContact']),
    showDetails() {
      this.showContactDetails = !this.showContactDetails;
    },
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  padding: 10px 30px;
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  max-width: 720px;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}

.delBtn {
  color: #dc3545;
}

.top-div {
  display: flex;
  justify-content: space-between;
}

ul {
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0;

  /* TODO: Add the toggle class fucntinality to hide the list */
}

.show-details {
  display: block;
}

.hide-details {
  display: none;
}
</style>
