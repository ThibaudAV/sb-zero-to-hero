import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Liker = ({ onLike, onDislike, likes, dislikes }) => {
  const [state, setState] = useState({
    likes,
    dislikes,
  });

  useEffect(() => {
    setState({ likes, dislikes });
  }, [likes, dislikes]);

  const _onLike = () => {
    setState({ ...state, likes: state.likes + 1 });
    onLike();
  };

  const _onDislike = () => {
    setState({ ...state, dislikes: state.dislikes + 1 });
    onDislike();
  };

  return (
    <div>
      <button id="like" onClick={_onLike}>
        Like
      </button>
      <button id="dislike" onClick={_onDislike}>
        Dislike
      </button>
      <p>
        {state.likes} Likes - {state.dislikes} Dislikes
      </p>
    </div>
  );
};

Liker.propTypes = {
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};

Liker.defaultProps = {
  likes: 0,
  dislikes: 0,
};
