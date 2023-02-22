<?php
// Vérification de la méthode d'envoi
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Méthode non autorisée
    exit('Méthode non autorisée');
}

// Fonction de validation de numéro de téléphone
function isValidFrenchMobileNumber($phoneNumber) {
    $regex = '/^(0|\+33)[6-7]([-. ]?[0-9]{2}){4}$/';
    return preg_match($regex, $phoneNumber);
}

// Nettoyage des données entrantes
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$first = filter_input(INPUT_POST, 'first', FILTER_SANITIZE_STRING);
$mobile = filter_input(INPUT_POST, 'mobile', FILTER_SANITIZE_NUMBER_INT);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Vérification des champs obligatoires
if (empty($name) || empty($first) || empty($mobile) || empty($email) || empty($message)) {
    http_response_code(400); // Mauvaise requête
    exit('Veuillez remplir tous les champs svp');
}

// Validation du numéro de téléphone
if (!isValidFrenchMobileNumber($mobile)) {
    http_response_code(400); // Mauvaise requête
    exit('Numéro de téléphone mobile incorrect');
}

// Envoi de l'e-mail
$to = "hello@gregdigital.fr";
$subject = "Nouveau message : $name <$email>";
$body = "Nom: $name\nPrénom: $first\nEmail: $email\nTéléphone: $mobile\nMessage: $message\n";
$headers = array(
    'From' => $email,
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8',
    'X-Mailer' => 'PHP/' . phpversion()
);
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200); // Succès
    exit('Votre message a bien été envoyé !');
} else {
    http_response_code(500); // Erreur interne du serveur
    exit('Une erreur est survenue lors de l\'envoi de votre message');
}
?>