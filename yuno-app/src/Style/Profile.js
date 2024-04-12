import styled from 'styled-components';
const Wrapper  = styled.section`
.profile-user {
    margin: 0 auto;
    max-width: 600px;
    padding: 20px;
  }
  
  .profile-user__info {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
  }
  
  .profile-user__name {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .profile-user__email,
  .profile-user__phone,
  .profile-user__address {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  /* Responsive design */
  @media screen and (max-width: 768px) {
    .profile-user {
      max-width: 400px;
    }
  
    .profile-user__info {
      padding: 10px;
    }
  
    .profile-user__name {
      font-size: 20px;
    }
  
    .profile-user__email,
    .profile-user__phone,
    .profile-user__address {
      font-size: 14px;
    }
  }
  
  @media screen and (max-width: 480px) {
    .profile-user {
      max-width: 300px;
    }
  
    .profile-user__info {
      padding: 5px;
    }
  
    .profile-user__name {
      font-size: 18px;
    }
  
    .profile-user__email,
    .profile-user__phone,
    .profile-user__address {
      font-size: 12px;
    }
  }
  
`;
export default Wrapper ;