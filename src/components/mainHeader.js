import React from "react";

import Image from "../components/image";
import "./mainHeader.css";

const MainHeader = () => (
  <div className="main-header">
    <div className="header-text">
      <h1>إيبسوم بالعربي هي النسخة العربية لقصيدة لوريم إيبسوم</h1>
      <p>إيبسوم بالعربي هي النسخة العربية لقصيدة لوريم إيبسوم وهي ببساطة نص شكلي يستخدم في مجالات التصميم, الطباعة والنشر ويوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه, بروشور, فلاير أو نماذج مواقع انترنت على سبيل المثال.</p>
    </div>
    <div style={{ maxWidth: `500px`, width: `500px`, marginBottom: ``, display: `block` }}>
      <Image />
    </div>
  </div>
)

export default MainHeader