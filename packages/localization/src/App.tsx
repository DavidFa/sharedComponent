import { useEffect } from "react";
import Layout from "./components/Layout";
import { useDispatch } from 'react-redux';
import { LanguageActionType } from "./models/Types";

const getBroswerLanguage = () => {
  return navigator.language || "";
}

const getBroswerLanguages = () => {
  return navigator.languages;
}

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LanguageActionType.updateLanguage, payload: { language: getBroswerLanguage() } });
    dispatch({ type: LanguageActionType.populateLanguages, payload: { languages: getBroswerLanguages() } });
  }, [dispatch]);

  return (
    <Layout />
  );
}

export default App;