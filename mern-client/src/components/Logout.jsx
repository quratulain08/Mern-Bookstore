import { Button, Modal } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("You have been Logged Out!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error logging out:", error.message);
        alert("An error occurred during logout. Please try again.");
      });
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className='flex items-center justify-center h-screen bg-teal-100'>
      {/* Button to open the modal */}
      <Button onClick={openModal} color="failure">
        Logout
      </Button>

      {/* Modal for logout confirmation */}
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>
          Confirm Logout
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to log out?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleLogout} color="failure">
            Yes, Log Out
          </Button>
          <Button onClick={closeModal} color="gray">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Logout;
