import { PDFViewer } from '@react-pdf/renderer';
import MyDocumentCV from './MyDocumentCV';

function App() {
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <MyDocumentCV />
    </PDFViewer>
  );
}

export default App
