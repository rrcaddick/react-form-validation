import styles from "./app.module.css";
import Form from "./components/Form";
import ContactForm from "./components/FormTest/ContactForm";

function App() {
  return (
    <div className={styles.app}>
      <ContactForm />
    </div>
  );
}

export default App;
