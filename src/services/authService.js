const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CLIENT_ID = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_LINKEDIN_REDIRECT_URI;

export const loginWithLinkedIn = () => {
  const linkedInAuthURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=email%20openid%20profile%20w_member_social`;
  window.location.href = linkedInAuthURL;
};

export const fetchAccessToken = async (code) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/linkedin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, redirectUri: REDIRECT_URI }),
    });

    if (!response.ok) throw new Error("Failed to fetch access token");

    return await response.json();
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};
