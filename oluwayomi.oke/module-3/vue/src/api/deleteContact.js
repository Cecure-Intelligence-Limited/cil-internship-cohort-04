import axios from "axios";

const deleteContact = async (id) => {
  const URL = `http://localhost:3000/contacts/${id}`;

  const res = await axios.delete(URL);
  return res.data;
};

export default deleteContact;
