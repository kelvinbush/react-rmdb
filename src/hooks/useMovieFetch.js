import { useState, useEffect, useCallback } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      //Get Directors only
      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );
      setState({
        ...movie,
        actors: credits.cast,
        directors,
      });
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  }, [movieId]);

  useEffect(() => {
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }
    fetchData().then((r) => r);
  }, [movieId, fetchData]);

  //write to session storage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
