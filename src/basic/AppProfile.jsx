import Profile from "./components/Profile";
import "./App.css";
import Avatar from "./components/Avatar";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://images.unsplash.com/photo-1627483297886-49710ae1fc22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1627483297886-49710ae1fc22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        name="linda"
        title="Front-end developer"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1679675084166-49298b9abd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        name="Halabum"
        title="Back-end developer"
      />
      <Profile
        image="https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        name="Json"
        title="Cloud engineer"
      />
    </>
  );
}

export default AppProfile;
