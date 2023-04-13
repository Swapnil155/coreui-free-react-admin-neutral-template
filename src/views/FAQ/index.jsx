/* eslint-disable prettier/prettier */

import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import React from 'react'
import * as icon from '@coreui/icons'
import CIcon from '@coreui/icons-react'

export default function FAQ() {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow className="justify-content-between">
              <CCol xs={4}>
                <strong>All Deatils</strong>
              </CCol>
              <CCol xs="auto">
                <CButton color="success">
                  <CIcon icon={icon.cilPlus} /> Add
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>{`hiii`}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
