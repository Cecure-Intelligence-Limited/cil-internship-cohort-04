import axios from "axios";

const getSingleContact = async (id) => {
  const URL = `http://localhost:3000/contacts/${id}`;

  const res = await axios.get(URL);
  return res.data;
};

export default getSingleContact;
