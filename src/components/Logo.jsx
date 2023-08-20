import { Link } from 'react-router-dom';

function Logo() {
  return (
    <h1>
      <Link to="/">
        <img
          src="https://img.cgv.co.kr/R2014/images/common/logo/logoWhite.png"
          alt="CGV"
          className="w-[74px] h-8 mr-12"
        />
      </Link>
    </h1>
  );
}

export default Logo;
