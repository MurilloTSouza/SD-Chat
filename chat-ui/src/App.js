import React, { useState } from "react";
import Chat from "./components/Chat";
import LoginForm from "./components/LoginForm";

const styles = {
  app: {
    backgroundColor: '#EFEFEF',
    height: '100%'
  }
}

const App = () => {

  const [user, setUser] = useState(null);

  let content = user
    ? <Chat user={user}/> // if logged in
    : <LoginForm onSubmit={setUser} /> // if not logged

  return (
    <div className="App" style={styles.app}>
      {content}
    </div>
  );
}

export default App;
