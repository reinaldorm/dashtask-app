import brand_dashtask from '../../sources/svg/brand-dashtask.svg';
import brand_google from '../../sources/svg/brand-google.svg';
import brand_facebook from '../../sources/svg/brand-facebook.svg';
import brand_outlined_dashtask from '../../sources/svg/brand-outlined-dashtask.svg';
import bg_register_illustration from '../../sources/svg/bg-register-illustration.svg';
import bg_login_illustration from '../../sources/svg/bg-login-illustration.svg';

const assets = {
  bg: {
    register: {
      src: bg_register_illustration,
      alt: '3d-colored-sphere',
    },
    login: {
      src: bg_login_illustration,
      alt: '3d-colored-square',
    },
  },
  brand: {
    dashtask: {
      src: brand_dashtask,
      alt: 'dashtask-logo-mark',
    },
    dashtask_outlined: {
      src: brand_outlined_dashtask,
      alt: 'dashtask-logo-mark',
    },
    google: {
      src: brand_google,
      alt: 'google-logo-mark',
    },
    facebook: {
      src: brand_facebook,
      alt: 'facebook-logo-mark',
    },
  },
};

export default assets;
