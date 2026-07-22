"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.antiFraudAlert = void 0;
exports.antiFraudAlert = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alerte Anti-Fraude</title>

<style>
body{margin:0;padding:0;background:#f3f4f6;font-family:Arial;color:#111827;}
.wrapper{width:100%;padding:40px 20px;box-sizing:border-box;}
.container{max-width:620px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;}
.header{padding:28px 32px;border-bottom:1px solid #e5e7eb;}
.header h1{margin:0;font-size:22px;font-weight:600;color:#b91c1c;}
.header p{margin:8px 0 0;font-size:14px;color:#6b7280;}
.content{padding:32px;}
.content p{margin:0 0 18px;line-height:1.7;font-size:15px;color:#374151;}
.alert-box{margin:28px 0;border:1px solid #fecaca;background:#fef2f2;border-radius:8px;}
.info-row{display:flex;padding:14px 18px;border-bottom:1px solid #fecaca;}
.info-row:last-child{border-bottom:none;}
.label{width:190px;font-weight:600;}
.value{flex:1;}
.notice{margin-top:30px;padding-top:20px;border-top:1px solid #e5e7eb;font-size:14px;color:#6b7280;}
.footer{padding:20px 32px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af;}
</style>

</head>

<body>
<div class="wrapper">
<div class="container">

<div class="header">
<h1>Alerte anti-fraude</h1>
<p>Contenu bloqué par le système de sécurité</p>
</div>

<div class="content">

<p>Une campagne a été bloquée pour des raisons de sécurité.</p>

<div class="alert-box">
<div class="info-row"><div class="label">Campagne</div><div class="value">%campaign_name%</div></div>
<div class="info-row"><div class="label">Raison fraude</div><div class="value">%fraud_reason%</div></div>
<div class="info-row"><div class="label">Niveau de risque</div><div class="value">%risk_level%</div></div>
<div class="info-row"><div class="label">Modération</div><div class="value">%moderation_link%</div></div>
</div>

</div>

<div class="notice">
Le contenu a été automatiquement bloqué par le système anti-abus.
</div>

<div class="footer">
© %current_year% SaaS SMS Platform
</div>

</div>
</div>
</body>
</html>
`;
//# sourceMappingURL=anti-fraud-alert.js.map