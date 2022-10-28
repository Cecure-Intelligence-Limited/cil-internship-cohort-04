<template>
  <div
    className="container mt-4 mb-4"
    :style="{ maxWidth: '800px', marginTop: '20px' }"
  >
    <div className="card card-body mb-1 p-4">
      <h4
        :style="{
          fontSize: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
        }"
      >
        <div>
          {{ contact.name }}
          <i
            class="fa-solid fa-angles-down"
            :style="{ color: 'red', cursor: 'pointer' }"
            @click="handleDetails()"
          ></i>
        </div>
        <small
          :style="{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }"
        >
          <router-link
            className="nav-link float-right"
            to="/contact/edit/{{contact.id}}"
          >
            <i
              class="fa-solid fa-pen-to-square"
              :style="{ cursor: 'pointer' }"
              @click="
                handleEdit(
                  contact.id,
                  contact.name,
                  contact.email,
                  contact.phone
                )
              "
            ></i>
          </router-link>
          <span icon="{faXmark}" color="red" cursor="pointer" className="ms-3">
            <i
              class="fa-solid fa-xmark"
              :style="{ color: 'red', cursor: 'pointer' }"
              @click="onClickDelete(contact.id)"
            ></i>
          </span>
        </small>
      </h4>

      <ul v-if="details" className="list-group">
        <li className="list-group-item"><b>Email:</b> {{ contact.email }}</li>
        <li className="list-group-item"><b>Phone:</b> {{ contact.phone }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  data: function () {
    return {
      details: false,
      goal: true,
    };
  },
  methods: {
    handleDetails() {
      this.details = !this.details;
    },
    handleEdit(id, name, email, phone) {
      localStorage.setItem("Id", id);
      localStorage.setItem("Name", name);
      localStorage.setItem("Email", email);
      localStorage.setItem("Phone", phone);
    },
    onClickDelete(id) {
      this.$emit("delete-contact", id);
    },
  },
  props: {
    contact: Object,
  },
};
</script>

<style scoped></style>
