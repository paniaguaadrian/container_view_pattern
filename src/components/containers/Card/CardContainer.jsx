// React Components
import { useState, useEffect } from "react";
import axios from "axios";

// Custom View Components
import Card from "../../views/Card/Card";

// API URL
const URL = "https://randomuser.me/api/";

const CardContainer = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${URL}`);
      const user = result.data.results[0];
      setUserData({
        gender: user.gender,
        email: user.email,
        location: `${user.location.city}, ${user.location.country}`,
        title: `${user.name.title}. ${user.name.first}, ${user.name.last}`,
        image: user.picture.thumbnail,
      });
    };
    fetchData();
  }, []);
  return (
    <Card
      title={userData?.title || "N/A"}
      location={userData?.location || "N/A"}
      email={userData?.email || "N/A"}
      gender={userData?.gender || "N/A"}
      image={userData?.image || "N/A"}
    />
  );
};

export default CardContainer;
