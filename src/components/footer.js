import React from "react"

export default function Footer(props) {
  return <div className={`footer ${props.isOpen}`}><div className="footer-content">
      <a href="/about">about</a>  </div>
</div>
}
