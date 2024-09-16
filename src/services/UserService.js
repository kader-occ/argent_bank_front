import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user";

// Service pour gérer l'authentification
const UserService = {
  // Connexion d'un utilisateur
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      if (response.data.body.token) {
        // Stocker le token dans le localStorage
        localStorage.setItem("token", response.data.body.token);
      }
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw error.response.data;
    }
  },

  // Déconnexion d'un utilisateur
  logout: () => {
    localStorage.removeItem("token");
  },

  // Vérifier si un utilisateur est connecté
  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },
};

export default UserService;
