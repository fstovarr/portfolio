import React, { useState } from 'react'
// import { Document,  } from 'react-pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

import sie from 'file-loader!../assets/documents/dummy.pdf'

export default function Test() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  return (
    <div style={{ position: 'relative' }}>
      <Document file={sie} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="400" pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
      </p>
      <div style={{ position: 'absolute', bottom: 0 }}>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}
