<?php
header('Content-Type: application/json');

$dir = "uploads/";

// Safety check
if (!is_dir($dir)) {
    echo json_encode([]);
    exit;
}

// Find Images AND Videos
$files = glob($dir . "*.{jpg,jpeg,png,gif,webp,mp4,webm,ogg}", GLOB_BRACE);

if (!$files) {
    echo json_encode([]);
} else {
    // Sort by newest first
    usort($files, function($a, $b) {
        return filemtime($b) - filemtime($a);
    });
    echo json_encode($files);
}
?>