// map-context.jsx
'use client'

import {
  createContext,
  useCallback,
  useContext, 
  useMemo,
  useRef,
  useState,
} from 'react'

const DEFAULT_ZOOM_STATE = {
  scale: 1,
  translateX: 0,
  translateY: 0,
}

const DEFAULT_ZOOM_CONFIG = {
  minZoom: 1,
  maxZoom: 8,
  zoomStep: 0.5,
  panStep: 50,
}

const MapContext = createContext(null)

function zoomTowardCenter(prev, newScale, viewBox) {
  const cx = viewBox.x + viewBox.width / 2
  const cy = viewBox.y + viewBox.height / 2
  const scaleRatio = newScale / prev.scale
  return {
    scale: newScale,
    translateX: cx - scaleRatio * (cx - prev.translateX),
    translateY: cy - scaleRatio * (cy - prev.translateY),
  }
}

export function MapProvider({
  children,
  selectedRegion: selectedRegionProp,
  zoomConfig: zoomConfigProp,
  viewBox,
}) {
  const isControlled = selectedRegionProp !== undefined
  const [uncontrolledRegion, setUncontrolledRegion] = useState(null)
  const selectedRegion = isControlled ? selectedRegionProp : uncontrolledRegion
  const noop = useCallback(() => {}, [])
  const setSelectedRegion = isControlled ? noop : setUncontrolledRegion
  const [hoveredRegion, setHoveredRegion] = useState(null)
  const [focusedRegion, setFocusedRegion] = useState(null)
  const [tooltipState, setTooltipState] = useState({
    visible: false,
    content: null,
    position: null,
  })
  const [zoomState, setZoomState] = useState(DEFAULT_ZOOM_STATE)
  const containerRef = useRef(null)

  const zoomConfig = useMemo(
    () => ({ ...DEFAULT_ZOOM_CONFIG, ...zoomConfigProp }),
    [zoomConfigProp]
  )

  const zoomIn = useCallback(() => {
    setZoomState((prev) => {
      const newScale = Math.min(
        prev.scale + zoomConfig.zoomStep,
        zoomConfig.maxZoom
      )
      if (!viewBox || newScale === prev.scale)
        return { ...prev, scale: newScale }
      return zoomTowardCenter(prev, newScale, viewBox)
    })
  }, [zoomConfig, viewBox])

  const zoomOut = useCallback(() => {
    setZoomState((prev) => {
      const newScale = Math.max(
        prev.scale - zoomConfig.zoomStep,
        zoomConfig.minZoom
      )
      if (newScale === prev.scale) return prev
      if (newScale === zoomConfig.minZoom) {
        return { scale: newScale, translateX: 0, translateY: 0 }
      }
      if (!viewBox) return { ...prev, scale: newScale }
      return zoomTowardCenter(prev, newScale, viewBox)
    })
  }, [zoomConfig, viewBox])

  const resetZoom = useCallback(() => {
    setZoomState(DEFAULT_ZOOM_STATE)
  }, [])

  const value = useMemo(
    () => ({
      selectedRegion,
      setSelectedRegion,
      hoveredRegion,
      setHoveredRegion,
      focusedRegion,
      setFocusedRegion,
      tooltipState,
      setTooltipState,
      zoomState,
      setZoomState,
      zoomConfig,
      zoomIn,
      zoomOut,
      resetZoom,
      containerRef,
    }),
    [
      focusedRegion,
      hoveredRegion,
      selectedRegion,
      setSelectedRegion,
      tooltipState,
      zoomState,
      zoomConfig,
      zoomIn,
      zoomOut,
      resetZoom,
    ]
  )

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export function useMapContext() {
  const context = useContext(MapContext)
  if (!context) {
    throw new Error('useMapContext must be used within a MapProvider.')
  }
  return context
}