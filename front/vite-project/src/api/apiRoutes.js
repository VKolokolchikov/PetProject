let BASE_URL;
let API_URL;

if (window.location.origin === "http://localhost:5173") {
    BASE_URL = import.meta.env.VITE_REACT_APP_URL_BASE;
} else {
    BASE_URL = window.location.origin;
}

API_URL = BASE_URL + '/api/'
const URLs = {
    comments: API_URL + import.meta.env.VITE_REACT_APP_URL_COMMENTS,
    furniture: API_URL + import.meta.env.VITE_REACT_APP_URL_CATALOG,
    faq: API_URL + import.meta.env.VITE_REACT_APP_URL_FAQ,
    teachers: API_URL + import.meta.env.VITE_REACT_APP_URL_TEACHERS,
    contacts: API_URL + import.meta.env.VITE_REACT_APP_URL_CONTACTS,
    documents: API_URL + import.meta.env.VITE_REACT_APP_URL_DOCUMENTS,
    notifications: API_URL + import.meta.env.VITE_REACT_APP_URL_NOTIFICATIONS,
    furnitureTypes: API_URL + import.meta.env.VITE_REACT_APP_URL_CATALOG,
    delivery: API_URL + import.meta.env.VITE_REACT_APP_URL_DELIVERY,
    about: API_URL + import.meta.env.VITE_REACT_APP_URL_ABOUT,
};

export default URLs;
export {BASE_URL};
