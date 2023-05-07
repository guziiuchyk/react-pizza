import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={3}
        width={280}
        height={490}
        viewBox="0 0 280 490"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="53" y="71" rx="0" ry="0" width="0" height="1" />
        <rect x="40" y="267" rx="5" ry="5" width="200" height="30" />
        <rect x="29" y="307" rx="5" ry="5" width="220" height="87" />
        <rect x="147" y="410" rx="5" ry="5" width="102" height="33" />
        <rect x="30" y="410" rx="5" ry="5" width="66" height="32" />
        <circle cx="140" cy="148" r="110" />
    </ContentLoader>
)

export default Skeleton
