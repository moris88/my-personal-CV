import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
} from '@react-pdf/renderer'

import { CV } from '@/Components'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 24,
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
})

function App() {
  const pdfDoc = (
    <Document>
      <Page size="A4" style={styles.page}>
        <CV />
      </Page>
    </Document>
  )
  const fileName = 'Curriculum_Vitae_Maurizio_Tolomeo.pdf'
  const title = 'Curriculum Vitae di Maurizio Tolomeo'
  return (
    <>
      <div className="container">
        <p className="text-center text-2xl font-bold md:text-start">{title}</p>
        <PDFDownloadLink document={pdfDoc} fileName={fileName}>
          {({ loading }) => (
            <button>{loading ? 'Generazione...' : 'Scarica CV in PDF'}</button>
          )}
        </PDFDownloadLink>
      </div>
      <div className="hidden md:flex">
        <PDFViewer
          showToolbar={false}
          style={{ width: '100vw', height: '92vh' }}
        >
          {pdfDoc}
        </PDFViewer>
      </div>
    </>
  )
}

export default App
