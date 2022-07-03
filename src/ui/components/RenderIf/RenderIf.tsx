import React from 'react'

interface IRenderIf {
  children: JSX.Element;
  condition: boolean;
}

const RenderIf: React.FC<IRenderIf> = ({ children, condition }) => {
  if (!condition) return null

  return children
}

export default RenderIf