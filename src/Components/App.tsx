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

import LabelBox, { LabelBoxContent, LabelBoxTitle } from './LabelBox'

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
      <LabelBox className="px-5">
        <LabelBoxTitle className="left-8">Anteprima del PDF</LabelBoxTitle>
        <LabelBoxContent>
          <BlobProvider document={pdfDoc}>
            {({ url, loading }) =>
              loading ? (
                <div className="my-10 flex w-full justify-center">
                  <span>Generazione anteprima...</span>
                </div>
              ) : url ? (
                <div className="my-10 flex w-full flex-col items-center justify-center gap-4">
                  <button onClick={() => handleClick(url)}>Apri Preview</button>
                  <p>
                    Clicca sul bottone per aprire l&apos;anteprima in una nuova
                    scheda.
                  </p>
                </div>
              ) : null
            }
          </BlobProvider>
        </LabelBoxContent>
      </LabelBox>
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
