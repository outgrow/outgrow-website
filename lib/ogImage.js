import { green } from "../styles/colors"

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
        backgroundColor: "#fafafa",
        backgroundImage: `radial-gradient(circle at 88% 8%, rgba(${accent}, .3), transparent 55%), radial-gradient(circle at 4% 96%, rgba(${green}, .18), transparent 50%)`,
        color: "#0b0b0b",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, fontWeight: 800, marginBottom: 28 }}>
        <span>out</span>
        <span style={{ color: `rgb(${accent})` }}>:</span>
        <span>grow</span>
      </div>
      <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1.12, maxWidth: 1000 }}>
        {title}
      </div>
      {subtitle && (
        <div style={{ display: "flex", fontSize: 27, marginTop: 26, maxWidth: 900, color: "rgba(11, 11, 11, .65)" }}>
          {subtitle}
        </div>
      )}
    </div>
  )
}
