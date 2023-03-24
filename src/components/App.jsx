import React from "react";
import Card from "./Card";
import image from "./bas.JPG"
import contacts from "../contacts";


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
      name="Barnabas" 
      img={image}
      tel="+123 456 789" 
      email="b@barnabas.com" />
      <Card 
      name={contacts[0].name}
      img={contacts[0].imgURL}
      tel={contacts[0].phone} 
      email={contacts[0].email} />
      <Card 
      name={contacts[1].name}
      img={contacts[1].imgURL}
      tel={contacts[1].phone} 
      email={contacts[1].email} />
      <Card 
      name={contacts[2].name}
      img={contacts[2].imgURL}
      tel={contacts[2].phone} 
      email={contacts[2].email} />
    </div>
  );
}
export default App;