import QRCode from 'qrcode'

import QRCodeComponent from 'src/components/QRCode/QrCode'


const HomePage = () => {
  const generateQRCode = async (url) => {
    try {
      const code = await QRCode.toDataURL(url)
      return code
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <div>
        <h1>QR Code Generator</h1>
      </div>
      <div>
        <QRCodeComponent generate={generateQRCode} />
      </div>
    </>
  )
}

export default HomePage
