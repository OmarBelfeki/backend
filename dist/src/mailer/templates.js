"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestSMS = void 0;
exports.requestSMS = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<title>SMS Pack Request</title>

<style>

body{
  margin:0;
  padding:20px;
  background:#f5f7fa;
  font-family:Arial, Helvetica, sans-serif;
  color:#111827;
}

.container{
  max-width:560px;
  margin:auto;
  background:#ffffff;
  border:1px solid #e5e7eb;
  border-radius:12px;
  overflow:hidden;
}

.header{
  padding:24px;
  border-bottom:1px solid #e5e7eb;
}

.header h1{
  margin:0;
  font-size:22px;
  color:#111827;
}

.header p{
  margin:8px 0 0;
  font-size:14px;
  color:#6b7280;
}

.content{
  padding:24px;
}

.info{
  width:100%;
  border-collapse:collapse;
}

.info td{
  padding:12px 0;
  border-bottom:1px solid #f1f5f9;
  font-size:14px;
}

.label{
  color:#6b7280;
  width:40%;
}

.value{
  color:#111827;
  font-weight:600;
}

.note{
  margin-top:20px;
  padding:16px;
  background:#f9fafb;
  border-radius:10px;
  font-size:14px;
  line-height:1.6;
  color:#374151;
}

.button{
  margin-top:28px;
  text-align:center;
}

.btn{
  display:inline-block;
  padding:12px 22px;
  background:#111827;
  color:#ffffff !important;
  text-decoration:none;
  border-radius:8px;
  font-size:14px;
  font-weight:600;
}

.footer{
  padding:20px 24px;
  border-top:1px solid #e5e7eb;
  background:#fafafa;
  font-size:12px;
  color:#9ca3af;
  text-align:center;
}

</style>
</head>

<body>

<div class="container">

  <div class="header">
    <h1>SMS Pack Purchase Request</h1>
    <p>A new SMS pack request has been submitted.</p>
  </div>

  <div class="content">

    <table class="info">

      <tr>
        <td class="label">Company</td>
        <td class="value">%company%</td>
      </tr>

      <tr>
        <td class="label">Quantity</td>
        <td class="value">%quantity% SMS</td>
      </tr>

      <tr>
        <td class="label">Request Date</td>
        <td class="value">%date%</td>
      </tr>

      <tr>
        <td class="label">Status</td>
        <td class="value">Pending Review</td>
      </tr>

    </table>

    <div class="note">
      This request requires administrator validation before processing.
    </div>

    <div class="button">
      <a href="%dashboard_url%" class="btn">
        View Request
      </a>
    </div>

  </div>

  <div class="footer">
    © %year% %platform_name%
  </div>

</div>

</body>
</html>
`;
//# sourceMappingURL=templates.js.map