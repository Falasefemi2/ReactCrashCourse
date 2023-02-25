import React, { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

const App = () => {
  const [modalIsvisible, setModalIsVisible] = useState(true);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const showModalHandler = () => {
    setModalIsVisible(true);
  };
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsvisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
};

export default App;
