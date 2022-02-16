const addItemToStorage = (id) => {
    const crew = getItemFromStorage("crew");
    crew.push(id);
    setItemToStorage("crew", crew);
};

const getItemFromStorage = (item) => {
    const exits = localStorage.getItem(item);
    if (exits) return JSON.parse(exits);
    return [];
};

const setItemToStorage = (item, value) =>
    localStorage.setItem(item, JSON.stringify(value));

const removeItemFromStorage = (item) => localStorage.removeItem(item);

export { addItemToStorage, getItemFromStorage, removeItemFromStorage };
