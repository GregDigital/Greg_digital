<?php
    function isValidFrenchMobileNumber($phoneNumber) {
        $regex = '/^(0|\+33)[6-7]([-. ]?[0-9]{2}){4}$/';
        return preg_match($regex, $phoneNumber);
    }
    $name = htmlspecialchars(trim($_POST['name']));
    $first = htmlspecialchars(trim($_POST['first']));
    $mobile = filter_var(trim($_POST['mobile']), FILTER_SANITIZE_NUMBER_INT);
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

   if(!isValidFrenchMobileNumber($mobile)) {
        echo "Numéro de téléphone mobile incorrect";
    }elseif(empty($name) || empty($first) || empty($mobile) || empty($email) || empty($message)){
      echo "veuillez remplir tous les champs svp";
    }else {
      $to = "hello@gregdigital.fr";
      $subject = "Nouveau message : $name <$email>";
      $body = "Nom: $name\nPrenom: $first\nEmail: $email\nTéléphone: $mobile\nMessage: $message\n";
      $sender = "From: $email";
      mail($to, $subject, $body, $sender);
      echo "Votre message a bien été envoyé!";
    }
?>


