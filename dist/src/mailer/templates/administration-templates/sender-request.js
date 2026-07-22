"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.senderRequest = void 0;
exports.senderRequest = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nouvelle Demande Sender ID</title>

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

    .link{
        color:#2563eb;
        text-decoration:none;
        word-break:break-all;
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
            <h1>Nouvelle demande de Sender ID</h1>
            <p>Notification automatique de la plateforme</p>
        </div>

        <!-- Content -->
        <div class="content">

            <p>Bonjour Super Administrateur,</p>

            <p>
                Une nouvelle demande d’approbation de Sender ID a été soumise
                sur la plateforme. Les informations associées à cette demande
                sont disponibles ci-dessous.
            </p>

            <!-- Information Box -->
            <div class="info-box">

                <div class="info-row">
                    <div class="label">Société</div>
                    <div class="value">%tenant_name%</div>
                </div>

                <div class="info-row">
                    <div class="label">Sender ID demandé</div>
                    <div class="value">%requested_label%</div>
                </div>

                <div class="info-row">
                    <div class="label">Utilisateur</div>
                    <div class="value">%user_name%</div>
                </div>

                <div class="info-row">
                    <div class="label">Lien de validation</div>
                    <div class="value">
                        <a href="%approval_link%" class="link">
                            %approval_link%
                        </a>
                    </div>
                </div>

            </div>

            <div class="notice">
                Cette notification automatique vous informe qu’une nouvelle
                demande de Sender ID est désormais disponible dans
                l’espace d’administration pour traitement.
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
//# sourceMappingURL=sender-request.js.map