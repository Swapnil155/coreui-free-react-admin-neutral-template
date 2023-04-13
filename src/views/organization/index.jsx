/* eslint-disable prettier/prettier */
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow, CTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import Table from 'src/views/Table'
import * as icon from '@coreui/icons'

export default function Organization() {
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
                <CButton color="success" href={`/Organization/Update`}>
                  <CIcon icon={icon.cilPlus} /> Add
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>{`hii`}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
