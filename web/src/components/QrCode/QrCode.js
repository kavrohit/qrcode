import React from 'react'
import './QrCode.css'
const QRCodeComponent = ({ generate }) => {
  const [qrCode, setQrCode] = React.useState('')
  const [url, setUrl] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const url = event.target.elements.url.value
    const code = await generate(url)
    setQrCode(code)
    setUrl(url)
  }

  console.log('Hit API to save', qrCode)
  console.log('Hit API to save', url)

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
      {qrCode && <img src={qrCode} alt="QR code" className="qr-code-image" />}
    </div>
  )
}

export default QRCodeComponent
