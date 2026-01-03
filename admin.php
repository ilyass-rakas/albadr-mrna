<?php
session_start();
$message = "";

// --- CONFIGURATION ---
$password_admin = "1234"; 

// --- LOGIN ---
if (isset($_POST['login'])) {
    if ($_POST['password'] === $password_admin) {
        $_SESSION['loggedin'] = true;
    } else {
        $message = "Mot de passe incorrect.";
    }
}

// --- UPLOAD LOGIC ---
if (isset($_POST['upload']) && isset($_SESSION['loggedin'])) {
    $target_dir = "uploads/";
    if (!file_exists($target_dir)) { mkdir($target_dir, 0777, true); }

    $filename = basename($_FILES["fileToUpload"]["name"]);
    $target_file = $target_dir . $filename;
    $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    
    // Extensions allowed
    $img_ext = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    $vid_ext = ['mp4', 'webm', 'ogg'];
    
    if (in_array($fileType, $img_ext)) {
        // Image Check
        if(getimagesize($_FILES["fileToUpload"]["tmp_name"]) !== false) {
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                $message = "<span style='color:#4CAF50'>✅ Image uploadée !</span>";
            } else { $message = "<span style='color:red'>❌ Erreur technique.</span>"; }
        } else { $message = "<span style='color:red'>❌ Fichier invalide.</span>"; }
    
    } elseif (in_array($fileType, $vid_ext)) {
        // Video Check (No size check needed)
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            $message = "<span style='color:#4CAF50'>✅ Vidéo uploadée !</span>";
        } else { $message = "<span style='color:red'>❌ Erreur technique.</span>"; }
    
    } else {
        $message = "<span style='color:red'>❌ Format non supporté.</span>";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin - Galerie</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #0b0b0b; color: white; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .container { background: #1a1a1a; padding: 40px; border-radius: 15px; border: 1px solid #333; text-align: center; width: 90%; max-width: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        h2 { color: #FFD700; margin-bottom: 25px; text-transform: uppercase; }
        input[type="password"], input[type="file"] { width: 100%; padding: 12px; margin: 15px 0; background: #222; border: 1px solid #333; color: white; border-radius: 5px; box-sizing: border-box;}
        button { background: #FFD700; color: black; border: none; padding: 12px; width: 100%; font-weight: bold; border-radius: 5px; cursor: pointer; transition: 0.3s; }
        button:hover { background: #ffec8b; transform: translateY(-2px); }
        a { color: #888; display: block; margin-top: 20px; text-decoration: none; transition: 0.3s; }
        a:hover { color: #FFD700; }
    </style>
</head>
<body>
<div class="container">
    <h2>Espace Client</h2>
    <div style="margin-bottom:20px; font-weight:bold; min-height:20px;"><?php echo $message; ?></div>

    <?php if (!isset($_SESSION['loggedin'])): ?>
        <form method="post">
            <input type="password" name="password" placeholder="Mot de passe" required>
            <button type="submit" name="login">Se connecter</button>
        </form>
    <?php else: ?>
        <form method="post" enctype="multipart/form-data">
            <p style="color:#ccc;">Ajouter une photo ou vidéo :</p>
            <input type="file" name="fileToUpload" required>
            <button type="submit" name="upload">Envoyer</button>
        </form>
        <a href="index.html">← Retour au site</a>
    <?php endif; ?>
</div>
</body>
</html>