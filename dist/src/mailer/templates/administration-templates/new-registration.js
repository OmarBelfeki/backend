"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRegistration = void 0;
exports.newRegistration = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nouvelle Inscription Société</title>

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
        color:#111827;
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

    .info-box{
        margin:28px 0;
        border:1px solid #e5e7eb;
        border-radius:8px;
        overflow:hidden;
    }

    .info-row{
        display:flex;
        padding:14px 18px;
        border-bottom:1px solid #e5e7eb;
        font-size:14px;
    }

    .info-row:last-child{
        border-bottom:none;
    }

    .label{
        width:190px;
        font-weight:600;
        color:#111827;
    }

    .value{
        flex:1;
        color:#4b5563;
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
            <h1>Nouvelle inscription société</h1>
            <p>Notification automatique de la plateforme</p>
        </div>

        <!-- Content -->
        <div class="content">

            <p>Bonjour Super Administrateur,</p>

            <p>
                Une nouvelle société a été enregistrée avec succès sur la plateforme.
                Les informations relatives à cette inscription sont disponibles ci-dessous.
            </p>

            <!-- Information Box -->
            <div class="info-box">

                <div class="info-row">
                    <div class="label">Nom de la société</div>
                    <div class="value">%company_name%</div>
                </div>

                <div class="info-row">
                    <div class="label">Email administrateur</div>
                    <div class="value">%admin_email%</div>
                </div>

                <div class="info-row">
                    <div class="label">Date d’inscription</div>
                    <div class="value">%created_at%</div>
                </div>

                <div class="info-row">
                    <div class="label">Statut de vérification</div>
                    <div class="value">%verification_status%</div>
                </div>

            </div>

            <div class="notice">
                Cette notification automatique vous informe qu’une nouvelle société
                a été enregistrée sur la plateforme et est désormais visible
                dans l’espace d’administration.
            </div>

        </div>

        <!-- Footer -->
        <div class="footer">
            © %current_year% Plateforme SaaS SMS Marketing — Tous droits réservés
        </div>

    </div>

</div>

</body>
</html>
`;
//# sourceMappingURL=new-registration.js.map