import { black, white } from "../styles/colors"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function ogImageNode({ title, subtitle, accent }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: `rgb(${black})`,
        color: `rgb(${white})`,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, fontWeight: 800, color: `rgb(${accent})`, marginBottom: 24 }}>
        out:grow
      </div>
      <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1.15 }}>
        {title}
      </div>
      {subtitle && (
        <div style={{ display: "flex", fontSize: 28, marginTop: 24, maxWidth: 900, color: `rgb(${white})` }}>
          {subtitle}
        </div>
      )}
    </div>
  )
}
