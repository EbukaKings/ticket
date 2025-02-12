import React, { useState } from "react";

function Attendee() {
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Avatar uploaded:", avatarUrl);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="avatar"></label>
      <input type="file" id="avatar" name="avatar" accept="image/*" />
      <br />
      <label htmlFor="avatar-url">Or enter an external image URL:</label>
      <input
        type="url"
        id="avatar-url"
        name="avatar-url"
        placeholder="https://example.com/image.jpg"
        value={avatarUrl}
        onChange={(e) => setAvatarUrl(e.target.value)}
      />
      <button type="submit">Upload Avatar</button>
    </form>
  );
}

export default Attendee;
