import React, { useState } from "react";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    sports: false,
    music: false,
    travel: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* Top-level heading */}
      <h1>Hi, I'm {name || "John Doe"}</h1>

      {/* Image of yourself */}
      <img src="https://via.placeholder.com/350" alt="My profile pic" />


      {/* About Me Section */}
      <h2>About Me</h2>
      <p>Lorem ipsum.</p>

      {/* Links Section */}
      <div>
        <a href="https://github.com/raybon254">GitHub</a>
        <a href="https://linkedin.com/raybon254">LinkedIn</a>
      </div>

      {/* Newsletter Signup Form */}
      <h1>Newsletter Signup</h1>
      {isSubmitted ? (
        <div>
          <h2>Thanks for signing up, {name}!</h2>
          <p>Your interests are: </p>
          <ul>
            {Object.entries(interests)
              .filter(([interest, isSelected]) => isSelected)
              .map(([interest]) => (
                <li key={interest}>{interest}</li>
              ))}
          </ul>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h3>Select your interests:</h3>
            <label>
              <input
                type="checkbox"
                name="sports"
                checked={interests.sports}
                onChange={handleCheckboxChange}
              />
              Sports
            </label>
            <label>
              <input
                type="checkbox"
                name="music"
                checked={interests.music}
                onChange={handleCheckboxChange}
              />
              Music
            </label>
            <label>
              <input
                type="checkbox"
                name="travel"
                checked={interests.travel}
                onChange={handleCheckboxChange}
              />
              Travel
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;