import { collection, deleteDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from "../firebase";
import "./Home.css";

const Home = () => {
  const [postList, setPostList] = useState([]);

  // useEffectの中でasync関数を使う時はもう一度その処理のなかで関数を作る必要があるため、useEffectの直後（第一引数の前）でasync関数は記述しない!
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log(data);
      // console.log(data.docs.map((doc) => ({ doc })));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  }, []);

  // どのpostなのかを判別するために1つひとつのpostに割り振られているidをhandleDeleteの引数に渡してその引数をhandleDelete関数内で受け取ることで記事のidが指定でき、削除できる
  const handleDelete = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.href = "/";
  };

  return (
    <div className='homePage'>
      {/* 1つひとつにpostという変数を用意する */}
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
          <div className="postTextContainer">{post.postsText}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {/* 「===」で条件分岐をして、それがtrueの時、&&で削除ボタンを表示させ、falseの時は削除ボタンは非表示にする */}
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
