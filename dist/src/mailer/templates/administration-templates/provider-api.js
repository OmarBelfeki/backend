"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerApi = void 0;
exports.providerApi = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alerte Technique Fournisseur</title>

<style>
    body{
        margin:0;
        padding:0;
        background-color:#f3f4f6;
        font-family:Arial, Helvetica, sans-serif;
        color:#111827;
    }

    .wrapper{
        width:100%;
        padding:40px 20px;
        box-sizing:border-box;
    }

    .container{
        max-width:620px;
        margin:0 auto;
        background:#ffffff;
        border:1px solid #e5e7eb;
        border-radius:10px;
        overflow:hidden;
    }

    .header{
        padding:28px 32px;
        border-bottom:1px solid #e5e7eb;
        background:#ffffff;
    }

    .header h1{
        margin:0;
        font-size:22px;
        font-weight:600;
        color:#b91c1c;
    }

    .header p{
        margin:8px 0 0;
        font-size:14px;
        color:#6b7280;
    }

    .content{
        padding:32px;
    }

    .content p{
        margin:0 0 18px;
        line-height:1.7;
        font-size:15px;
        color:#374151;
    }

    .alert-box{
        margin:28px 0;
        border:1px solid #fecaca;
        background:#fef2f2;
        border-radius:8px;
        overflow:hidden;
    }

    .info-row{
        display:flex;
        padding:14px 18px;
        border-bottom:1px solid #fecaca;
        font-size:14px;
    }

    .info-row:last-child{
        border-bottom:none;
    }

    .label{
        width:190px;
        font-weight:600;
        color:#7f1d1d;
    }

    .value{
        flex:1;
        color:#991b1b;
    }

    .notice{
        margin-top:30px;
        padding-top:20px;
        border-top:1px solid #e5e7eb;
        font-size:14px;
        line-height:1.7;
        color:#6b7280;
    }

    .footer{
        padding:20px 32px;
        background:#f9fafb;
        border-top:1px solid #e5e7eb;
        font-size:12px;
        color:#9ca3af;
        text-align:center;
    }

    @media only screen and (max-width:600px){

        .content,
        .header,
        .footer{
            padding:24px;
        }

        .info-row{
            display:block;
        }

        .label{
            width:100%;
            margin-bottom:6px;
        }
    }
</style>
</head>

<body>

<div class="wrapper">

    <div class="container">

        <!-- Header -->
        <div class="header">
            <h1>Alerte technique fournisseur</h1>
            <p>Incident détecté sur un service externe</p>
        </div>

        <!-- Content -->
        <div class="content">

            <p>Bonjour Administrateur,</p>

            <p>
                Une interruption ou anomalie a été détectée au niveau d’un fournisseur externe.
                Certains services de la plateforme peuvent être temporairement impactés.
            </p>

            <!-- Alert Information -->
            <div class="alert-box">

                <div class="info-row">
                    <div class="label">API concernée</div>
                    <div class="value">%api_endpoint%</div>
                </div>

                <div class="info-row">
                    <div class="label">Code erreur</div>
                    <div class="value">%masked_error_code%</div>
                </div>

                <div class="info-row">
                    <div class="label">Volume impacté</div>
                    <div class="value">%impacted_volume%</div>
                </div>

                <div class="info-row">
                    <div class="label">Action recommandée</div>
                    <div class="value">%recommended_action%</div>
                </div>

            </div>

            <div class="notice">
                Cette alerte a été générée automatiquement par le système de supervision.
                Une vérification technique est recommandée afin d’évaluer l’impact
                et assurer la continuité du service.
            </div>

        </div>

        <!-- Footer -->
        <div class="footer">
            © %current_year% Plateforme SaaS SMS Marketing — Surveillance Technique
        </div>

    </div>

</div>

</body>
</html>
`;
//# sourceMappingURL=provider-api.js.map