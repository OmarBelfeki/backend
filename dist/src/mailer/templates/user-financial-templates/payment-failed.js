"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentFailed = void 0;
exports.paymentFailed = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Paiement Échoué</title>

<style>
body{margin:0;padding:0;background:#f3f4f6;font-family:Arial;color:#111827;}
.wrapper{width:100%;padding:40px 20px;box-sizing:border-box;}
.container{max-width:620px;margin:auto;background:#fff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;}
.header{padding:28px 32px;border-bottom:1px solid #e5e7eb;}
.header h1{margin:0;font-size:22px;font-weight:600;color:#b91c1c;}
.content{padding:32px;}
.alert-box{margin:28px 0;border:1px solid #fecaca;background:#fef2f2;border-radius:8px;}
.info-row{display:flex;padding:14px 18px;border-bottom:1px solid #fecaca;}
.info-row:last-child{border-bottom:none;}
.label{width:190px;font-weight:600;}
.value{flex:1;}
.notice{margin-top:30px;padding-top:20px;border-top:1px solid #e5e7eb;color:#6b7280;}
.footer{padding:20px 32px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af;}
</style>
</head>

<body>
<div class="wrapper">
<div class="container">

<div class="header">
<h1>Paiement échoué</h1>
</div>

<div class="content">
<p>Un paiement n’a pas pu être traité.</p>

<div class="alert-box">
<div class="info-row"><div class="label">Montant</div><div class="value">%amount%</div></div>
<div class="info-row"><div class="label">Pack</div><div class="value">%pack_name%</div></div>
<div class="info-row"><div class="label">Raison</div><div class="value">%failure_reason%</div></div>
</div>

<p><a href="%retry_url%">Réessayer</a></p>
</div>

<div class="notice">
Veuillez vérifier votre moyen de paiement.
</div>

<div class="footer">
© %current_year% SaaS SMS Platform
</div>

</div>
</div>
</body>
</html>
`;
//# sourceMappingURL=payment-failed.js.map