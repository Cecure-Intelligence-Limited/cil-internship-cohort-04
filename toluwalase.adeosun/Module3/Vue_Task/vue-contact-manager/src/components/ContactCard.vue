<template>
  <div className="w-[800px] m-auto border divide-[#111011] mb-[1rem] mt-2">
    <div className=" flex items-center p-5 justify-between mt-2">
      <div className=" flex items-center  space-x-4">
        <h1>{{ contact.name }}</h1>
        <i
          className="text-[red] fa-solid fa-angles-down"
          @click="onShowDetails()"
        ></i>
        <!-- <BsChevronDoubleDown className="text-[red]" onClick={() =>
        setMoreInfo(!moreInfo)} /> -->
      </div>
      <div className=" flex items-center  space-x-4 ">
        <i class="fa-regular fa-pen-to-square"></i>
        <!-- <i class="fas fa-pen-to-square"></i> -->
        <!-- <FiEdit
            onClick={() => {
              navigate(`edit/${contact.id}`);
              // editContact(contact.id);
            }}
          /> -->
        <i class="fas fa-xmark text-[red]" @click="onDelete(contact.id)"></i>
        <!-- <font-awesome-icon icon="fa-solid fa-xmark" /> -->
        <!-- <TiDeleteOutline
            className="text-[red]"
            onClick={() => onDelete(contact.id)}
          /> -->
      </div>
    </div>

    <div className="p-5 " v-show="showDetails">
      <p className="border divide-[#111011] py-1.5">
        <strong>Email: </strong>
        {{ contact.email }}
      </p>
      <p className="border divide-[#111011] py-1.5">
        <strong>Phone: </strong>
        {{ contact.phoneNumber }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    contact: Object,
  },
  data() {
    return {
      showDetails: false,
    };
  },

  methods: {
    onShowDetails() {
      this.showDetails = !this.showDetails;
    },
    onDelete(id) {
      this.$emit("delete-contact", id);
    },
  },
};
</script>