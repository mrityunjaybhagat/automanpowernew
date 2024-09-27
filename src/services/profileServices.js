import { fetchData } from "./apiServices";
const BASE_URL = 'https://deijobs.in/deijobs-api/api/';

const userId = localStorage.getItem("login_token"); 

export async function getUserData(userId) {
  const url = `${BASE_URL}get-profile-data?userId=${userId}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

export async function createStudentProfile(data) {
  const userId = localStorage.getItem("login_token"); // Get userId from localStorage
  const url = `create-student-profile?userId=${userId}`;

  try {
    const response = await fetchData(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // Set the appropriate content type
      },
    });

    return response;
  } catch (error) {
    // Handle error
    console.error("Error creating student profile:", error);
    throw error;
  }
}


export async function getVarificationData(userId) {
  const url = `${BASE_URL}get-email-phone-verified-status?userId=${userId}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

export async function sendEmailOtp(userId) {
  const url = `${BASE_URL}candidate-email-otp?email=${userId}`;
  try {
    const response = await fetchData(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }), 
    });

    return response; // Return the OTP response
  } catch (error) {
    console.error("Error sending email OTP:", error);
    throw error;
  }
}



export async function getPlatformSettings(userId) {
  const url = `candidate-platform-setting?userId=${userId}`;

  try {
    const response = await fetchData(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });

    return response; 
  } catch (error) {
    console.error("Error fetching platform settings:", error);
    throw error;
  }
}

export async function updatePlatformSettings(userId, newStatus) {
  const url = `add-candidate-platform-setting?userId=${userId}`;
  try {
    const response = await fetchData(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, job_alerts: newStatus }),
    });

    return response;
  } catch (error) {
    console.error("Error updating platform settings:", error);
    throw error;
  }
}

/*Jobs Pages */
export async function getOverviewData(userId) {
  const url = `${BASE_URL}get-homepage-data?userId=${userId}`;
  try {
    const response = await fetch(url, {
      method: "POST", // Assuming it's a GET request
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch homepage data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    throw error;
  }
}

// Fetch top companies
export async function getTopCompanies() {
  const url = 'top-companies-list';
  try {
    const response = await fetchData(url, {
      method: "GET", // Assuming it's a POST request, adjust if necessary
      headers: {
        "Content-Type": "application/json",
      }
    });

    return response; // Return the response, assuming response structure includes `data`
  } catch (error) {
    console.error("Error fetching top companies:", error);
    throw error;
  }
}
// Fetch REcemnded JObs
export async function getRecemndedJobData(userId, offset, limit) {
  
  const url = `${BASE_URL}recommended-job-list?userId=${userId}&offset=${offset}&limit=${limit}`;
  try {
    const response = await fetch(url, {
      method: "POST", // Assuming it's a GET request
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch homepage data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    throw error;
  }
}
//Fetech Payment Status 

export async function getPaymentStatus(userId) {
  const url = `payment-status?userId=${userId}`;

  try {
    const response = await fetchData(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });

    return response; 
  } catch (error) {
    console.error("Error fetching platform settings:", error);
    throw error;
  }
}

//Saved Jobs
export async function getUserSavedJobDetails(userId, offset, limit) {
  const url = `get-user-saved-job-details?userId=${userId}&offset=${offset}&limit=${limit}`;
  try {
    const response = await fetchData(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.code !== 200) {
      throw new Error('Failed to fetch saved job details');
    }

    return response.data; // Assuming data will contain job details
  } catch (error) {
    console.error("Error fetching saved job details:", error);
    throw error;
  }
}
//Applied Jobs
export async function getUserAppliedJobDetails(userId, offset, limit) {
  const url = `get-user-applied-job-details?userId=${userId}&offset=${offset}&limit=${limit}`;
 
  try {
    const response = await fetchData(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.code !== 200) {
      throw new Error('Failed to fetch saved job details');
    }

    return response.data; // Assuming data will contain job details
  } catch (error) {
    console.error("Error fetching saved job details:", error);
    throw error;
  }
}
//get-new-job-list
export async function getRecentJobDetails(userId, offset, limit) {
  const url = `get-new-job-list?userId=${userId}&offset=${offset}&limit=${limit}`;
 
  try {
    const response = await fetchData(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.code !== 200) {
      throw new Error('Failed to fetch saved job details');
    }

    return response.data; // Assuming data will contain job details
  } catch (error) {
    console.error("Error fetching saved job details:", error);
    throw error;
  }
}


