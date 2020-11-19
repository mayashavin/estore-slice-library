import { setConfig } from 'cloudinary-build-url'

setConfig({
  cloudName: process.env.cloudName,
  storageType: process.env.storageType
})