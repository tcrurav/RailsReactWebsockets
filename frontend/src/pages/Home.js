import { useEffect, useState } from "react";
import ActionCable from "actioncable";
// tutorial: https://www.fmendez.com/web-sockets-with-react-redux-and-ruby-on-rails

function Home() {
  const [messages, setMessages] = useState([]);
  const cable = ActionCable.createConsumer("ws://localhost:3000/cable");

  const createSubscription = () => {
    cable.subscriptions.create(
      { channel: "BicyclesChannel" },
      { received: (message) => handleReceivedMessage(message) }
    );
  };

  const handleReceivedMessage = (message) => {
    // console.log("hola");
    // console.log(message);
    // console.log("adios");
    // console.log(messages);
    setMessages(messages => [...messages, message]);
  };

  useEffect(() => {
    createSubscription();
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/send_message')
      .then(response => console.log(response));
  }

  return (
    <div className="">
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}

      <form>
        <button type="submit" onClick={sendMessage}>Send Message</button>
      </form>

    </div>
  );
}

export default Home;