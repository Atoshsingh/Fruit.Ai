import React, { useEffect, useState } from 'react';
import styles from './Translator.module.css';
import { useNavigate } from 'react-router-dom';

const Translator = () => {
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('hi');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const nav = useNavigate();
  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem("token"))
    if(!token){
      nav("/login")
    }
  },[])
  
  const translateText = async () => {
    if (!fromText.trim()) return;
    setToText('Translating...');
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${fromText.trim()}&langpair=${fromLang}|${toLang}`);
      const data = await response.json();
      if (data && data.responseData && data.responseData.translatedText) {
        setToText(data.responseData.translatedText);
      } else {
        setError('Translation failed');
        setToText('');
      }
    } catch (error) {
      setError('Error translating text');
      setToText('');
    }
    setLoading(false);
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.translationDiv}>
        <h1 className={styles.heading}>Translator</h1>
        
        <div className={styles.languageSelector}>
          <label>Select Source Language: </label>
          <select
            value={fromLang}
            onChange={(e) => setFromLang(e.target.value)}
            className={styles.selectBox}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh-CN">Chinese (Simplified)</option>
            <option value="ja">Japanese</option>
            <option value="ru">Russian</option>
            <option value="ar">Arabic</option>
            <option value="ko">Korean</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="bn">Bengali</option>
            <option value="pa">Punjabi</option>
            <option value="vi">Vietnamese</option>
            <option value="th">Thai</option>
            <option value="ms">Malay</option>
            <option value="tr">Turkish</option>
          </select>
        </div>

        <div className={styles.languageSelector}>
          <label>Select Target Language: </label>
          <select
            value={toLang}
            onChange={(e) => setToLang(e.target.value)}
            className={styles.selectBox}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh-CN">Chinese (Simplified)</option>
            <option value="ja">Japanese</option>
            <option value="ru">Russian</option>
            <option value="ar">Arabic</option>
            <option value="ko">Korean</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="bn">Bengali</option>
            <option value="pa">Punjabi</option>
            <option value="vi">Vietnamese</option>
            <option value="th">Thai</option>
            <option value="ms">Malay</option>
            <option value="tr">Turkish</option>
          </select>
        </div>

        <textarea
          className={styles.inputBox}
          value={fromText}
          onChange={(e) => setFromText(e.target.value)}
          placeholder="Enter text to translate"
        />

        <button onClick={translateText} className={styles.translateButton}>
          {loading ? 'Translating...' : 'Translate'}
        </button>

        {error && <p className={styles.errorField}>{error}</p>}
        {toText && !error && <p className={styles.resultField}>{toText}</p>}
      </div>
    </div>
  );
}

export default Translator;
