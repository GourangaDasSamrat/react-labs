import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

const UserDetails = () => {
  const { userId } = useParams();
  const { fetchUserById } = useUserContext();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      const userData = await fetchUserById(userId);
      setUser(userData);
      setLoading(false);
    };

    loadUser();
  }, [userId, fetchUserById]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading user details...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="loading-container">
        <div className="error-text">User not found</div>
        <button onClick={() => navigate("/users")} className="back-button">
          Back to Users
        </button>
      </div>
    );
  }

  return (
    <div className="user-details-container">
      <button onClick={() => navigate("/users")} className="back-button-top">
        ← Back to Users
      </button>

      <div className="user-details-card">
        <div className="user-details-header">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.name
            )}&size=150&background=random&color=fff&bold=true`}
            alt={user.name}
            className="user-details-avatar"
          />
          <h1 className="user-details-name">{user.name}</h1>
          <p className="user-details-username">@{user.username}</p>
        </div>

        <div className="user-details-content">
          <div className="detail-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="detail-item">
              <strong>Email:</strong>
              <span>{user.email}</span>
            </div>
            <div className="detail-item">
              <strong>Phone:</strong>
              <span>{user.phone}</span>
            </div>
            <div className="detail-item">
              <strong>Website:</strong>
              <span>{user.website}</span>
            </div>
          </div>

          <div className="detail-section">
            <h2 className="section-title">Address</h2>
            <div className="detail-item">
              <strong>Street:</strong>
              <span>{user.address.street}</span>
            </div>
            <div className="detail-item">
              <strong>Suite:</strong>
              <span>{user.address.suite}</span>
            </div>
            <div className="detail-item">
              <strong>City:</strong>
              <span>{user.address.city}</span>
            </div>
            <div className="detail-item">
              <strong>Zipcode:</strong>
              <span>{user.address.zipcode}</span>
            </div>
            <div className="detail-item">
              <strong>Coordinates:</strong>
              <span>
                Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
              </span>
            </div>
          </div>

          <div className="detail-section">
            <h2 className="section-title">Company</h2>
            <div className="detail-item">
              <strong>Name:</strong>
              <span>{user.company.name}</span>
            </div>
            <div className="detail-item">
              <strong>Catch Phrase:</strong>
              <span>{user.company.catchPhrase}</span>
            </div>
            <div className="detail-item">
              <strong>Business:</strong>
              <span>{user.company.bs}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
