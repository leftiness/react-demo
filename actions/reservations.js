export const addReservation = (id, name) => {
  return { type: 'ADD_RESERVATION', id, name }
};

export const updateReservation = (id, name) => {
  return { type: 'UPDATE_RESERVATION', id, name };
}

export const deleteReservation = (id) => {
  return { type: 'DELETE_RESERVATION', id }
};

export default { addReservation, deleteReservation, updateReservation };
