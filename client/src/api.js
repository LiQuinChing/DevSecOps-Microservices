
// Base API helper routed through the Vite proxy to avoid CORS issues.
const BASE_USER = '/api/users';
const BASE_PAYMENT = '/api/payments';

async function request(url, options) {
  const { headers, ...restOptions } = options ?? {};
  const res = await fetch(url, {
    ...restOptions,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`);
  return data;
}

export const registerUser = (body) =>
  request(`${BASE_USER}/register`, { method: 'POST', body: JSON.stringify(body) });

export const loginUser = (body) =>
  request(`${BASE_USER}/login`, { method: 'POST', body: JSON.stringify(body) });

export const getUserById = (id, token) =>
  request(`${BASE_USER}/${id}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

export const getUsers = (token, role) =>
  request(`${BASE_USER}${role ? `?role=${encodeURIComponent(role)}` : ''}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

export const updateUser = (id, body, token) =>
  request(`${BASE_USER}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

export const deactivateUser = (id, token) =>
  request(`${BASE_USER}/${id}/deactivate`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

export const processPayment = (body, token) =>
  request(`${BASE_PAYMENT}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

export const getAllPayments = (token) =>
  request(`${BASE_PAYMENT}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

export const getPaymentsByUser = (userId, token) =>
  request(`${BASE_PAYMENT}/user/${userId}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

export const getPaymentById = (id, token) =>
  request(`${BASE_PAYMENT}/${id}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

  // --- ADD THIS BLOCK TO FIX THE REFERENCE ERROR ---
const api = {
  get: async (url) => {
    // Automatically prefix with /api (e.g., /products becomes /api/products)
    const data = await request(`/api${url}`);
    return { data }; // Wrap in 'data' to mimic Axios for your group member's code
  },
  post: async (url, body) => {
    const data = await request(`/api${url}`, { 
      method: 'POST', 
      body: JSON.stringify(body) 
    });
    return { data };
  },
  put: async (url, body) => {
    const data = await request(`/api${url}`, { 
      method: 'PUT', 
      body: JSON.stringify(body) 
    });
    return { data };
  },
  delete: async (url) => {
    const data = await request(`/api${url}`, { 
      method: 'DELETE' 
    });
    return { data };
  }
};
export default api;