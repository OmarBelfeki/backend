"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceGenerated = void 0;
exports.invoiceGenerated = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Facture Disponible</title>

<style>
body{margin:0;padding:0;background:#f3f4f6;font-family:Arial;color:#111827;}
.wrapper{width:100%;padding:40px 20px;box-sizing:border-box;}
.container{max-width:620px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;}
.header{padding:28px 32px;border-bottom:1px solid #e5e7eb;}
.header h1{margin:0;font-size:22px;font-weight:600;}
.header p{margin:8px 0 0;font-size:14px;color:#6b7280;}
.content{padding:32px;}
.content p{margin:0 0 18px;line-height:1.7;font-size:15px;color:#374151;}
.alert-box{margin:28px 0;border:1px solid #e5e7eb;background:#f9fafb;border-radius:8px;overflow:hidden;}
.info-row{display:flex;padding:14px 18px;border-bottom:1px solid #e5e7eb;font-size:14px;}
.info-row:last-child{border-bottom:none;}
.label{width:190px;font-weight:600;}
.value{flex:1;color:#374151;}
.notice{margin-top:30px;padding-top:20px;border-top:1px solid #e5e7eb;font-size:14px;color:#6b7280;}
.footer{padding:20px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;font-size:12px;color:#9ca3af;text-align:center;}
</style>

</head>

<body>
<div class="wrapper">
<div class="container">

<div class="header">
<h1>Facture disponible</h1>
<p>Notification système</p>
</div>

<div class="content">

<p>Votre facture est prête et disponible.</p>

<div class="alert-box">
<div class="info-row"><div class="label">Numéro</div><div class="value">%invoice_number%</div></div>
<div class="info-row"><div class="label">Montant</div><div class="value">%amount%</div></div>
<div class="info-row"><div class="label">Date</div><div class="value">%date%</div></div>
<div class="info-row"><div class="label">Télécharger</div><div class="value">%invoice_url%</div></div>
</div>

</div>

<div class="notice">
La facture est générée automatiquement par la plateforme.
</div>

<div class="footer">
© %current_year% SaaS SMS Platform
</div>

</div>
</div>
</body>
</html>
`;
//# sourceMappingURL=invoice-generated.js.map