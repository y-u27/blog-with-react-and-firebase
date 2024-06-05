import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'



const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to='/'>
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {!isAuth ? (
      // 権限がない場合はログインする
        <Link to='/login'>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        ログイン
      </Link>
      ) : (
        // 権限がある場合はログアウトする
        <>
          <Link to='/createpost'>
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
