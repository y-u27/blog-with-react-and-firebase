import { signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      // ↓ローカルストレージに保存することができる
      localStorage.setItem("isAuth", true);
      // ↓ログインしたという証拠を残すための状態変数
      setIsAuth(true);
      // ホームのコンポーネントにログインした後自動で遷移する
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
