import React from 'react'


// import uuid from 'uuid'
// import { v4 as uuidv4 } from 'uuid'

const QRCodeComponent = ({ generate }) => {
  const [qrCode, setQrCode] = React.useState('')
  const [url, setUrl] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    // const uniqueId = uuidv4()

    const url = event.target.elements.url.value
    // const urlWituid = url + uniqueId
    console.log({ url, qrCode })
    const code = await generate(url)
    setQrCode(code)
    setUrl(url)
  }

  const handleSave = async () => {
    try {
      const updatedQRCode = await prisma.QRCode.update({
        where: { url: url },
        data: { scanCount: { increment: 1 } },
      })
      console.log('QR Code scan count updated:', updatedQRCode)
    } catch (err) {
      console.error(err)
    }
  }

  React.useEffect(() => {
    console.log('Hit API to save')
  }, [qrCode])

  return (
    <div className="qr-code-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="url-input">Enter a URL:</label>
        </div>
        <div>
          <input
            id="url-input"
            type="text"
            name="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="qr-code-button">
            Generate QR Code
          </button>
        </div>
      </form>
      {qrCode && (
        <>
          <img src={qrCode} alt="QR code" className="qr-code-image" />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  )
}

export default QRCodeComponent
