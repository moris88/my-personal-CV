import {
  BlobProvider,
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
} from '@react-pdf/renderer'

import { CV } from '@/Components'
import { useIsTablet } from '@/hooks'

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
  const isTablet = useIsTablet(1024)
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  if (isTablet) {
    return (
      <BlobProvider document={pdfDoc}>
        {({ url, loading }) =>
          loading ? (
            'Caricamento...'
          ) : url ? (
            <div className="my-10 flex w-full justify-center">
              <button onClick={() => handleClick(url)}>Apri Preview PDF</button>
            </div>
          ) : null
        }
      </BlobProvider>
    )
  }
  return (
    <>
      <div className="container">
        <p className="text-center text-2xl font-bold md:text-start">{title}</p>
        <PDFDownloadLink document={pdfDoc} fileName={fileName}>
          {({ loading }) => (
            <button disabled={loading}>
              {loading ? 'Generazione...' : 'Scarica CV in PDF'}
            </button>
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
