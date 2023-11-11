let BASE_URL;

if (window.location.origin === "http://localhost:5173") {
    BASE_URL = import.meta.env.BASE_URL;
} else {
    BASE_URL = window.location.origin + '/api/';
}

const URLs = {
    comments: BASE_URL + import.meta.env.VITE_REACT_APP_URL_COMMENTS,
    disciplines: BASE_URL + import.meta.env.VITE_REACT_APP_URL_DISCIPLINES,
    teachers: BASE_URL + import.meta.env.VITE_REACT_APP_URL_TEACHERS,
    contacts: BASE_URL + import.meta.env.VITE_REACT_APP_URL_CONTACTS,
    documents: BASE_URL + import.meta.env.VITE_REACT_APP_URL_DOCUMENTS,
    notifications: BASE_URL + import.meta.env.VITE_REACT_APP_URL_NOTIFICATIONS,
};

export default URLs;
