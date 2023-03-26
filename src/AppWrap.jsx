import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1627483297886-49710ae1fc22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          name="Bob"
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

const Navbar = ({ children }) => {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
};

const Avatar = ({ image, name, size }) => {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
};
