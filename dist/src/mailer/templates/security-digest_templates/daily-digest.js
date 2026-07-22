"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyDigest = void 0;
exports.dailyDigest = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Résumé Quotidien</title>

<style>
body{margin:0;padding:0;background:#f3f4f6;font-family:Arial;color:#111827;}
.wrapper{width:100%;padding:40px 20px;box-sizing:border-box;}
.container{max-width:620px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;}
.header{padding:28px 32px;border-bottom:1px solid #e5e7eb;}
.header h1{margin:0;font-size:22px;font-weight:600;}
.content{padding:32px;}
.alert-box{margin:28px 0;border:1px solid #e5e7eb;background:#f9fafb;border-radius:8px;}
.info-row{display:flex;padding:14px 18px;border-bottom:1px solid #e5e7eb;}
.info-row:last-child{border-bottom:none;}
.label{width:220px;font-weight:600;}
.value{flex:1;}
.notice{margin-top:30px;padding-top:20px;border-top:1px solid #e5e7eb;font-size:14px;color:#6b7280;}
.footer{padding:20px 32px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af;}
</style>

</head>

<body>
<div class="wrapper">
<div class="container">

<div class="header">
<h1>Résumé quotidien</h1>
</div>

<div class="content">

<p>Voici votre activité du jour.</p>

<div class="alert-box">
<div class="info-row"><div class="label">Date</div><div class="value">%date%</div></div>
<div class="info-row"><div class="label">Campagnes terminées</div><div class="value">%campaigns_finished_list%</div></div>
<div class="info-row"><div class="label">Volume envoyé</div><div class="value">%total_volume_sent%</div></div>
<div class="info-row"><div class="label">Dépenses</div><div class="value">%total_spend%</div></div>
<div class="info-row"><div class="label">Taux livraison moyen</div><div class="value">%avg_delivery_rate%</div></div>
</div>

</div>

<div class="notice">
Résumé généré automatiquement chaque jour.
</div>

<div class="footer">
© %current_year% SaaS SMS Platform
</div>

</div>
</div>
</body>
</html>
`;
//# sourceMappingURL=daily-digest.js.map