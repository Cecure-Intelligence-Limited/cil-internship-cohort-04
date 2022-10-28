import axios from "axios";

const getContacts = async () => {
  const URL = "http://localhost:3000/contacts";

  const res = await axios.get(URL);
  const contact = res.data;
  return contact.reverse();
};

export default getContacts;
