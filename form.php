
<?php
  $name = valid_donnees($_POST['name']);
  $first = valid_donnees($_POST['first']);
  $mobile = valid_donnees($_POST['mobile']);
  $email = valid_donnees($_POST['email']);
  $message = valid_donnees($_POST['message']);


  function valid_donnees($donnees){
    $donnees = trim($donnees);
    $donnees = stripslashes($donnees);
    $donnees = htmlspecialchars($donnees);
    return $donnees;
}

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "hello@gregdigital.fr";
      $subject = "From: $name <$email>";
      $body = "Nom: $name\nPrénom: $first\nMobile: $mobile\nEmail: $email\nMessage:\n$message\n";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Merci, Votre message a bien été envoyé";
      }else{
         echo "Désolé votre message n'a pas été envoyé";
      }
    }else{
      echo "Merci d'entrer un email valide (contact@mail.fr)";
    }
  }else{
    echo "Merci d'indiquer votre email et votre message";
  }

  
?>


//https://grafikart.fr/forum/4454