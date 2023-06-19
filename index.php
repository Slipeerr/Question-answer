<?php
// Проверка, была ли отправлена форма
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получение отправленных данных
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Проверка введенных данных
    if ($username === 'slipeerr' && $password === '4849973') {
        // Если данные верны, устанавливаем сессию и перенаправляем на защищенную страницу
        session_start();
        $_SESSION['username'] = $username;
        header('Location: Glav.html');
        exit;
    } else {
        // Если данные неверны, выводим сообщение об ошибке
        $error = 'Неверные имя пользователя или пароль.';
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="Style1.css">
    <title>Авторизация</title>
</head>

<body>
    <div class="container">
        <h2>Войдите в аккаунт</h2>
        <p class="hello">С возвращением</p>
        <?php if (isset($error)): ?>
        <p>
            <?php echo $error; ?>
        </p>
        <?php endif; ?>
        <form method="post" action="">
            <div class="log">
                <input class="log" type="text" name="username" id="username" required placeholder="Логин">
            </div>
            <div class="pass">
                <input type="password" name="password" id="password" required placeholder="Пароль">
            </div>
            <div class="sub">
                <input type="submit" value="Войти">
            </div>
        </form>
        <div class="niz">
            <p>У вас нет аккаунта?<br> <a href="Reg.html">Зарегистрируйтесь</a></p>
        </div>
    </div>
</body>

</html>