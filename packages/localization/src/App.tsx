import { useEffect } from "react";
import Layout from "./components/Layout";
import { useDispatch } from 'react-redux';
import { updateLanguage, populateLanguages } from "./store/actions";

const getBroswerLanguage = (): string => {
  return navigator.language || "";
}

const getBroswerLanguages = (): readonly string[] => {
  return navigator.languages;
}

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLanguage(getBroswerLanguage()));
    dispatch(populateLanguages(getBroswerLanguages()));
  }, [dispatch]);

  return (
    <Layout />
  );
}

export default App;
