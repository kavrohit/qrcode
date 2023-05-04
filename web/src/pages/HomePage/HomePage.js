import { PrismaClient } from '@prisma/client'

import QRCodeComponent from 'src/components/QrCodeComponent/QrCode'

const QRCode = require('qrcode')
const prisma = new PrismaClient()

const HomePage = () => {
  const generateQRCode = async (url) => {
    try {
      const code = await QRCode.toDataURL(url)
      const savedQRCode = await prisma.QRCode.create({
        data: {
          url,
          image: code,
        },
      })
      console.log('QR Code saved to database:', savedQRCode)
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
