// africa.jsx
'use client'

import { Map } from '../map'
import { africaMapData } from '../map-data/africa'

export function AfricaMap(props) {
  return <Map data={africaMapData} {...props} />
}