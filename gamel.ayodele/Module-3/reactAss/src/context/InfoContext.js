import { createContext, useState, useEffect } from "react";

const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  //   const [isLoading, setIsLoading] = useState(true);
  const [infos, setInfos] = useState([]);

  const [infoEdit, setInfoEdit] = useState({
    info: {},
    edit: false,
  });
  useEffect(() => {
    fetchInfos();
  }, []);

  // Fetch Infos
  const fetchInfos = async () => {
    const res = await fetch("http://localhost:5000/infos?_sort=id&_order=desc");
    const data = await res.json();
    setInfos(data);
    // setIsLoading(false);
  };

  const addInfo = async (info) => {
    const res = await fetch("http://localhost:5000/infos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    });

    const data = await res.json();

    setInfos([...infos, data]);
  };
  //Delete Contact Info
  const deleteInfo = async (id) => {
    await fetch(`http://localhost:5000/infos/${id}`, {
      method: "DELETE",
    });

    setInfos(infos.filter((info) => info.id !== id));
  };
  //Edit contact Info

  const editInfo = (info) => {
    setInfoEdit({
      info,
      edit: true,
    });
  };

  //Update contact Info
  const updateInfo = async (id, upInfo) => {
    const res = await fetch(`http://localhost:5000/infos/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upInfo),
    });
    const data = await res.json();
    setInfos(
      infos.map((info) => (info.id === id ? { ...info, ...data } : info))
    );
  };

  return (
    <InfoContext.Provider
      value={{
        infos,
        infoEdit,
        // isLoading,
        deleteInfo,
        addInfo,
        editInfo,
        updateInfo,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
