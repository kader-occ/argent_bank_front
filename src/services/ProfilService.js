import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/profile";

// Service pour gérer le profil utilisateur
const ProfilService = {
  // Récupérer le profil utilisateur
  getProfil: async (token) => {
    try {
      const response = await axios.post(
        API_URL,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.body;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
};

export default ProfilService;
