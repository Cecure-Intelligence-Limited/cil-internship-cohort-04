<template>
  <ul>
    <li v-for="contact in contacts" :key="contact.id">
      <div class="carousel">
        <div class="nameDiv">
          <p class="name">{{ contact.fullname }}</p>
          <font-awesome-icon
            @click="setIsActive(contact.id)"
            icon="fa-solid fa-chevron-down"
            class="iconRed"
          />
        </div>

        <div class="nameDiv">
          <router-link :to="`/edit/${contact.id}`">
            <font-awesome-icon
              icon="fa-regular fa-pen-to-square"
              class="iconNote"
            />
          </router-link>

          <p @click="deleteItem(contact.id)" class="iconRed">X</p>
        </div>
      </div>

      <div v-show="activeId === contact.id" class="extraInfo">
        <p><span>Email:</span> {{ contact.email }}</p>
        <p><span>Phone:</span> {{ contact.phone }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
// import axios from "axios";
import { mapActions, mapState } from "vuex";
import { FETCH_CONTACTS, REMOVE_CONTACT } from "@/store";

export default {
  name: "ContactCard",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      activeId: null,
      // contacts: [],
    };
  },
  async mounted() {
    this.FETCH_CONTACTS();
  },
  computed: {
    ...mapState(["contacts", "isActive"]),
  },
  methods: {
    setIsActive(id) {
      this.activeId = id;
    },
    deleteItem(id) {
      this.$store.commit("DELETE_TODO", id);
      this.$store.dispatch(REMOVE_CONTACT, id);
    },
    ...mapActions([FETCH_CONTACTS]),
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  max-width: 850px;
  margin: 0 auto;

  li {
    border: 1px solid #bbbbbb;
    border-radius: 3px;
    padding: 2rem 1rem;

    .carousel {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nameDiv {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
          font-weight: 600;
        }

        .iconRed {
          margin-left: 7px;
          color: #ee6262;
          font-size: 1.1rem;
          cursor: pointer;
        }

        .iconNote {
          color: #3e3e3e;
          margin-right: 10px;
          font-size: 1.1rem;
        }
      }
    }

    .extraInfo {
      border: 1px solid #bbbbbb;
      border-radius: 3px;
      /* padding: 1rem;	 */
      margin-top: 1rem;

      p {
        padding: 1rem;

        &:first-child {
          border-bottom: 1px solid #bbbbbb;
        }

        span {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
