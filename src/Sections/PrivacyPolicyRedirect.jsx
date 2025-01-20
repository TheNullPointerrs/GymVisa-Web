import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicyRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = "/PrivacyPolicy.html";
  }, [navigate]);

  return null;
};

export default PrivacyPolicyRedirect;