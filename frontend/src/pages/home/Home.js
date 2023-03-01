import { useEffect, useRef, useState } from "react";
import ActionCable from "actioncable";
import "./Home.css";
// tutorial: https://www.fmendez.com/web-sockets-with-react-redux-and-ruby-on-rails

function Home() {
  const [messages, setMessages] = useState([]);
  const channelRef = useRef();
  const cable = ActionCable.createConsumer("ws://localhost:3000/cable");
  const inputMessage = useRef();

  const createSubscription = () => {
    channelRef.current = cable.subscriptions.create(
      { channel: "BicyclesChannel" },
      { received: (message) => handleReceivedMessage(message) }
    );
  };

  const removeSubscription = () => {
    channelRef.current.unsubscribe();
  }

  const handleReceivedMessage = (message) => {
    setMessages(messages => [...messages, message]);
  };

  useEffect(() => {
    createSubscription();

    return () => {
      removeSubscription();
    }
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/send_message', {
      method: 'POST',
      body: JSON.stringify({ message: inputMessage.current.value }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    inputMessage.current.value = "";
  }

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}

      <form id="form-message" onSubmit={sendMessage}>
        <input type="text" placeholder="message" name="message" ref={inputMessage} />
        <button className="button button2" type="submit">Send</button>
      </form>

    </div>
  );
}

export default Home;