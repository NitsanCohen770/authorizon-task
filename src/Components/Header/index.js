import React from 'react';
import urlPropType from 'url-prop-type';
import { AdminPanel, HeaderWrapper } from './styles';
import ProfileImage from '../../profile.jpg';
import Button from '../Button';
const Header = ({ userImageUrl }) => {
  return (
    <>
      <HeaderWrapper>
        <div>
          Authorizon Assignment <div>Live Chat Application</div>
        </div>

        <img src={ProfileImage} alt="Your profile" />
      </HeaderWrapper>
      <AdminPanel>
        <Button width="134px" height="40px">
          + Add New Filter
        </Button>
      </AdminPanel>
    </>
  );
};

Header.propTypes = {
  userImageUrl: urlPropType,
};

export default Header;
