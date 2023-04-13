/* eslint-disable prettier/prettier */
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormText,
  CFormTextarea,
  CInputGroup,
  CRow,
  CTable,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import Table from 'src/views/Table'
import * as icon from '@coreui/icons'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UpdateOrganizationSchema } from 'src/utils/schema/organization.schema'

export default function Organization() {
  const UpdateFrom = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ mode: 'onTouched', resolver: yupResolver(UpdateOrganizationSchema) })

    const onSubmit = (data) => {
      alert(data)
    }
    console.log(Object.keys(errors).length)
    return (
      <CForm
        onSubmit={handleSubmit(onSubmit)}
        validated={Object.keys(errors).length !== 0}
        encType="multipart/form-data"
      >
        <CFormInput
          feedbackInvalid={errors.title?.message}
          label="Title"
          type="text"
          {...register('title')}
          required
        />

        <CFormInput
          feedbackInvalid={errors.email_address?.message}
          label="Email Address"
          type="text"
          {...register('email_address')}
          //   text={errors.email_address?.message}
          required
        ></CFormInput>
        <CFormInput
          feedbackInvalid={errors.instagram_handler?.message}
          label="Instagram Handler"
          type="text"
          {...register('instagram_handler')}
          required
        ></CFormInput>
        <CFormInput
          feedbackInvalid={errors.facebook_handler?.message}
          label="Facebook Handler"
          type="text"
          {...register('facebook_handler')}
          required
        ></CFormInput>
        <CFormInput
          feedbackInvalid={errors.linkedin_handler?.message}
          label="Linkedin Handler"
          type="text"
          {...register('linkedin_handler')}
          required
        ></CFormInput>
        <CFormInput
          feedbackInvalid={errors.logo_image?.message}
          label="Logo Image"
          type="file"
          {...register('logo_image')}
          required
        ></CFormInput>
        <CFormInput
          feedbackInvalid={errors.favicon_image?.message}
          label="Favicon Image"
          type="file"
          {...register('favicon_image')}
          required
        ></CFormInput>
        <CFormInput
          feedbackInvalid={errors.website_url?.message}
          label="Website Url"
          type="text"
          {...register('website_url')}
          required
        ></CFormInput>
        <CFormTextarea
          feedbackInvalid={errors.term_and_privacy?.message}
          rows={4}
          label="terms and privacy"
          type="text"
          {...register('term_and_privacy')}
          required
        />
        <CFormTextarea
          feedbackInvalid={errors.help_and_support?.message}
          rows={5}
          label="help and Support"
          type="text"
          {...register('help_and_support')}
          required
        />
        <CButton className="mt-2" type="submit">
          Submit
        </CButton>
      </CForm>
    )
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow className="justify-content-between">
              <CCol xs={4}>
                <strong>Update Deatils</strong>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>{UpdateFrom()}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
