"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpTemplate = void 0;
exports.otpTemplate = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Vérification %societe%</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          background: #f5f7fa;
          margin: 0;
          padding: 0;
      }
      .container {
          max-width: 480px;
          margin: 40px auto;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 24px;
          text-align: center;
      }
      .header {
          font-size: 22px;
          font-weight: bold;
          color: #333;
          margin-bottom: 12px;
      }
      .otp-box {
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 10px;
          color: #2c3e50;
          background: #f0f0f0;
          padding: 16px;
          border-radius: 6px;
          margin: 20px 0;
      }
      .info {
          font-size: 14px;
          color: #555;
          margin-top: 10px;
      }
      .footer {
          font-size: 12px;
          color: #888;
          margin-top: 24px;
      }
  </style>
</head>
<body>
<div class="container">
  <div class="header">Vérification %societe%</div>
  <p>Bonjour <strong>%email%</strong>,</p>
  <p>Veuillez utiliser le code à usage unique (OTP) suivant pour vérifier votre compte :</p>
  <div class="otp-box">%otp%</div>
  <p class="info">Ce code est valable pendant 10 minutes. Ne le partagez avec personne.</p>
  <div class="footer">
    Envoyé par %societe% le %date%
  </div>
</div>
</body>
</html>
`;
//# sourceMappingURL=otp-template.js.map