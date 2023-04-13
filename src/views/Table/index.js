/* eslint-disable prettier/prettier */

import { CTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'

export default function Table(data) {
  const keys = data.map((obj) => Object.keys(obj))

  const colums = keys[0].map((obj, index) => {
    return {
      key: obj,
      label: index === 0 ? `#` : obj,
      _props: { scope: 'col' },
    }
  })

  return <CTable columns={colums} items={data} responsive />
}
