/* eslint-disable prettier/prettier */
import * as Yup from 'yup'
function isValidUrl(string) {
  console.log(string)
  try {
    new URL(string)
    return true
  } catch (err) {
    return false
  }
}

const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/tiff']

export const UpdateOrganizationSchema = Yup.object().shape({
  title: Yup.string().required('title is required'),
  email_address: Yup.string().required('email address is required'),
  instagram_handler: Yup.string()
    .required('instagram is required')
    .min(4, 'instagram url should be at least 4 characters')
    .max(200, "instagram url shouldn't more then 200 characters")
    .test('facebook', 'Should be Facebook origin link', function (value) {
      if (isValidUrl(value)) {
        // return new URL(value).hostname === 'www.facebook.com'
        return new URL(value)
      }
    }),
  facebook_handler: Yup.string()
    .required('facebook is required')
    .min(4, 'facebook url should be at least 4 characters')
    .max(200, "facebook url shouldn't more then 200 characters")
    .test('facebook', 'Should be Facebook origin link', function (value) {
      if (isValidUrl(value)) {
        // return new URL(value).hostname === 'www.facebook.com'
        return new URL(value)
      }
    }),
  linkedin_handler: Yup.string()
    .required('linkedIn is required')
    .min(4, 'Linkedln url should be at least 4 characters')
    .max(200, "Linkedln url shouldn't more then 200 characters")
    .test('linkedln', 'Should be Linkedln origin link', function (value) {
      console.log(isValidUrl(value))
      if (isValidUrl(value)) {
        // console.log(value)
        // return new URL(value).hostname === 'www.linkedin.com'
        return new URL(value)
      }
    }),
  logo_image: Yup.mixed()
    .test('required', 'You need to provide a file', (files) => {
      // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
      if (files) return true
      return false
    })
    .test('fileSize', 'The file is too large', async (files) => {
      //if u want to allow only certain file sizes
      try {
        return files && (await files[0].size) <= 2000000
      } catch (error) {
        return false
      }
    })
    .test('file_formate', 'Image file has unsupported format.', (files) => {
      try {
        return files && SUPPORTED_FORMATS.includes(files[0].type)
      } catch (error) {
        return false
      }
    }),
  favicon_image: Yup.mixed()
    .test('required', 'You need to provide a file', (files) => {
      // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
      if (files) return true
      return false
    })
    .test('fileSize', 'The file is too large', async (files) => {
      //if u want to allow only certain file sizes
      try {
        return files && (await files[0].size) <= 2000000
      } catch (error) {
        return false
      }
    })
    .test('file_formate', 'Image file has unsupported format.', (files) => {
      try {
        return files && SUPPORTED_FORMATS.includes(files[0].type)
      } catch (error) {
        return false
      }
    }),
  website_url: Yup.string().required('URL is required'),
  term_and_privacy: Yup.string()
    .required('this feild is required')
    .min(4, 'Bio should be at least 4 characters')
    .max(2000, 'Total charter less then 200'),
  help_and_support: Yup.string()
    .required('this feild is required')
    .min(4, 'Bio should be at least 4 characters')
    .max(2000, 'Total charter less then 200'),
})
